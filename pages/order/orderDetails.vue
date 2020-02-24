<template>
	<view v-if="orderData">
		<view class="tip">
			如果需要售后服务，请在收到包裹后的7天内与我们联系。 如果逾期，我们将不接受该请求。 感谢您的合作和理解。
		</view>
		<view class="address">
			<view class=title>
				<i class="yticon icon-dizhi"></i> 地址
			</view>
			<view>
				<text>{{orderData.address.full_name}}</text> <text>{{orderData.address.mobile}}</text>
			</view>
			<view>
				{{orderData.address.address_name}}{{orderData.address.house_number}}
			</view>
		</view>
		<view class="goods-box-single" v-for="(item,index) in orderData.goodsData" :key="index">
			<image class="goods-img" :src="item.pic" mode="aspectFill"></image>
			<view class="right">
				<text class="title clamp">{{item.name}}</text>
				<text class="attr-box">{{item.difference.join(' ')}}  x {{item.number}}</text>
				<text class="price">{{item.price}}</text>
			</view>
		</view>
		<view class="total">
			<text>合计：</text> 
			<text>￥{{orderData.total_order_price}}</text>
			(<text>邮费：</text> <text>￥{{orderData.postage}}</text>)
		</view>
		<view class="order-number">
			<view>
				订单号：{{orderData._id}}
			</view>
			<view>
				下单时间：{{orderData.place_order_time}}
			</view>
			<view v-if="orderData.buyer_remark">
				买家备注：{{orderData.buyer_remark}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderData: null
			}
		},
		onLoad(options) {
			let params = {
				orderNumber: options.id
			}
			this.loadData(params);
		},
		methods: {
			async loadData(params){ 
				const { data } = await this.Api.orderDetails(params);
				this.orderData = data;
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding: 30upx;
		font-size: 28upx;
		box-sizing: border-box;
	}
	.tip {
		background-color: #fff;
		padding: 24upx;
		color: #303133;
	}
	.address {
		margin-top: 20upx;
		background-color: #fff;
		padding: 24upx;
		line-height: 44upx;
		.title {
			display: flex;
			align-items: center;
			.icon-dizhi {
				color: rgb(95, 205, 162);
				margin-right: 10upx;
			}
		}
		text {
			margin-right: 10upx;
		}
	}
	.total {
		background-color: #fff;
		padding: 24upx;
		color: #303133;
		text-align: right;
		margin-top: 20upx;
		text:nth-child(2) {
			margin-right: 25upx;
		}
	}
	.order-number {
		background-color: #fff;
		padding: 24upx;
		color: #303133;
		margin-top: 20upx;
	}
	.goods-box-single{
		display: flex;
		padding: 20upx 0;
		background-color: #fff;
		margin-top: 20upx;
		.goods-img{
			display: block;
			width: 120upx;
			height: 120upx;
			margin-left: 24upx;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 0 30upx 0 24upx;
			overflow: hidden;
			.title{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				line-height: 1;
			}
			.attr-box{
				font-size: $font-sm + 2upx;
				color: $font-color-light;
				padding: 10upx 12upx;
			}
			.price{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				&:before{
					content: '￥';
					font-size: $font-sm;
					margin: 0 2upx 0 8upx;
				}
			}
		}
	}
	
</style>
