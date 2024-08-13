<script setup>
import { ref } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const reviewContent = ref('自习室')
</script>

<template>
	<view
		class="navbar"
		:style="{
			paddingTop: safeAreaInsets.top + 'px',
			height: 90 - safeAreaInsets.top + 'px',
		}"
	>
		<view class="back" @tap="backurl()"></view>
		<view class="title">{{ reviewContent }}</view>
	</view>
</template>

<style lang="scss">
.navbar {
	z-index: 10;
	width: 100%;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(158, 213, 255, 0.95) 0%,
		rgba(232, 242, 250, 0.82) 100%
	);
	position: relative;
	display: flex;
	justify-content: center;

	.back {
		width: 24rpx;
		height: 42rpx;
		position: absolute;
		top: 111rpx;
		left: 34rpx;
		background-image: url('@/static/search-page/返回键.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.title {
		min-width: 102rpx;
		height: 40rpx;
		top: 115rpx;
		position: absolute;
		text-align: center;
		color: rgba(56, 56, 56, 1);
		font-size: 34rpx;
		font-weight: 500;
		vertical-align: center;
	}
}
</style>
