<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				购物车
			</view>
			<view class="header-right">
				<image src="../../static/message.png" mode=""></image>
			</view>
		</view>
		<view class="ticked">
			<view class="ticked-title">碧波币</view>
			<view class="ticked-content">
				<image src="../../static/ticked_2.png" mode=""></image>92代100 BBB券</view>
			<view class="ticked-desc">周一至周日可用 | 全场通用 | 免预约 | 可叠加</view>
		</view>
		<view class="list">
			<view class="item">
				<view>买入数量</view>
				<number-box></number-box>
			</view>
			<view class="item">
				<view>实付金额</view>
				<view class="money">CNY 184</view>
			</view>
			<view class="item">
				<view>手机号</view>
				<view class="tel">159****1537</view>
			</view>
		</view>
		<view class="btn">
			确认支付
		</view>
	</view>
</template>
<script>
	import numberBox from '../../components/number-box.vue'
	export default {
		data() {
			return {}
		},
		components: {
			numberBox
		},
		methods: {
			goback: function () {
				uni.navigateBack({
					delta: 1,
				})
			},
			gopay() {
				uni.navigateTo({
					url: 'zhuanhuanchenggong'
				})
			}

		}
	}
</script>

<style>
	/* 	.page {
		background: #FFFFFF;
		width: 100%;
		height: 100vh;
	} */

	.header {
		height: 128px;
		box-sizing: border-box;
		padding-top: 40px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #FFFFFF;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
		margin-bottom: 40px;
	}

	.header-left,
	.header-right {
		width: 100px;
		height: 88px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header image {
		width: 40px;
		height: 40px;
	}

	.header-content {
		flex: 1;
		text-align: center;
	}

	.ticked {
		width: 650px;
		height: 248px;
		background-color: #8cafea;
		border-radius: 20px;
		margin: 0 auto;
		border: solid 2px #8cafea;
		padding: 40px 60px;
		box-sizing: border-box;
		color: #eeeeee;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		margin-bottom: 54px;
	}

	.ticked-title {
		font-size: 24px;
		color: #eeeeee;
	}

	.ticked-content {
		display: flex;
		height: 60px;
		align-items: center;
		font-size: 40px;
		color: #ffffff;
		margin: 26px 0;
	}

	.ticked-content image {
		width: 40px;
		height: 40px;
		margin-right: 20px;
	}

	.ticked-desc {
		font-size: 24px;
		color: #eeeeee;
	}

	.list {
		display: flex;
		width: 100%;
		min-height: 100px;

		flex-direction: column;
	}

	.item {
		width: 100%;
		height: 100px;
		display: flex;
		padding: 0 28px;
		box-sizing: border-box;
		align-items: center;
		font-size: 32px;
		color: #585858;
		justify-content: space-between;
		border-bottom: 2px solid #E8E8E8;
	}

	.money {
		font-size: 40px;
		color: #8cafea;
	}

	.tel {
		font-size: 32px;
		color: #b6b6b6;
	}
	.btn{
		width: 400px;
	height: 70px;
	background-color: #e97b78;
	border-radius: 36px;
	line-height: 70px;
	color: #FFFFFF;
	text-align: center;
	position: fixed;
	bottom: 40px;
	
	left: 50%;
	margin-left: -200px;
	}
</style>
