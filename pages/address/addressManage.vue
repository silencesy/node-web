<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.full_name" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b" @click="chooseLocation">
			<text class="tit">地址</text>
			<text  class="input">
				{{addressData.address_name}}
			</text>
			<text class="yticon icon-shouhuodizhi"></text>
		</view>
		<view class="row b-b"> 
			<text class="tit">门牌号</text>
			<input class="input" type="text" v-model="addressData.house_number" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>
		
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.is_default" color="#fa436a" @change="switchChange" />
		</view>
		<view v-if="manageType == 'add'">
			<button class="add-btn" @click="confirm">保存</button>
		</view>
		<view class="bottom-btns" v-else>
			<button class="delete-btn" @click="deleteAddress">删除</button>
			<button class="edit-btn" @click="confirm">保存</button>
		</view>
		
	</view>
</template>

<script>
	import V from '../../utils/validate'
	export default {
		data() {
			return {
				addressData: {
					full_name: '',
					mobile: '',
					address_details: '',
					address_name: '在地图选择',
					house_number: '',
					is_default: false
				},
				manageType: 'add'
			}
		},
		onLoad(option){
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				this.addressData = JSON.parse(option.data)
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			switchChange(e){
				this.addressData.is_default = e.detail.value;
			},
			
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						console.log(data);
						this.addressData.address_details = data.address;
						this.addressData.address_name = data.name;
					}
				})
			},
			async deleteAddress() {
				const params = {
					_id: this.addressData._id
				}
				const data = await this.Api.deleteAddress(params);
				this.$api.prePage(); //获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().loadData();
				this.$api.msg('删除地址成功！');
				setTimeout(()=>{
					uni.navigateBack()
				}, 800)
			},
			
			//提交
			async confirm(){
				let data = this.addressData;
				if(!V.required(data.full_name)){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!V.tel(data.mobile)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!V.required(data.address_details)){
					this.$api.msg('请在地图选择所在位置');
					return;
				}
				if(!V.required(data.house_number)){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				const params = {
					mobile: this.addressData.mobile,
					full_name: this.addressData.full_name,
					address_details: this.addressData.address_details,
					address_name: this.addressData.address_name,
					house_number: this.addressData.house_number,
					is_default: this.addressData.is_default
				}
				/**
				 * 添加、修改判断（manageType：add添加、edit修改）
				 */
				if(this.manageType=='add') {
					const result = await this.Api.addAddress(params);
				} else {
					params._id = this.addressData._id;
					const result = await this.Api.editAddress(params);
				}
				this.$api.prePage(); //获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().loadData();
				console.log(this.$api.prePage());
				this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(()=>{
					uni.navigateBack()
				}, 800)
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
	.bottom-btns {
		display: flex;
		padding: 20upx;
		.edit-btn {
			width: 45%;
			font-size: $font-lg;
			color: #fff;
			background-color: $base-color;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.delete-btn {
			width: 45%;
			font-size: $font-lg;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
