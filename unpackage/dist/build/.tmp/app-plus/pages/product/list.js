(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"5b3d":function(t,e,n){"use strict";var a=n("a5d1"),i=n.n(a);i.a},8336:function(t,e,n){"use strict";n.r(e);var a=n("add0"),i=n("ed9a");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("5b3d");var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"896a":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,a,i,r,o){try{var s=t[r](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(a,i)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var r=t.apply(e,n);function s(t){o(r,a,i,s,u,"next",t)}function u(t){o(r,a,i,s,u,"throw",t)}s(void 0)})}}var u=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"bb5c"))},c={components:{uniLoadMore:u},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,priceOrder:0,cateList:[],goodsList:[],pages:0,params:{categories:"",sort:"comprehensive",page:0,pageSize:10}}},onLoad:function(t){this.params.categories=t.tid,this.loadCateList(t.sid),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},methods:{loadCateList:function(){var t=s(i.default.mark(function t(e){var n,a,r;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n={pid:e},t.next=3,this.Api.getOneItemTypes(n);case 3:a=t.sent,r=a.data,this.cateList=r;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),loadData:function(){var e=s(i.default.mark(function e(){var n,a,r,o,s,u,c,d,l=arguments;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=l.length>0&&void 0!==l[0]?l[0]:"add",a=l.length>1?l[1]:void 0,"add"!==n){e.next=8;break}if("nomore"!==this.loadingType){e.next=5;break}return e.abrupt("return");case 5:this.loadingType="loading",e.next=9;break;case 8:this.loadingType="more";case 9:return r=this.sortName(),o=this.params,o.sort=r,"refresh"===n&&(o.page=0),o.page++,e.next=16,this.Api.getItemList(o);case 16:s=e.sent,u=s.data,c=u.docs,d=u.pages,"refresh"===n&&(this.goodsList=[]),this.pages=d,this.goodsList=this.goodsList.concat(c),this.loadingType=this.params.page>=d?"nomore":"more","refresh"===n&&(1==a?t.hideLoading():t.stopPullDownRefresh());case 25:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),sortName:function(){return 0==this.filterIndex?"comprehensive":1==this.filterIndex?"sale":2==this.filterIndex&&1==this.priceOrder?"price_asc":2==this.filterIndex&&2==this.priceOrder?"price_des":void 0},tabClick:function(e){this.filterIndex===e&&2!==e||(this.filterIndex=e,this.priceOrder=2===e?1===this.priceOrder?2:1:0,t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var e=this,n="show"===t?10:300,a="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=a},n)},changeCate:function(e){console.log(a(e," at pages/product/list.vue:207")),this.params.categories=e._id,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"})},navToDetailPage:function(e){var n=e._id;t.navigateTo({url:"/pages/product/product?id=".concat(n)})},stopPrevent:function(){}}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},a5d1:function(t,e,n){},add0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},d25b:function(t,e,n){"use strict";(function(t){n("9679"),n("921b");a(n("66fd"));var e=a(n("8336"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ed9a:function(t,e,n){"use strict";n.r(e);var a=n("896a"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a}},[["d25b","common/runtime","common/vendor"]]]);