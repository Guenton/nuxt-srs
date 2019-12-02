(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{200:function(e,t,r){"use strict";var c={},o=r(36),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[e._v("SIBOX")]),e._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[e._v("Logs")]),e._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[e._v("Summary")]),e._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[e._v("Organization Chart")])],1),e._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[e._v("Employees")]),e._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[e._v("Positions")]),e._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[e._v("Subsidiaries")]),e._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[e._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports},201:function(e,t){e.exports="http://localhost:3000/api"},202:function(e,t,r){"use strict";var c={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},o=r(36),component=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[t("b-col",[t("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,null);t.a=component.exports},205:function(e,t,r){"use strict";var c={props:{h3text:{type:String,required:!0}}},o=r(36),component=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",{staticClass:"mt-4"},[t("b-col",[t("h3",{staticClass:"text-center mb-3"},[this._v(this._s(this.h3text))])])],1)}),[],!1,null,null,null);t.a=component.exports},372:function(e,t,r){"use strict";r.r(t);r(54);var c=r(201),o=r.n(c),n=r(200),l=r(205),d=r(202),v={components:{NavbarHome:n.a,H3header:l.a,AlertBox:d.a},data:function(){return{serviceFields:[{key:"type_id",label:"Service #",sortable:!0},{key:"title",label:"Service Name",sortable:!0}],serviceData:[],error:null}},computed:{hasError:function(){return null!==this.error}},methods:{serviceByArch:function(e){var t,r;return regeneratorRuntime.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t="".concat(o.a,"/service/").concat(e),c.prev=1,c.next=4,regeneratorRuntime.awrap(this.$axios.$get(t));case 4:(r=c.sent).err?this.error=r.err:this.serviceData=r.data,c.next=11;break;case 8:c.prev=8,c.t0=c.catch(1),this.error=c.t0;case 11:case"end":return c.stop()}}),null,this,[[1,8]])},onRowSelected:function(e){console.log(e)}}},h=r(36),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("NavbarHome"),e._v(" "),r("b-container",[r("H3header",{attrs:{h3text:"Services"}}),e._v(" "),r("div",{attrs:{role:"tablist"}},[r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.arch-1",modifiers:{"arch-1":!0}}],attrs:{variant:"success",block:""},on:{click:function(t){return e.serviceByArch(1)}}},[e._v("Security Leadership")])],1),e._v(" "),r("b-collapse",{attrs:{id:"arch-1",accordion:"services",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("b-table",{attrs:{items:e.serviceData,fields:e.serviceFields,striped:"",selectable:"",hover:"","sticky-header":""},on:{"row-selected":e.onRowSelected}})],1)],1)],1)],1),e._v(" "),r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.arch-2",modifiers:{"arch-2":!0}}],attrs:{variant:"success",block:""},on:{click:function(t){return e.serviceByArch(2)}}},[e._v("Investigations")])],1),e._v(" "),r("b-collapse",{attrs:{id:"arch-2",accordion:"services",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("b-table",{attrs:{items:e.serviceData,fields:e.serviceFields,striped:"",selectable:"",hover:"","sticky-header":""},on:{"row-selected":e.onRowSelected}})],1)],1)],1)],1),e._v(" "),r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.arch-3",modifiers:{"arch-3":!0}}],attrs:{variant:"success",block:""},on:{click:function(t){return e.serviceByArch(3)}}},[e._v("Security Equipment")])],1),e._v(" "),r("b-collapse",{attrs:{id:"arch-3",accordion:"services",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("b-table",{attrs:{items:e.serviceData,fields:e.serviceFields,striped:"",selectable:"",hover:"","sticky-header":""},on:{"row-selected":e.onRowSelected}})],1)],1)],1)],1),e._v(" "),r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.arch-4",modifiers:{"arch-4":!0}}],attrs:{variant:"success",block:""},on:{click:function(t){return e.serviceByArch(4)}}},[e._v("Asset Protection")])],1),e._v(" "),r("b-collapse",{attrs:{id:"arch-4",accordion:"services",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("b-table",{attrs:{items:e.serviceData,fields:e.serviceFields,striped:"",selectable:"",hover:"","sticky-header":""},on:{"row-selected":e.onRowSelected}})],1)],1)],1)],1),e._v(" "),r("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.arch-5",modifiers:{"arch-5":!0}}],attrs:{variant:"success",block:""},on:{click:function(t){return e.serviceByArch(5)}}},[e._v("Exectutive Protection")])],1),e._v(" "),r("b-collapse",{attrs:{id:"arch-5",accordion:"services",role:"tabpanel"}},[r("b-card-body",[r("b-card-text",[r("b-table",{attrs:{items:e.serviceData,fields:e.serviceFields,striped:"",selectable:"",hover:"","sticky-header":""},on:{"row-selected":e.onRowSelected}})],1)],1)],1)],1)],1),e._v(" "),r("AlertBox",{attrs:{show:e.hasError,text:e.error,variant:"danger"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);