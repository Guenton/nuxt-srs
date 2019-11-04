(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{201:function(t,e,r){"use strict";var n={},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},202:function(t,e){t.exports="http://sibox/api"},203:function(t,e,r){"use strict";var n={props:{text:{type:String,default:"",required:!1},variant:{type:String,default:"info",required:!1},show:{type:Boolean,required:!0,default:!1}}},o=r(37),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"mt-4"},[e("b-col",[e("b-alert",{attrs:{show:this.show,variant:this.variant,dismissible:"",fade:""}},[this._v("\n      "+this._s(this.text)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},205:function(t,e,r){"use strict";var n={props:{h3text:{type:String,required:!0},buttonText:{type:String,required:!1,default:"Add"},linkTo:{type:String,required:!0},variant:{type:String,required:!1,default:"info"}},methods:{refresh:function(){this.$emit("refresh")}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mt-4"},[r("b-col",{staticClass:"text-left"},[r("h3",[t._v(t._s(t.h3text))])]),t._v(" "),r("b-col",{staticClass:"text-right mb-2"},[r("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.refresh()}}},[t._v("\n      Refresh\n    ")]),t._v(" "),r("b-button",{attrs:{variant:t.variant,to:t.linkTo}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},209:function(t,e,r){var content=r(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("b0dd6b86",content,!0,{sourceMap:!1})},345:function(t,e,r){"use strict";var n=r(209);r.n(n).a},346:function(t,e,r){(t.exports=r(42)(!1)).push([t.i,".vh10{max-height:10vh}.vh10,.vh20{position:relative}.vh20{max-height:20vh}.vh30{max-height:30vh}.vh30,.vh40{position:relative}.vh40{max-height:40vh}.vh50{max-height:50vh}.vh50,.vh60{position:relative}.vh60{max-height:60vh}.vh70{max-height:70vh}.vh70,.vh80{position:relative}.vh80{max-height:80vh}.vh90{max-height:90vh}.vh90,.vh100{position:relative}.vh100{max-height:100vh}",""])},350:function(t,e,r){"use strict";var n=r(352),o=r.n(n),h={props:{type:{type:String,required:!1,default:"line"},data:{type:Object,required:!0},options:{type:Object,required:!1,default:function(){return{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}}}},height:{type:String,required:!1,default:"vh60"}},data:function(){return{chartMemory:null}},mounted:function(){this.createChart(this.type,this.type,this.data,this.options)},methods:{createChart:function(t,e,data,r){var n=document.getElementById("ChartCanvas"),h=new o.a(n,{type:e,data:data,options:r});this.chartMemory=h}}},c=(r(345),r(37)),component=Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-card",{staticClass:"my-4",attrs:{"bg-variant":"light"}},[e("canvas",{class:this.height,attrs:{id:"ChartCanvas"}})])],1)}),[],!1,null,null,null);e.a=component.exports},353:function(t,e,r){var map={"./af":214,"./af.js":214,"./ar":215,"./ar-dz":216,"./ar-dz.js":216,"./ar-kw":217,"./ar-kw.js":217,"./ar-ly":218,"./ar-ly.js":218,"./ar-ma":219,"./ar-ma.js":219,"./ar-sa":220,"./ar-sa.js":220,"./ar-tn":221,"./ar-tn.js":221,"./ar.js":215,"./az":222,"./az.js":222,"./be":223,"./be.js":223,"./bg":224,"./bg.js":224,"./bm":225,"./bm.js":225,"./bn":226,"./bn.js":226,"./bo":227,"./bo.js":227,"./br":228,"./br.js":228,"./bs":229,"./bs.js":229,"./ca":230,"./ca.js":230,"./cs":231,"./cs.js":231,"./cv":232,"./cv.js":232,"./cy":233,"./cy.js":233,"./da":234,"./da.js":234,"./de":235,"./de-at":236,"./de-at.js":236,"./de-ch":237,"./de-ch.js":237,"./de.js":235,"./dv":238,"./dv.js":238,"./el":239,"./el.js":239,"./en-SG":240,"./en-SG.js":240,"./en-au":241,"./en-au.js":241,"./en-ca":242,"./en-ca.js":242,"./en-gb":243,"./en-gb.js":243,"./en-ie":244,"./en-ie.js":244,"./en-il":245,"./en-il.js":245,"./en-nz":246,"./en-nz.js":246,"./eo":247,"./eo.js":247,"./es":248,"./es-do":249,"./es-do.js":249,"./es-us":250,"./es-us.js":250,"./es.js":248,"./et":251,"./et.js":251,"./eu":252,"./eu.js":252,"./fa":253,"./fa.js":253,"./fi":254,"./fi.js":254,"./fo":255,"./fo.js":255,"./fr":256,"./fr-ca":257,"./fr-ca.js":257,"./fr-ch":258,"./fr-ch.js":258,"./fr.js":256,"./fy":259,"./fy.js":259,"./ga":260,"./ga.js":260,"./gd":261,"./gd.js":261,"./gl":262,"./gl.js":262,"./gom-latn":263,"./gom-latn.js":263,"./gu":264,"./gu.js":264,"./he":265,"./he.js":265,"./hi":266,"./hi.js":266,"./hr":267,"./hr.js":267,"./hu":268,"./hu.js":268,"./hy-am":269,"./hy-am.js":269,"./id":270,"./id.js":270,"./is":271,"./is.js":271,"./it":272,"./it-ch":273,"./it-ch.js":273,"./it.js":272,"./ja":274,"./ja.js":274,"./jv":275,"./jv.js":275,"./ka":276,"./ka.js":276,"./kk":277,"./kk.js":277,"./km":278,"./km.js":278,"./kn":279,"./kn.js":279,"./ko":280,"./ko.js":280,"./ku":281,"./ku.js":281,"./ky":282,"./ky.js":282,"./lb":283,"./lb.js":283,"./lo":284,"./lo.js":284,"./lt":285,"./lt.js":285,"./lv":286,"./lv.js":286,"./me":287,"./me.js":287,"./mi":288,"./mi.js":288,"./mk":289,"./mk.js":289,"./ml":290,"./ml.js":290,"./mn":291,"./mn.js":291,"./mr":292,"./mr.js":292,"./ms":293,"./ms-my":294,"./ms-my.js":294,"./ms.js":293,"./mt":295,"./mt.js":295,"./my":296,"./my.js":296,"./nb":297,"./nb.js":297,"./ne":298,"./ne.js":298,"./nl":299,"./nl-be":300,"./nl-be.js":300,"./nl.js":299,"./nn":301,"./nn.js":301,"./pa-in":302,"./pa-in.js":302,"./pl":303,"./pl.js":303,"./pt":304,"./pt-br":305,"./pt-br.js":305,"./pt.js":304,"./ro":306,"./ro.js":306,"./ru":307,"./ru.js":307,"./sd":308,"./sd.js":308,"./se":309,"./se.js":309,"./si":310,"./si.js":310,"./sk":311,"./sk.js":311,"./sl":312,"./sl.js":312,"./sq":313,"./sq.js":313,"./sr":314,"./sr-cyrl":315,"./sr-cyrl.js":315,"./sr.js":314,"./ss":316,"./ss.js":316,"./sv":317,"./sv.js":317,"./sw":318,"./sw.js":318,"./ta":319,"./ta.js":319,"./te":320,"./te.js":320,"./tet":321,"./tet.js":321,"./tg":322,"./tg.js":322,"./th":323,"./th.js":323,"./tl-ph":324,"./tl-ph.js":324,"./tlh":325,"./tlh.js":325,"./tr":326,"./tr.js":326,"./tzl":327,"./tzl.js":327,"./tzm":328,"./tzm-latn":329,"./tzm-latn.js":329,"./tzm.js":328,"./ug-cn":330,"./ug-cn.js":330,"./uk":331,"./uk.js":331,"./ur":332,"./ur.js":332,"./uz":333,"./uz-latn":334,"./uz-latn.js":334,"./uz.js":333,"./vi":335,"./vi.js":335,"./x-pseudo":336,"./x-pseudo.js":336,"./yo":337,"./yo.js":337,"./zh-cn":338,"./zh-cn.js":338,"./zh-hk":339,"./zh-hk.js":339,"./zh-tw":340,"./zh-tw.js":340};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=353},358:function(t,e){var r={bg:["rgba(79,195,247,.5)","rgba(255,241,118,.5)","rgba(129,199,132,.5)","rgba(255,138,101,.5)","rgba(149,117,205,.5)"],ln:["#03a9f4","#ffeb3b","#4caf50","#ff5722","#673ab7"]};t.exports=r},384:function(t,e,r){"use strict";r.r(e);r(55);var n,o,h,c,l,d=r(15),v=r(202),m=r.n(v),f=r(358),j=r.n(f),w=r(201),k=r(205),y=r(350),x=r(203),_={components:{NavbarHome:w.a,H3withRefresh:k.a,Chart:y.a,AlertBox:x.a},data:function(){return{error:"",isLoading:!0,rawData:[],graphSelect:"arch",graphSteps:7,graphTimeframe:"week",data:{labels:[],datasets:[]}}},computed:{hasError:function(){return""!==this.error},hasLabels:function(){return this.data.labels.length>1},isArch:function(){return"arch"===this.graphSelect},isType:function(){return"type"===this.graphSelect},isDept:function(){return"dept"===this.graphSelect},isLocat:function(){return"locat"===this.graphSelect},isDay:function(){return"day"===this.graphTimeframe},isWeek:function(){return"week"===this.graphTimeframe},isMonth:function(){return"month"===this.graphTimeframe},isYear:function(){return"year"===this.graphTimeframe}},mounted:function(){this.mainHandler()},methods:{resetPage:function(t){t&&t.preventDefault(),this.graphSelect="arch",this.graphSteps=7,this.graphTimeframe="week",this.mainHandler()},selectHandler:function(t){this.graphSelect=t,this.mainHandler()},stepsHandler:function(t){this.graphSteps=t,this.mainHandler()},timeframeHandler:function(t){this.graphTimeframe=t,this.mainHandler()},mainHandler:function(){this.isLoading=!0,this.error="",this.data={labels:[],datasets:[]};var t=this.graphTimeframe;"day"===t?this.dayHandler():"week"===t?this.weekHandler():"month"===t?this.monthHandler():this.yearHandler(),this.isLoading=!1},graphDataBuilder:function(){var t=this,e=[],r=[];for(var n in this.rawData[0]){var o={label:n,data:[],backgroundColor:[],borderColor:[],borderWidth:2};e.push(o),r.push(n)}for(var h=function(i){var n=r[i];t.rawData.forEach((function(t){e[i].data.push(t[n])})),e[i].backgroundColor.push(j.a.bg[i]),e[i].borderColor.push(j.a.ln[i])},i=0;i<e.length;i++)h(i);this.data.datasets=e},onLoad:function(){this.isLoading=!1},servLogCountGetter:(l=Object(d.a)(regeneratorRuntime.mark((function t(e,r){var n,o,h,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.graphTimeframe,o=this.graphSelect,h="".concat(m.a,"/count-log-type/").concat(n),c={id:r,type:o,date:e},t.prev=4,t.next=7,this.$axios.$get(h,{params:c});case 7:if(!(l=t.sent).err){t.next=13;break}return this.response.error=l.err,t.abrupt("return",{});case 13:return t.abrupt("return",l.data[0]);case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(4),this.response.error=t.t0,t.abrupt("return",{});case 20:case"end":return t.stop()}}),t,this,[[4,16]])}))),function(t,e){return l.apply(this,arguments)}),dayHandler:(c=Object(d.a)(regeneratorRuntime.mark((function t(){var e,r,n,i,o,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.graphSteps,r=[],n=[],i=e;case 4:if(!(i>=0)){t.next=16;break}return(o=new Date).setDate(o.getDate()-i),o.setHours(0,0,0),r.push(o.toDateString()),t.next=11,this.servLogCountGetter(o);case 11:(h=t.sent)&&n.push(h);case 13:i--,t.next=4;break;case 16:this.rawData=n,this.data.labels=r,this.graphDataBuilder();case 19:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),weekHandler:(h=Object(d.a)(regeneratorRuntime.mark((function t(){var e,r,n,i,o,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.graphSteps,r=[],n=[],i=7*e;case 4:if(!(i>=0)){t.next=16;break}return(o=new Date).setDate(o.getDate()-i),o.setHours(0,0,0),r.push(o.toDateString()),t.next=11,this.servLogCountGetter(o);case 11:(h=t.sent)&&n.push(h);case 13:i-=7,t.next=4;break;case 16:this.rawData=n,this.data.labels=r,this.graphDataBuilder();case 19:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),monthHandler:(o=Object(d.a)(regeneratorRuntime.mark((function t(){var e,r,n,i,o,h,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.graphSteps,r=[],n=[],i=e;case 4:if(!(i>=0)){t.next=18;break}return(o=new Date).setMonth(o.getMonth()-i),o.setDate(1),o.setHours(0,0,0),h=this.monthToText(o.getMonth()),r.push(h),t.next=13,this.servLogCountGetter(o);case 13:(c=t.sent)&&n.push(c);case 15:i--,t.next=4;break;case 18:this.rawData=n,this.data.labels=r,this.graphDataBuilder();case 21:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),yearHandler:(n=Object(d.a)(regeneratorRuntime.mark((function t(){var e,r,n,i,o,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.graphSteps,r=[],n=[],i=e;case 4:if(!(i>=0)){t.next=18;break}return(o=new Date).setFullYear(o.getFullYear()-i),o.setMonth(0),o.setDate(1),o.setHours(0,0,0),r.push(o.getFullYear()),t.next=13,this.servLogCountGetter(o);case 13:(h=t.sent)&&n.push(h);case 15:i--,t.next=4;break;case 18:this.rawData=n,this.data.labels=r,this.graphDataBuilder();case 21:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),monthToText:function(t){return 0===t?"January":1===t?"February":2===t?"March":3===t?"April":4===t?"May":5===t?"June":6===t?"July":7===t?"August":8===t?"September":9===t?"October":10===t?"November":11===t?"December":"monthToTextError"}}},S=r(37),component=Object(S.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarHome"),t._v(" "),r("b-container",[r("H3withRefresh",{attrs:{h3text:"Statistic Summary","button-text":"Add Logs","link-to":"/log/add",variant:"success"},on:{refresh:t.resetPage}}),t._v(" "),r("b-collapse",{attrs:{id:"summaryChart",visible:!t.isLoading}},[t.hasLabels?r("Chart",{attrs:{data:t.data}}):t._e(),t._v(" "),r("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[r("b-col",{staticClass:"text-center"},[r("b-button-group",{directives:[{name:"show",rawName:"v-show",value:t.hasLabels,expression:"hasLabels"}],staticClass:"mx-1"},[r("b-button",{attrs:{variant:"info",pressed:t.isArch},on:{click:function(e){return t.selectHandler("arch")}}},[t._v("\n              Archtype\n            ")]),t._v(" "),r("b-button",{attrs:{variant:"info",pressed:t.isType},on:{click:function(e){return t.selectHandler("type")}}},[t._v("\n              Type\n            ")]),t._v(" "),r("b-button",{attrs:{variant:"info",pressed:t.isDept},on:{click:function(e){return t.selectHandler("dept")}}},[t._v("\n              Department\n            ")]),t._v(" "),r("b-button",{attrs:{variant:"info",pressed:t.isLocat},on:{click:function(e){return t.selectHandler("locat")}}},[t._v("\n              Location\n            ")])],1)],1)],1),t._v(" "),r("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"my-3",attrs:{"align-h":"center"}},[r("b-col",{attrs:{cols:"4"}},[r("b-button-group",{directives:[{name:"show",rawName:"v-show",value:t.hasLabels,expression:"hasLabels"}]},[r("b-button",{attrs:{pressed:t.isDay},on:{click:function(e){return t.timeframeHandler("day")}}},[t._v("Day")]),t._v(" "),r("b-button",{attrs:{pressed:t.isWeek},on:{click:function(e){return t.timeframeHandler("week")}}},[t._v("Week")]),t._v(" "),r("b-button",{attrs:{pressed:t.isMonth},on:{click:function(e){return t.timeframeHandler("month")}}},[t._v("Month")]),t._v(" "),r("b-button",{attrs:{pressed:t.isYear},on:{click:function(e){return t.timeframeHandler("year")}}},[t._v("Year")])],1)],1),t._v(" "),r("b-col",{attrs:{cols:"4"}},[r("b-button-group",{directives:[{name:"show",rawName:"v-show",value:t.hasLabels,expression:"hasLabels"}]},[r("b-button",{attrs:{pressed:1===t.graphSteps},on:{click:function(e){return t.stepsHandler(1)}}},[t._v("1")]),t._v(" "),r("b-button",{attrs:{pressed:2===t.graphSteps},on:{click:function(e){return t.stepsHandler(2)}}},[t._v("2")]),t._v(" "),r("b-button",{attrs:{pressed:3===t.graphSteps},on:{click:function(e){return t.stepsHandler(3)}}},[t._v("3")]),t._v(" "),r("b-button",{attrs:{pressed:4===t.graphSteps},on:{click:function(e){return t.stepsHandler(4)}}},[t._v("4")]),t._v(" "),r("b-button",{attrs:{pressed:5===t.graphSteps},on:{click:function(e){return t.stepsHandler(5)}}},[t._v("5")]),t._v(" "),r("b-button",{attrs:{pressed:6===t.graphSteps},on:{click:function(e){return t.stepsHandler(6)}}},[t._v("6")]),t._v(" "),r("b-button",{attrs:{pressed:7===t.graphSteps},on:{click:function(e){return t.stepsHandler(7)}}},[t._v("7")]),t._v(" "),r("b-button",{attrs:{pressed:8===t.graphSteps},on:{click:function(e){return t.stepsHandler(8)}}},[t._v("8")])],1)],1)],1)],1),t._v(" "),r("b-row",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"my-5"},[r("b-col",{staticClass:"text-center"},[r("b-spinner",{attrs:{variant:"success",label:"Spinning"}})],1)],1),t._v(" "),r("AlertBox",{attrs:{show:t.hasError,variant:"danger",text:t.error}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);