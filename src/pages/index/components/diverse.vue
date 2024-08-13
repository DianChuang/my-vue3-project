<script setup>
import { ref } from 'vue'

const diverseList = ref([
	{
		id: 1,
		name: '教务大厅',
		icon: '../../../static/index-picture/diverse/教务大厅.png',
	},
	{
		id: 2,
		name: '网课入口',
		icon: '../../../static/index-picture/diverse/网课入口.png',
	},
	{
		id: 3,
		name: '在线刷题',
		icon: '../../../static/index-picture/diverse/在线刷题.png',
	},
	{
		id: 4,
		name: '我的课程',
		icon: '../../../static/index-picture/diverse/我的课程.png',
	},
	{
		id: 5,
		name: '我的活动',
		icon: '../../../static/index-picture/diverse/我的活动.png',
	},
	{
		id: 6,
		name: '活动日历',
		icon: '../../../static/index-picture/diverse/活动日历.png',
	},
	{
		id: 7,
		name: '活动申请',
		icon: '../../../static/index-picture/diverse/活动申请.png',
	},
	{
		id: 8,
		name: '校园墙',
		icon: '../../../static/index-picture/diverse/校园墙.png',
	},
])
</script>

<template>
	<view class="diverse">
		<view class="bg"></view>
		<navigator class="diverse-item" v-for="item in diverseList" :key="item.id">
			<image v-if="item.icon" :src="item.icon" class="icon" />
			<view class="names">{{ item.name }}</view>
		</navigator>
	</view>
</template>

<style lang="scss">
.diverse {
	width: 682rpx;
	min-height: 284rpx;
	// background: linear-gradient(180deg, rgba(206, 233, 250, 0.95) 0%, rgba(255, 255, 255, 0.25) 30%);
	background: rgba(255, 255, 255, 1);
	border-radius: 10rpx;
	margin-left: 32rpx;
	padding: 0rpx 0rpx 13rpx 0rpx;
	display: flex;
	flex-wrap: wrap;
	position: relative;
	z-index: 2;

	.bg {
		position: absolute;
		width: 100%;
		height: 106rpx;
		top: 0;
		background: linear-gradient(
			180deg,
			rgba(232, 242, 249, 0.7) 0%,
			rgba(240, 246, 251, 0.49) 57.41%,
			rgba(255, 255, 255, 0.08) 100%
		);
	}

	.diverse-item {
		z-index: 10;
		width: 170rpx;
		min-height: 92rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;

		.icon {
			width: 72rpx;
			height: 85rpx;
		}

		.names {
			width: 72rpx;
			height: 27rpx;
			font-size: 18rpx;
			line-height: 27rpx;
			color: rgba(0, 0, 0, 1);
			text-align: center;
			margin-top: -15rpx;
		}
	}
}
.diverse > .diverse-item:nth-child(1) > .icon {
	width: 85rpx;
	height: 89rpx;
	margin-left: -7rpx;
}
.diverse > .diverse-item:nth-child(1) > .names {
	width: 72rpx;
	height: 27rpx;
	font-size: 18rpx;
	line-height: 27rpx;
	color: rgba(0, 0, 0, 1);
	text-align: center;
	margin-top: -16rpx;
}
</style>
