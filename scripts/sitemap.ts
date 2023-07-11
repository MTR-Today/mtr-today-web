import fs from 'fs'
import { Readable } from 'stream'

import dayjs from 'dayjs'
import { stops } from 'mtr-kit'
import { SitemapStream, streamToPromise } from 'sitemap'

export const generateSiteMap = async () => {
  // An array with your links
  const links = [
    {
      url: '/',
      changefreq: 'daily',
      priority: 1,
      lastmod: dayjs().format('YYYY-MM-DD'),
    },
    {
      url: '/about-us',
      changefreq: 'daily',
      priority: 1,
      lastmod: dayjs().format('YYYY-MM-DD'),
    },
    {
      url: '/fares',
      changefreq: 'daily',
      priority: 0.5,
      lastmod: dayjs().format('YYYY-MM-DD'),
    },
    ...stops.map(({ stop }) => ({
      url: `/fares/${stop}`,
      changefreq: 'daily',
      priority: 0.5,
      lastmod: dayjs().format('YYYY-MM-DD'),
    })),
    ...stops.map(({ stop }) => ({
      url: `/stops/${stop}/schedules`,
      changefreq: 'daily',
      priority: 0.5,
      lastmod: dayjs().format('YYYY-MM-DD'),
    })),
  ]

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'https://mtr.today' })

  // Return a promise that resolves with your XML string
  const res = await streamToPromise(Readable.from(links).pipe(stream))

  fs.writeFileSync('./public/sitemap.xml', res.toString())
}
