<template>
	<view
		class="navbar"
		:style="{
			paddingTop: safeAreaInsets.top + 'rpx',
			height: 250 - safeAreaInsets.top + 'rpx',
		}"
	>
		<view class="logo">
			<image src="@/static/index-picture/navbar/logo.png" class="logoimage" />
		</view>
		<view class="search">
			<image src="@/static/index-picture/navbar/搜索.png" class="icon-search" />
			<input
				readonly
				placeholder="课程表"
				@focus="onInput"
				v-model="searchValue"
				placeholder-class="title_input"
				type="text"
				class="icon-text"
			/>
		</view>
		<image src="@/static/index-picture/navbar/消息.png" class="message"></image>
	</view>
</template>

<script setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
import { ref } from 'vue'

const searchValue = ref('')

const onInput = () => {
	uni.navigateTo({
		url: '/search-Page/search',
	})
}
</script>

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
	padding-bottom: 8rpx;
	position: relative;

	.logo {
		width: 211rpx;
		height: 69rpx;
		// background-color: red;
		position: absolute;
		top: 102rpx;
		left: 39rpx;
		.logoimage {
			width: 211rpx;
			height: 69rpx;
		}
	}

	.title_input {
		color: #63bcff;
	}

	.search {
		width: 599rpx;
		height: 60rpx;
		background-color: rgba(255, 255, 255, 1);
		position: absolute;
		top: 183rpx;
		left: 32rpx;
		border: 2rpx solid rgba(99, 188, 255, 1);
		border-radius: 38rpx;
		box-shadow: 0px 2rpx 4rpx rgba(184, 224, 255, 1);
		display: flex;
		align-items: center;

		.icon-search {
			width: 32rpx;
			height: 32rpx;
			margin-left: 34rpx;
			// margin-top: 16rpx;
			// margin-right: 8rpx;
		}

		.icon-text {
			min-width: 500rpx;
			height: 27rpx;
			margin-left: 8rpx;
			// margin-top: 10rpx;
			font-size: 18rpx;
			color: rgba(99, 188, 255, 1);
			// line-height: 27rpx;
		}
	}

	.message {
		width: 48rpx;
		height: 48rpx;
		// background-color: aqua;
		position: absolute;
		top: 192rpx;
		right: 36rpx;
	}
}
</style>
