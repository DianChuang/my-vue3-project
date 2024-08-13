<script>
export default {
	onLaunch: function () {
		console.log('App Launch')
	},
	onShow: function () {
		// 隐藏原生tabbar
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
}
import '@/static/font/stylesheet.css'
</script>

<style>
page {
	background-color: rgba(245, 245, 245, 1);
	font-family: Source;
}
.safe-area-inset-bottom {
	background: rgba(255, 255, 255, 1);
}
scroll-view {
	flex: 1;
	height: 100%;
	overflow: hidden;
}
</style>
