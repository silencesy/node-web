(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-list"],{"2b52":function(t,e,a){"use strict";var i=a("a961"),n=a.n(i);n.a},6270:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"navbar",style:{position:t.headerPosition,top:t.headerTop}},[a("v-uni-view",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("综合排序")]),a("v-uni-view",{staticClass:"nav-item",class:{current:1===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(1)}}},[t._v("销量优先")]),a("v-uni-view",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(2)}}},[a("v-uni-text",[t._v("价格")]),a("v-uni-view",{staticClass:"p-box"},[a("v-uni-text",{staticClass:"yticon icon-shang",class:{active:1===t.priceOrder&&2===t.filterIndex}}),a("v-uni-text",{staticClass:"yticon icon-shang xia",class:{active:2===t.priceOrder&&2===t.filterIndex}})],1)],1),a("v-uni-text",{staticClass:"cate-item yticon icon-fenlei1",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask("show")}}})],1),a("v-uni-view",{staticClass:"goods-list"},t._l(t.goodsList,function(e,i){return a("v-uni-view",{key:i,staticClass:"goods-item",on:{click:function(a){a=t.$handleEvent(a),t.navToDetailPage(e)}}},[a("v-uni-view",{staticClass:"image-wrapper"},[a("v-uni-image",{attrs:{src:e.carousel[0].pic,mode:"aspectFill"}})],1),a("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"price-box"},[a("v-uni-text",{staticClass:"price"},[t._v(t._s(e.min_price))]),a("v-uni-text",[t._v("已售 "+t._s(e.sales_volume))])],1)],1)}),1),a("uni-load-more",{attrs:{status:t.loadingType}}),a("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask(e)}}},[a("v-uni-view",{staticClass:"cate-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[a("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":""}},t._l(t.cateList,function(e){return a("v-uni-view",{key:e.id},[a("v-uni-view",{staticClass:"cate-item b-b two",on:{click:function(a){a=t.$handleEvent(a),t.changeCate(e)}}},[t._v(t._s(e.name))])],1)}),1)],1)],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"65c3":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"74ad":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("3b8d")),o=i(a("bb5c")),s={components:{uniLoadMore:o.default},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,priceOrder:0,cateList:[],goodsList:[],pages:0,params:{categories:"",sort:"comprehensive",page:0,pageSize:10}}},onLoad:function(t){this.headerTop=document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px",this.params.categories=t.tid,this.loadCateList(t.sid),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},methods:{loadCateList:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(e){var a,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a={pid:e},t.next=3,this.Api.getOneItemTypes(a);case 3:i=t.sent,n=i.data,this.cateList=n;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),loadData:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(){var e,a,i,n,o,s,r,d,l=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=l.length>0&&void 0!==l[0]?l[0]:"add",a=l.length>1?l[1]:void 0,"add"!==e){t.next=8;break}if("nomore"!==this.loadingType){t.next=5;break}return t.abrupt("return");case 5:this.loadingType="loading",t.next=9;break;case 8:this.loadingType="more";case 9:return i=this.sortName(),n=this.params,n.sort=i,"refresh"===e&&(n.page=0),n.page++,t.next=16,this.Api.getItemList(n);case 16:o=t.sent,s=o.data,r=s.docs,d=s.pages,"refresh"===e&&(this.goodsList=[]),this.pages=d,this.goodsList=this.goodsList.concat(r),this.loadingType=this.params.page>=d?"nomore":"more","refresh"===e&&(1==a?uni.hideLoading():uni.stopPullDownRefresh());case 25:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),sortName:function(){return 0==this.filterIndex?"comprehensive":1==this.filterIndex?"sale":2==this.filterIndex&&1==this.priceOrder?"price_asc":2==this.filterIndex&&2==this.priceOrder?"price_des":void 0},tabClick:function(t){this.filterIndex===t&&2!==t||(this.filterIndex=t,this.priceOrder=2===t?1===this.priceOrder?2:1:0,uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var e=this,a="show"===t?10:300,i="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=i},a)},changeCate:function(t){console.log(t),this.params.categories=t._id,this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"})},navToDetailPage:function(t){var e=t._id;uni.navigateTo({url:"/pages/product/product?id=".concat(e)})},stopPrevent:function(){}}};e.default=s},"7eeb":function(t,e,a){var i=a("b876");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("41ddfbd2",i,!0,{sourceMap:!1,shadowMode:!1})},8336:function(t,e,a){"use strict";a.r(e);var i=a("6270"),n=a("ed9a");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("fc70");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"2adfd496",null);e["default"]=r.exports},a961:function(t,e,a){var i=a("cc8a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1e3d5acb",i,!0,{sourceMap:!1,shadowMode:!1})},a9a1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=i},b876:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.content[data-v-2adfd496],uni-page-body[data-v-2adfd496]{background:#f8f8f8}.content[data-v-2adfd496]{padding-top:%?96?%}.navbar[data-v-2adfd496]{position:fixed;left:0;top:var(--window-top);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:%?80?%;background:#fff;-webkit-box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-2adfd496]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;font-size:%?30?%;color:#303133;position:relative}.navbar .nav-item.current[data-v-2adfd496]{color:#fa436a}.navbar .nav-item.current[data-v-2adfd496]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #fa436a}.navbar .p-box[data-v-2adfd496]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.navbar .p-box .yticon[data-v-2adfd496]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?26?%;color:#888}.navbar .p-box .yticon.active[data-v-2adfd496]{color:#fa436a}.navbar .p-box .xia[data-v-2adfd496]{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.navbar .cate-item[data-v-2adfd496]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.navbar .cate-item[data-v-2adfd496]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}\n/* 分类 */.cate-mask[data-v-2adfd496]{position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:rgba(0,0,0,0);z-index:95;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.cate-mask .cate-content[data-v-2adfd496]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.cate-mask.none[data-v-2adfd496]{display:none}.cate-mask.show[data-v-2adfd496]{background:rgba(0,0,0,.4)}.cate-mask.show .cate-content[data-v-2adfd496]{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-2adfd496]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.cate-list .cate-item[data-v-2adfd496]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?90?%;padding-left:%?30?%;font-size:%?28?%;color:#555;position:relative}.cate-list .two[data-v-2adfd496]{height:%?64?%;color:#303133;font-size:%?30?%;background:#f8f8f8}.cate-list .active[data-v-2adfd496]{color:#fa436a}\n/* 商品列表 */.goods-list[data-v-2adfd496]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?30?%;background:#fff}.goods-list .goods-item[data-v-2adfd496]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:48%;padding-bottom:%?40?%}.goods-list .goods-item[data-v-2adfd496]:nth-child(odd){margin-right:4%}.goods-list .image-wrapper[data-v-2adfd496]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.goods-list .image-wrapper uni-image[data-v-2adfd496]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-2adfd496]{font-size:%?32?%;color:#303133;line-height:%?80?%}.goods-list .price-box[data-v-2adfd496]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-2adfd496]{font-size:%?32?%;color:#fa436a;line-height:1}.goods-list .price[data-v-2adfd496]:before{content:"\\FFE5";font-size:%?26?%}body.?%PAGE?%[data-v-2adfd496]{background:#f8f8f8}',""])},bb5c:function(t,e,a){"use strict";a.r(e);var i=a("65c3"),n=a("c834");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("2b52");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"e799e008",null);e["default"]=r.exports},c834:function(t,e,a){"use strict";a.r(e);var i=a("a9a1"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},cc8a:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".uni-load-more[data-v-e799e008]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-e799e008]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-e799e008]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-e799e008]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-e799e008]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-e799e008 1.56s ease infinite;animation:load-data-v-e799e008 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-e799e008]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-e799e008]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-e799e008]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-e799e008]:nth-child(4){top:11px;left:0}.load1[data-v-e799e008],.load2[data-v-e799e008],.load3[data-v-e799e008]{height:24px;width:24px}.load2[data-v-e799e008]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-e799e008]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-e799e008]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-e799e008]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-e799e008]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-e799e008]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-e799e008]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-e799e008]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-e799e008]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-e799e008]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-e799e008]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-e799e008]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-e799e008]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-e799e008]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-e799e008{0%{opacity:1}to{opacity:.2}}",""])},ed9a:function(t,e,a){"use strict";a.r(e);var i=a("74ad"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},fc70:function(t,e,a){"use strict";var i=a("7eeb"),n=a.n(i);n.a}}]);