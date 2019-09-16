import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1af66a08 = () => interopDefault(import('..\\pages\\docs\\index.vue' /* webpackChunkName: "pages_docs_index" */))
const _35ce4e55 = () => interopDefault(import('..\\pages\\emp\\index.vue' /* webpackChunkName: "pages_emp_index" */))
const _3f59a9d8 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages_home_index" */))
const _431e156e = () => interopDefault(import('..\\pages\\pos\\index.vue' /* webpackChunkName: "pages_pos_index" */))
const _3e3b8e70 = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages_service_index" */))
const _cf5f0446 = () => interopDefault(import('..\\pages\\sub\\index.vue' /* webpackChunkName: "pages_sub_index" */))
const _3e84b51c = () => interopDefault(import('..\\pages\\task\\index.vue' /* webpackChunkName: "pages_task_index" */))
const _02031e9e = () => interopDefault(import('..\\pages\\emp\\add\\index.vue' /* webpackChunkName: "pages_emp_add_index" */))
const _2d47e94a = () => interopDefault(import('..\\pages\\emp\\delete\\index.vue' /* webpackChunkName: "pages_emp_delete_index" */))
const _775f9e4b = () => interopDefault(import('..\\pages\\emp\\edit\\index.vue' /* webpackChunkName: "pages_emp_edit_index" */))
const _5376b02a = () => interopDefault(import('..\\pages\\pos\\add\\index.vue' /* webpackChunkName: "pages_pos_add_index" */))
const _5d0ec40b = () => interopDefault(import('..\\pages\\service\\add\\index.vue' /* webpackChunkName: "pages_service_add_index" */))
const _06cd37d4 = () => interopDefault(import('..\\pages\\sub\\add\\index.vue' /* webpackChunkName: "pages_sub_add_index" */))
const _7b8eb1a1 = () => interopDefault(import('..\\pages\\task\\add\\index.vue' /* webpackChunkName: "pages_task_add_index" */))
const _696cd157 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/docs",
      component: _1af66a08,
      name: "docs"
    }, {
      path: "/emp",
      component: _35ce4e55,
      name: "emp"
    }, {
      path: "/home",
      component: _3f59a9d8,
      name: "home"
    }, {
      path: "/pos",
      component: _431e156e,
      name: "pos"
    }, {
      path: "/service",
      component: _3e3b8e70,
      name: "service"
    }, {
      path: "/sub",
      component: _cf5f0446,
      name: "sub"
    }, {
      path: "/task",
      component: _3e84b51c,
      name: "task"
    }, {
      path: "/emp/add",
      component: _02031e9e,
      name: "emp-add"
    }, {
      path: "/emp/delete",
      component: _2d47e94a,
      name: "emp-delete"
    }, {
      path: "/emp/edit",
      component: _775f9e4b,
      name: "emp-edit"
    }, {
      path: "/pos/add",
      component: _5376b02a,
      name: "pos-add"
    }, {
      path: "/service/add",
      component: _5d0ec40b,
      name: "service-add"
    }, {
      path: "/sub/add",
      component: _06cd37d4,
      name: "sub-add"
    }, {
      path: "/task/add",
      component: _7b8eb1a1,
      name: "task-add"
    }, {
      path: "/",
      component: _696cd157,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
