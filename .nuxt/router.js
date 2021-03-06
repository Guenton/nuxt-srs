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
const _6b3ee57a = () => interopDefault(import('..\\pages\\stat\\index.vue' /* webpackChunkName: "pages_stat_index" */))
const _cf5f0446 = () => interopDefault(import('..\\pages\\sub\\index.vue' /* webpackChunkName: "pages_sub_index" */))
const _02031e9e = () => interopDefault(import('..\\pages\\emp\\add\\index.vue' /* webpackChunkName: "pages_emp_add_index" */))
const _2d47e94a = () => interopDefault(import('..\\pages\\emp\\delete\\index.vue' /* webpackChunkName: "pages_emp_delete_index" */))
const _54d6c11a = () => interopDefault(import('..\\pages\\log\\add\\index.vue' /* webpackChunkName: "pages_log_add_index" */))
const _5376b02a = () => interopDefault(import('..\\pages\\pos\\add\\index.vue' /* webpackChunkName: "pages_pos_add_index" */))
const _75c34784 = () => interopDefault(import('..\\pages\\pos\\delete\\index.vue' /* webpackChunkName: "pages_pos_delete_index" */))
const _57a9564d = () => interopDefault(import('..\\pages\\stat\\org\\index.vue' /* webpackChunkName: "pages_stat_org_index" */))
const _3dadb731 = () => interopDefault(import('..\\pages\\stat\\test\\index.vue' /* webpackChunkName: "pages_stat_test_index" */))
const _06cd37d4 = () => interopDefault(import('..\\pages\\sub\\add\\index.vue' /* webpackChunkName: "pages_sub_add_index" */))
const _428610d2 = () => interopDefault(import('..\\pages\\sub\\delete\\index.vue' /* webpackChunkName: "pages_sub_delete_index" */))
const _60dbf05a = () => interopDefault(import('..\\pages\\sub\\edit\\index.vue' /* webpackChunkName: "pages_sub_edit_index" */))
const _8372911a = () => interopDefault(import('..\\pages\\emp\\edit\\_id.vue' /* webpackChunkName: "pages_emp_edit__id" */))
const _bc9e6b12 = () => interopDefault(import('..\\pages\\log\\add\\_sid.vue' /* webpackChunkName: "pages_log_add__sid" */))
const _7694c467 = () => interopDefault(import('..\\pages\\pos\\edit\\_id.vue' /* webpackChunkName: "pages_pos_edit__id" */))
const _4c335958 = () => interopDefault(import('..\\pages\\log\\_sid.vue' /* webpackChunkName: "pages_log__sid" */))
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
    path: "/stat",
    component: _6b3ee57a,
    name: "stat"
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
    path: "/stat/org",
    component: _57a9564d,
    name: "stat-org"
  }, {
    path: "/stat/test",
    component: _3dadb731,
    name: "stat-test"
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
    path: "/emp/edit/:id?",
    component: _8372911a,
    name: "emp-edit-id"
  }, {
    path: "/log/add/:sid",
    component: _bc9e6b12,
    name: "log-add-sid"
  }, {
    path: "/pos/edit/:id?",
    component: _7694c467,
    name: "pos-edit-id"
  }, {
    path: "/log/:sid",
    component: _4c335958,
    name: "log-sid"
  }, {
    path: "/",
    component: _696cd157,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
