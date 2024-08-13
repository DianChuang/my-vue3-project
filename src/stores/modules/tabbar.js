import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const usetabbarid = defineStore(
	'tabbarid',
	() => {
		// 当前点击的tabbar区域
		const tabbarid = ref(1)

		// 保存tabbar的id
		const setTabbarid = (val) => {
			tabbarid.value = val
		}

		// 清理tabbar的id
		const clearTabbarid = () => {
			tabbarid.value = undefined
		}

		// 记得 return
		return {
			tabbarid,
			setTabbarid,
			clearTabbarid,
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
