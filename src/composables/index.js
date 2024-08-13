import { ref } from 'vue'

/**
 * 猜你喜欢组合式函数
 */
export const useActiveList = () => {
	// 获取猜你喜欢组件实例
	const activeRef = ref()

	// 滚动触底事件
	const onScrolltolower = () => {
		activeRef.value.getMore()
	}

	// 返回 ref 和事件处理函数
	return {
		activeRef,
		onScrolltolower,
	}
}
