(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{200:function(t,e,r){"use strict";var n={},o=r(36),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},201:function(t,e){t.exports="http://localhost:3000/api"},202:function(t,e,r){"use strict";var n={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},o=r(36),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[e("b-col",[e("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},204:function(t,e,r){"use strict";var n={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!1,default:"Add"},linkTo:{type:String,required:!0},variant:{type:String,required:!1,default:"info"}},methods:{refresh:function(){this.$emit("refresh")}}},o=r(36),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-left"},[r("h3",[t._v(t._s(t.h3text))])]),t._v(" "),r("b-col",{staticClass:"text-right mb-2"},[r("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.refresh()}}},[t._v("\n      Refresh\n    ")]),t._v(" "),r("b-button",{attrs:{variant:t.variant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},205:function(t,e,r){"use strict";var n={props:{h3text:{type:String,required:!0}}},o=r(36),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{staticClass:"mt-4"},[e("b-col",[e("h3",{staticClass:"text-center mb-3"},[this._v(this._s(this.h3text))])])],1)}),[],!1,null,null,null);e.a=component.exports},366:function(t,e,r){"use strict";r.r(e);r(54);var n=r(201),o=r.n(n),l=r(200),c=r(204),h=r(205),d={props:{listObj:{type:Array,required:!1,default:function(){return[]}},show:{type:Boolean,required:!0,default:!1}}},v=r(36),f=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",[r("b-alert",{attrs:{show:t.show,variant:"info"}},[r("p",[t._v("Results:")]),t._v(" "),r("ul",t._l(t.listObj,(function(e){return r("li",{key:e.id},[t._v("\n          "+t._s(e)+"\n        ")])})),0)])],1)],1)}),[],!1,null,null,null).exports,m=r(202),_={components:{NavbarHome:l.a,H3withRefresh:c.a,H3header:h.a,InfoAlertList:f,AlertBox:m.a},data:function(){return{tableFields:[{key:"sub_id",label:"Subsidiary #",sortable:!0},{key:"shorthand",label:"Abbreviation",sortable:!0},{key:"location",label:"Subsidiary Location",sortable:!0},{key:"title",label:"Subsidiary Name",sortable:!0}],tableData:[],form:[],update:[],showtable:!1,error:null}},computed:{hasUpdate:function(){return this.update.length>0},hasError:function(){return null!==this.error}},mounted:function(){var t,e;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(o.a,"/sub"),r.prev=1,r.next=4,regeneratorRuntime.awrap(this.$axios.$get(t));case 4:(e=r.sent).err?this.error=e.err:this.tableData=e.data,r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),this.error=r.t0;case 11:case"end":return r.stop()}}),null,this,[[1,8]])},methods:{onRowSelected:function(t){this.form=t,this.showtable=t.length>0},resetPage:function(t){var e,r;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t&&t.preventDefault(),this.tableData=[],this.form=[],this.update=[],this.error=null,this.showtable=!1,e="".concat(o.a,"/sub"),n.prev=7,n.next=10,regeneratorRuntime.awrap(this.$axios.$get(e));case 10:(r=n.sent).err?this.error=r.err:this.tableData=r.data,n.next=17;break;case 14:n.prev=14,n.t0=n.catch(7),this.error=n.t0;case 17:case"end":return n.stop()}}),null,this,[[7,14]])},onSubmit:function(t){var e,r;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),e="".concat(o.a,"/sub"),n.prev=2,n.next=5,regeneratorRuntime.awrap(this.$axios.$put(e,this.form));case 5:r=n.sent,this.update=r,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),this.error=n.t0;case 12:case"end":return n.stop()}}),null,this,[[2,9]])}}},w=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarHome"),t._v(" "),r("b-container",[r("H3withRefresh",{attrs:{h3text:"Edit Subsidiaries","button-text":"Add Subsidiary","link-to":"/sub/add"},on:{refresh:t.resetPage}}),t._v(" "),r("b-row",[r("b-col",[r("b-table",{attrs:{items:t.tableData,fields:t.tableFields,striped:"",selectable:"",hover:"","sticky-header":""},on:{"row-selected":t.onRowSelected}})],1)],1),t._v(" "),r("b-row",[r("b-col",{staticClass:"text-right"},[r("b-button",{attrs:{variant:"danger",to:"/sub/delete"}},[t._v("\n          Delete Subsidiary\n        ")])],1)],1),t._v(" "),r("b-row",{directives:[{name:"show",rawName:"v-show",value:t.showtable,expression:"showtable"}]},[r("b-col",[r("b-form",{attrs:{novalidate:""},on:{submit:t.onSubmit,reset:t.resetPage}},[r("H3header",{attrs:{h3text:"Edit Subsidiaries"}}),t._v(" "),t._l(t.form,(function(sub,e){return r("b-form-row",{key:sub.pos_id},[r("b-col",{staticClass:"text-center",attrs:{sm:"2","align-v":"center"}},[r("b-row",[r("b-col",{attrs:{sm:"12"}},[r("b-row",[r("strong",[t._v("Position #"+t._s(sub.sub_id)+":")])])],1),t._v(" "),r("b-col",{attrs:{sm:"12"}},[r("b-row",[t._v("\n                    "+t._s(sub.shorthand)+"\n                  ")])],1)],1)],1),t._v(" "),r("b-col",[r("b-form-group",{attrs:{label:"Abbreviation"}},[r("b-form-input",{attrs:{trim:""},model:{value:t.form[e].shorthand,callback:function(r){t.$set(t.form[e],"shorthand",r)},expression:"form[index].shorthand"}})],1)],1),t._v(" "),r("b-col",[r("b-form-group",{attrs:{label:"Subsidiary Location"}},[r("b-form-input",{attrs:{trim:""},model:{value:t.form[e].location,callback:function(r){t.$set(t.form[e],"location",r)},expression:"form[index].location"}})],1)],1),t._v(" "),r("b-col",[r("b-form-group",{attrs:{label:"Subsidiary Name"}},[r("b-form-input",{attrs:{trim:""},model:{value:t.form[e].title,callback:function(r){t.$set(t.form[e],"title",r)},expression:"form[index].title"}})],1)],1)],1)})),t._v(" "),r("b-form-row",[r("b-col",{staticClass:"text-right"},[r("b-button",{attrs:{type:"submit",variant:"success"}},[t._v("Update")])],1),t._v(" "),r("b-col",{staticClass:"text-left"},[r("b-button",{attrs:{type:"reset",variant:"secondary"}},[t._v("Cancel")])],1)],1)],2)],1)],1),t._v(" "),r("InfoAlertList",{attrs:{show:t.hasUpdate,"list-obj":t.update}}),t._v(" "),r("AlertBox",{attrs:{show:t.hasError,text:t.error,variant:"danger"}})],1)],1)}),[],!1,null,null,null);e.default=w.exports}}]);