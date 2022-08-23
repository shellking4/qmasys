import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c4641c0c = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _269d405e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7204a57d = () => interopDefault(import('../pages/selected-tickets.vue' /* webpackChunkName: "pages/selected-tickets" */))
const _674c11d2 = () => interopDefault(import('../pages/served-tickets.vue' /* webpackChunkName: "pages/served-tickets" */))
const _2a174c82 = () => interopDefault(import('../pages/ticket-issuer.vue' /* webpackChunkName: "pages/ticket-issuer" */))
const _12d5ca13 = () => interopDefault(import('../pages/tickets-queue.vue' /* webpackChunkName: "pages/tickets-queue" */))
const _cff08c70 = () => interopDefault(import('../pages/transferred-tickets.vue' /* webpackChunkName: "pages/transferred-tickets" */))
const _1c3f746d = () => interopDefault(import('../pages/admin/agents-accounts.vue' /* webpackChunkName: "pages/admin/agents-accounts" */))
const _22d3fee3 = () => interopDefault(import('../pages/admin/register-agent.vue' /* webpackChunkName: "pages/admin/register-agent" */))
const _2309bcba = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _c4641c0c,
    name: "admin"
  }, {
    path: "/login",
    component: _269d405e,
    name: "login"
  }, {
    path: "/selected-tickets",
    component: _7204a57d,
    name: "selected-tickets"
  }, {
    path: "/served-tickets",
    component: _674c11d2,
    name: "served-tickets"
  }, {
    path: "/ticket-issuer",
    component: _2a174c82,
    name: "ticket-issuer"
  }, {
    path: "/tickets-queue",
    component: _12d5ca13,
    name: "tickets-queue"
  }, {
    path: "/transferred-tickets",
    component: _cff08c70,
    name: "transferred-tickets"
  }, {
    path: "/admin/agents-accounts",
    component: _1c3f746d,
    name: "admin-agents-accounts"
  }, {
    path: "/admin/register-agent",
    component: _22d3fee3,
    name: "admin-register-agent"
  }, {
    path: "/",
    component: _2309bcba,
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
