exports.ids=[22],exports.modules={29:function(t,e,r){"use strict";var o={},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,"3686c68e");e.a=component.exports},30:function(t,e){t.exports="http://localhost:3000/api"},31:function(t,e,r){"use strict";var o={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},n=r(1),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[e("b-col",[e("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,"3a5b6af9");e.a=component.exports},33:function(t,e,r){"use strict";var o={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!1,default:"Add"},linkTo:{type:String,required:!0},variant:{type:String,required:!1,default:"info"}},methods:{refresh(){this.$emit("refresh")}}},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-left"},[r("h3",[t._v(t._s(t.h3text))])]),t._v(" "),r("b-col",{staticClass:"text-right mb-2"},[r("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.refresh()}}},[t._v("\n      Refresh\n    ")]),t._v(" "),r("b-button",{attrs:{variant:t.variant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,"9e9f1560");e.a=component.exports},34:function(t,e,r){"use strict";var o={props:{h3text:{type:String,required:!0}}},n=r(1),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{staticClass:"mt-4"},[e("b-col",[e("h3",{staticClass:"text-center mb-3"},[this._v(this._s(this.h3text))])])],1)}),[],!1,null,null,"43b34a7c");e.a=component.exports},59:function(t,e,r){"use strict";r.r(e);var o=r(30),n=r.n(o),l=r(29),c=r(33),d=r(34),h={props:{listObj:{type:Array,required:!1,default:()=>[]},show:{type:Boolean,required:!0,default:!1}}},v=r(1),m=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",[r("b-alert",{attrs:{show:t.show,variant:"info"}},[r("p",[t._v("Results:")]),t._v(" "),r("ul",t._l(t.listObj,(function(e){return r("li",{key:e.id},[t._v("\n          "+t._s(e)+"\n        ")])})),0)])],1)],1)}),[],!1,null,null,"34e6445c").exports,f=r(31),_={components:{NavbarHome:l.a,H3withRefresh:c.a,H3header:d.a,InfoAlertList:m,AlertBox:f.a},data:()=>({tableFields:[{key:"sub_id",label:"Subsidiary #",sortable:!0},{key:"shorthand",label:"Abbreviation",sortable:!0},{key:"location",label:"Subsidiary Location",sortable:!0},{key:"title",label:"Subsidiary Name",sortable:!0}],tableData:[],form:[],update:[],showtable:!1,error:null}),computed:{hasUpdate(){return this.update.length>0},hasError(){return null!==this.error}},async mounted(){const t=`${n.a}/sub`;try{const e=await this.$axios.$get(t);e.err?this.error=e.err:this.tableData=e.data}catch(t){this.error=t}},methods:{onRowSelected(t){this.form=t,this.showtable=t.length>0},async resetPage(t){t&&t.preventDefault(),this.tableData=[],this.form=[],this.update=[],this.error=null,this.showtable=!1;const e=`${n.a}/sub`;try{const t=await this.$axios.$get(e);t.err?this.error=t.err:this.tableData=t.data}catch(t){this.error=t}},async onSubmit(t){t.preventDefault();const e=`${n.a}/sub`;try{const t=await this.$axios.$put(e,this.form);this.update=t}catch(t){this.error=t}}}},w=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarHome"),t._ssrNode(" "),r("b-container",[r("H3withRefresh",{attrs:{h3text:"Edit Subsidiaries","button-text":"Add Subsidiary","link-to":"/sub/add"},on:{refresh:t.resetPage}}),t._v(" "),r("b-row",[r("b-col",[r("b-table",{attrs:{items:t.tableData,fields:t.tableFields,striped:"",selectable:"",hover:"","sticky-header":""},on:{"row-selected":t.onRowSelected}})],1)],1),t._v(" "),r("b-row",[r("b-col",{staticClass:"text-right"},[r("b-button",{attrs:{variant:"danger",to:"/sub/delete"}},[t._v("\n          Delete Subsidiary\n        ")])],1)],1),t._v(" "),r("b-row",{directives:[{name:"show",rawName:"v-show",value:t.showtable,expression:"showtable"}]},[r("b-col",[r("b-form",{attrs:{novalidate:""},on:{submit:t.onSubmit,reset:t.resetPage}},[r("H3header",{attrs:{h3text:"Edit Subsidiaries"}}),t._v(" "),t._l(t.form,(function(sub,e){return r("b-form-row",{key:sub.pos_id},[r("b-col",{staticClass:"text-center",attrs:{sm:"2","align-v":"center"}},[r("b-row",[r("b-col",{attrs:{sm:"12"}},[r("b-row",[r("strong",[t._v("Position #"+t._s(sub.sub_id)+":")])])],1),t._v(" "),r("b-col",{attrs:{sm:"12"}},[r("b-row",[t._v("\n                    "+t._s(sub.shorthand)+"\n                  ")])],1)],1)],1),t._v(" "),r("b-col",[r("b-form-group",{attrs:{label:"Abbreviation"}},[r("b-form-input",{attrs:{trim:""},model:{value:t.form[e].shorthand,callback:function(r){t.$set(t.form[e],"shorthand",r)},expression:"form[index].shorthand"}})],1)],1),t._v(" "),r("b-col",[r("b-form-group",{attrs:{label:"Subsidiary Location"}},[r("b-form-input",{attrs:{trim:""},model:{value:t.form[e].location,callback:function(r){t.$set(t.form[e],"location",r)},expression:"form[index].location"}})],1)],1),t._v(" "),r("b-col",[r("b-form-group",{attrs:{label:"Subsidiary Name"}},[r("b-form-input",{attrs:{trim:""},model:{value:t.form[e].title,callback:function(r){t.$set(t.form[e],"title",r)},expression:"form[index].title"}})],1)],1)],1)})),t._v(" "),r("b-form-row",[r("b-col",{staticClass:"text-right"},[r("b-button",{attrs:{type:"submit",variant:"success"}},[t._v("Update")])],1),t._v(" "),r("b-col",{staticClass:"text-left"},[r("b-button",{attrs:{type:"reset",variant:"secondary"}},[t._v("Cancel")])],1)],1)],2)],1)],1),t._v(" "),r("InfoAlertList",{attrs:{show:t.hasUpdate,"list-obj":t.update}}),t._v(" "),r("AlertBox",{attrs:{show:t.hasError,text:t.error,variant:"danger"}})],1)],2)}),[],!1,null,null,"d5ea4240");e.default=w.exports}};