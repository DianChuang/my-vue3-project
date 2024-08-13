<script setup>
import { ref } from 'vue'

const info = ref([
	{
		id: '1',
		day: '9.1',
		week: '一',
		weekday: '一',
		classname: '离散数学',
		address: '扬教3103',
		teacher: '老师',
		start: '14:00',
		last: '15:35',
		lastTime: '20',
	},
	{
		id: '2',
		day: '9.1',
		week: '一',
		weekday: '一',
		classname: '高等数学',
		address: '扬教3103',
		teacher: '老师',
		start: '14:00',
		last: '15:35',
		lastTime: '20',
	},
])

const activeIndex = ref(0)

const change = (e) => {
	activeIndex.value = e.detail.current
}
</script>

<template>
	<view class="convenience">
		<uni-swiper-dot class="lessons" :info="info" field="content">
			<swiper class="swiper-box" :circular="true" autoplay="true" @change="change" :interval="2000">
				<swiper-item class="lesson-item" v-for="item in info" :key="item.id">
					<view class="lesson">
						<view class="date">
							<view class="day">{{ item.day }}</view>
							<view class="week">第{{ item.week }}周</view>
							<view class="weekday">周{{ item.weekday }}</view>
						</view>
						<view class="specific">
							<view class="more">查看详情</view>
							<image src="@/static/index-picture/convenience/右.png"></image>
						</view>
						<view class="blue"></view>
						<view class="classname">{{ item.classname }}</view>
						<view class="message">
							<view class="address">{{ item.address }}</view>
							<view class="teacher">{{ item.teacher }}</view>
						</view>
						<view class="time">
							<view class="start">{{ item.start }}</view>
							<view class="last">{{ item.last }}</view>
						</view>
						<view class="lastTime"
							>距离上课还有<view>{{ item.lastTime }}</view
							>分钟</view
						>
						<!-- 指示点 -->
						<!-- <view class="indicator">
							<text
								v-for="(item, index) in info"
								:key="item.id"
								class="dot"
								:class="{ active: index === activeIndex }"
							></text>
						</view> -->
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>

		<navigator class="active">
			<image src="@/static/index-picture/convenience/组 1.png" />
		</navigator>
	</view>
</template>

<style lang="scss">
.convenience {
	width: 686rpx;
	height: 160rpx;
	margin-top: 21rpx;
	margin-left: 32rpx;
	display: flex;
	justify-content: space-between;

	.lessons {
		width: 331rpx;
		height: 160rpx;
		border-radius: 10rpx;
		overflow: hidden;
		.lesson {
			width: 331rpx;
			height: 160rpx;
			border-radius: 10rpx;
			background: linear-gradient(
				224.25deg,
				rgba(142, 203, 250, 1) 0%,
				rgba(217, 238, 255, 1) 20.83%,
				rgba(250, 253, 255, 1) 58.79%,
				rgba(255, 255, 255, 1) 100%
			);
			position: relative;

			.date {
				min-width: 112rpx;
				height: 24rpx;
				position: absolute;
				top: 13rpx;
				left: 11rpx;
				display: flex;
				justify-content: space-between;
				color: rgba(117, 195, 255, 1);
				font-size: 16rpx;
				line-height: 24rpx;

				.day {
					min-width: 23rpx;
					height: 24rpx;
					text-align: center;
				}

				.week {
					min-width: 48rpx;
					height: 24rpx;
					text-align: center;
				}

				.weekday {
					min-width: 32rpx;
					height: 24rpx;
					text-align: center;
				}
			}

			.specific {
				min-width: 72rpx;
				height: 21rpx;
				position: absolute;
				right: 13rpx;
				top: 19rpx;
				display: flex;
				justify-content: space-between;

				.more {
					min-width: 56rpx;
					height: 21rpx;
					color: rgba(128, 128, 128, 1);
					font-size: 14rpx;
					line-height: 21rpx;
				}

				image {
					width: 16rpx;
					height: 16rpx;
					display: flex;
					align-items: center;
				}
			}

			.blue {
				width: 4rpx;
				background-color: rgba(99, 188, 255, 1);
				height: 15rpx;
				top: 58rpx;
				left: 6rpx;
				position: absolute;
				border-radius: 4rpx;
			}

			.classname {
				min-width: 144rpx;
				max-width: 230rpx;
				height: 53rpx;
				color: rgba(0, 0, 0, 1);
				font-size: 36rpx;
				font-weight: 700;
				line-height: 53rpx;
				position: absolute;
				top: 43rpx;
				left: 14rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.message {
				min-width: 91rpx;
				height: 21rpx;
				display: flex;
				justify-content: space-between;
				font-size: 14rpx;
				line-height: 21rpx;
				color: rgba(128, 128, 128, 1);
				position: absolute;
				left: 11rpx;
				bottom: 45rpx;

				.address {
					min-width: 59rpx;
					height: 21rpx;
				}

				.teacher {
					min-width: 28rpx;
					height: 21rpx;
				}
			}

			.time {
				width: 41rpx;
				height: 44rpx;
				display: flex;
				flex-wrap: wrap;
				gap: 6rpx;
				position: absolute;
				right: 13rpx;
				bottom: 59rpx;
				font-size: 16rpx;
				line-height: 19rpx;
				color: rgba(0, 0, 0, 1);

				.start,
				.last {
					width: 41rpx;
					height: 19rpx;
				}
			}

			.lastTime {
				min-width: 155rpx;
				height: 35rpx;
				position: absolute;
				bottom: 20rpx;
				right: 13rpx;
				color: rgba(56, 56, 56, 1);
				font-size: 16rpx;
				line-height: 35rpx;
				display: flex;

				view {
					min-width: 30rpx;
					height: 35rpx;
					position: relative;
					bottom: 0;
					color: rgba(99, 188, 255, 1);
					font-size: 24rpx;
					line-height: 35rpx;
				}
			}

			// .indicator {
			// 	position: absolute;
			// 	width: 331rpx;
			// 	height: 16rpx;
			// 	left: 0;
			// 	right: 0;
			// 	bottom: 8rpx;
			// 	display: flex;
			// 	justify-content: center;
			// 	.dot {
			// 		width: 30rpx;
			// 		height: 10rpx;
			// 		margin: 0 8rpx;
			// 		border-radius: 6rpx;
			// 		background-color: rgba(255, 255, 255, 0.4);
			// 	}
			// 	.active {
			// 		background-color: #007aff;
			// 	}
			// }
		}
	}

	.active {
		width: 331rpx;
		height: 160rpx;
		border-radius: 10rpx;

		image {
			width: 331rpx;
			height: 160rpx;
			border-radius: 10rpx;
		}
	}
}
</style>
