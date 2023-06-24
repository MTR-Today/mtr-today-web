import { RootRoute, Route, Router, createHashHistory } from '@tanstack/router'

import { ControlledMap } from './containers/ControlledMap'
import { Layout } from './containers/Layout'

const rootRoute = new RootRoute({
  component: Layout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ControlledMap,
})

const routeTree = rootRoute.addChildren([indexRoute])

const hashHistory = createHashHistory()

export const router = new Router({ routeTree, history: hashHistory })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}
