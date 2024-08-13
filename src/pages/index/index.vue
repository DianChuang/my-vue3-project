<script setup>
import Customnavbar from './components/Custom-navbar.vue'
import diverse from './components/diverse.vue'
import conveniences from './components/convenience.vue'
import { ref, nextTick, onMounted } from 'vue'
import { useActiveList } from '@/composables'

const classlist = ref([])
const practicelist = ref([])
const { safeAreaInsets } = uni.getSystemInfoSync()
classlist.value = [
	{
		id: 1,
		src: '.././static/index-picture/school-life/aeb9fe19e62e41e661ba6a71f52b071cac80ee8950b11-ISkC4U.jpg',
		name: '高等数学基础课程',
		number: '504',
		subject: '数学',
	},
	{
		id: 2,
		src: '.././static/index-picture/school-life/52442b1a9513d072d0217a3cbac9ee0ce22d42801a0e0-bR3IkC.png',
		name: '高等数学基础课程',
		number: '504',
		subject: '数学',
	},
	{
		id: 3,
		src: '.././static/index-picture/school-life/1de89b71fbdd13e67a8f8d85357f79160f8e8e2d8152-TT5wcP.png',
		name: '高等数学基础课程',
		number: '504',
		subject: '数学',
	},
]

practicelist.value = [
	{
		id: 1,
		src: '.././static/index-picture/school-life/aeb9fe19e62e41e661ba6a71f52b071cac80ee8950b11-ISkC4U.jpg',
		name: '高等数学基础课程',
		number: '504',
		subject: '数学',
	},
	{
		id: 2,
		src: '.././static/index-picture/school-life/52442b1a9513d072d0217a3cbac9ee0ce22d42801a0e0-bR3IkC.png',
		name: '高等数学基础课程',
		number: '504',
		subject: '数学',
	},
	{
		id: 3,
		src: '.././static/index-picture/school-life/1de89b71fbdd13e67a8f8d85357f79160f8e8e2d8152-TT5wcP.png',
		name: '高等数学基础课程',
		number: '504',
		subject: '数学',
	},
]

// 是否加载中标记
const isLoading = ref(false)
// 当前下拉刷新状态
const isTriggered = ref(false)

const { activeRef, onScrolltolower } = useActiveList()

const onRefresherrefresh = async () => {
	// 开始动画
	isTriggered.value = true

	activeRef.value.resetData()
	await activeRef.value.getMore()
	// 关闭动画
	isTriggered.value = false
	console.log(safeAreaInsets.top)
}

import { useBackState, usetopvalue } from '@/stores'
const useBack = useBackState()
const useBacks = usetopvalue()

// const scrollTop = ref(0)

const bindscroll = (e) => {
	useBacks.settopvalue(e.detail.scrollTop)
	console.log(useBacks.topvalue)
	if (e.detail.scrollTop < 100) {
		useBack.setBackState(1)
	} else if (e.detail.scrollTop > 100) {
		useBack.setBackState(2)
	}
}

onMounted(() => {
	uni.hideTabBar({
		animation: false,
	})
})
</script>

<template>
	<!-- 自定义导航栏组件 -->
	<view class="container">
		<Customnavbar></Customnavbar>
		<scroll-view
			enable-back-to-top
			refresher-enabled
			scroll-with-animation="true"
			:scroll-top="useBacks.scrolltopvalue"
			@refresherrefresh="onRefresherrefresh"
			:refresher-triggered="isTriggered"
			@scrolltolower="onScrolltolower"
			@scroll="bindscroll"
			class="scroll-view"
			scroll-y
		>
			<view class="bgtoo"></view>
			<!-- 多功能入口组件 -->
			<diverse></diverse>
			<!-- 课程提醒和活动投票入口 -->
			<conveniences></conveniences>
			<view class="schoolLife">校园生活</view>
			<view class="life">
				<Ethotclass :list="classlist"></Ethotclass>
				<Etpractice :list="practicelist"></Etpractice>
			</view>
			<Etactive ref="activeRef"></Etactive>
		</scroll-view>
		<EtbottomTarbar></EtbottomTarbar>
	</view>
</template>

<style lang="scss">
.container {
	height: 100vh;
	display: flex;
	flex-direction: column;

	.scroll-view {
		flex: 1;
		overflow-y: auto;
		// z-index: 1;

		.schoolLife {
			min-width: 192rpx;
			height: 70rpx;
			font-size: 48rpx;
			font-weight: 700;
			line-height: 70rpx;
			margin-top: 24rpx;
			margin-left: 32rpx;
		}

		.life {
			width: 686rpx;
			min-height: 200rpx;
			margin-left: 32rpx;
			margin-top: 24rpx;
			display: flex;
			justify-content: space-between;
		}
		.bgtoo {
			width: 100%;
			height: 106rpx;
			position: absolute;
			top: 0rpx;
			background: linear-gradient(
				180deg,
				rgba(232, 242, 249, 0.7) 0%,
				rgba(240, 246, 251, 0.49) 57.41%,
				rgba(255, 255, 255, 0.08) 100%
			);
			z-index: 1;
		}
	}
}
</style>
