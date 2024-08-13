<script setup>
import searchnavbar from './components/searchNavbar.vue'
import { ref } from 'vue'

const selects = ref([
	{
		id: 1,
		name: '网课',
	},
	{
		id: 2,
		name: '试题',
	},
	{
		id: 3,
		name: '生活',
	},
	{
		id: 4,
		name: '部落',
	},
	{
		id: 5,
		name: '校园墙',
	},
])

const history = ref([
	{
		id: 1,
		content: '我是最后搜的内容',
	},
	{
		id: 2,
		content: '我是最后搜的内容',
	},
	{
		id: 3,
		content: '我是最后搜的内容',
	},
	{
		id: 4,
		content: '我是最后搜的内容',
	},
	{
		id: 5,
		content: '我是最后搜的内容',
	},
	{
		id: 6,
		content: '我是最后搜的内容',
	},
])
</script>

<template>
	<searchnavbar></searchnavbar>
	<view class="particular">
		<view class="content">
			<view class="words">搜索指定内容</view>
		</view>
		<view class="select">
			<view class="choose" v-for="item in selects" :key="item.id">
				{{ item.name }}
			</view>
		</view>
	</view>
	<view class="specificContent">
		<view class="lately">
			<view class="history">
				<view class="recently">最近在搜</view>
				<view class="more">
					<view class="word">
						<view class="words">展开</view>
						<view class="below"></view>
					</view>
					<view class="delete"></view>
				</view>
			</view>
		</view>
		<view class="historySearch">
			<view class="content">
				<view class="words" v-for="item in history" :key="item.id">
					<view class="imgs"></view>
					<view class="txts">{{ item.content }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.particular {
	width: 100%;
	height: 142rpx;
	background: linear-gradient(
		180deg,
		rgba(232, 242, 249, 0.7) 0%,
		rgba(240, 246, 251, 0.49) 57.41%,
		rgba(255, 255, 255, 0.08) 100%
	);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	.content {
		width: 638rpx;
		height: 74rpx;
		border-bottom: 2rpx solid rgba(229, 229, 229, 1);
		position: relative;

		.words {
			width: 132rpx;
			height: 29rpx;
			position: absolute;
			left: 0;
			bottom: 8rpx;
			color: rgba(166, 166, 166, 1);
			font-size: 20rpx;
			line-height: 36rpx;
			// text-align: center;
		}
	}

	.select {
		width: 638rpx;
		height: 51rpx;
		padding-top: 16rpx;
		display: flex;
		justify-content: space-between;

		.choose {
			min-width: 52rpx;
			height: 35rpx;
			color: rgba(24, 74, 214, 1);
			text-align: center;
			font-size: 24rpx;
			line-height: 35rpx;
		}
	}
}

.specificContent {
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	.lately {
		width: 638rpx;
		height: 84rpx;
		border-bottom: 2rpx solid rgba(229, 229, 229, 1);
		position: relative;

		.history {
			width: 100%;
			height: 29rpx;
			position: absolute;
			bottom: 8rpx;
			left: 0;
			display: flex;
			justify-content: space-between;

			.recently {
				width: 88rpx;
				height: 29rpx;
				color: rgba(166, 166, 166, 1);
				font-size: 20rpx;
				text-align: center;
				vertical-align: middle;
			}

			.more {
				width: 110rpx;
				height: 29rpx;
				display: flex;
				justify-content: space-between;

				.word {
					width: 68rpx;
					height: 29rpx;
					border-right: 2rpx solid rgba(229, 229, 229, 1);
					display: flex;
					justify-content: space-between;

					.words {
						width: 44rpx;
						height: 29rpx;
						font-size: 20rpx;
						text-align: center;
						vertical-align: middle;
						color: rgba(128, 128, 128, 1);
					}

					.below {
						width: 16rpx;
						height: 16rpx;
						margin-right: 8rpx;
						margin-top: 8rpx;
						background-image: url('@/static/search-page/下.png');
						background-repeat: no-repeat;
						background-size: cover;
					}
				}

				.delete {
					width: 24rpx;
					height: 24rpx;
					margin-top: 3rpx;
					background-image: url('@/static/search-page/删除.png');
					background-repeat: no-repeat;
					background-size: cover;
				}
			}
		}
	}

	.historySearch {
		width: 638rpx;
		height: auto;

		.content {
			width: 568rpx;
			height: auto;
			margin-top: 16rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.words {
				width: 236rpx;
				height: 35rpx;
				margin-top: 16rpx;
				display: flex;
				justify-content: space-between;

				.imgs {
					width: 24rpx;
					height: 24rpx;
					margin-top: 7rpx;
					background-image: url('@/static/search-page/时间.png');
					background-repeat: no-repeat;
					background-size: cover;
				}

				.txts {
					width: 208rpx;
					height: 35rpx;
					font-size: 24rpx;
					color: rgba(128, 128, 128, 1);
					vertical-align: middle;
					overflow: hidden; /* 超出部分隐藏 */
					text-overflow: ellipsis;
				}
			}
		}
	}
}
</style>
