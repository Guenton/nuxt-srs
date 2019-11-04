(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{201:function(t,e,n){"use strict";var r={},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),n("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[n("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),n("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),n("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[n("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),n("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),n("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),n("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},202:function(t,e){t.exports="http://sibox/api"},204:function(t,e,n){"use strict";var r={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!0},linkTo:{type:String,required:!0},buttonVariant:{type:String,default:"secondary",required:!1}}},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"mt-4"},[n("b-col",{staticClass:"text-left"},[n("h3",[t._v(t._s(t.h3text))])]),t._v(" "),n("b-col",{staticClass:"text-right mb-2"},[n("b-button",{attrs:{variant:t.buttonVariant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},207:function(t,e,n){var r=n(16);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},210:function(t,e,n){"use strict";var strong=n(211),r=n(207);t.exports=n(212)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},211:function(t,e,n){"use strict";var r=n(20).f,o=n(72),l=n(137),c=n(33),m=n(135),f=n(136),h=n(92),d=n(138),v=n(93),_=n(17),w=n(91).fastKey,T=n(207),y=_?"_s":"size",x=function(t,e){var n,r=w(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,h){var d=t((function(t,r){m(t,d,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[y]=0,null!=r&&f(r,n,t[h],t)}));return l(d.prototype,{clear:function(){for(var t=T(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var n=T(this,e),r=x(n,t);if(r){var o=r.n,l=r.p;delete n._i[r.i],r.r=!0,l&&(l.n=o),o&&(o.p=l),n._f==r&&(n._f=o),n._l==r&&(n._l=l),n[y]--}return!!r},forEach:function(t){T(this,e);for(var n,r=c(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!x(T(this,e),t)}}),_&&r(d.prototype,"size",{get:function(){return T(this,e)[y]}}),d},def:function(t,e,n){var r,o,l=x(t,e);return l?l.v=n:(t._l=l={i:o=w(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=l),r&&(r.n=l),t[y]++,"F"!==o&&(t._i[o]=l)),t},getEntry:x,setStrong:function(t,e,n){h(t,e,(function(t,n){this._t=T(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?d(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,d(1))}),n?"entries":"values",!n,!0),v(e)}}},212:function(t,e,n){"use strict";var r=n(12),o=n(11),l=n(23),c=n(137),meta=n(91),m=n(136),f=n(135),h=n(16),d=n(18),v=n(94),_=n(56),w=n(95);t.exports=function(t,e,n,T,y,x){var k=r[t],D=k,R=y?"set":"add",C=D&&D.prototype,S={},E=function(t){var e=C[t];l(C,t,"delete"==t?function(a){return!(x&&!h(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(x&&!h(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return x&&!h(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof D&&(x||C.forEach&&!d((function(){(new D).entries().next()})))){var $=new D,V=$[R](x?{}:-0,1)!=$,F=d((function(){$.has(1)})),z=v((function(t){new D(t)})),B=!x&&d((function(){for(var t=new D,e=5;e--;)t[R](e,e);return!t.has(-0)}));z||((D=e((function(e,n){f(e,D,t);var r=w(new k,e,D);return null!=n&&m(n,y,r[R],r),r}))).prototype=C,C.constructor=D),(F||B)&&(E("delete"),E("has"),y&&E("get")),(B||V)&&E(R),x&&C.clear&&delete C.clear}else D=T.getConstructor(e,t,y,R),c(D.prototype,n),meta.NEED=!0;return _(D,t),S[t]=D,o(o.G+o.W+o.F*(D!=k),S),x||T.setStrong(D,t,y),D}},370:function(t,e,n){"use strict";n.r(e);n(2),n(1),n(44),n(210),n(97),n(98),n(55);var r,o,l,c,m,f,h,d=n(15),v=n(202),_=n.n(v),w=n(201),T=n(204),y={components:{NavbarHome:w.a,H3withButton:T.a},data:function(){return{sid:this.$route.params.sid,preRegTableFields:{serv:[{key:"serv_id",label:"SID#"},{key:"date_in",label:"Log Date"},{key:"time_in",label:"Time"},{key:"described",label:"Description"}],typeScope:[{key:"archtype",label:"Archtype"},{key:"typ",label:"Type"},{key:"depscope",label:"Scope"},{key:"superscope",label:"Location"}],reg:[{key:"footprint",label:"Footprint #"},{key:"cm_year",label:"CaseManagement #"},{key:"cm_seq",label:""}]},preRegTable:{serv:[],typeScope:[],reg:[]},dateTime:{requestDate:null,requestTime:null,startDate:null,startTime:null,finishDate:null,finishTime:null},form:{emp:[null],request:null,start:null,finish:null,fin:[]},validation:{emp:null,request:null,start:null,finish:null,fin:null},finValidationCount:null,dropdown:{emp:[{value:null,text:"Please select an employee"}],costType:[{value:null,text:"Please select a cost type"}],currency:[{value:null,text:"Currency"}],bearer:[{value:null,text:"Please select S&I Budget"}],signature:[{value:null,text:"Please select signature"}]},show:{preReg:!0,assignees:!0,timeline:!1,expenses:!1},btnVariant:{timeline:"info",expenses:"info"},res:{err:""}}},computed:{togglePreRegBtn:function(){return this.show.preReg?"Hide":"Show"},toggleAssigneesBtn:function(){return this.show.assignees?"Hide":"Show"},toggleTlBtn:function(){return this.show.timeline?"Discard Timeline":"Show Timeline"},toggleFinBtn:function(){return this.show.expenses?"Discard Expenses":"Show Expenses"},displayReg:function(){return this.preRegTable.reg.footprint||this.preRegTable.reg.cm_seq},regTableHasData:function(){return this.preRegTable.serv.length>0},empSelectOne:function(){return 1!==this.form.emp.length||null!==this.form.emp[0]},empSelectAll:function(){return!(this.form.emp.length>1&&!1===this.validation.emp)},empHasDuplicates:function(){return!this.empArrayHasDuplicates()||!1!==this.validation.emp},tlValidationMsgShow:function(){return!1!==this.validation.request&&!1!==this.validation.start&&!1!==this.validation.finish},incompleteValidation:function(){return!1===this.validation.emp||!1===this.validation.request||!1===this.validation.start||!1===this.validation.finish||!1===this.validation.fin}},mounted:function(){this.onLoad()},methods:{onLoad:function(){this.getPreRegData(),this.getEmpDropown(),this.getCostTypeDropdown(),this.getCurrencyDropdown(),this.getCostBearerDropdown(),this.getSignatureDropdown()},getPreRegData:(h=Object(d.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(_.a,"/serv/pre?id=").concat(this.sid),t.prev=1,t.next=4,this.$axios.$get(e);case 4:(n=t.sent).err?this.res.err=n.err:this.preRegTable=n,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),this.res.err=t.t0;case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(){return h.apply(this,arguments)}),dropdownRequest:(f=Object(d.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get(e);case 3:if(!(n=t.sent).err){t.next=9;break}return this.response.error=n.err,t.abrupt("return",[]);case 9:return t.abrupt("return",n.data);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),this.response.error=t.t0,t.abrupt("return",[]);case 16:case"end":return t.stop()}}),t,this,[[0,12]])}))),function(t){return f.apply(this,arguments)}),getEmpDropown:(m=Object(d.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(_.a,"/emp"),t.next=3,this.dropdownRequest(e);case 3:t.sent.forEach((function(t){var e=t.firstname.concat(" ",t.lastname);n.dropdown.emp.push({value:t.emp_id,text:e})}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)}),getCostTypeDropdown:(c=Object(d.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(_.a,"/cost-type"),t.next=3,this.dropdownRequest(e);case 3:t.sent.forEach((function(t){n.dropdown.costType.push({value:t.costtype_id,text:t.title})}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),getCurrencyDropdown:(l=Object(d.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(_.a,"/cost-currency"),t.next=3,this.dropdownRequest(e);case 3:t.sent.forEach((function(t){n.dropdown.currency.push({value:t.currency_id,text:t.iso})}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),getCostBearerDropdown:(o=Object(d.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(_.a,"/sub"),t.next=3,this.dropdownRequest(e);case 3:t.sent.forEach((function(t){n.dropdown.bearer.push({value:t.sub_id,text:t.shorthand})}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),getSignatureDropdown:(r=Object(d.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(_.a,"/cost-signature"),t.next=3,this.dropdownRequest(e);case 3:t.sent.forEach((function(t){n.dropdown.signature.push({value:t.costsig_id,text:t.title})}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),preRegToggle:function(){this.show.preReg=!this.show.preReg},empToggle:function(){this.show.assignees=!this.show.assignees},tlToggle:function(){this.show.timeline?(this.closeTimeline(),this.btnVariant.timeline="info"):(this.show.timeline=!0,this.btnVariant.timeline="danger")},finToggle:function(){this.show.expenses?(this.closeFin(),this.btnVariant.expenses="info"):(this.openFin(),this.btnVariant.expenses="danger")},closeTimeline:function(){this.show.timeline=!1,this.dateTime={requestDate:null,requestTime:null,startDate:null,startTime:null,finishDate:null,finishTime:null},this.form.request=null,this.form.start=null,this.form.finish=null,this.validation.request=null,this.validation.start=null,this.validation.finish=null},openFin:function(){this.form.fin=[{costType:null,amount:null,currency:null,description:"",bearer:null,signature:null}],this.validation.fin=!1,this.finValidationCount=6,this.show.expenses=!0},closeFin:function(){this.show.expenses=!1,this.form.fin=[],this.validation.fin=null},empValidator:function(){this.form.emp.includes(null)?this.validation.emp=!1:this.empArrayHasDuplicates()?this.validation.emp=!1:this.validation.emp=!0},finValidator:function(){var t=0;this.form.fin.forEach((function(e){e.costType||t++,e.amount||t++,e.currency||t++,e.description||t++,e.bearer||t++,e.signature||t++})),this.finValidationCount=t,this.validation.fin=!(t>0)},empArrayHasDuplicates:function(){return this.form.emp.length!==new Set(this.form.emp).size},addEmployeeDropdown:function(){this.form.emp.push(null)},addExpense:function(){this.form.fin.push({costType:null,amount:null,currency:null,description:"",bearer:null,signature:null})},remEmployeeDropdown:function(){this.form.emp.length>1&&this.form.emp.pop()},remExpense:function(){this.form.fin.length>1&&this.form.fin.pop()},tlRequest:function(){this.dateTime.requestDate||this.dateTime.requestTime?this.dateTime.requestDate&&this.dateTime.requestTime?(this.validation.request=!0,this.form.request=new Date(this.dateTime.requestDate+" "+this.dateTime.requestTime)):(this.validation.request=!1,this.form.request=null):(this.validation.request=null,this.form.request=null)},tlStart:function(){this.dateTime.startDate||this.dateTime.startTime?this.dateTime.startDate&&this.dateTime.startTime?(this.validation.start=!0,this.form.start=new Date(this.dateTime.startDate+" "+this.dateTime.startTime)):(this.validation.start=!1,this.form.start=null):(this.validation.start=null,this.form.start=null)},tlFinish:function(){this.dateTime.finishDate||this.dateTime.finishTime?this.dateTime.finishDate&&this.dateTime.finishTime?(this.validation.finish=!0,this.form.finish=new Date(this.dateTime.finishDate+" "+this.dateTime.finishTime)):(this.validation.finish=!1,this.form.finish=null):(this.validation.finish=null,this.form.finish=null)},onSubmit:function(){event.preventDefault(),console.log(this.form)},onReset:function(){event&&event.preventDefault(),this.dateTime={requestDate:null,requestTime:null,startDate:null,startTime:null,finishDate:null,finishTime:null},this.form={emp:[null],request:null,start:null,finish:null,fin:[{costType:null,amount:null,currency:null,description:"",bearer:null,signature:null}]},this.validation={emp:null,request:null,start:null,finish:null,fin:!1},this.show={preReg:!0,assignees:!0,timeline:!0,expenses:!0},this.finValidationCount=6}}},x=n(37),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavbarHome"),t._v(" "),n("b-container",[n("H3withButton",{staticClass:"mb-2",attrs:{h3text:"Expand SID","button-text":"Return to Logs","link-to":"/log"}}),t._v(" "),n("b-row",{attrs:{"align-h":"between","align-v":"center"}},[n("b-col",[n("b-collapse",{directives:[{name:"show",rawName:"v-show",value:t.regTableHasData,expression:"regTableHasData"}],attrs:{id:"preRegInfo"},model:{value:t.show.preReg,callback:function(e){t.$set(t.show,"preReg",e)},expression:"show.preReg"}},[n("b-alert",{staticClass:"p-2",attrs:{show:""}},[n("b-card",[n("b-table",{attrs:{small:"",hover:"",items:t.preRegTable.serv,fields:t.preRegTableFields.serv}})],1),t._v(" "),n("b-card",{staticClass:"mt-1"},[n("b-table",{attrs:{small:"",hover:"",items:t.preRegTable.typeScope,fields:t.preRegTableFields.typeScope}})],1),t._v(" "),t.displayReg?n("b-card",{staticClass:"mt-1"},[n("b-table",{attrs:{small:"",hover:"",items:t.preRegTable.reg,fields:t.preRegTableFields.reg}})],1):t._e()],1)],1)],1)],1),t._v(" "),n("b-form",{attrs:{novalidate:""},on:{submit:t.onSubmit,reset:t.onReset}},[n("b-row",[n("b-col",{attrs:{cols:"3"}},[n("b-button",{attrs:{block:"",variant:"info",size:"sm"},on:{click:t.preRegToggle}},[t._v("\n            "+t._s(t.togglePreRegBtn)+" SID Details\n          ")])],1),t._v(" "),n("b-col",{attrs:{cols:"3"}},[n("b-button",{attrs:{pressed:t.show.assignees,block:"",size:"sm",variant:"info"},on:{click:t.empToggle}},[t._v("\n            "+t._s(t.toggleAssigneesBtn)+" Assignees\n          ")])],1),t._v(" "),n("b-col",{attrs:{cols:"3"}},[n("b-button",{attrs:{block:"",size:"sm",variant:t.btnVariant.timeline},on:{click:t.tlToggle}},[t._v("\n            "+t._s(t.toggleTlBtn)+"\n          ")])],1),t._v(" "),n("b-col",{attrs:{cols:"3"}},[n("b-button",{attrs:{block:"",size:"sm",variant:t.btnVariant.expenses},on:{click:t.finToggle}},[t._v("\n            "+t._s(t.toggleFinBtn)+"\n          ")])],1)],1),t._v(" "),n("b-collapse",{attrs:{id:"assigneesMenu"},model:{value:t.show.assignees,callback:function(e){t.$set(t.show,"assignees",e)},expression:"show.assignees"}},[n("b-card",{staticClass:"mt-3",attrs:{"bg-variant":"light"},on:{mouseleave:t.empValidator}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Assignees","label-size":"lg","label-class":"font-weight-bold pt-0"}},[t._l(t.form.emp,(function(e,i){return[n("b-form-group",{key:e,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Employee:","label-align-sm":"right"}},[n("b-form-select",{attrs:{options:t.dropdown.emp,state:!(null===t.form.emp[i])},model:{value:t.form.emp[i],callback:function(e){t.$set(t.form.emp,i,e)},expression:"form.emp[i]"}})],1)]})),t._v(" "),n("hr")],2),t._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:t.empSelectOne}},[t._v("\n            Please select at least one Employee\n          ")]),t._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:t.empSelectAll}},[t._v("\n            Please select an Employee or remove obsolete Boxes\n          ")]),t._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:t.empHasDuplicates}},[t._v("\n            You have entered the same Employee twice\n          ")]),t._v(" "),n("b-row",{attrs:{"align-h":"start"}},[n("b-col",{attrs:{cols:"2"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"info"},on:{click:t.addEmployeeDropdown}},[t._v("Add")])],1),t._v(" "),n("b-col",{attrs:{cols:"2"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"secondary"},on:{click:t.remEmployeeDropdown}},[t._v("\n                Remove\n              ")])],1),t._v(" "),n("b-col",{attrs:{cols:"2","offset-md":"6"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"secondary"},on:{click:function(e){t.show.assignees=!1}}},[t._v("\n                Hide Assignees\n              ")])],1)],1)],1)],1),t._v(" "),n("b-collapse",{attrs:{id:"timelineMenu"},model:{value:t.show.timeline,callback:function(e){t.$set(t.show,"timeline",e)},expression:"show.timeline"}},[n("b-card",{staticClass:"mt-3",attrs:{"bg-variant":"light"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Timeline","label-size":"lg","label-class":"font-weight-bold pt-0"}},[n("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Requested:","label-align-sm":"right"}},[n("b-form-input",{attrs:{type:"date",state:t.validation.request},on:{change:t.tlRequest},model:{value:t.dateTime.requestDate,callback:function(e){t.$set(t.dateTime,"requestDate",e)},expression:"dateTime.requestDate"}}),t._v(" "),n("b-form-input",{attrs:{type:"time",state:t.validation.request},on:{change:t.tlRequest},model:{value:t.dateTime.requestTime,callback:function(e){t.$set(t.dateTime,"requestTime",e)},expression:"dateTime.requestTime"}})],1),t._v(" "),n("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Started:","label-align-sm":"right"}},[n("b-form-input",{attrs:{type:"date",state:t.validation.start},on:{change:t.tlStart},model:{value:t.dateTime.startDate,callback:function(e){t.$set(t.dateTime,"startDate",e)},expression:"dateTime.startDate"}}),t._v(" "),n("b-form-input",{attrs:{type:"time",state:t.validation.start},on:{change:t.tlStart},model:{value:t.dateTime.startTime,callback:function(e){t.$set(t.dateTime,"startTime",e)},expression:"dateTime.startTime"}})],1),t._v(" "),n("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Finished:","label-align-sm":"right"}},[n("b-form-input",{attrs:{type:"date",state:t.validation.finish},on:{change:t.tlFinish},model:{value:t.dateTime.finishDate,callback:function(e){t.$set(t.dateTime,"finishDate",e)},expression:"dateTime.finishDate"}}),t._v(" "),n("b-form-input",{attrs:{type:"time",state:t.validation.finish},on:{change:t.tlFinish},model:{value:t.dateTime.finishTime,callback:function(e){t.$set(t.dateTime,"finishTime",e)},expression:"dateTime.finishTime"}})],1),t._v(" "),n("hr")],1),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:t.tlValidationMsgShow}},[t._v("\n            Please input both Date and Time\n          ")]),t._v(" "),n("b-row",{attrs:{"align-h":"end"}},[n("b-col",{attrs:{cols:"2","offset-md":"6"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"danger"},on:{click:t.closeTimeline}},[t._v("\n                Discard\n              ")])],1)],1)],1)],1),t._v(" "),n("b-collapse",{attrs:{id:"expensesMenu"},model:{value:t.show.expenses,callback:function(e){t.$set(t.show,"expenses",e)},expression:"show.expenses"}},[n("b-card",{staticClass:"mt-3",attrs:{"bg-variant":"light"},on:{mouseleave:t.finValidator}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Expenses","label-size":"lg","label-class":"font-weight-bold pt-0"}},[t._l(t.form.fin,(function(e,i){return[n("b-form-group",{key:"costType"+i,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Cost Type:","label-align-sm":"right"}},[n("b-form-select",{attrs:{options:t.dropdown.costType,state:!(null===t.form.fin[i].costType)},model:{value:t.form.fin[i].costType,callback:function(e){t.$set(t.form.fin[i],"costType",e)},expression:"form.fin[i].costType"}})],1),t._v(" "),n("b-form-group",{key:"description"+i,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Description:","label-align-sm":"right"}},[n("b-form-input",{attrs:{state:!(""===t.form.fin[i].description)},model:{value:t.form.fin[i].description,callback:function(e){t.$set(t.form.fin[i],"description",e)},expression:"form.fin[i].description"}})],1),t._v(" "),n("b-form-group",{key:"amount"+i,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Amount:","label-align-sm":"right"}},[n("b-form-row",[n("b-col",{attrs:{cols:"7"}},[n("b-form-input",{attrs:{type:"number",step:"0.01",state:!(null===t.form.fin[i].amount)},model:{value:t.form.fin[i].amount,callback:function(e){t.$set(t.form.fin[i],"amount",e)},expression:"form.fin[i].amount"}})],1),t._v(" "),n("b-col",{attrs:{cols:"5"}},[n("b-form-select",{staticClass:"mr-3 pr-5 pl-3",attrs:{options:t.dropdown.currency,state:!(null===t.form.fin[i].currency)},model:{value:t.form.fin[i].currency,callback:function(e){t.$set(t.form.fin[i],"currency",e)},expression:"form.fin[i].currency"}})],1)],1)],1),t._v(" "),n("b-form-group",{key:"bearer"+i,staticClass:"mb-2 mt-4",attrs:{"label-cols-sm":"3",label:"S&I Budget:","label-align-sm":"right"}},[n("b-form-select",{attrs:{options:t.dropdown.bearer,state:!(null===t.form.fin[i].bearer)},model:{value:t.form.fin[i].bearer,callback:function(e){t.$set(t.form.fin[i],"bearer",e)},expression:"form.fin[i].bearer"}})],1),t._v(" "),n("b-form-group",{key:"signature"+i,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Signed by:","label-align-sm":"right"}},[n("b-form-select",{attrs:{options:t.dropdown.signature,state:!(null===t.form.fin[i].signature)},model:{value:t.form.fin[i].signature,callback:function(e){t.$set(t.form.fin[i],"signature",e)},expression:"form.fin[i].signature"}})],1),t._v(" "),n("hr",{key:"horizontal-line"+i})]}))],2),t._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:t.validation.fin}},[t._v("\n            Please Complete the Expense report or discard all expenses\n          ")]),t._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:t.validation.fin}},[t._v("\n            Please make "+t._s(t.finValidationCount)+" more boxes green\n          ")]),t._v(" "),n("b-row",{attrs:{"align-h":"start"}},[n("b-col",{attrs:{cols:"2"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"info"},on:{click:t.addExpense}},[t._v("Add")])],1),t._v(" "),n("b-col",{attrs:{cols:"2"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"secondary"},on:{click:t.remExpense}},[t._v("Remove")])],1),t._v(" "),n("b-col",{attrs:{cols:"2","offset-md":"6"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"danger"},on:{click:t.closeFin}},[t._v("\n                Discard\n              ")])],1)],1)],1)],1),t._v(" "),n("b-collapse",{attrs:{id:"FormButtons"},model:{value:t.validation.emp,callback:function(e){t.$set(t.validation,"emp",e)},expression:"validation.emp"}},[n("b-row",{staticClass:"my-3"},[n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{block:"",type:"submit",disabled:t.incompleteValidation,variant:"success"}},[t._v("Submit")])],1),t._v(" "),n("b-col",{staticClass:"text-left"},[n("b-button",{attrs:{block:"",type:"reset",variant:"secondary"}},[t._v("Reset")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);