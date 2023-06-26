import { RootRoute, Route, Router, createHashHistory } from '@tanstack/router'

import { AboutUs } from './containers/AboutUs'
import { Layout } from './containers/Layout'
import { StopDetail } from './containers/StopDetail'
import { StopSchedules } from './containers/StopSchedules'

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

const stopDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/stops/$stop',
  component: StopDetail,
})

export const stopScheduleRoute = new Route({
  getParentRoute: () => stopDetailRoute,
  path: 'schedules',
  component: StopSchedules,
})

stopDetailRoute.addChildren([stopScheduleRoute])

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutUsRoute,
  stopDetailRoute,
])

const hashHistory = createHashHistory()

export const router = new Router({ routeTree, history: hashHistory })

// Quick fix: https://github.com/TanStack/router/issues/555
declare module '@tanstack/router' {
  interface RegisterRouter {
    router: typeof router
  }
}
