(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"0edd":function(t,n,e){"use strict";(function(t){e("9679"),e("921b");o(e("66fd"));var n=o(e("51f8"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},2650:function(t,n,e){"use strict";var o=e("3ffd"),u=e.n(o);u.a},"3ffd":function(t,n,e){},"51f8":function(t,n,e){"use strict";e.r(n);var o=e("ce0a"),u=e("f435");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("2650");var r=e("2877"),c=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},ce0a:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},da46:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){a(t,n,e[n])})}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r={data:function(){return{}},methods:u({},(0,o.mapMutations)(["logout"]),{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),setTimeout(function(){t.navigateBack()},200))}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}})};n.default=r}).call(this,e("543d")["default"])},f435:function(t,n,e){"use strict";e.r(n);var o=e("da46"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a}},[["0edd","common/runtime","common/vendor"]]]);