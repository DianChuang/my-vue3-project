<script setup>
import { ref } from 'vue'

const diverseList = ref([
	{
		id: 1,
		name: '网课入口',
		icon: '../../../static/index-picture/diverse/网课入口.png',
	},
	{
		id: 2,
		name: '在线刷题',
		icon: '../../../static/index-picture/diverse/在线刷题.png',
	},
	{
		id: 3,
		name: '我的课程',
		icon: '../../../static/index-picture/diverse/我的课程.png',
	},
	{
		id: 4,
		name: '我的错题',
		icon: '../../../static/index-picture/diverse/我的课程.png',
	},
	{
		id: 5,
		name: '收藏本',
		icon: '../../../static/index-picture/diverse/我的活动.png',
	},
	{
		id: 6,
		name: '我的笔记',
		icon: '../../../static/index-picture/diverse/活动日历.png',
	},
	{
		id: 7,
		name: '历史记录',
		icon: '../../../static/index-picture/diverse/活动申请.png',
	},
	{
		id: 8,
		name: '刷题达人榜',
		icon: '../../../static/index-picture/diverse/校园墙.png',
	},
])
</script>

<template>
	<view class="diverse">
		<navigator class="diverse-item" v-for="item in diverseList" :key="item.id">
			<image v-if="item.icon" :src="item.icon" class="icon" />
			<view class="names">{{ item.name }}</view>
		</navigator>
	</view>
</template>

<style lang="scss">
.diverse {
	width: 686rpx;
	height: 284rpx;
	background: rgba(255, 255, 255, 1);
	border-radius: 10rpx;
	margin-top: 24rpx;
	display: flex;
	flex-wrap: wrap;

	.diverse-item {
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
			min-width: 72rpx;
			height: 27rpx;
			font-size: 18rpx;
			line-height: 27rpx;
			color: rgba(0, 0, 0, 1);
			text-align: center;
			margin-top: -15rpx;
		}
	}
}
</style>
