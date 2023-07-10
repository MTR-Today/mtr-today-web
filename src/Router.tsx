import { RootRoute, Route, Router, createHashHistory } from '@tanstack/router'

import { AboutUs } from './containers/AboutUs'
import { Fares } from './containers/Fares'
import { Layout } from './containers/Layout'
import { StopDetail } from './containers/StopDetail'
import { StopSchedules } from './containers/StopSchedules'

const rootRoute = RootRoute.withRouterContext<any>()({
  component: Layout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <></>,
})

const faresRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'fares',
  component: () => <Fares />,
})

const faresDetailRoute = new Route({
  getParentRoute: () => faresRoute,
  path: '$stop',
  component: () => <></>,
})

faresRoute.addChildren([faresDetailRoute])

const aboutUsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'about-us',
  component: AboutUs,
})

const stopDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'stops/$stop',
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
  faresRoute,
])

const hashHistory = createHashHistory()

export const router = new Router({ routeTree, history: hashHistory })
