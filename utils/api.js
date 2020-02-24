import fly from './fly'

export default class Api {
	// 登录
	static home() {
		return fly.get('/v1/home')
	}
	
	// 注册
	static register(mobile, password,repeatPassword) {
		return fly.post('/v1/register', {
			mobile,
			password,
			repeatPassword
		})
	}
	// 登录
	static login(mobile, password) {
		return fly.post('/v1/login', {
			mobile,
			password
		})
	}
	// 添加分类
	static addItemType(params) {
		return fly.post('/v1/addItemType',params)
	}
	// 获取分类
	static async getItemType() {
		return fly.get('/v1/getItemTypes');
	}
	// 获取某一类分类
	static async getOneItemTypes(params) {
		return fly.get('/v1/getOneItemTypes',params);
	}
	// 获取商品详情页
	static async getItem(params) {
		return fly.get('/v1/getItem',params);
	}
	// 获取商品列表
	static async getItemList(params) {
		return fly.get('/v1/getItemList',params);
	}
	// 添加地址
	static async addAddress(params) {
		return fly.post('/v1/addAddress',params);
	}
	// 修改地址
	static async editAddress(params) {
		return await fly.post('/v1/editAddress',params);
	}
	// 删除地址
	static async deleteAddress(params) {
		return await fly.post('/v1/deleteAddress',params);
	}
	// 获取地址栏
	static async getAddress() {
		return await fly.get('/v1/getAddress');
	}
	// 获取默认地址
	static async getDefaultAddress() {
		return await fly.get('/v1/getDefaultAddress');
	}
	//添加购物车
	static async addCart(params) {
		return await fly.post('/v1/addCart',params);
	}
	//获取购物车
	static async getCartList() {
		return await fly.get('/v1/getCartList');
	}
	// 编辑购物车
	static async editCart(params) {
		return await fly.post('/v1/editCart',params);
	}
	// 删除购物车
	static async deleteCart(params) {
		return await fly.post('/v1/deleteCart',params);
	}
	//获取订单预览页
	static async previewOrder(flag,option) {
		console.log(option);
		const params = {
			flag,
			sku_id: option?option.sku_id:'',
			number: option?option.number:'',
		}
		return await fly.get('/v1/previewOrder',params);
	}
	// 下订单
	static async creatOrder(params) {
		return await fly.post('/v1/creatOrder',params);
	}
	// 订单列表
	static async orderList(params) {
		return await fly.get('/v1/orderList',params);
	}
	// 订单详情
	static async orderDetails(params) {
		return await fly.get('/v1/orderDetails',params);
	}
}