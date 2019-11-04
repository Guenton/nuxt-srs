(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{201:function(t,e,r){"use strict";var n={},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},202:function(t,e){t.exports="http://sibox/api"},203:function(t,e,r){"use strict";var n={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},o=r(37),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[e("b-col",[e("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},204:function(t,e,r){"use strict";var n={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!0},linkTo:{type:String,required:!0},buttonVariant:{type:String,default:"secondary",required:!1}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-left"},[r("h3",[t._v(t._s(t.h3text))])]),t._v(" "),r("b-col",{staticClass:"text-right mb-2"},[r("b-button",{attrs:{variant:t.buttonVariant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},388:function(t,e,r){"use strict";r.r(e);r(55);var n,o,l,c,h,d=r(15),v=r(202),m=r.n(v),f=r(201),S=r(204),y=r(203),x={components:{NavbarHome:f.a,H3withButton:S.a,AlertBox:y.a},data:function(){return{archTypeOptions:[{value:null,text:"Select Service Archtype"}],serviceTypeOptions:[{value:null,text:"Select Service Type"}],depScopeOptions:[{value:null,text:"Select Request Origin"}],superScopeOptions:[{value:null,text:"Select Origin Location"}],form:{archType:null,serviceType:null,depScope:null,superScope:null,footprint:null,cmYear:null,cmSeq:null,description:""},validation:{archType:null,serviceType:null,depScope:null,superScope:null,footprint:null,cmYear:null,cmSeq:null,description:null},response:{success:"",error:"",sid:null},queryResult:[]}},computed:{archNotSelected:function(){return!this.validation.archType},cmYearOptions:function(){var t=(new Date).getFullYear();return[{value:null,text:""},{value:t,text:t},{value:t-1,text:t-1},{value:t-2,text:t-2},{value:t-3,text:t-3},{value:t-4,text:t-4}]},validFeedback:function(){return"Great!"},minimumValidation:function(){return!!(this.validation.archType&&this.validation.serviceType&&this.validation.depScope&&this.validation.superScope&&this.validation.description)},hasSuc:function(){return this.response.success.length>0},hasErr:function(){return this.response.error.length>0},queryHasResult:function(){return this.queryResult.length>0}},mounted:function(){this.onLoad()},methods:{onLoad:(h=Object(d.a)(regeneratorRuntime.mark((function t(){var e,r,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(m.a,"/serv-arch/md"),t.next=3,this.dropdownRequest(e);case 3:return t.sent.forEach((function(element){o.archTypeOptions.push({value:element.servarch_id,text:element.title})})),r="".concat(m.a,"/scope-dept"),t.next=8,this.dropdownRequest(r);case 8:return t.sent.forEach((function(element){o.depScopeOptions.push({value:element.scopedept_id,text:element.title})})),n="".concat(m.a,"/scope-locat"),t.next=13,this.dropdownRequest(n);case 13:t.sent.forEach((function(element){o.superScopeOptions.push({value:element.scopelocat_id,text:element.title})}));case 15:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),dropdownRequest:(c=Object(d.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get(e);case 3:if(!(r=t.sent).err){t.next=9;break}return this.response.error=r.err,t.abrupt("return",[]);case 9:return t.abrupt("return",r.data);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),this.response.error=t.t0,t.abrupt("return",[]);case 16:case"end":return t.stop()}}),t,this,[[0,12]])}))),function(t){return c.apply(this,arguments)}),archTypeValidator:function(){return null===this.form.archType?(this.validation.archType=!1,this.validation.serviceType=null,this.form.serviceType=null,this.serviceTypeOptions=[{value:null,text:"Select Service Type"}],!1):(this.validation.serviceType=null,this.form.serviceType=null,this.serviceTypeOptions=[{value:null,text:"Select Service Type"}],this.response.success="",this.response.error="",this.validation.archType=!0,!0)},serviceTypeValidator:function(){null===this.form.serviceType?this.validation.serviceType=!1:(this.validation.serviceType=!0,this.response.success="",this.response.error="")},depScopeValidator:function(){null===this.form.depScope?this.validation.depScope=!1:(this.validation.depScope=!0,this.response.success="",this.response.error="")},superScopeValidator:function(){null===this.form.superScope?this.validation.superScope=!1:(this.validation.superScope=!0,this.response.success="",this.response.error="")},footprintValidator:function(){isNaN(this.form.footprint)?this.validation.footprint=!1:(this.validation.footprint=!0,this.response.success="",this.response.error="",this.queryResult=[],this.searchFootprint()),this.form.footprint||(this.validation.footprint=null)},descriptionValidator:function(){this.form.description.length<5?this.validation.description=!1:this.form.description.length>200?this.validation.description=!1:this.validation.description=!0},cmValidator:function(){this.form.cmYear?this.validation.cmYear=!0:this.validation.cmYear=!1,isNaN(this.form.cmSeq)||!this.form.cmSeq?this.validation.cmSeq=!1:this.validation.cmSeq=!0,this.form.cmYear||this.form.cmSeq||(this.validation.cmYear=null,this.validation.cmSeq=null)},invalidFootprint:function(){return"Footprints can only be Numbers"},invalidDescription:function(){if(this.form.description.length>=200){var t=this.form.description.length-200;return"Please remove at least ".concat(t," more characters")}if(this.form.description.length>0){var e=5-this.form.description.length;return"Enter at least ".concat(e," more characters")}return"Please enter something"},invalidCm:function(){return this.form.cmYear||this.form.cmSeq?this.form.cmYear?this.form.cmSeq?isNaN(this.form.cmSeq)?"Case-Sequence can only be a number":void 0:"Please enter the Case-Sequence number":"Please select the Case-Year value":"Please select the Case-Year value and enter the Case-Sequence number"},searchFootprint:(l=Object(d.a)(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((e=this.form.footprint).length<4)){t.next=3;break}return t.abrupt("return");case 3:return r="".concat(m.a,"/search/footprint"),t.prev=4,t.next=7,this.$axios.$get(r,{params:{query:e}});case 7:(n=t.sent).err?this.response.error=n.err:this.queryResult=n.data,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),this.response.error=t.t0;case 14:case"end":return t.stop()}}),t,this,[[4,11]])}))),function(){return l.apply(this,arguments)}),serviceByArch:(o=Object(d.a)(regeneratorRuntime.mark((function t(){var e,r,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.archTypeValidator()){t.next=2;break}return t.abrupt("return");case 2:return e=this.form.archType,r="".concat(m.a,"/serv-typebyarch/sm?id=").concat(e),t.prev=4,t.next=7,this.$axios.$get(r);case 7:(n=t.sent).err?this.response.error=n.err:n.data.forEach((function(t){o.serviceTypeOptions.push({value:t.servtype_id,text:t.title})})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),this.response.error=t.t0;case 14:case"end":return t.stop()}}),t,this,[[4,11]])}))),function(){return o.apply(this,arguments)}),onSubmit:(n=Object(d.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r="".concat(m.a,"/serv"),t.prev=2,t.next=5,this.$axios.$post(r,this.form);case 5:(n=t.sent).err?this.response.error=n.err:(this.response.success=n.suc,this.response.sid=n.sid,this.$bvModal.show("submitModal")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),this.response.error=t.t0;case 12:case"end":return t.stop()}}),t,this,[[2,9]])}))),function(t){return n.apply(this,arguments)}),expandSID:function(){var t="/log/add/".concat(this.response.sid);this.$router.push(t)},onReset:function(t){t.preventDefault(),this.$bvModal.hide("submitModal"),this.archTypeOptions=[{value:null,text:"Select Service Archtype"}],this.serviceTypeOptions=[{value:null,text:"Select Service Type"}],this.depScopeOptions=[{value:null,text:"Select Request Origin"}],this.superScopeOptions=[{value:null,text:"Select Origin Location"}],this.form.archType=null,this.form.serviceType=null,this.form.depScope=null,this.form.superScope=null,this.form.footprint=null,this.form.cmYear=null,this.form.cmSeq=null,this.form.description="",this.validation.archType=null,this.validation.serviceType=null,this.validation.depScope=null,this.validation.superScope=null,this.validation.footprint=null,this.validation.cmYear=null,this.validation.cmSeq=null,this.validation.description=null,this.response.success="",this.response.error="",this.response.sid=null,this.queryResult=[],this.onLoad()}}},_=r(37),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarHome"),t._v(" "),r("b-container",[r("H3withButton",{attrs:{h3text:"Add new Service Log","button-text":"Return to Logs","link-to":"/log"}}),t._v(" "),r("b-form",{staticClass:"mt-3",attrs:{novalidate:""},on:{submit:t.onSubmit,reset:t.onReset}},[r("b-card",{attrs:{"bg-variant":"light"}},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Specification","label-size":"lg","label-class":"font-weight-bold pt-0"}},[r("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Archtype:","label-align-sm":"right"}},[r("b-form-select",{attrs:{options:t.archTypeOptions,state:t.validation.archType},on:{change:t.serviceByArch},model:{value:t.form.archType,callback:function(e){t.$set(t.form,"archType",e)},expression:"form.archType"}})],1),t._v(" "),r("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Type:","label-align-sm":"right"}},[r("b-form-select",{attrs:{disabled:t.archNotSelected,options:t.serviceTypeOptions,state:t.validation.serviceType},on:{change:t.serviceTypeValidator},model:{value:t.form.serviceType,callback:function(e){t.$set(t.form,"serviceType",e)},expression:"form.serviceType"}})],1)],1)],1),t._v(" "),r("b-card",{staticClass:"mt-4",attrs:{"bg-variant":"light"}},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Scope","label-size":"lg","label-class":"font-weight-bold pt-0"}},[r("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Origin:","label-align-sm":"right"}},[r("b-form-select",{attrs:{options:t.depScopeOptions,state:t.validation.depScope},on:{change:t.depScopeValidator},model:{value:t.form.depScope,callback:function(e){t.$set(t.form,"depScope",e)},expression:"form.depScope"}})],1),t._v(" "),r("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Location:","label-align-sm":"right"}},[r("b-form-select",{attrs:{options:t.superScopeOptions,state:t.validation.superScope},on:{change:t.superScopeValidator},model:{value:t.form.superScope,callback:function(e){t.$set(t.form,"superScope",e)},expression:"form.superScope"}})],1)],1)],1),t._v(" "),r("b-card",{staticClass:"mt-4",attrs:{"bg-variant":"light"}},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Registry","label-size":"lg","label-class":"font-weight-bold pt-0"}},[r("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Footprint:","label-align-sm":"right"}},[r("b-form-input",{attrs:{placeholder:"Enter Footprint Number",state:t.validation.footprint,"invalid-feedback":t.invalidFootprint,"valid-feedback":t.validFeedback},on:{keyup:t.footprintValidator},model:{value:t.form.footprint,callback:function(e){t.$set(t.form,"footprint",e)},expression:"form.footprint"}})],1),t._v(" "),r("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Case Management:","label-align-sm":"right"}},[r("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[r("b-form-select",{staticClass:"mr-3 pr-5 pl-3",attrs:{options:t.cmYearOptions,state:t.validation.cmYear},on:{focus:t.cmValidator,change:t.cmValidator},model:{value:t.form.cmYear,callback:function(e){t.$set(t.form,"cmYear",e)},expression:"form.cmYear"}})]},proxy:!0}])},[t._v(" "),r("b-form-input",{attrs:{placeholder:"Select Year and Enter Number",state:t.validation.cmSeq},on:{focus:t.cmValidator,keyup:t.cmValidator},model:{value:t.form.cmSeq,callback:function(e){t.$set(t.form,"cmSeq",e)},expression:"form.cmSeq"}})],1),t._v(" "),r("b-form-invalid-feedback",{attrs:{state:t.validation.footprint}},[t._v("\n              "+t._s(t.invalidFootprint())+"\n            ")]),t._v(" "),r("b-form-invalid-feedback",{attrs:{state:t.validation.cmSeq}},[t._v("\n              "+t._s(t.invalidCm())+"\n            ")])],1)],1),t._v(" "),r("b-alert",{attrs:{show:t.queryHasResult,variant:"info"}},[r("p",[t._v("\n            Found the Following Footprint Numbers with similar starting values\n          ")]),t._v(" "),r("ul",t._l(t.queryResult,(function(e){return r("li",{key:e},[t._v("\n              Footprint #:\n              "),r("strong",[t._v(" "+t._s(e.footprint))])])})),0)])],1),t._v(" "),r("b-card",{staticClass:"mt-4",attrs:{"bg-variant":"light"}},[r("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Service Description","label-size":"lg","label-class":"font-weight-bold pt-0"}},[r("b-form-textarea",{attrs:{placeholder:"Enter a short description for this service...",rows:"3","max-rows":"6",state:t.validation.description,"invalid-feedback":t.invalidDescription,"valid-feedback":t.validFeedback},on:{focus:t.descriptionValidator,keyup:t.descriptionValidator},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),r("b-form-invalid-feedback",{attrs:{state:t.validation.description}},[t._v("\n            "+t._s(t.invalidDescription())+"\n          ")])],1)],1),t._v(" "),r("b-form-row",{staticClass:"mt-3"},[r("b-col",{staticClass:"text-right"},[r("b-button",{staticClass:"px-4",attrs:{type:"submit",variant:"success",disabled:!t.minimumValidation}},[t._v("\n            Pre-Register\n          ")])],1),t._v(" "),r("b-col",{staticClass:"text-left"},[r("b-button",{staticClass:"px-4",attrs:{type:"reset",variant:"secondary"}},[t._v("\n            Reset Form\n          ")])],1)],1)],1),t._v(" "),r("b-row",[r("AlertBox",{attrs:{show:t.hasSuc,variant:"success",text:t.response.success}}),t._v(" "),r("AlertBox",{attrs:{show:t.hasErr,variant:"danger",text:t.response.error}})],1)],1),t._v(" "),r("b-modal",{attrs:{id:"submitModal",title:"Service Pre-Registration"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[r("b-container",[r("b-row",{attrs:{"align-h":"between"}},[r("b-col",{attrs:{cols:"6"}},[r("b-button",{attrs:{block:"",variant:"info"},on:{click:t.onReset}},[t._v("\n              Add another Service\n            ")])],1),t._v(" "),r("b-col",{attrs:{cols:"6"}},[r("b-button",{attrs:{block:"",variant:"success"},on:{click:t.expandSID}},[t._v("\n              Expand SID# "+t._s(t.response.sid)+"\n            ")])],1)],1)],1)]},proxy:!0}])},[r("p",{staticClass:"my-4 text-center"},[t._v("\n      "+t._s(t.response.success)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);