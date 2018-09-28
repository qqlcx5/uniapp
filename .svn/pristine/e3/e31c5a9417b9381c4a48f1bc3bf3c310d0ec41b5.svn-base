<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				交易通知
			</view>
			<view class="header-right">
				<image src="../../static/lianxiren.png" mode=""></image>
			</view>
		</view>
		<view class="list">
			<view class="item">
				<view class="item-li">
					<image src="../../static/bg.jpg" mode=""></image>
					<text class="item-name">阿米灵感</text>
					<text class="item-time">09/12 12:51</text>
				</view>
				<view class="item-pay">
					<text class="pay-title">付款金额</text>
					<text class="pay-num">500 BBB</text>
				</view>
			</view>

		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			goback: function() {
				uni.navigateBack({
					delta: 1,
				})
			},

		}
	}
</script>
<style>
	.header {
		height: 128px;
		width: 100%;
		padding-top: 20px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background: #FFFFFF;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
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

	.list {
		min-height: 200px;
		width: 100%;
		padding: 0 30px;
		box-sizing: border-box;
	}

	.item {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 240px;
		background-color: #ffffff;
		box-shadow: 0px 4px 8px 0px #eeeeee;
		border-radius: 12px;
		overflow: hidden;
	}

	.item-li {
		display: flex;
		height: 100px;
		align-items: center;
		padding: 0 20px;
		box-sizing: border-box;
	}

	.item-li image {
		width: 80px;
		height: 80px;
		margin-right: 20px;
		border-radius: 50%;
	}

	.item-li .item-name {
		flex: 1;
		font-size: 28px;
		color: #6c6c6c;
	}

	.item-li .item-time {
		font-size: 28px;
		color: #b6b6b6;
	}

	.item-pay {
		height: 140px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.item-pay .pay-title {
		font-size: 28px;
		color: #b6b6b6;
		line-height: 40px;
	}

	.item-pay .pay-num {
		line-height: 66px;
		font-size: 48px;
		color: #6c6c6c;
	}
</style>
