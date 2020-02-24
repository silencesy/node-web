<template>
	<view class="container" v-if="itemDetails">

		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in itemDetails.carousel" :key="index">
					<view class="image-wrapper">
						<image
							:src="item.pic" 
							class="loaded" 
							mode="aspectFill"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="introduce-section">
			<text class="title">{{itemDetails.name}}</text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">{{itemDetails.priceRange}}</text>
				<text class="m-price" v-if="itemDetails.original_price!=0">¥{{itemDetails.originalPriceRange}}</text>
				<!-- <text class="coupon-tip">7折</text> -->
			</view>
			<view class="bot-row">
				<text>销量: {{itemDetails.sales_volume}}</text>
				<text>库存: {{itemDetails.stock}}</text>
				<text>浏览量: {{itemDetails.pageviews}}</text>
			</view>
		</view>
		
		<!--  分享 -->
		<!-- <view class="share-section" @click="share">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				 返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>
			
		</view> -->
		
		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec('all')">
				<text class="tit">购买类型</text>
				<!-- <view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
						{{sItem.name}}
					</text>
				</view> -->
				<text class="yticon icon-you"></text>
			</view>
			<!-- <view class="c-row b-b">
				<text class="tit">优惠券</text>
				<text class="con t-r red">领取优惠券</text>
				<text class="yticon icon-you"></text>
			</view> -->
			<!-- <view class="c-row b-b">
				<text class="tit">促销活动</text>
				<view class="con-list">
					<text>新人首单送20元无门槛代金券</text>
					<text>订单满50减10</text>
					<text>订单满100减30</text>
					<text>单笔购买满两件免邮费</text>
				</view>
			</view> -->
			<view class="c-row b-b">
				<text class="tit">服务</text>
				<view class="bz-list con">
					<text v-for="(item,index) in itemDetails.service" :key="index">
						{{item}}
					</text>
				</view>
			</view>
		</view>
		
		<!-- 评价 -->
		<!-- <view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="yticon icon-you"></text>
			</view> 
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>
		 -->
		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<rich-text :nodes="details|formatRichText"></rich-text>
		</view>
		
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-gouwuche"></text>
				<text>购物车</text>
			</navigator>
			<!-- <view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
				<text class="yticon icon-shoucang"></text>
				<text>收藏</text>
			</view> -->
			
			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="toggleSpec('cart')">加入购物车</button>
				<button type="primary" class=" action-btn no-border add-cart-btn" @click="toggleSpec('buy')">立即购买</button>
			</view>
		</view>
			
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="specClass"
			@touchmove.stop.prevent="stopPrevent"
			@click="toggleSpec"
		>
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				
				<view class="a-t">
					<image :src="goods_info.picture"></image>
					<view class="right">
						<text class="price">¥{{selectshop.price || itemDetails.priceRange}}</text>
						<text class="stock">库存：{{selectshop.stock || itemDetails.stock}}</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in selectArr" :key="sIndex">
								{{sItem}}
							</text>
						</view>
					</view>
				</view>
				<view v-for="(item,index1) in itemDetails.specifications" :key="index1" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text
							@tap="skuClick(item_value, index1, $event, index2)"
							v-for="(item_value, index2) in item.item"
							:key="index2"
							:class="[item_value.ishow ? '' : 'noactived', subIndex[index1] == index2 ? 'selected' : '']"
						>
							{{item_value.name}}
						</text>
					</view>
				</view>
				<view class="number-box-section">
					<view class="item-wrapper">
						<stepper size="small" :min="1" :max="selectshop.stock" :defaultValue="selectNum" :display="canCount" @change="changeNum"></stepper>
					</view>
				</view>
				
				<view v-if="showBtnName == 'all'" class="add-buy">
					<button @click="onAddCartClicked">加入购物车</button>
					<button @click="onBuyClicked">立即购买</button>
				</view>
				<view v-if="showBtnName != 'all'" class="add-buy2">
					<button v-if="showBtnName == 'buy'" @click="onBuyClicked" class="btn">确认</button>
					<button v-if="showBtnName == 'cart'" @click="onAddCartClicked" class="btn2">确认</button>
				</view>
			</view>
		</view>
		<!-- 分享 -->
		<share 
			ref="share" 
			:contentHeight="580"
			:shareList="shareList"
		></share>
	</view>
</template>

