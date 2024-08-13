import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const usetopvalue = defineStore(
	'topvalue',
	() => {
		// 当前点击的tabbar区域
		const topvalue = ref()
		const scrolltopvalue = ref(0)

		// 保存tabbar的id
		const settopvalue = (val) => {
			topvalue.value = val
		}
		const setscrolltopvalue = (val) => {
			scrolltopvalue.value = val
		}

		// 清理tabbar的id
		const cleartopvalue = () => {
			topvalue.value = undefined
		}

		// 记得 return
		return {
			topvalue,
			scrolltopvalue,
			settopvalue,
			cleartopvalue,
			setscrolltopvalue,
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
