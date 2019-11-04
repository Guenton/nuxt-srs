exports.ids=[19],exports.modules={29:function(t,e,r){"use strict";var o={},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,"3686c68e");e.a=component.exports},36:function(t,e,r){var content=r(43);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(3).default;t.exports.__inject__=function(t){o("b0dd6b86",content,!0,t)}},42:function(t,e,r){"use strict";r.r(e);var o=r(36),n=r.n(o);for(var h in o)"default"!==h&&function(t){r.d(e,t,(function(){return o[t]}))}(h);e.default=n.a},43:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".vh10{max-height:10vh}.vh10,.vh20{position:relative}.vh20{max-height:20vh}.vh30{max-height:30vh}.vh30,.vh40{position:relative}.vh40{max-height:40vh}.vh50{max-height:50vh}.vh50,.vh60{position:relative}.vh60{max-height:60vh}.vh70{max-height:70vh}.vh70,.vh80{position:relative}.vh80{max-height:80vh}.vh90{max-height:90vh}.vh90,.vh100{position:relative}.vh100{max-height:100vh}",""])},46:function(t,e,r){"use strict";var o=r(27),n=r.n(o),h={props:{type:{type:String,required:!1,default:"line"},data:{type:Object,required:!0},options:{type:Object,required:!1,default:()=>({responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}})},height:{type:String,required:!1,default:"vh60"}},data:()=>({chartMemory:null}),mounted(){this.createChart(this.type,this.type,this.data,this.options)},methods:{createChart(t,e,data,r){const o=document.getElementById("ChartCanvas"),h=new n.a(o,{type:e,data:data,options:r});this.chartMemory=h}}},v=r(1);var component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-card",{staticClass:"my-4",attrs:{"bg-variant":"light"}},[e("canvas",{class:this.height,attrs:{id:"ChartCanvas"}})])],1)}),[],!1,(function(t){var e=r(42);e.__inject__&&e.__inject__(t)}),null,"5d8b68b8");e.a=component.exports},80:function(t,e,r){"use strict";r.r(e);var o=r(29),n=r(46),h={components:{NavbarHome:o.a,Chart:n.a},data:()=>({data:{labels:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],datasets:[{label:"Number of Moons",data:[0,0,1,2,67,62,27,14],backgroundColor:["rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)"],borderColor:["#36495d","#36495d","#36495d","#36495d","#36495d","#36495d","#36495d","#36495d"],borderWidth:3},{label:"Planet Mass (x1,000 km)",data:[4.8,12.1,12.7,6.7,139.8,116.4,50.7,49.2],backgroundColor:["rgba(71, 183,132,.5)"],borderColor:["#47b784"],borderWidth:3}]}})},v=r(1);var component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavbarHome"),this._ssrNode(" "),e("b-container",[e("Chart",{attrs:{data:this.data}})],1)],2)}),[],!1,(function(t){}),null,"9414ee08");e.default=component.exports}};