<script setup>
import { onMounted, ref, nextTick } from 'vue'
import reviewNavbar from './components/review-navbar.vue'
import cards from './components/card.vue'
import diverse from './components/diverse.vue'
const { safeAreaInsets } = uni.getSystemInfoSync()
onMounted(() => {
	uni.hideTabBar({
		animation: false,
	})
	monthInfo.value = getMonthInfo(currentYear, currentMonth)
})

const weekdays = ref([
	{
		id: 1,
		name: '日',
	},
	{
		id: 2,
		name: '一',
	},
	{
		id: 3,
		name: '二',
	},
	{
		id: 4,
		name: '三',
	},
	{
		id: 5,
		name: '四',
	},
	{
		id: 6,
		name: '五',
	},
	{
		id: 7,
		name: '六',
	},
])

const value = ref(0)

const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth() // 0-11
const monthInfo = ref(null)

// 根据当前月份动态生成可选月份
const range = []
for (let i = currentMonth; i < 12; i++) {
	range.push({
		id: i + 1,
		month: `${currentYear}年${i + 1}月`,
	})
}

// 提取出 month 字段作为 picker 的选项
const months = range.map((item) => item.month)

// 初始化选择的选项
const selectedOption = ref(months[0])

// 处理选择变化
const onPickerChange = (event) => {
	const selectedIndex = event.detail.value
	selectedOption.value = months[selectedIndex]

	// 提取年份和月份
	const [yearStr, monthStr] = months[selectedIndex].split('年')
	const year = parseInt(yearStr, 10)
	const month = parseInt(monthStr.replace('月', ''), 10) - 1 // 月份从 0 开始

	// 调用 getMonthInfo 函数并更新 monthInfo
	monthInfo.value = getMonthInfo(year, month)
}

const getMonthInfo = (year, month) => {
	// 检查月份是否合法（0-11）
	if (month < 0 || month > 11) {
		throw new Error('月份必须在 0 到 11 之间（0 表示一月，11 表示十二月）。')
	}

	// 获取该月份的总天数
	const totalDays = new Date(year, month + 1, 0).getDate()

	// 获取该月份第一天对应的星期数
	const firstDayOfWeek = new Date(year, month, 1).getDay()

	return {
		totalDays: totalDays,
		firstDayOfWeek: firstDayOfWeek,
	}
}
// console.log(`总天数: ${monthInfo.totalDays}`) // 应该输出 28
// console.log(`第一天对应的星期数: ${monthInfo.firstDayOfWeek}`) // 输出星期几（0-6）
</script>
<template>
	<view class="container">
		<reviewNavbar></reviewNavbar>
		<view class="active">
			<view class="bgtoo"></view>
			<view class="big">
				<cards></cards>
				<diverse></diverse>
				<view class="calendar">
					<view class="title">打卡日历</view>
					<view class="select">
						<view class="img"></view>
						<picker class="choose" :range="months" @change="onPickerChange">
							<view class="picker">{{ selectedOption }}</view>
							<view class="imgse"></view>
						</picker>
					</view>
					<view class="hold">已坚持打卡<span class="light">7</span>天!</view>
					<view class="datas">
						<view class="week">
							<view class="everyweek" v-for="item in weekdays" :key="item.id">{{ item.name }}</view>
						</view>
						<view class="day">
							<view
								class="everyday"
								v-for="(item, index) in monthInfo.totalDays + monthInfo.firstDayOfWeek"
								:key="index"
								>{{
									index >= monthInfo.firstDayOfWeek ? index - monthInfo.firstDayOfWeek + 1 : ''
								}}</view
							>
						</view>
					</view>
					<view class="begin">开始学习</view>
				</view>
			</view>
		</view>
		<EtbottomTarbar></EtbottomTarbar>
	</view>
</template>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	height: 100vh;

	.active {
		flex: 1;
		position: relative;

		.bgtoo {
			width: 100%;
			height: 175rpx;
			position: absolute;
			top: 0rpx;
			background: linear-gradient(
				180deg,
				rgba(232, 242, 249, 0.7) 0%,
				rgba(240, 246, 251, 0.49) 57.41%,
				rgba(255, 255, 255, 0.08) 100%
			);
			z-index: 1;
		}

		.big {
			width: 100%;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			.calendar {
				width: 686rpx;
				min-height: 658rpx;
				margin-top: 24rpx;
				border-radius: 10rpx;
				background: rgba(255, 255, 255, 1);
				position: relative;

				.title {
					min-width: 144rpx;
					height: 53rpx;
					font-size: 36rpx;
					font-weight: 700;
					color: rgba(56, 56, 56, 1);
					vertical-align: center;
					position: absolute;
					top: 24rpx;
					left: 49rpx;
				}

				.select {
					min-width: 231rpx;
					height: 47rpx;
					position: absolute;
					top: 100rpx;
					left: 49rpx;
					display: flex;

					.img {
						width: 32rpx;
						height: 32rpx;
						margin-top: 7rpx;
						background-image: url('/static/review/日历.png');
						background-repeat: no-repeat;
						background-size: cover;
					}

					.choose {
						min-width: 198rpx;
						height: 47rpx;
						margin-left: 4rpx;

						.picker {
							min-width: 159rpx;
							height: 47rpx;
							font-size: 32rpx;
							font-weight: 700;
							color: rgba(56, 56, 56, 1);
							vertical-align: center;
							float: left;
						}

						.imgse {
							width: 25rpx;
							height: 14rpx;
							background-image: url('/static/review/路径 1.png');
							background-repeat: no-repeat;
							background-size: contain;
							float: right;
							margin-left: 10rpx;
							margin-top: 16rpx;
						}
					}
				}

				.hold {
					min-width: 197rpx;
					height: 70rpx;
					position: absolute;
					right: 26rpx;
					top: 82rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: rgba(0, 0, 0, 1);
					vertical-align: bottom;

					.light {
						font-size: 48rpx;
						font-weight: 700;
						color: rgba(20, 153, 255, 1);
					}
				}

				.datas {
					width: 650rpx;
					min-height: 415rpx;
					position: absolute;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					left: 18rpx;
					top: 169rpx;

					.week {
						width: 100%;
						height: 41rpx;
						display: flex;

						.everyweek {
							width: 60rpx;
							height: 41rpx;
							margin: 0 17rpx 0 17rpx;
							font-size: 28rpx;
							color: rgba(0, 0, 0, 1);
							vertical-align: center;
							text-align: center;
						}
					}

					.day {
						width: 100%;
						min-height: 346rpx;
						margin-top: 19rpx;
						display: flex;
						flex-wrap: wrap;

						.everyday {
							width: 60rpx;
							height: 60rpx;
							margin: 0 17rpx 11rpx 17rpx;
							border-radius: 50%;
							// color: rgba(255, 255, 255, 1);
							// background: rgba(20, 153, 255, 1);
							font-size: 28rpx;
							// font-weight: 700;
							text-align: center;
							line-height: 70rpx;
							color: rgba(0, 0, 0, 1);
						}
					}
				}

				.begin {
					width: 152rpx;
					height: 42rpx;
					padding-top: 6rpx;
					border-radius: 4rpx;
					background: rgba(20, 153, 255, 1);
					font-size: 24rpx;
					font-weight: 700;
					text-align: center;
					color: rgba(255, 255, 255, 1);
					position: absolute;
					right: 36rpx;
					bottom: 30rpx;
				}
			}
		}
	}
}
</style>