<script>
	import share from '@/components/share';
	import stepper from '@/components/stepper.vue';
	export default{
		components: {
			share,
			stepper
		},
		data() {
			return {
				itemDetails: null,
				details: '',
				shareList: [],
			
				goods_info: {},
				specClass: 'none',

				showBtnName: 'all',

				specifications: [], //spu规格列表
				difference: [], //sku列表
				shopItemInfo: {}, //存放要和选中的值进行匹配的数据
				selectArr: [], //存放被选中的值
				subIndex: [], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断
				selectshop: {}, //存放最后选中的商品
				selectNum: 1 //选中数量

			};
		},
		async onShow() {
			console.log('onShow');
		},
		async onLoad(options){
			let params ={
				_id: options.id
			};
			// let params ={
			// 	_id: '5de081a7cc643f10a54c5452'
			// };
			let { data } = await this.Api.getItem(params);
			this.itemDetails = data;
			this.details = this.itemDetails.details;
			this.difference = data.sku;
			this.specifications = data.specifications;
			this.goods_info = {
				title: data.name,
				picture: data.carousel[0].pic
			}
			this.shareList = await this.$api.json('shareList');


			this.specifications.map(item => {
				this.selectArr.push('');
				this.subIndex.push(-1);
			});
			this.checkItem(); //计算sku里面规格形成路径
			this.checkInpath(-1); //传-1是为了不跳过循环
		},
		filters: {
			/**
			 * 处理富文本里的图片宽度自适应
			 * 1.去掉img标签里的style、width、height属性
			 * 2.img标签添加style属性：max-width:100%;height:auto
			 * 3.修改所有style里的width属性为max-width:100%
			 * 4.去掉<br/>标签
			 * @param html
			 * @returns {void|string|*}
			 */
			formatRichText (html) { //控制小程序中图片大小
				let newContent= html.replace(/<img[^>]*>/gi,function(match,capture){
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = newContent.replace(/style="[^"]+"/gi,function(match,capture){
					match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
					return match;
				});
				newContent = newContent.replace(/<br[^>]*\/>/gi, '');
				newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
				return newContent;
			}	
		},
		computed: {
			canCount() {
				return this.subIndex.some(item => item === -1);
			}
		},
		
		methods:{
			changeNum(val) {
				this.selectNum = parseInt(val);
			},
			numberChange(val) {
				console.log(val);
				this.selectNum = val.number;
			},
			skuClick(value, index1, event, index2) {
				if (value.ishow) {
					if (this.selectArr[index1] != value.name) {
						this.$set(this.selectArr, index1, value.name);
						this.$set(this.subIndex, index1, index2);
					} else {
						this.$set(this.selectArr, index1, '');
						this.$set(this.subIndex, index1, -1);
					}
					this.checkInpath(index1);
					//如果全部选完
					if (this.selectArr.every(item => item != '')) {
						this.selectshop = this.shopItemInfo[this.selectArr];
						this.selectNum = 1;
					} else {
						this.selectshop = {};
					}
				}
			},
			checkInpath(clickIndex) {
				// console.time('筛选可选路径需要的时间是');
				//循环所有属性判断哪些属性可选
				//当前选中的兄弟节点和已选中属性不需要循环

				for (let i = 0, len = this.specifications.length; i < len; i++) {
					if (i == clickIndex) {
						continue;
					}
					let len2 = this.specifications[i].item.length;
					for (let j = 0; j < len2; j++) {
						if (this.subIndex[i] != -1 && j == this.subIndex[i]) {
							continue;
						}
						let choosed_copy = [...this.selectArr];
						this.$set(choosed_copy, i, this.specifications[i].item[j].name);
						let choosed_copy2 = choosed_copy.filter(item => item !== '' && typeof item !== 'undefined');
						if (this.shopItemInfo.hasOwnProperty(choosed_copy2)) {
							this.$set(this.specifications[i].item[j], 'ishow', true);
						} else {
							this.$set(this.specifications[i].item[j], 'ishow', false);
						}
					}
				}
				// console.log(this.specifications)
				// console.timeEnd('筛选可选路径需要的时间是');
			},
			checkItem() {
				// console.time('计算有多小种可选路径需要的时间是');
				//计算有多小种可选路径
				let result = this.difference.reduce(
					(arrs, items) => {
						return arrs.concat(
							items.difference.reduce(
								(arr, item) => {
									return arr.concat(
										arr.map(item2 => {
											//利用对象属性的唯一性实现二维数组去重
											if (!this.shopItemInfo.hasOwnProperty([...item2, item])) {
												this.shopItemInfo[[...item2, item]] = items;
											}
											return [...item2, item];
										})
									);
								},
								[[]]
							)
						);
					},
					[[]]
				);
				console.log(result);
				// console.timeEnd('计算有多小种可选路径需要的时间是');
			},


			//规格弹窗开关
			toggleSpec(flag) {
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
				this.showBtnName = flag;
			},
			//分享
			share(){
				this.$refs.share.toggleMask();	
			},
			//收藏
			toFavorite(){
				this.favorite = !this.favorite;
			},
			buy(){
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			},
			stopPrevent(){},
			onBuyClicked() {
				console.log(this.selectshop);
				const { _id  } = this.selectshop;
				const selectNum = this.selectNum;
				// if(_id && this.common.isLogin()) {
				// 	this.specClass = "none";
				// 	uni.navigateTo({
				// 		url: `/pages/order/createOrder?sku_id=${_id}&number=${selectNum}`
				// 	})
				// } else if(!_id) {
				// 	this.$api.msg('请选择规格！');
				// }
					
				if(!_id) {
					this.$api.msg('请选择规格！');
				}
				if (_id && this.common.isLogin()) {
					this.specClass = "none";
					uni.navigateTo({
						url: `/pages/order/createOrder?sku_id=${_id}&number=${selectNum}`
					})
				}
			},
			async onAddCartClicked() {
				
				const { _id  } = this.selectshop;
				const selectNum = this.selectNum;
				if(!_id) {
					this.$api.msg('请选择规格！');
				}
				if (_id && this.common.isLogin()) {
					this.specClass = "none";
					let params = {
						sku_id: _id,
						number: selectNum
					}
					const data = await this.Api.addCart(params);
					if(data.code==1) {
						this.$api.msg('加入购物车成功！');
					}
				}
				
				
				
				// let skuId = e.selectedSkuComb._id;
				// let number = e.selectedNum;
				// let params = {
				// 	sku_id: skuId,
				// 	number
				// }
				
				// const data = await this.Api.addCart(params);
				// if(data.code==1) {
				// 	this.$api.msg('加入购物车成功！');
				// }
				// this.showBase = false;
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
		padding-bottom: 160upx;
	}
	.icon-you{
		font-size: $font-base + 2upx;
		color: #888;
	}
	.carousel {
		height: 722upx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 20upx 30upx;
		
		.title{
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}
		.price-box{
			display:flex;
			align-items:baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color:$uni-color-primary;
		}
		.price{
			font-size: $font-lg + 2upx;
		}
		.m-price{
			margin:0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;
			text{
				flex: 1;
			}
		}
	}
	/* 分享 */
	.share-section{
		display:flex;
		align-items:center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;
		.share-icon{
			display:flex;
			align-items:center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position:relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;
			&:after{
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position:absolute;
				background: $uni-color-primary;
			}
		}
		.icon-xingxing{
			position:relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}
		.tit{
			font-size: $font-base;
			margin-left:10upx;
		}
		.icon-bangzhu1{
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}
		.share-btn{
			flex: 1;
			text-align:right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}
		.icon-you{
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}
	
	.c-list{
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20upx 30upx;
			position:relative;
		}
		.tit{
			width: 140upx;
		}
		.con{
			flex: 1;
			color: $font-color-dark;
			.selected-text{
				margin-right: 10upx;
			}
		}
		.bz-list{
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			text{
				display: inline-block;
				margin-right: 30upx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}
		.red{
			color: $uni-color-primary;
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;
		.e-header{
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.tit{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10upx;
			}
		}
	}
	.eva-box{
		display: flex;
		padding: 20upx 0;
		.portrait{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;
			.con{
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color:$font-color-light;
			}
		}
	}
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16upx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;
				
			text{
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10upx 30upx;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;
				.price{
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}
		.item-list{
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}
			.selected{
				background: #fbebee;
				color: $uni-color-primary;
			}
			.noactived{
				background: #eee;
				color: #ccc;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 33vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.add-buy {
				display: flex;
				padding-bottom: 20upx;
				button {
					width: 45%;
					height: 66upx;
					line-height: 66upx;
					border-radius: 100upx;
					background: $uni-color-primary;
					font-size: $font-base + 2upx;
					color: #fff;
				}
				button:nth-child(1) {
					background: #f6b12b;
				}
			}
				
			.add-buy2 {
				padding-bottom: 20upx;
				.btn {
					height: 66upx;
					line-height: 66upx;
					border-radius: 100upx;
					background: $uni-color-primary;
					font-size: $font-base + 2upx;
					color: #fff;
					margin: 30upx auto 20upx;
				}
				.btn2 {
					height: 66upx;
					line-height: 66upx;
					border-radius: 100upx;
					background: #f6b12b;
					font-size: $font-base + 2upx;
					color: #fff;
					margin: 30upx auto 20upx;
				}
			}
			
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;
			.yticon{
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}
			&.active, &.active .yticon{
				color: $uni-color-primary;
			}
			.icon-fenxiang2{
				font-size: 42upx;
				transform: translateY(-2upx);
			}
			.icon-shoucang{
				font-size: 46upx;
			}
		}
		.action-btn-group{
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
			margin-left: 20upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base ;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
	.number-box-section {
		position: relative;
		height: 90upx;
		line-height: 90upx;
		text-align: right;
	}
</style>
