<script setup>
import { ref, watch, nextTick } from 'vue'

const { safeAreaInsets } = uni.getSystemInfoSync()
import { usetabbarid, useBackState, usetopvalue } from '@/stores'

const tabBar = ref([
	{
		id: 1,
		src: '.././static/tabBar/首页1.png',
		selectsrc: '.././static/tabBar/首页.png',
		back: '.././static/tabBar/路径 1.png',
		name: '首页',
		backName: '回顶部',
		path: 'pages/index/index',
	},
	{
		id: 2,
		src: '.././static/tabBar/自习室1.png',
		selectsrc: '.././static/tabBar/自习室2.png',
		name: '自习室',
		path: 'pages/review/review',
	},
	{
		id: 3,
		src: '.././static/tabBar/活动中心.png',
		selectsrc: '.././static/tabBar/活动中心2.png',
		name: '活动中心',
		path: 'pages/active-center/active',
	},
	{
		id: 4,
		src: '.././static/tabBar/校园墙.png',
		selectsrc: '.././static/tabBar/校园墙2.png',
		name: '校园墙',
		path: 'pages/school/school',
	},
	{
		id: 5,
		src: '.././static/tabBar/我的.png',
		selectsrc: '.././static/tabBar/我的2.png',
		name: '我的',
		path: 'pages/my/my',
	},
])

const pages = ref()

const states = ref()

const useid = usetabbarid()

const useBack = useBackState()
const useBacks = usetopvalue()

// const scrollTop = ref(0)

const navigate = (detail, id) => {
	// 通过getCurrentPages()方法获取当前页面地址
	pages.value = getCurrentPages()
	const currentPage = pages.value[pages.value.length - 1]
	// 然后通过if判断当前页面和接收过来的地址参数是否一样，如果一样则不进行跳转刷新，如果不一样则跳转到接收到的参数地址
	if (detail === currentPage.route) {
		useBacks.setscrolltopvalue(useBacks.topvalue)

		console.log(useBacks.scrolltopvalue)
		nextTick(() => {
			useBacks.setscrolltopvalue(0)
		})

		return
	} else {
		useid.setTabbarid(id)
		// 用于切换到指定的 tabBar 页面。

		if (id == 1 && useBacks.topvalue != 0) {
			useBack.setBackState(2)
		} else {
			useBack.setBackState(1)
		}

		uni.switchTab({
			url: '/' + detail, // 切换到 tabBar 中的 home 页面
		})
	}
}
</script>

<template>
	<view
		class="bottomNavbar"
		:style="{
			paddingBottom: safeAreaInsets.bottom + 'rpx',
		}"
	>
		<view
			name="fade"
			class="bottom-item"
			v-for="item in tabBar"
			:key="item.id"
			@tap="navigate(item.path, item.id)"
		>
			<image
				v-show="useBack.state === 1 && (item.src || item.selectsrc)"
				:src="item.id === useid.tabbarid ? item.selectsrc : item.src"
			/>
			<image
				v-show="useBack.state === 2"
				:src="item.id == 1 ? item.back : item.id === useid.tabbarid ? item.selectsrc : item.src"
			/>
			<view
				class="txts"
				:class="{
					Colors: item.id === useid.tabbarid,
				}"
				v-show="useBack.state === 1"
				>{{ item.name }}</view
			>
			<view
				class="txts"
				:class="{
					Colors: item.id === useid.tabbarid,
				}"
				v-show="useBack.state === 2"
				>{{ item.id == 1 ? item.backName : item.name }}</view
			>
		</view>
	</view>
</template>

<style lang="scss">
.bottomNavbar {
	width: 100%;
	height: 98rpx;
	background: rgba(255, 255, 255, 1);
	display: flex;
	.bottom-item {
		width: 150rpx;
		height: 98rpx;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		position: relative;

		image {
			width: 48rpx;
			height: 48rpx;
			position: absolute;
			top: 22rpx;
		}

		.txts {
			width: 100%;
			height: 24rpx;
			text-align: center;
			position: absolute;
			bottom: 0rpx;
			font-size: 22rpx;
			line-height: 25rpx;
			color: rgba(56, 56, 56, 1);
		}

		.Colors {
			color: rgba(99, 188, 255, 1);
		}
	}
}
</style>
