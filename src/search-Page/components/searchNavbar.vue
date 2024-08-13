<script setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
import { ref, onMounted } from 'vue'

const searchValue = ref('')

const searchContent = ref('搜索')

const backurl = () => {
	uni.navigateBack({
		delta: 1,
	})
}

const focusinput = ref(true)

onMounted(() => {
	focusinput.value = false
	setTimeout(() => {
		focusinput.value = true
	}, 100)
})
</script>

<template>
	<view
		class="navbar"
		:style="{
			paddingTop: safeAreaInsets.top + 'px',
			height: 125 - safeAreaInsets.top + 'px',
		}"
	>
		<view class="back" @tap="backurl()"></view>
		<view class="title">{{ searchContent }}</view>
		<view class="searchs">
			<view class="search">
				<image src="@/static/index-picture/navbar/搜索.png" class="icon-search" />
				<input
					confirm-type="search"
					:focus="focusinput"
					placeholder="课程表"
					v-model="searchValue"
					placeholder-class="title_input"
					type="text"
					class="icon-texts"
				/>
			</view>
			<view class="delete">取消</view>
		</view>
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
		bottom: 90rpx;
		left: 34rpx;
		background-image: url('@/static/search-page/返回键.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.title {
		min-width: 136rpx;
		height: 40rpx;
		bottom: 88rpx;
		position: absolute;
		text-align: center;
		line-height: 40rpx;
		color: rgba(56, 56, 56, 1);
		font-size: 34rpx;
		font-weight: 500;
		vertical-align: center;
	}

	.title_input {
		color: #63bcff;
	}

	.searchs {
		position: absolute;
		width: 674rpx;
		height: 60rpx;
		left: 32rpx;
		bottom: 0;
		display: flex;
		justify-content: space-between;
	}
	.search {
		width: 599rpx;
		height: 60rpx;
		background-color: rgba(255, 255, 255, 1);
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

		.icon-texts {
			min-width: 500rpx;
			height: 27rpx;
			margin-left: 8rpx;
			// margin-top: 10rpx;
			font-size: 18rpx;
			color: rgba(99, 188, 255, 1);
			// line-height: 27rpx;
		}
	}

	.delete {
		width: 52rpx;
		height: 60rpx;
		line-height: 60rpx;
		color: rgba(56, 56, 56, 1);
		font-size: 24rpx;
		vertical-align: center;
	}
}
</style>
