import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c66d60b0 = () => interopDefault(import('..\\pages\\docs\\index.vue' /* webpackChunkName: "pages_docs_index" */))
const _4bd08429 = () => interopDefault(import('..\\pages\\emp\\index.vue' /* webpackChunkName: "pages_emp_index" */))
const _2cc3a2f8 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages_home_index" */))
const _1719a9c6 = () => interopDefault(import('..\\pages\\pos\\index.vue' /* webpackChunkName: "pages_pos_index" */))
const _1c6d649c = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages_service_index" */))
const _a35a989e = () => interopDefault(import('..\\pages\\sub\\index.vue' /* webpackChunkName: "pages_sub_index" */))
const _e9fbabc4 = () => interopDefault(import('..\\pages\\task\\index.vue' /* webpackChunkName: "pages_task_index" */))
const _37dd6d4a = () => interopDefault(import('..\\pages\\emp\\add\\index.vue' /* webpackChunkName: "pages_emp_add_index" */))
const _ed5e0254 = () => interopDefault(import('..\\pages\\pos\\add\\index.vue' /* webpackChunkName: "pages_pos_add_index" */))
const _6a89dcb7 = () => interopDefault(import('..\\pages\\service\\add\\index.vue' /* webpackChunkName: "pages_service_add_index" */))
const _3273b2c2 = () => interopDefault(import('..\\pages\\sub\\add\\index.vue' /* webpackChunkName: "pages_sub_add_index" */))
const _00fe3875 = () => interopDefault(import('..\\pages\\task\\add\\index.vue' /* webpackChunkName: "pages_task_add_index" */))
const _2fed4703 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/docs",
      component: _c66d60b0,
      name: "docs"
    }, {
      path: "/emp",
      component: _4bd08429,
      name: "emp"
    }, {
      path: "/home",
      component: _2cc3a2f8,
      name: "home"
    }, {
      path: "/pos",
      component: _1719a9c6,
      name: "pos"
    }, {
      path: "/service",
      component: _1c6d649c,
      name: "service"
    }, {
      path: "/sub",
      component: _a35a989e,
      name: "sub"
    }, {
      path: "/task",
      component: _e9fbabc4,
      name: "task"
    }, {
      path: "/emp/add",
      component: _37dd6d4a,
      name: "emp-add"
    }, {
      path: "/pos/add",
      component: _ed5e0254,
      name: "pos-add"
    }, {
      path: "/service/add",
      component: _6a89dcb7,
      name: "service-add"
    }, {
      path: "/sub/add",
      component: _3273b2c2,
      name: "sub-add"
    }, {
      path: "/task/add",
      component: _00fe3875,
      name: "task-add"
    }, {
      path: "/",
      component: _2fed4703,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
