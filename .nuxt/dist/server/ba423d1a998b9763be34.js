exports.ids=[20],exports.modules={29:function(t,e,r){"use strict";var n={},o=r(1),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,"3686c68e");e.a=component.exports},30:function(t,e){t.exports="http://localhost:3000/api"},31:function(t,e,r){"use strict";var n={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},o=r(1),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[e("b-col",[e("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,"3a5b6af9");e.a=component.exports},32:function(t,e,r){"use strict";var n={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!0},linkTo:{type:String,required:!0},buttonVariant:{type:String,default:"secondary",required:!1}}},o=r(1),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-left"},[r("h3",[t._v(t._s(t.h3text))])]),t._v(" "),r("b-col",{staticClass:"text-right mb-2"},[r("b-button",{attrs:{variant:t.buttonVariant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,"fe758866");e.a=component.exports},75:function(t,e,r){"use strict";r.r(e);var n=r(30),o=r.n(n),l=r(29),h=r(32),c=r(31),d={components:{NavbarHome:l.a,H3withButton:h.a,AlertBox:c.a},data:()=>({form:{title:"",shorthand:"",country:""},validation:{shorthand:null,title:null,country:null},response:{success:"",error:""},queryResult:[]}),computed:{hasSuc(){return this.response.success.length>0},hasErr(){return this.response.error.length>0},queryHasResult(){return this.queryResult.length>0},incompleteValidation(){return null===this.validation.title||!1===this.validation.title||null===this.validation.shorthand||!1===this.validation.shorthand||null===this.validation.country||!1===this.validation.country}},methods:{titleValidator(){this.form.title.length>=5?(this.response.success="",this.response.error="",this.validation.title=!0,this.queryResult=[],this.searchInput("title")):this.validation.title=!1},shorthandValidator(){this.form.shorthand.length>=2?(this.response.success="",this.response.error="",this.validation.shorthand=!0,this.queryResult=[],this.searchInput("shorthand")):this.validation.shorthand=!1},countryValidator(){this.form.country.length>=5?this.validation.country=!0:this.validation.country=!1},invalidTitle(){if(this.form.title.length>0){return`Enter at least ${5-this.form.title.length} more characters`}return"Please enter something"},invalidShorthand(){if(this.form.shorthand.length>0){return`Enter at least ${2-this.form.shorthand.length} more characters`}return"Please enter something"},invalidCountry(){if(this.form.country.length>0){return`Enter at least ${5-this.form.country.length} more characters`}return"Please enter something"},validFeedback:()=>"Great!",async searchInput(t){const e="shorthand"===t?this.form.shorthand:this.form.title,r=`${o.a}/search/scope-sub`;try{const t=await this.$axios.$get(r,{params:{query:e}});t.err?this.response.error=t.err:this.queryResult=t.data}catch(t){this.response.error=t}},async onSubmit(t){t.preventDefault();const e=`${o.a}/scope-sub`;try{const t=await this.$axios.$post(e,this.form);t.err?this.response.error=t.err:(this.onReset(),this.response.success=t.suc)}catch(t){this.response.error=t}},onReset(t){t&&t.preventDefault(),this.form={title:"",shorthand:"",country:""},this.validation={shorthand:null,title:null,country:null},this.response={success:"",error:""},this.queryResult=[]}}},v=r(1),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarHome"),t._ssrNode(" "),r("b-container",[r("H3withButton",{attrs:{h3text:"Add new Subsidiary","button-text":"Cancel and Return","link-to":"/sub"}}),t._v(" "),r("b-row",[r("b-col",[r("b-form",{attrs:{novalidate:""},on:{submit:t.onSubmit,reset:t.onReset}},[r("b-card",{attrs:{"bg-variant":"light"}},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Subsidiary","label-size":"lg","label-class":"font-weight-bold pt-0"}},[r("b-form-group",{staticClass:"mb-2",attrs:{state:t.validation.title,"invalid-feedback":t.invalidTitle(),"valid-feedback":t.validFeedback(),label:"Title:","label-cols-sm":"3","label-align-sm":"right"}},[r("b-form-input",{attrs:{state:t.validation.title},on:{focus:function(e){return t.titleValidator()},input:function(e){return t.titleValidator()}},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("b-form-group",{staticClass:"mb-2",attrs:{state:t.validation.shorthand,"invalid-feedback":t.invalidShorthand(),"valid-feedback":t.validFeedback(),label:"Abbreviation:","label-cols-sm":"3","label-align-sm":"right"}},[r("b-form-input",{attrs:{state:t.validation.shorthand},on:{focus:function(e){return t.shorthandValidator()},input:function(e){return t.shorthandValidator()}},model:{value:t.form.shorthand,callback:function(e){t.$set(t.form,"shorthand",e)},expression:"form.shorthand"}})],1),t._v(" "),r("b-form-group",{staticClass:"mb-2",attrs:{state:t.validation.country,"invalid-feedback":t.invalidCountry(),"valid-feedback":t.validFeedback(),label:"Country:","label-cols-sm":"3","label-align-sm":"right"}},[r("b-form-input",{attrs:{state:t.validation.country},on:{focus:function(e){return t.countryValidator()},input:function(e){return t.countryValidator()}},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1)],1)],1),t._v(" "),r("AlertBox",{attrs:{show:t.hasSuc,text:t.response.success,variant:"success"}}),t._v(" "),r("AlertBox",{attrs:{show:t.hasErr,text:t.response.error,variant:"danger"}}),t._v(" "),r("b-form-row",{staticClass:"my-3"},[r("b-col",{staticClass:"text-right"},[r("b-button",{staticClass:"px-4",attrs:{disabled:t.incompleteValidation,type:"submit",variant:"success"}},[t._v("\n                Submit Position\n              ")])],1),t._v(" "),r("b-col",{staticClass:"text-left"},[r("b-button",{staticClass:"px-4",attrs:{type:"reset",variant:"secondary"}},[t._v("\n                Reset Form\n              ")])],1)],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"mt-4"},[r("b-col",[r("b-alert",{attrs:{show:t.queryHasResult,variant:"info"}},[r("p",[t._v("Found the Following Subsidiaries with similar names")]),t._v(" "),r("ul",t._l(t.queryResult,(function(sub){return r("li",{key:sub.scopesub_id},[r("strong",[t._v("Subsidiary #"+t._s(sub.scopesub_id)+":")]),t._v("\n              "+t._s(sub.shorthand)+" - "+t._s(sub.title)+"\n            ")])})),0)])],1)],1)],1)],2)}),[],!1,null,null,"ef662fb2");e.default=component.exports}};