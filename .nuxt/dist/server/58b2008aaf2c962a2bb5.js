exports.ids=[15],exports.modules={29:function(t,e,r){"use strict";var o={},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,"3686c68e");e.a=component.exports},30:function(t,e){t.exports="http://localhost:3000/api"},31:function(t,e,r){"use strict";var o={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},n=r(1),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[e("b-col",[e("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,"3a5b6af9");e.a=component.exports},33:function(t,e,r){"use strict";var o={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!1,default:"Add"},linkTo:{type:String,required:!0},variant:{type:String,required:!1,default:"info"}},methods:{refresh(){this.$emit("refresh")}}},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-left"},[r("h3",[t._v(t._s(t.h3text))])]),t._v(" "),r("b-col",{staticClass:"text-right mb-2"},[r("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.refresh()}}},[t._v("\n      Refresh\n    ")]),t._v(" "),r("b-button",{attrs:{variant:t.variant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,"9e9f1560");e.a=component.exports},64:function(t,e,r){"use strict";r.r(e);var o=r(30),n=r.n(o),l=r(29),d=r(33),h=r(31),c={components:{NavbarHome:l.a,AlertBox:h.a,H3withRefresh:d.a},data:()=>({tableFields:[{key:"posmain_id",label:"Position #",sortable:!0},{key:"shorthand",label:"Abbreviation",sortable:!0},{key:"title",label:"Title",sortable:!0}],tableData:[],assig:[],form:{},idLink:"",error:""}),computed:{hasUpdate(){return this.update.length>0},hasError(){return this.error.length>0}},mounted(){this.onLoad()},methods:{async onLoad(){const t=`${n.a}/pos/md`;try{const e=await this.$axios.$get(t);e.err?this.error=e.err:(this.tableData=e.data,this.tableData.forEach(t=>{t._showDetails=!1}))}catch(t){this.error=t}},async onRowClicked(t){this.tableData.forEach(t=>{t._showDetails=!1}),this.form.posmain_id=t.posmain_id,this.idLink=`/pos/edit/${this.form.posmain_id}`,t._showDetails=!t._showDetails;const e=`${n.a}/pos-assig/sm?id=${this.form.posmain_id}`;try{const t=await this.$axios.$get(e);t.err?this.error=t.err:this.assig=t.data}catch(t){this.error=t}},resetPage(t){t&&t.preventDefault(),this.tableData=[],this.assig=[],this.form={},this.error="",this.onLoad()}}},v=r(1),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarHome"),t._ssrNode(" "),r("b-container",[r("H3withRefresh",{attrs:{h3text:"Positions","button-text":"Add Positions","link-to":"/pos/add",variant:"success"},on:{refresh:t.resetPage}}),t._v(" "),r("b-row",[r("b-col",[r("b-table",{attrs:{items:t.tableData,fields:t.tableFields,striped:"",selectable:"",hover:"","sticky-header":"65vh","select-mode":"single"},on:{"row-clicked":t.onRowClicked},scopedSlots:t._u([{key:"row-details",fn:function(){return[r("b-card",[r("b-row",{attrs:{"align-v":"center"}},[r("b-col",{attrs:{cols:"10"}},[r("b-alert",{staticClass:"my-1",attrs:{show:"",variant:"info"}},[r("p",[t._v("Services Normally Assigned to this Position:")]),t._v(" "),r("ul",t._l(t.assig,(function(e){return r("li",{key:e.id},[r("strong",[t._v("S-Code "+t._s(e.servtype_id)+":")]),t._v("\n                        "+t._s(e.title)+"\n                      ")])})),0)])],1),t._v(" "),r("b-col",{staticClass:"pl-0",attrs:{cols:"2"}},[r("b-button",{attrs:{to:t.idLink,block:"",variant:"info"}},[t._v("\n                    Edit\n                  ")])],1)],1)],1)]},proxy:!0}])})],1)],1),t._v(" "),r("b-row",[r("b-col",{staticClass:"text-right"},[r("b-button",{attrs:{variant:"danger",to:"/pos/delete"}},[t._v("\n          Delete Position\n        ")])],1)],1),t._v(" "),r("AlertBox",{attrs:{show:t.hasError,text:t.error,variant:"danger"}})],1)],2)}),[],!1,null,null,"d2d8b694");e.default=component.exports}};