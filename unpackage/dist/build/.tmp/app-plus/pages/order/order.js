(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"0349":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"5c32":function(t,e,n){"use strict";var a=n("c730"),r=n.n(a);r.a},6612:function(t,e,n){"use strict";n.r(e);var a=n("d4fe"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},ace8:function(t,e,n){"use strict";n.r(e);var a=n("0349"),r=n("6612");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("5c32");var i=n("2877"),u=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},ad13:function(t,e,n){"use strict";(function(t){n("9679"),n("921b");a(n("66fd"));var e=a(n("ace8"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c730:function(t,e,n){},d4fe:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("d7fd"));function r(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"bb5c"))},i=function(){return n.e("components/empty").then(n.bind(null,"5980"))},u={components:{uniLoadMore:o,empty:i},data:function(){return{tabCurrentIndex:0,navList:[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"待付款",loadingType:"more",orderList:[]},{state:2,text:"待收货",loadingType:"more",orderList:[]},{state:3,text:"待评价",loadingType:"more",orderList:[]},{state:4,text:"售后",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,this.loadData()},methods:{loadData:function(t){var e=this,n=this.tabCurrentIndex,r=this.navList[n],o=r.state;"tabChange"===t&&!0===r.loaded||"loading"!==r.loadingType&&(r.loadingType="loading",setTimeout(function(){var t=a.default.orderList.filter(function(t){return t=Object.assign(t,e.orderStateExp(t.state)),0===o?t:t.state===o});t.forEach(function(t){r.orderList.push(t)}),e.$set(r,"loaded",!0),r.loadingType="more"},600))},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t},deleteOrder:function(e){var n=this;t.showLoading({title:"请稍后"}),setTimeout(function(){n.navList[n.tabCurrentIndex].orderList.splice(e,1),t.hideLoading()},600)},cancelOrder:function(e){var n=this;t.showLoading({title:"请稍后"}),setTimeout(function(){var a=n.orderStateExp(9),r=a.stateTip,o=a.stateTipColor;e=Object.assign(e,{state:9,stateTip:r,stateTipColor:o});var i=n.navList[1].orderList,u=i.findIndex(function(t){return t.id===e.id});-1!==u&&i.splice(u,1),t.hideLoading()},600)},orderStateExp:function(t){var e="",n="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",n="#909399";break}return{stateTip:e,stateTipColor:n}}}};e.default=u}).call(this,n("6e42")["default"])}},[["ad13","common/runtime","common/vendor"]]]);