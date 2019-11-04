(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{201:function(t,e,r){"use strict";var n={},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},202:function(t,e){t.exports="http://sibox/api"},203:function(t,e,r){"use strict";var n={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},o=r(37),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[e("b-col",[e("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},205:function(t,e,r){"use strict";var n={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!1,default:"Add"},linkTo:{type:String,required:!0},variant:{type:String,required:!1,default:"info"}},methods:{refresh:function(){this.$emit("refresh")}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-left"},[r("h3",[t._v(t._s(t.h3text))])]),t._v(" "),r("b-col",{staticClass:"text-right mb-2"},[r("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.refresh()}}},[t._v("\n      Refresh\n    ")]),t._v(" "),r("b-button",{attrs:{variant:t.variant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},386:function(t,e,r){"use strict";r.r(e);r(55);var n,o=r(15),l=r(202),c=r.n(l),d=r(201),h=r(205),v=r(203),f={components:{NavbarHome:d.a,AlertBox:v.a,H3withRefresh:h.a},data:function(){return{tableFields:[{key:"scopesub_id",label:"Subsidiary #",sortable:!0},{key:"shorthand",label:"Abbreviation",sortable:!0},{key:"country",label:"Subsidiary Location",sortable:!0},{key:"title",label:"Subsidiary Name",sortable:!0}],tableData:[],idLink:"",error:""}},computed:{hasTable:function(){return this.tableData.length>0},emptyDb:function(){return!this.hasTable&&!this.isLoading},hasError:function(){return""!==this.error}},mounted:function(){this.onLoad()},methods:{onLoad:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c.a,"/scope-sub/md"),t.prev=1,t.next=4,this.$axios.$get(e);case 4:(r=t.sent).err?this.error=r.err:(this.tableData=r.data,this.isLoading=!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),this.error=t.t0;case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(){return n.apply(this,arguments)}),onRowSelected:function(t){var e=t[0].scopesub_id,r="/sub/edit/".concat(e);this.$router.push(r)},resetPage:function(t){t&&t.preventDefault(),this.isLoading=!0,this.tableData=[],this.error="",this.onLoad()}}},m=r(37),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarHome"),t._v(" "),r("b-container",[r("H3withRefresh",{attrs:{h3text:"Subsidiaries","button-text":"Add Subsidiary","link-to":"/sub/add",variant:"success"},on:{refresh:t.resetPage}}),t._v(" "),r("b-collapse",{attrs:{id:"scopeSubTable",visible:t.hasTable}},[r("b-row",[r("b-col",[r("b-table",{attrs:{striped:"",selectable:"",hover:"","sticky-header":"",items:t.tableData,fields:t.tableFields},on:{"row-selected":t.onRowSelected}})],1)],1),t._v(" "),r("b-row",[r("b-col",{staticClass:"text-right"},[r("b-button",{staticClass:"px-4",attrs:{variant:"danger",to:"/sub/delete"}},[t._v("\n            Delete Subsidiaries\n          ")])],1)],1)],1),t._v(" "),r("b-row",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"my-5"},[r("b-col",{staticClass:"text-center"},[r("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1)],1),t._v(" "),r("AlertBox",{attrs:{show:t.emptyDb,text:"There are currently no Subsidiaries in the Database"}}),t._v(" "),r("AlertBox",{attrs:{show:t.hasError,variant:"danger",text:t.error}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);