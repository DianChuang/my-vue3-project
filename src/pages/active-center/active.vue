<script setup>
import { onMounted } from 'vue'
onMounted(() => {
	uni.hideTabBar({
		animation: false,
	})
})
</script>
<template>
	<view class="container">
		<scroll-view class="active" scroll-y>active</scroll-view>
		<EtbottomTarbar></EtbottomTarbar>
	</view>
</template>

<style scoped>
.active {
	flex: 1;
}
.container {
	display: flex;
	flex-direction: column;
	height: 100vh;
}
</style>
