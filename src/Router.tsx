import { RootRoute, Route, Router, createHashHistory } from '@tanstack/router'

import { AboutUs } from './containers/AboutUs'
import { Layout } from './containers/Layout'

const rootRoute = new RootRoute({
  component: Layout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <></>,
})

const aboutUsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about-us',
  component: AboutUs,
})

const routeTree = rootRoute.addChildren([indexRoute, aboutUsRoute])

const hashHistory = createHashHistory()

export const router = new Router({ routeTree, history: hashHistory })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}
