exports.ids=[9],exports.modules={29:function(e,t,n){"use strict";var l={},r=n(1),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/home"}},[e._v("SIBOX")]),e._v(" "),n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/log"}},[e._v("Logs")]),e._v(" "),n("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[n("b-dropdown-item",{attrs:{to:"/stat/"}},[e._v("Summary")]),e._v(" "),n("b-dropdown-item",{attrs:{to:"/stat/org"}},[e._v("Organization Chart")])],1),e._v(" "),n("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[n("b-dropdown-item",{attrs:{to:"/emp/"}},[e._v("Employees")]),e._v(" "),n("b-dropdown-item",{attrs:{to:"/pos/"}},[e._v("Positions")]),e._v(" "),n("b-dropdown-item",{attrs:{to:"/sub/"}},[e._v("Subsidiaries")]),e._v(" "),n("b-dropdown-item",{attrs:{to:"/service/"}},[e._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,"3686c68e");t.a=component.exports},30:function(e,t){e.exports="http://localhost:3000/api"},32:function(e,t,n){"use strict";var l={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!0},linkTo:{type:String,required:!0},buttonVariant:{type:String,default:"secondary",required:!1}}},r=n(1),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"mt-4"},[n("b-col",{staticClass:"text-left"},[n("h3",[e._v(e._s(e.h3text))])]),e._v(" "),n("b-col",{staticClass:"text-right mb-2"},[n("b-button",{attrs:{variant:e.buttonVariant,to:e.linkTo}},[e._v("\n      "+e._s(e.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,"fe758866");t.a=component.exports},78:function(e,t,n){"use strict";n.r(t);var l=n(30),r=n.n(l),o=n(29),m=n(32),c={components:{NavbarHome:o.a,H3withButton:m.a},data(){return{sid:this.$route.params.sid,preRegTableFields:{serv:[{key:"serv_id",label:"SID#"},{key:"date_in",label:"Log Date"},{key:"time_in",label:"Time"},{key:"described",label:"Description"}],typeScope:[{key:"archtype",label:"Archtype"},{key:"typ",label:"Type"},{key:"depscope",label:"Scope"},{key:"superscope",label:"Location"}],reg:[{key:"footprint",label:"Footprint #"},{key:"cm_year",label:"CaseManagement #"},{key:"cm_seq",label:""}]},preRegTable:{serv:[],typeScope:[],reg:[]},dateTime:{requestDate:null,requestTime:null,startDate:null,startTime:null,finishDate:null,finishTime:null},form:{emp:[null],request:null,start:null,finish:null,fin:[]},validation:{emp:null,request:null,start:null,finish:null,fin:null},finValidationCount:null,dropdown:{emp:[{value:null,text:"Please select an employee"}],costType:[{value:null,text:"Please select a cost type"}],currency:[{value:null,text:"Currency"}],bearer:[{value:null,text:"Please select S&I Budget"}],signature:[{value:null,text:"Please select signature"}]},show:{preReg:!0,assignees:!0,timeline:!1,expenses:!1},btnVariant:{timeline:"info",expenses:"info"},res:{err:""}}},computed:{togglePreRegBtn(){return this.show.preReg?"Hide":"Show"},toggleAssigneesBtn(){return this.show.assignees?"Hide":"Show"},toggleTlBtn(){return this.show.timeline?"Discard Timeline":"Show Timeline"},toggleFinBtn(){return this.show.expenses?"Discard Expenses":"Show Expenses"},displayReg(){return this.preRegTable.reg.footprint||this.preRegTable.reg.cm_seq},regTableHasData(){return this.preRegTable.serv.length>0},empSelectOne(){return 1!==this.form.emp.length||null!==this.form.emp[0]},empSelectAll(){return!(this.form.emp.length>1&&!1===this.validation.emp)},empHasDuplicates(){return!this.empArrayHasDuplicates()||!1!==this.validation.emp},tlValidationMsgShow(){return!1!==this.validation.request&&!1!==this.validation.start&&!1!==this.validation.finish},incompleteValidation(){return!1===this.validation.emp||!1===this.validation.request||!1===this.validation.start||!1===this.validation.finish||!1===this.validation.fin}},mounted(){this.onLoad()},methods:{onLoad(){this.getPreRegData(),this.getEmpDropown(),this.getCostTypeDropdown(),this.getCurrencyDropdown(),this.getCostBearerDropdown(),this.getSignatureDropdown()},async getPreRegData(){const e=`${r.a}/serv/pre?id=${this.sid}`;try{const t=await this.$axios.$get(e);t.err?this.res.err=t.err:this.preRegTable=t}catch(e){this.res.err=e}},async dropdownRequest(e){try{const t=await this.$axios.$get(e);return t.err?(this.response.error=t.err,[]):t.data}catch(e){return this.response.error=e,[]}},async getEmpDropown(){const e=`${r.a}/emp`;(await this.dropdownRequest(e)).forEach(e=>{const t=e.firstname.concat(" ",e.lastname);this.dropdown.emp.push({value:e.emp_id,text:t})})},async getCostTypeDropdown(){const e=`${r.a}/cost-type`;(await this.dropdownRequest(e)).forEach(e=>{this.dropdown.costType.push({value:e.costtype_id,text:e.title})})},async getCurrencyDropdown(){const e=`${r.a}/cost-currency`;(await this.dropdownRequest(e)).forEach(e=>{this.dropdown.currency.push({value:e.currency_id,text:e.iso})})},async getCostBearerDropdown(){const e=`${r.a}/sub`;(await this.dropdownRequest(e)).forEach(e=>{this.dropdown.bearer.push({value:e.sub_id,text:e.shorthand})})},async getSignatureDropdown(){const e=`${r.a}/cost-signature`;(await this.dropdownRequest(e)).forEach(e=>{this.dropdown.signature.push({value:e.costsig_id,text:e.title})})},preRegToggle(){this.show.preReg=!this.show.preReg},empToggle(){this.show.assignees=!this.show.assignees},tlToggle(){this.show.timeline?(this.closeTimeline(),this.btnVariant.timeline="info"):(this.show.timeline=!0,this.btnVariant.timeline="danger")},finToggle(){this.show.expenses?(this.closeFin(),this.btnVariant.expenses="info"):(this.openFin(),this.btnVariant.expenses="danger")},closeTimeline(){this.show.timeline=!1,this.dateTime={requestDate:null,requestTime:null,startDate:null,startTime:null,finishDate:null,finishTime:null},this.form.request=null,this.form.start=null,this.form.finish=null,this.validation.request=null,this.validation.start=null,this.validation.finish=null},openFin(){this.form.fin=[{costType:null,amount:null,currency:null,description:"",bearer:null,signature:null}],this.validation.fin=!1,this.finValidationCount=6,this.show.expenses=!0},closeFin(){this.show.expenses=!1,this.form.fin=[],this.validation.fin=null},empValidator(){this.form.emp.includes(null)?this.validation.emp=!1:this.empArrayHasDuplicates()?this.validation.emp=!1:this.validation.emp=!0},finValidator(){let e=0;this.form.fin.forEach(t=>{t.costType||e++,t.amount||e++,t.currency||e++,t.description||e++,t.bearer||e++,t.signature||e++}),this.finValidationCount=e,this.validation.fin=!(e>0)},empArrayHasDuplicates(){return this.form.emp.length!==new Set(this.form.emp).size},addEmployeeDropdown(){this.form.emp.push(null)},addExpense(){this.form.fin.push({costType:null,amount:null,currency:null,description:"",bearer:null,signature:null})},remEmployeeDropdown(){this.form.emp.length>1&&this.form.emp.pop()},remExpense(){this.form.fin.length>1&&this.form.fin.pop()},tlRequest(){this.dateTime.requestDate||this.dateTime.requestTime?this.dateTime.requestDate&&this.dateTime.requestTime?(this.validation.request=!0,this.form.request=new Date(this.dateTime.requestDate+" "+this.dateTime.requestTime)):(this.validation.request=!1,this.form.request=null):(this.validation.request=null,this.form.request=null)},tlStart(){this.dateTime.startDate||this.dateTime.startTime?this.dateTime.startDate&&this.dateTime.startTime?(this.validation.start=!0,this.form.start=new Date(this.dateTime.startDate+" "+this.dateTime.startTime)):(this.validation.start=!1,this.form.start=null):(this.validation.start=null,this.form.start=null)},tlFinish(){this.dateTime.finishDate||this.dateTime.finishTime?this.dateTime.finishDate&&this.dateTime.finishTime?(this.validation.finish=!0,this.form.finish=new Date(this.dateTime.finishDate+" "+this.dateTime.finishTime)):(this.validation.finish=!1,this.form.finish=null):(this.validation.finish=null,this.form.finish=null)},onSubmit(){event.preventDefault(),console.log(this.form)},onReset(){event&&event.preventDefault(),this.dateTime={requestDate:null,requestTime:null,startDate:null,startTime:null,finishDate:null,finishTime:null},this.form={emp:[null],request:null,start:null,finish:null,fin:[{costType:null,amount:null,currency:null,description:"",bearer:null,signature:null}]},this.validation={emp:null,request:null,start:null,finish:null,fin:!1},this.show={preReg:!0,assignees:!0,timeline:!0,expenses:!0},this.finValidationCount=6}}},d=n(1),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("NavbarHome"),e._ssrNode(" "),n("b-container",[n("H3withButton",{staticClass:"mb-2",attrs:{h3text:"Expand SID","button-text":"Return to Logs","link-to":"/log"}}),e._v(" "),n("b-row",{attrs:{"align-h":"between","align-v":"center"}},[n("b-col",[n("b-collapse",{directives:[{name:"show",rawName:"v-show",value:e.regTableHasData,expression:"regTableHasData"}],attrs:{id:"preRegInfo"},model:{value:e.show.preReg,callback:function(t){e.$set(e.show,"preReg",t)},expression:"show.preReg"}},[n("b-alert",{staticClass:"p-2",attrs:{show:""}},[n("b-card",[n("b-table",{attrs:{items:e.preRegTable.serv,fields:e.preRegTableFields.serv,small:"",hover:""}})],1),e._v(" "),n("b-card",{staticClass:"mt-1"},[n("b-table",{attrs:{items:e.preRegTable.typeScope,fields:e.preRegTableFields.typeScope,small:"",hover:""}})],1),e._v(" "),e.displayReg?n("b-card",{staticClass:"mt-1"},[n("b-table",{attrs:{items:e.preRegTable.reg,fields:e.preRegTableFields.reg,small:"",hover:""}})],1):e._e()],1)],1)],1)],1),e._v(" "),n("b-form",{attrs:{novalidate:""},on:{submit:e.onSubmit,reset:e.onReset}},[n("b-row",[n("b-col",{attrs:{cols:"3"}},[n("b-button",{attrs:{block:"",variant:"info",size:"sm"},on:{click:e.preRegToggle}},[e._v("\n            "+e._s(e.togglePreRegBtn)+" SID Details\n          ")])],1),e._v(" "),n("b-col",{attrs:{cols:"3"}},[n("b-button",{attrs:{pressed:e.show.assignees,block:"",size:"sm",variant:"info"},on:{click:e.empToggle}},[e._v("\n            "+e._s(e.toggleAssigneesBtn)+" Assignees\n          ")])],1),e._v(" "),n("b-col",{attrs:{cols:"3"}},[n("b-button",{attrs:{variant:e.btnVariant.timeline,block:"",size:"sm"},on:{click:e.tlToggle}},[e._v("\n            "+e._s(e.toggleTlBtn)+"\n          ")])],1),e._v(" "),n("b-col",{attrs:{cols:"3"}},[n("b-button",{attrs:{variant:e.btnVariant.expenses,block:"",size:"sm"},on:{click:e.finToggle}},[e._v("\n            "+e._s(e.toggleFinBtn)+"\n          ")])],1)],1),e._v(" "),n("b-collapse",{attrs:{id:"assigneesMenu"},model:{value:e.show.assignees,callback:function(t){e.$set(e.show,"assignees",t)},expression:"show.assignees"}},[n("b-card",{staticClass:"mt-3",attrs:{"bg-variant":"light"},on:{mouseleave:e.empValidator}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Assignees","label-size":"lg","label-class":"font-weight-bold pt-0"}},[e._l(e.form.emp,(function(t,i){return[n("b-form-group",{key:t,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Employee:","label-align-sm":"right"}},[n("b-form-select",{attrs:{options:e.dropdown.emp,state:!(null===e.form.emp[i])},model:{value:e.form.emp[i],callback:function(t){e.$set(e.form.emp,i,t)},expression:"form.emp[i]"}})],1)]})),e._v(" "),n("hr")],2),e._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:e.empSelectOne}},[e._v("\n            Please select at least one Employee\n          ")]),e._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:e.empSelectAll}},[e._v("\n            Please select an Employee or remove obsolete Boxes\n          ")]),e._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:e.empHasDuplicates}},[e._v("\n            You have entered the same Employee twice\n          ")]),e._v(" "),n("b-row",{attrs:{"align-h":"start"}},[n("b-col",{attrs:{cols:"2"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"info"},on:{click:e.addEmployeeDropdown}},[e._v("Add")])],1),e._v(" "),n("b-col",{attrs:{cols:"2"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"secondary"},on:{click:e.remEmployeeDropdown}},[e._v("\n                Remove\n              ")])],1),e._v(" "),n("b-col",{attrs:{cols:"2","offset-md":"6"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"secondary"},on:{click:function(t){e.show.assignees=!1}}},[e._v("\n                Hide Assignees\n              ")])],1)],1)],1)],1),e._v(" "),n("b-collapse",{attrs:{id:"timelineMenu"},model:{value:e.show.timeline,callback:function(t){e.$set(e.show,"timeline",t)},expression:"show.timeline"}},[n("b-card",{staticClass:"mt-3",attrs:{"bg-variant":"light"}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Timeline","label-size":"lg","label-class":"font-weight-bold pt-0"}},[n("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Requested:","label-align-sm":"right"}},[n("b-form-input",{attrs:{state:e.validation.request,type:"date"},on:{change:e.tlRequest},model:{value:e.dateTime.requestDate,callback:function(t){e.$set(e.dateTime,"requestDate",t)},expression:"dateTime.requestDate"}}),e._v(" "),n("b-form-input",{attrs:{state:e.validation.request,type:"time"},on:{change:e.tlRequest},model:{value:e.dateTime.requestTime,callback:function(t){e.$set(e.dateTime,"requestTime",t)},expression:"dateTime.requestTime"}})],1),e._v(" "),n("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Started:","label-align-sm":"right"}},[n("b-form-input",{attrs:{state:e.validation.start,type:"date"},on:{change:e.tlStart},model:{value:e.dateTime.startDate,callback:function(t){e.$set(e.dateTime,"startDate",t)},expression:"dateTime.startDate"}}),e._v(" "),n("b-form-input",{attrs:{state:e.validation.start,type:"time"},on:{change:e.tlStart},model:{value:e.dateTime.startTime,callback:function(t){e.$set(e.dateTime,"startTime",t)},expression:"dateTime.startTime"}})],1),e._v(" "),n("b-form-group",{staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Finished:","label-align-sm":"right"}},[n("b-form-input",{attrs:{state:e.validation.finish,type:"date"},on:{change:e.tlFinish},model:{value:e.dateTime.finishDate,callback:function(t){e.$set(e.dateTime,"finishDate",t)},expression:"dateTime.finishDate"}}),e._v(" "),n("b-form-input",{attrs:{state:e.validation.finish,type:"time"},on:{change:e.tlFinish},model:{value:e.dateTime.finishTime,callback:function(t){e.$set(e.dateTime,"finishTime",t)},expression:"dateTime.finishTime"}})],1),e._v(" "),n("hr")],1),e._v(" "),n("b-form-invalid-feedback",{attrs:{state:e.tlValidationMsgShow}},[e._v("\n            Please input both Date and Time\n          ")]),e._v(" "),n("b-row",{attrs:{"align-h":"end"}},[n("b-col",{attrs:{cols:"2","offset-md":"6"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"danger"},on:{click:e.closeTimeline}},[e._v("\n                Discard\n              ")])],1)],1)],1)],1),e._v(" "),n("b-collapse",{attrs:{id:"expensesMenu"},model:{value:e.show.expenses,callback:function(t){e.$set(e.show,"expenses",t)},expression:"show.expenses"}},[n("b-card",{staticClass:"mt-3",attrs:{"bg-variant":"light"},on:{mouseleave:e.finValidator}},[n("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Expenses","label-size":"lg","label-class":"font-weight-bold pt-0"}},[e._l(e.form.fin,(function(t,i){return[n("b-form-group",{key:"costType"+i,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Cost Type:","label-align-sm":"right"}},[n("b-form-select",{attrs:{options:e.dropdown.costType,state:!(null===e.form.fin[i].costType)},model:{value:e.form.fin[i].costType,callback:function(t){e.$set(e.form.fin[i],"costType",t)},expression:"form.fin[i].costType"}})],1),e._v(" "),n("b-form-group",{key:"description"+i,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Description:","label-align-sm":"right"}},[n("b-form-input",{attrs:{state:!(""===e.form.fin[i].description)},model:{value:e.form.fin[i].description,callback:function(t){e.$set(e.form.fin[i],"description",t)},expression:"form.fin[i].description"}})],1),e._v(" "),n("b-form-group",{key:"amount"+i,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Amount:","label-align-sm":"right"}},[n("b-form-row",[n("b-col",{attrs:{cols:"7"}},[n("b-form-input",{attrs:{state:!(null===e.form.fin[i].amount),type:"number",step:"0.01"},model:{value:e.form.fin[i].amount,callback:function(t){e.$set(e.form.fin[i],"amount",t)},expression:"form.fin[i].amount"}})],1),e._v(" "),n("b-col",{attrs:{cols:"5"}},[n("b-form-select",{staticClass:"mr-3 pr-5 pl-3",attrs:{options:e.dropdown.currency,state:!(null===e.form.fin[i].currency)},model:{value:e.form.fin[i].currency,callback:function(t){e.$set(e.form.fin[i],"currency",t)},expression:"form.fin[i].currency"}})],1)],1)],1),e._v(" "),n("b-form-group",{key:"bearer"+i,staticClass:"mb-2 mt-4",attrs:{"label-cols-sm":"3",label:"S&I Budget:","label-align-sm":"right"}},[n("b-form-select",{attrs:{options:e.dropdown.bearer,state:!(null===e.form.fin[i].bearer)},model:{value:e.form.fin[i].bearer,callback:function(t){e.$set(e.form.fin[i],"bearer",t)},expression:"form.fin[i].bearer"}})],1),e._v(" "),n("b-form-group",{key:"signature"+i,staticClass:"mb-2",attrs:{"label-cols-sm":"3",label:"Signed by:","label-align-sm":"right"}},[n("b-form-select",{attrs:{options:e.dropdown.signature,state:!(null===e.form.fin[i].signature)},model:{value:e.form.fin[i].signature,callback:function(t){e.$set(e.form.fin[i],"signature",t)},expression:"form.fin[i].signature"}})],1),e._v(" "),n("hr",{key:"horizontal-line"+i})]}))],2),e._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:e.validation.fin}},[e._v("\n            Please Complete the Expense report or discard all expenses\n          ")]),e._v(" "),n("b-form-invalid-feedback",{staticClass:"mb-2",attrs:{state:e.validation.fin}},[e._v("\n            Please make "+e._s(e.finValidationCount)+" more boxes green\n          ")]),e._v(" "),n("b-row",{attrs:{"align-h":"start"}},[n("b-col",{attrs:{cols:"2"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"info"},on:{click:e.addExpense}},[e._v("Add")])],1),e._v(" "),n("b-col",{attrs:{cols:"2"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"secondary"},on:{click:e.remExpense}},[e._v("Remove")])],1),e._v(" "),n("b-col",{attrs:{cols:"2","offset-md":"6"}},[n("b-button",{attrs:{block:"",size:"sm",variant:"danger"},on:{click:e.closeFin}},[e._v("\n                Discard\n              ")])],1)],1)],1)],1),e._v(" "),n("b-collapse",{attrs:{id:"FormButtons"},model:{value:e.validation.emp,callback:function(t){e.$set(e.validation,"emp",t)},expression:"validation.emp"}},[n("b-row",{staticClass:"my-3"},[n("b-col",{staticClass:"text-right"},[n("b-button",{attrs:{disabled:e.incompleteValidation,block:"",type:"submit",variant:"success"}},[e._v("Submit")])],1),e._v(" "),n("b-col",{staticClass:"text-left"},[n("b-button",{attrs:{block:"",type:"reset",variant:"secondary"}},[e._v("Reset")])],1)],1)],1)],1)],1)],2)}),[],!1,null,null,"6bb66f46");t.default=component.exports}};