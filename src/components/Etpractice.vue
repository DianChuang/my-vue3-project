<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
const hotclass = ref([])

// 定义 props
const props = defineProps({
	list: {
		type: Array,
		required: true, // 如果需要，可以指定是否必需
	},
})
</script>

<template>
	<view class="hotClass">
		<view class="top">
			<view class="title">大家都在刷</view>
			<view class="more">
				<view class="words">更多</view>
				<view class="imgss"
					><image src="@/static/index-picture/school-life/右.png" class="rightArrow"></image
				></view>
			</view>
		</view>
		<view class="list">
			<view class="list-item" v-for="item in list" :key="item.id">
				<image v-if="item.src" :src="item.src" class="img" />
				<view class="name">{{ item.name }}</view>
				<view class="number">
					<image src="@/static/index-picture/school-life/用户管理.png" class="logo"></image>
					<view class="counts">{{ item.number }}</view>
				</view>
				<view class="subject">科目：{{ item.subject }}</view>
				<view class="details">
					<view class="words">查看详情</view>
					<view class="imgs"
						><image src="@/static/index-picture/school-life/右.png" class="rightArrow"></image
					></view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss">
.hotClass {
	break-inside: avoid;
	width: 331rpx;
	height: 340rpx;
	border-radius: 10px;
	background: linear-gradient(
		218.87deg,
		rgba(255, 181, 107, 1) 0%,
		rgba(255, 194, 133, 1) 9.72%,
		rgba(255, 236, 217, 1) 29.95%,
		rgba(255, 254, 252, 1) 55.08%,
		rgba(255, 255, 255, 1) 100%
	);

	.top {
		min-width: 293rpx;
		height: 35rpx;
		padding: 8rpx 23rpx 0rpx 15rpx;
		display: flex;
		justify-content: space-between;

		.title {
			margin-top: 8rpx;
			min-width: 96rpx;
			height: 35rpx;
			line-height: 35rpx;
			font-size: 24rpx;
			font-weight: 700;
			color: rgba(56, 56, 56, 1);
		}

		.more {
			display: flex;
			justify-content: space-between;
			min-width: 36rpx;
			height: 15rpx;
			margin-top: 21rpx;

			.words {
				min-width: 20rpx;
				height: 11rpx;
				color: rgba(128, 128, 128, 1);
				font-size: 10rpx;
				line-height: 11rpx;
				padding-top: 4rpx;
			}

			.imgss {
				width: 16rpx;
				height: 15rpx;
				display: flex;
				align-items: center;
				.rightArrow {
					width: 14rpx;
					height: 14rpx;
				}
			}
		}
	}

	.list {
		width: 300rpx;
		height: 282rpx;
		margin-top: 10rpx;
		margin-left: 16rpx;

		.list-item {
			width: 300rpx;
			height: 94rpx;
			position: relative;
			border-bottom: 0.6px solid rgba(209, 209, 209, 1);

			.img {
				width: 72rpx;
				height: 80rpx;
				position: absolute;
				top: 8rpx;
				left: 0;
			}

			.name {
				min-width: 191rpx;
				height: 43rpx;
				font-size: 14rpx;
				line-height: 20rpx;
				font-weight: 700;
				color: rgba(56, 56, 56, 1);
				position: absolute;
				top: 12rpx;
				left: 78rpx;
				display: -webkit-box; /* 使用 Flexbox 布局 */
				-webkit-box-orient: vertical; /* 纵向布局 */
				-webkit-line-clamp: 2; /* 限制显示两行 */
				overflow: hidden; /* 超出部分隐藏 */
				text-overflow: ellipsis;
			}

			.number {
				min-width: 31rpx;
				height: 15rpx;
				position: absolute;
				bottom: 31rpx;
				left: 78rpx;
				display: flex;
				justify-content: space-between;

				.logo {
					width: 14rpx;
					height: 14rpx;
				}

				.counts {
					min-width: 17rpx;
					height: 15rpx;
					font-size: 10rpx;
					line-height: 13rpx;
					color: rgba(166, 166, 166, 1);
					margin-top: 3rpx;
				}
			}

			.subject {
				z-index: 10;
				min-width: 50rpx;
				max-width: 100rpx;
				height: 15rpx;
				overflow-x: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				position: absolute;
				bottom: 15rpx;
				left: 78rpx;
				font-size: 10rpx;
				line-height: 20rpx;
				color: rgba(166, 166, 166, 1);
			}

			.details {
				min-width: 62rpx;
				height: 18rpx;
				position: absolute;
				bottom: 13rpx;
				right: 9rpx;
				display: flex;
				justify-content: space-between;

				.words {
					min-width: 48rpx;
					height: 14rpx;
					font-size: 12rpx;
					line-height: 14rpx;
					color: rgba(166, 166, 166, 1);
					display: flex;
					align-self: center;
					padding-top: 4rpx;
				}

				.imgs {
					width: 16rpx;
					height: 18rpx;
					display: flex;
					align-items: center;

					.rightArrow {
						width: 14rpx;
						height: 14rpx;
						// padding-bottom: 4rpx;
					}
				}
			}
		}
	}
	.list > view:nth-child(3) {
		border: none;
	}
}
</style>
