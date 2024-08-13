import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const usePersonStore = defineStore(
	'person',
	() => {
		// 个人信息
		const profile = ref()

		// 保存个人信息，登录时使用
		const setProfile = (val) => {
			profile.value = val
		}

		// 清理个人信息，退出时使用
		const clearProfile = () => {
			profile.value = undefined
		}

		// 记得 return
		return {
			profile,
			setProfile,
			clearProfile,
		}
	},
	{
		// 网页端配置
		// persist: true,
		// 小程序端配置
		persist: {
			storage: {
				getItem(key) {
					return uni.getStorageSync(key)
				},
				setItem(key, value) {
					uni.setStorageSync(key, value)
				},
			},
		},
	},
)
