import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useBackState = defineStore(
	'backState',
	() => {
		// 当前点击的tabbar区域
		const state = ref(1)

		// 保存tabbar的id
		const setBackState = (val) => {
			state.value = val
		}

		// 清理tabbar的id
		const clearBackState = () => {
			state.value = undefined
		}

		// 记得 return
		return {
			state,
			setBackState,
			clearBackState,
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
