import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _78fbe19c = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7e6c30f3 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _75a52b1b = () => interopDefault(import('../pages/selected-tickets.vue' /* webpackChunkName: "pages/selected-tickets" */))
const _1a096796 = () => interopDefault(import('../pages/served-tickets.vue' /* webpackChunkName: "pages/served-tickets" */))
const _1cf048b8 = () => interopDefault(import('../pages/ticket-issuer.vue' /* webpackChunkName: "pages/ticket-issuer" */))
const _4b734d96 = () => interopDefault(import('../pages/tickets-queue.vue' /* webpackChunkName: "pages/tickets-queue" */))
const _a5b6312c = () => interopDefault(import('../pages/transferred-tickets.vue' /* webpackChunkName: "pages/transferred-tickets" */))
const _5ec7c18f = () => interopDefault(import('../pages/admin/agents-accounts.vue' /* webpackChunkName: "pages/admin/agents-accounts" */))
const _9d46f4fe = () => interopDefault(import('../pages/admin/register-agent.vue' /* webpackChunkName: "pages/admin/register-agent" */))
const _9676e448 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _78fbe19c,
    name: "admin"
  }, {
    path: "/login",
    component: _7e6c30f3,
    name: "login"
  }, {
    path: "/selected-tickets",
    component: _75a52b1b,
    name: "selected-tickets"
  }, {
    path: "/served-tickets",
    component: _1a096796,
    name: "served-tickets"
  }, {
    path: "/ticket-issuer",
    component: _1cf048b8,
    name: "ticket-issuer"
  }, {
    path: "/tickets-queue",
    component: _4b734d96,
    name: "tickets-queue"
  }, {
    path: "/transferred-tickets",
    component: _a5b6312c,
    name: "transferred-tickets"
  }, {
    path: "/admin/agents-accounts",
    component: _5ec7c18f,
    name: "admin-agents-accounts"
  }, {
    path: "/admin/register-agent",
    component: _9d46f4fe,
    name: "admin-register-agent"
  }, {
    path: "/",
    component: _9676e448,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
