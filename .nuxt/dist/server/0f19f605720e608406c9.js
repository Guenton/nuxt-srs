exports.ids=[6],exports.modules={29:function(t,e,r){"use strict";var o={},n=r(1),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/home"}},[t._v("SIBOX")]),t._v(" "),r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/log"}},[t._v("Logs")]),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Statistics",right:""}},[r("b-dropdown-item",{attrs:{to:"/stat/"}},[t._v("Summary")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/stat/org"}},[t._v("Organization Chart")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Overview",right:""}},[r("b-dropdown-item",{attrs:{to:"/emp/"}},[t._v("Employees")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/pos/"}},[t._v("Positions")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/sub/"}},[t._v("Subsidiaries")]),t._v(" "),r("b-dropdown-item",{attrs:{to:"/service/"}},[t._v("Services")])],1)],1)],1)],1)}),[],!1,null,null,"3686c68e");e.a=component.exports},35:function(t,e,r){var content=r(39);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(3).default;t.exports.__inject__=function(t){o("e46b6ba2",content,!0,t)}},38:function(t,e,r){"use strict";r.r(e);var o=r(35),n=r.n(o);for(var d in o)"default"!==d&&function(t){r.d(e,t,(function(){return o[t]}))}(d);e.default=n.a},39:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},40:function(t,e,r){var content=r(49);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(3).default;t.exports.__inject__=function(t){o("a44df956",content,!0,t)}},41:function(t,e,r){var content=r(51);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(3).default;t.exports.__inject__=function(t){o("6048c654",content,!0,t)}},47:function(t,e,r){"use strict";var o=r(1);var component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"VueToNuxtLogo"},[this._ssrNode('<div class="Triangle Triangle--two"></div> <div class="Triangle Triangle--one"></div> <div class="Triangle Triangle--three"></div> <div class="Triangle Triangle--four"></div>')])}),[],!1,(function(t){var e=r(38);e.__inject__&&e.__inject__(t)}),null,"29ea0cd5");e.a=component.exports},48:function(t,e,r){"use strict";r.r(e);var o=r(40),n=r.n(o);for(var d in o)"default"!==d&&function(t){r.d(e,t,(function(){return o[t]}))}(d);e.default=n.a},49:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".fade-enter-active,.fade-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.slide-fade-enter-active{-webkit-transition:all .3s ease;transition:all .3s ease}.slide-fade-leave-active{-webkit-transition:all .8s cubic-bezier(1,.5,.8,1);transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter,.slide-fade-leave-to{-webkit-transform:translateX(10px);transform:translateX(10px);opacity:0}",""])},50:function(t,e,r){"use strict";r.r(e);var o=r(41),n=r.n(o);for(var d in o)"default"!==d&&function(t){r.d(e,t,(function(){return o[t]}))}(d);e.default=n.a},51:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".center-container[data-v-706d7b50]{margin:0 auto;min-height:90vh;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}",""])},62:function(t,e,r){"use strict";r.r(e);var o=r(29),n=r(47),d={transition:{name:"fade",mode:"out-in"},components:{NavbarHome:o.a,Logo:n.a},data:()=>({showImage:!0})},l=r(1);var component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavbarHome"),this._ssrNode(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("div",{staticClass:"center-container"},[e("Logo")],1)])],2)}),[],!1,(function(t){var e=r(48);e.__inject__&&e.__inject__(t);var o=r(50);o.__inject__&&o.__inject__(t)}),"706d7b50","a9a4a74e");e.default=component.exports}};