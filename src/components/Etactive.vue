<script setup>
import { onMounted, ref } from 'vue'

const active = ref([])

const activelist = [
	{
		id: 1,
		type: 'active',
		src: '.././static/index-picture/school-life/active/334da5009ca973c6e8afd0198269d3f4d34dd5c21520c-PSwBut_fw1200.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
	{
		id: 2,
		type: 'active',
		src: '.././static/index-picture/school-life/active/334da5009ca973c6e8afd0198269d3f4d34dd5c21520c-PSwBut_fw1200.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
	{
		id: 3,
		type: 'active',
		src: '.././static/index-picture/school-life/active/8887f4ac1faf3319528ff6a81883e3e566b362aa13752-s8B43y.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
	{
		id: 4,
		type: 'active',
		src: '.././static/index-picture/school-life/active/556e769948d991c6cf951fbba96d69f841ef12056f45-UcRVWN_fw1200.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
	{
		id: 5,
		type: 'active',
		src: '.././static/index-picture/school-life/active/8887f4ac1faf3319528ff6a81883e3e566b362aa13752-s8B43y.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
	{
		id: 6,
		type: 'active',
		src: '.././static/index-picture/school-life/active/334da5009ca973c6e8afd0198269d3f4d34dd5c21520c-PSwBut_fw1200.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
	{
		id: 7,
		type: 'active',
		src: '.././static/index-picture/school-life/active/334da5009ca973c6e8afd0198269d3f4d34dd5c21520c-PSwBut_fw1200.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
	{
		id: 8,
		type: 'active',
		src: '.././static/index-picture/school-life/active/334da5009ca973c6e8afd0198269d3f4d34dd5c21520c-PSwBut_fw1200.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
	{
		id: 9,
		type: 'active',
		src: '.././static/index-picture/school-life/active/556e769948d991c6cf951fbba96d69f841ef12056f45-UcRVWN_fw1200.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
	{
		id: 10,
		type: 'active',
		src: '.././static/index-picture/school-life/active/8887f4ac1faf3319528ff6a81883e3e566b362aa13752-s8B43y.jpg',
		name: '乘风而起 “绿”途有你 2024-2025新生欢迎仪式',
		source: '社团联合部',
	},
]
// 分页参数
const page = {
	page: 1,
	pagesize: 10,
}

const finish = ref(false)

const getactive = () => {
	// 退出分页判断
	if (finish.value === true) {
		return uni.showToast({ icon: 'none', title: '没有更多数据~' })
	}
	for (let i = 0; i < 10; i++) {
		active.value.push(activelist[i])
	}
	// 分页条件
	if (page.page < 5) {
		// 页码累加
		page.page++
	} else {
		finish.value = true
	}
}

const resetData = () => {
	page.page = 1
	active.value = []
	finish.value = false
}
// 组件挂载完毕
onMounted(() => {
	getactive()
})
// 暴露方法
defineExpose({
	resetData,
	getMore: getactive,
})
</script>

<template>
	<view class="classes">
		<view class="schoolActive" v-for="item in active" :key="item.id">
			<image class="img" v-if="item.src" :src="item.src"></image>
			<view class="name">{{ item.name }}</view>
			<view class="source">所属部门：{{ item.source }}</view>
			<view class="details">
				<text class="words">查看详情</text>
				<view class="imgs"
					><image src="@/static/index-picture/school-life/右-小箭头蓝.png" class="rightArrow"
				/></view>
			</view>
		</view>
	</view>
	<view class="loading-text">
		<view class="texts">{{ finish ? '到底啦~' : '正在加载...' }}</view>
		<view class="grays"><view class="gray"></view></view>
	</view>
</template>

<style lang="scss">
.classes {
	width: 686rpx;
	margin-left: 32rpx;
	margin-top: 24rpx;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	.schoolActive {
		break-inside: avoid;
		margin-bottom: 24rpx;
		width: 331rpx;
		height: 400rpx;
		border-radius: 10rpx;
		background: rgba(255, 255, 255, 1);
		position: relative;

		.img {
			width: 331rpx;
			height: 280rpx;
			border-top-left-radius: 10rpx;
			border-top-right-radius: 10rpx;
		}

		.name {
			width: 280rpx;
			height: 58rpx;
			font-size: 20rpx;
			font-weight: 700;
			line-height: 29rpx;
			color: rgba(0, 0, 0, 1);
			margin-top: 8rpx;
			margin-left: 12rpx;
			display: -webkit-box; /* 使用 Flexbox 布局 */
			-webkit-box-orient: vertical; /* 纵向布局 */
			-webkit-line-clamp: 2; /* 限制显示两行 */
			overflow: hidden; /* 超出部分隐藏 */
			text-overflow: ellipsis;
		}
		.source {
			width: 140rpx;
			height: 21rpx;
			overflow: hidden; /* 超出部分隐藏 */
			text-overflow: ellipsis;
			font-size: 14rpx;
			line-height: 21rpx;
			color: rgba(166, 166, 166, 1);
			bottom: 16rpx;
			left: 12rpx;
			position: absolute;
		}

		.details {
			width: 100rpx;
			height: 30rpx;
			border-radius: 26rpx;
			background: rgba(222, 240, 255, 0.99);
			position: absolute;
			bottom: 11rpx;
			right: 22rpx;
			display: flex;
			align-items: center;

			.words {
				min-width: 56rpx;
				height: 25rpx;
				margin-left: 18rpx;
				margin-top: 5rpx;
				color: rgba(20, 153, 255, 1);
				font-size: 14rpx;
				text-align: center;
				line-height: 25rpx;
			}

			.imgs {
				width: 16rpx;
				height: 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.rightArrow {
					width: 16rpx;
					height: 16rpx;
				}
			}
		}
	}
}

.loading-text {
	width: 100%;
	height: 35rpx;
	font-size: 24rpx;
	color: rgba(166, 166, 166, 1);
	padding-top: 47rpx;
	padding-bottom: 31rpx;
	display: flex;
	flex-wrap: wrap;
	.texts {
		width: 100%;
		height: 35rpx;
		// justify-content: center;
		text-align: center;
	}

	.grays {
		width: 100%;
		height: 8rpx;
		display: flex;
		justify-content: center;
	}
	.gray {
		height: 4rpx;
		width: 16rpx;
		opacity: 1;
		justify-content: center;
		border-radius: 4rpx;
		margin-left: -12rpx;
		background-color: rgba(166, 166, 166, 1);
	}
}
</style>
