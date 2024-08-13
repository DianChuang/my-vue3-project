// 引入个人信息存取相关方法
import { usePersonStore } from '@/stores'

// 设置基地址
// 1.本地环境
const baseURL = ''
// 2.测试环境
const testURL = ''
// 3.生产环境
const creatURL = ''

const URL = baseURL

// 添加请求拦截器
const requestInterceptor = {
	// 拦截前触发
	invoke(urls) {
		// 1. 非 http 开头需拼接地址
		if (urls.url.startswith('http')) {
			urls.url = URL + urls.url
		}
		// 2. 请求超时, 默认 10s
		urls.timeout = 10000
		// 3. 添加小程序端请求头标识
		urls.header = {
			// 如果请求时是自带了请求头的话就会被覆盖掉所以要写下面这一句
			...urls.header,
			// 这里请求头待定
			Authorization,
		}
		// 添加token请求头标识，用于确认用户身份及个人相关信息的获取
		const personStore = usePersonStore()
		const token = personStore.profile.token
		if (token) {
			urls.header.Authorization = token
		}
	},
}

uni.addInterceptor('request', requestInterceptor)
uni.addInterceptor('uploadFile', requestInterceptor)

export const requstall = (urls) => {
	// 1. 返回 Promise 对象
	return new Promise((resolve, reject) => {
		uni.request({
			...urls,
			// 响应成功
			success(res) {
				// 状态码 2xx， axios 就是这样设计的
				if (res.status === 200) {
					// 2.1 提取核心数据 res.data
					resolve(res.data)
				} else {
					// 其他错误 -> 根据后端错误信息轻提示
					uni.showToast({
						icon: 'none',
						title: res.data.tips || res.data.msg,
					})
					reject(res)
				}
			},
			// 响应失败
			fail(err) {
				uni.showToast({
					icon: 'none',
					title: '网络异常,请稍后重试',
				})
				reject(err)
			},
		})
	})
}
