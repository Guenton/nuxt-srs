import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1af66a08 = () => interopDefault(import('..\\pages\\docs\\index.vue' /* webpackChunkName: "pages_docs_index" */))
const _35ce4e55 = () => interopDefault(import('..\\pages\\emp\\index.vue' /* webpackChunkName: "pages_emp_index" */))
const _3f59a9d8 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages_home_index" */))
const _0ab3e34e = () => interopDefault(import('..\\pages\\log\\index.vue' /* webpackChunkName: "pages_log_index" */))
const _431e156e = () => interopDefault(import('..\\pages\\pos\\index.vue' /* webpackChunkName: "pages_pos_index" */))
const _3e3b8e70 = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages_service_index" */))
const _cf5f0446 = () => interopDefault(import('..\\pages\\sub\\index.vue' /* webpackChunkName: "pages_sub_index" */))
const _02031e9e = () => interopDefault(import('..\\pages\\emp\\add\\index.vue' /* webpackChunkName: "pages_emp_add_index" */))
const _2d47e94a = () => interopDefault(import('..\\pages\\emp\\delete\\index.vue' /* webpackChunkName: "pages_emp_delete_index" */))
const _775f9e4b = () => interopDefault(import('..\\pages\\emp\\edit\\index.vue' /* webpackChunkName: "pages_emp_edit_index" */))
const _54d6c11a = () => interopDefault(import('..\\pages\\log\\add\\index.vue' /* webpackChunkName: "pages_log_add_index" */))
const _5376b02a = () => interopDefault(import('..\\pages\\pos\\add\\index.vue' /* webpackChunkName: "pages_pos_add_index" */))
const _75c34784 = () => interopDefault(import('..\\pages\\pos\\delete\\index.vue' /* webpackChunkName: "pages_pos_delete_index" */))
const _545e3e3f = () => interopDefault(import('..\\pages\\pos\\edit\\index.vue' /* webpackChunkName: "pages_pos_edit_index" */))
const _06cd37d4 = () => interopDefault(import('..\\pages\\sub\\add\\index.vue' /* webpackChunkName: "pages_sub_add_index" */))
const _428610d2 = () => interopDefault(import('..\\pages\\sub\\delete\\index.vue' /* webpackChunkName: "pages_sub_delete_index" */))
const _60dbf05a = () => interopDefault(import('..\\pages\\sub\\edit\\index.vue' /* webpackChunkName: "pages_sub_edit_index" */))
const _79c2a5a2 = () => interopDefault(import('..\\pages\\log\\edit\\_sid.vue' /* webpackChunkName: "pages_log_edit__sid" */))
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
      path: "/log",
      component: _0ab3e34e,
      name: "log"
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
      path: "/log/add",
      component: _54d6c11a,
      name: "log-add"
    }, {
      path: "/pos/add",
      component: _5376b02a,
      name: "pos-add"
    }, {
      path: "/pos/delete",
      component: _75c34784,
      name: "pos-delete"
    }, {
      path: "/pos/edit",
      component: _545e3e3f,
      name: "pos-edit"
    }, {
      path: "/sub/add",
      component: _06cd37d4,
      name: "sub-add"
    }, {
      path: "/sub/delete",
      component: _428610d2,
      name: "sub-delete"
    }, {
      path: "/sub/edit",
      component: _60dbf05a,
      name: "sub-edit"
    }, {
      path: "/log/edit/:sid?",
      component: _79c2a5a2,
      name: "log-edit-sid"
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
