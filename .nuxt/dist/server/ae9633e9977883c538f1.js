exports.ids=[23],exports.modules={29:function(t,e,r){"use strict";var o={},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,"3686c68e");e.a=component.exports},30:function(t,e){t.exports="http://sibox/api"},31:function(t,e,r){"use strict";var o={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},n=r(1),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[e("b-col",[e("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,"3a5b6af9");e.a=component.exports},33:function(t,e,r){"use strict";var o={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!1,default:"Add"},linkTo:{type:String,required:!0},variant:{type:String,required:!1,default:"info"}},methods:{refresh(){this.$emit("refresh")}}},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-left"},[r("h3",[t._v(t._s(t.h3text))])]),t._v(" "),r("b-col",{staticClass:"text-right mb-2"},[r("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.refresh()}}},[t._v("\n      Refresh\n    ")]),t._v(" "),r("b-button",{attrs:{variant:t.variant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,"9e9f1560");e.a=component.exports},71:function(t,e,r){"use strict";r.r(e);var o=r(30),n=r.n(o),l=r(29),d=r(33),c=r(31),h={components:{NavbarHome:l.a,AlertBox:c.a,H3withRefresh:d.a},data:()=>({tableFields:[{key:"scopesub_id",label:"Subsidiary #",sortable:!0},{key:"shorthand",label:"Abbreviation",sortable:!0},{key:"country",label:"Subsidiary Location",sortable:!0},{key:"title",label:"Subsidiary Name",sortable:!0}],tableData:[],idLink:"",error:""}),computed:{hasTable(){return this.tableData.length>0},emptyDb(){return!this.hasTable&&!this.isLoading},hasError(){return""!==this.error}},mounted(){this.onLoad()},methods:{async onLoad(){const t=`${n.a}/scope-sub/md`;try{const e=await this.$axios.$get(t);e.err?this.error=e.err:(this.tableData=e.data,this.isLoading=!1)}catch(t){this.error=t}},onRowSelected(t){const e=`/sub/edit/${t[0].scopesub_id}`;this.$router.push(e)},resetPage(t){t&&t.preventDefault(),this.isLoading=!0,this.tableData=[],this.error="",this.onLoad()}}},v=r(1),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarHome"),t._ssrNode(" "),r("b-container",[r("H3withRefresh",{attrs:{h3text:"Subsidiaries","button-text":"Add Subsidiary","link-to":"/sub/add",variant:"success"},on:{refresh:t.resetPage}}),t._v(" "),r("b-collapse",{attrs:{id:"scopeSubTable",visible:t.hasTable}},[r("b-row",[r("b-col",[r("b-table",{attrs:{striped:"",selectable:"",hover:"","sticky-header":"",items:t.tableData,fields:t.tableFields},on:{"row-selected":t.onRowSelected}})],1)],1),t._v(" "),r("b-row",[r("b-col",{staticClass:"text-right"},[r("b-button",{staticClass:"px-4",attrs:{variant:"danger",to:"/sub/delete"}},[t._v("\n            Delete Subsidiaries\n          ")])],1)],1)],1),t._v(" "),r("b-row",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"my-5"},[r("b-col",{staticClass:"text-center"},[r("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1)],1),t._v(" "),r("AlertBox",{attrs:{show:t.emptyDb,text:"There are currently no Subsidiaries in the Database"}}),t._v(" "),r("AlertBox",{attrs:{show:t.hasError,variant:"danger",text:t.error}})],1)],2)}),[],!1,null,null,"a5d28cbc");e.default=component.exports}};