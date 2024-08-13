<script setup>
import { ref } from 'vue'
const detail = ref([
	{
		id: 1,
		count: 21,
		name: '已学课程数',
	},
	{
		id: 2,
		count: 108,
		name: '已刷题目数',
	},
	{
		id: 3,
		count: 18,
		name: '当前排名',
	},
])
</script>
<template>
	<view class="card">
		<view class="bg"></view>
		<image class="headimg" src="/static/review/367404ac85714c0f9722dcf620da7b60.jpg"></image>
		<view class="name">随遇.</view>
		<view class="profession">软件工程</view>
		<view class="counts">
			<view class="any" v-for="item in detail" :key="item.id">
				<view class="count">{{ item.count }}</view>
				<view class="names">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<style scoped lang="scss">
.card {
	width: 686rpx;
	height: 305rpx;
	position: relative;
	background: rgba(255, 255, 255, 1);
	border-radius: 10rpx;
	z-index: 10;
	.bg {
		position: absolute;
		width: 100%;
		z-index: 12;
		height: 175rpx;
		top: 0;
		background: linear-gradient(
			180deg,
			rgba(232, 242, 249, 0.7) 0%,
			rgba(240, 246, 251, 0.49) 57.41%,
			rgba(255, 255, 255, 0.08) 100%
		);
	}

	.headimg {
		z-index: 20;
		width: 120rpx;
		height: 120rpx;
		position: absolute;
		border-radius: 50%;
		top: 29rpx;
		left: 32rpx;
	}

	.name {
		min-width: 66rpx;
		height: 41rpx;
		position: absolute;
		left: 176rpx;
		top: 52rpx;
		color: rgba(56, 56, 56, 1);
		font-size: 28rpx;
		font-weight: 700;
		vertical-align: center;
	}

	.profession {
		min-width: 160rpx;
		height: 29rpx;
		position: absolute;
		left: 176rpx;
		top: 97rpx;
		font-size: 20rpx;
		color: rgba(56, 56, 56, 1);
		vertical-align: center;
	}

	.counts {
		width: 520rpx;
		height: 117rpx;
		position: absolute;
		left: 83rpx;
		bottom: 28rpx;
		display: flex;
		justify-content: space-between;

		.any {
			width: 120rpx;
			height: 117rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			.count {
				min-width: 53rpx;
				height: 70rpx;
				font-size: 48rpx;
				color: rgba(56, 56, 56, 1);
				vertical-align: center;
				text-align: center;
				margin-bottom: 12rpx;
			}

			.names {
				width: 120rpx;
				height: 35rpx;
				font-size: 24rpx;
				color: rgba(128, 128, 128, 1);
				text-align: center;
				vertical-align: center;
			}
		}
	}
}
</style>
