export default class Api {
	static isLogin() {
		const token = uni.getStorageSync('token')
		if(token) {
			return true;
		} else {
			uni.navigateTo({
				url: '/pages/public/login'
			});
		}
	}
}