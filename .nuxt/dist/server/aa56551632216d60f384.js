exports.ids=[3],exports.modules={29:function(t,e,r){"use strict";var n={},o=r(1),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,"3686c68e");e.a=component.exports},30:function(t,e){t.exports="http://sibox/api"},31:function(t,e,r){"use strict";var n={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},o=r(1),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[e("b-col",[e("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,"3a5b6af9");e.a=component.exports},32:function(t,e,r){"use strict";var n={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!0},linkTo:{type:String,required:!0},buttonVariant:{type:String,default:"secondary",required:!1}}},o=r(1),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-left"},[r("h3",[t._v(t._s(t.h3text))])]),t._v(" "),r("b-col",{staticClass:"text-right mb-2"},[r("b-button",{attrs:{variant:t.buttonVariant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,"fe758866");e.a=component.exports},34:function(t,e,r){"use strict";var n={props:{h3text:{type:String,required:!0}}},o=r(1),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{staticClass:"mt-4"},[e("b-col",[e("h3",{staticClass:"text-center mb-3"},[this._v(this._s(this.h3text))])])],1)}),[],!1,null,null,"43b34a7c");e.a=component.exports},37:function(t,e,r){"use strict";var n=r(1),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("b-alert",{staticClass:"text-center m-4",attrs:{show:"",dismissible:"",variant:"warning"}},[e("strong",[this._v("*Caution*")]),this._v(" "),e("br"),this._v("\n  Deletions are Permanent\n")])}),[],!1,null,null,"50257e37");e.a=component.exports},73:function(t,e,r){"use strict";r.r(e);var n=r(30),o=r.n(n),l=r(29),c=r(37),d=r(32),h=r(34),m=r(31),v={components:{NavbarHome:l.a,DeleteAlert:c.a,H3withButton:d.a,H3header:h.a,AlertBox:m.a},data:()=>({tableFields:[{key:"empmain_id",label:"Employee #",sortable:!0},{key:"firstname",label:"First Name",sortable:!0},{key:"middlename",label:"Middle Name",sortable:!0},{key:"lastname",label:"Last Name",sortable:!0},{key:"position",label:"Position",sortable:!0},{key:"subsidiary",label:"Subsidiary",sortable:!0}],tableData:[],form:{empmain_id:"",firstname:"",lastname:""},deleteSelected:!1,result:null,error:null,showDeleteMenu:!0}),computed:{hasResult(){return null!==this.result},hasError(){return null!==this.error}},mounted(){this.onLoad()},methods:{async onLoad(){const t=`${o.a}/emp/md`;try{const e=await this.$axios.$get(t);e.err?this.error=e.err:this.tableData=e.data}catch(t){this.error=t}},onRowSelected(t){t.length>0&&(this.form=t[0]),this.deleteSelected=t.length>0},resetPage(){this.tableData=[],this.form.emp_id="",this.form.firstname="",this.form.lastname="",this.deleteSelected=!1,this.result=null,this.error=null,this.onLoad(),this.showDeleteMenu=!0},async onSubmit(t){this.showDeleteMenu=!1,t&&t.preventDefault();const e=`${o.a}/emp/${this.form.empmain_id}`;try{const t=await this.$axios.$delete(e);this.result=t}catch(t){this.error=t}}}},_=r(1),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarHome"),t._ssrNode(" "),r("DeleteAlert"),t._ssrNode(" "),t.showDeleteMenu?r("b-container",[r("H3withButton",{attrs:{h3text:"Delete Employees","button-text":"Cancel and Return","link-to":"/emp"}}),t._v(" "),r("b-row",[r("b-col",[r("b-table",{attrs:{striped:"",selectable:"",hover:"","sticky-header":"","select-mode":"single","selected-variant":"danger",items:t.tableData,fields:t.tableFields},on:{"row-selected":t.onRowSelected}})],1)],1),t._v(" "),r("b-row",{directives:[{name:"show",rawName:"v-show",value:t.deleteSelected,expression:"deleteSelected"}]},[r("b-col",[r("b-form",{attrs:{novalidate:""},on:{submit:t.onSubmit}},[r("H3header",{attrs:{h3text:"Selected Employee"}}),t._v(" "),r("b-form-row",[r("b-col",{staticClass:"text-center"},[r("b-alert",{attrs:{show:"",variant:"warning"}},[r("strong",[t._v(t._s(t.form.firstname)+" "+t._s(t.form.lastname))])])],1)],1),t._v(" "),r("b-form-row",[r("b-col",{staticClass:"text-center"},[r("b-button",{attrs:{variant:"danger",type:"submit"}},[t._v("\n                Delete "+t._s(t.form.firstname)+" "+t._s(t.form.lastname)+"\n              ")])],1)],1)],1)],1)],1)],1):t._e(),t._ssrNode(" "),r("b-container",[r("AlertBox",{attrs:{show:t.hasResult,variant:"info",text:t.result}}),t._v(" "),r("AlertBox",{attrs:{show:t.hasError,variant:"danger",text:t.error}}),t._v(" "),t.showDeleteMenu?t._e():r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-center"},[r("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.resetPage()}}},[t._v("\n          Delete Another Employee\n        ")])],1),t._v(" "),r("b-col",{staticClass:"text-center"},[r("b-button",{attrs:{variant:"secondary",to:"/emp/edit"}},[t._v("\n          Return to Edit Page\n        ")])],1)],1)],1)],2)}),[],!1,null,null,"49d765b9");e.default=component.exports}};