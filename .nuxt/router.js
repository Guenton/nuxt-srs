import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c66d60b0 = () => interopDefault(import('..\\pages\\docs\\index.vue' /* webpackChunkName: "pages_docs_index" */))
const _4bd08429 = () => interopDefault(import('..\\pages\\emp\\index.vue' /* webpackChunkName: "pages_emp_index" */))
const _2cc3a2f8 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages_home_index" */))
const _10a8442d = () => interopDefault(import('..\\pages\\log\\index.vue' /* webpackChunkName: "pages_log_index" */))
const _1719a9c6 = () => interopDefault(import('..\\pages\\pos\\index.vue' /* webpackChunkName: "pages_pos_index" */))
const _1c6d649c = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages_service_index" */))
const _74a511ef = () => interopDefault(import('..\\pages\\stat\\index.vue' /* webpackChunkName: "pages_stat_index" */))
const _a35a989e = () => interopDefault(import('..\\pages\\sub\\index.vue' /* webpackChunkName: "pages_sub_index" */))
const _37dd6d4a = () => interopDefault(import('..\\pages\\emp\\add\\index.vue' /* webpackChunkName: "pages_emp_add_index" */))
const _14f10b1e = () => interopDefault(import('..\\pages\\emp\\delete\\index.vue' /* webpackChunkName: "pages_emp_delete_index" */))
const _ea9de074 = () => interopDefault(import('..\\pages\\log\\add\\index.vue' /* webpackChunkName: "pages_log_add_index" */))
const _ed5e0254 = () => interopDefault(import('..\\pages\\pos\\add\\index.vue' /* webpackChunkName: "pages_pos_add_index" */))
const _a67103dc = () => interopDefault(import('..\\pages\\pos\\delete\\index.vue' /* webpackChunkName: "pages_pos_delete_index" */))
const _45ce45be = () => interopDefault(import('..\\pages\\stat\\org\\index.vue' /* webpackChunkName: "pages_stat_org_index" */))
const _662f0add = () => interopDefault(import('..\\pages\\stat\\test\\index.vue' /* webpackChunkName: "pages_stat_test_index" */))
const _3273b2c2 = () => interopDefault(import('..\\pages\\sub\\add\\index.vue' /* webpackChunkName: "pages_sub_add_index" */))
const _2a2f32a6 = () => interopDefault(import('..\\pages\\sub\\delete\\index.vue' /* webpackChunkName: "pages_sub_delete_index" */))
const _55018ea7 = () => interopDefault(import('..\\pages\\sub\\edit\\index.vue' /* webpackChunkName: "pages_sub_edit_index" */))
const _0c5c3972 = () => interopDefault(import('..\\pages\\emp\\edit\\_id.vue' /* webpackChunkName: "pages_emp_edit__id" */))
const _4588136a = () => interopDefault(import('..\\pages\\log\\add\\_sid.vue' /* webpackChunkName: "pages_log_add__sid" */))
const _9bc01f8a = () => interopDefault(import('..\\pages\\pos\\edit\\_id.vue' /* webpackChunkName: "pages_pos_edit__id" */))
const _4ce91904 = () => interopDefault(import('..\\pages\\log\\_sid.vue' /* webpackChunkName: "pages_log__sid" */))
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
    path: "/log",
    component: _10a8442d,
    name: "log"
  }, {
    path: "/pos",
    component: _1719a9c6,
    name: "pos"
  }, {
    path: "/service",
    component: _1c6d649c,
    name: "service"
  }, {
    path: "/stat",
    component: _74a511ef,
    name: "stat"
  }, {
    path: "/sub",
    component: _a35a989e,
    name: "sub"
  }, {
    path: "/emp/add",
    component: _37dd6d4a,
    name: "emp-add"
  }, {
    path: "/emp/delete",
    component: _14f10b1e,
    name: "emp-delete"
  }, {
    path: "/log/add",
    component: _ea9de074,
    name: "log-add"
  }, {
    path: "/pos/add",
    component: _ed5e0254,
    name: "pos-add"
  }, {
    path: "/pos/delete",
    component: _a67103dc,
    name: "pos-delete"
  }, {
    path: "/stat/org",
    component: _45ce45be,
    name: "stat-org"
  }, {
    path: "/stat/test",
    component: _662f0add,
    name: "stat-test"
  }, {
    path: "/sub/add",
    component: _3273b2c2,
    name: "sub-add"
  }, {
    path: "/sub/delete",
    component: _2a2f32a6,
    name: "sub-delete"
  }, {
    path: "/sub/edit",
    component: _55018ea7,
    name: "sub-edit"
  }, {
    path: "/emp/edit/:id?",
    component: _0c5c3972,
    name: "emp-edit-id"
  }, {
    path: "/log/add/:sid",
    component: _4588136a,
    name: "log-add-sid"
  }, {
    path: "/pos/edit/:id?",
    component: _9bc01f8a,
    name: "pos-edit-id"
  }, {
    path: "/log/:sid",
    component: _4ce91904,
    name: "log-sid"
  }, {
    path: "/",
    component: _2fed4703,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
