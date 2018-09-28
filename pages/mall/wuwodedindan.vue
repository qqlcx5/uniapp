<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">

				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				我的订单
			</view>
			<view class="header-right">
				<image src="../../static/message.png" mode=""></image>
			</view>
		</view>
		<view class="shopcar-box">
			<image src="../../static/shopcar.png" mode=""></image>
			<p>您还未购买商品，无订单记录</p>
			<view class="btn">
				前往商城购买
			</view>
		</view>
	</view>

</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			goback: function() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>
<style>
	.header {
		height: 128px;
		width: 100%;
		display: flex;
		box-sizing: border-box;
		padding-top: 20px;
		align-items: center;
		background-color: #fff;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
	}

	.header image {
		width: 40px;
		height: 40px;
	}

	.header-left,
	.header-right {
		width: 88px;
		height: 88px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-content {
		flex: 1;
		font-size: 36px;
		text-align: center;
	}

	.shopcar-box {
		height: 700px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}

	.shopcar-box image {
		width: 200px;
		height: 200px;
		margin-bottom: 40px;
	}

	.shopcar-box p {
		font-size: 32px;
		color: #6c6c6c;
		margin-bottom: 40px;
	}

	.shopcar-box .btn {
		width: 400px;
		height: 88px;
		line-height: 88px;
		text-align: center;
		color: #FFFFFF;
		background-color: #79c343;
		border-radius: 44px;
	}
</style>
