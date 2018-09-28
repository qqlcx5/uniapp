<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">

				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				发送币种
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="info-box">
			<view class="item title-box">
				<view class="title-img">
					<image src="../../static/totle.png" mode=""></image>
				</view>
				<view class="title-name">
					总金额
				</view>
				<view class="title-money">
					<input type="number" placeholder="0.00" value="" />
				</view>
				<view class="title-name">
					CNY
				</view>

			</view>
			<view class="item logo-box">
				<view class="logo">
					<image src="../../static/logo_2.png" mode=""></image>
				</view>
				<view class="logo">
					<image src="../../static/logo_3.png" mode=""></image>
				</view>
				<view class="logo">
					<image src="../../static/logo_4.png" mode=""></image>
				</view>
				<view class="logo">
					<image src="../../static/logo_5.png" mode=""></image>
				</view>
			</view>
			<view class="item input-box">
				<input type="text" value="" placeholder="恭喜发财,大吉大利" />
			</view>
		</view>
		<view class="money-box">
			CNY：0.00
		</view>
		<view class="btn-box">
			<view class="btn">
				塞进红包
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

	.info-box {
		min-height: 400px;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.item {
		margin-top: 20px;
		width: 100%;
		height: 140px;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		border-radius: 10px;
		padding: 0 20px;
		box-sizing: border-box;

	}

	.title-img {
		height: 80px;
		width: 80px;

	}

	.title-img image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.title-name {
		margin-left: 20px;
		font-size: 36px;
		color: #6c6c6c;
	}

	.title-money input {
		flex: 1;
		height: 140px;
		text-align: right;
		color: #b6b6b6;
	}

	.logo-box .logo {
		width: 25%;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo-box image {
		width: 80px;
		height: 80px;
	}

	.input-box input {
		height: 140px;
		width: 100%;
	}

	.money-box {
		margin-top: 20px;
		width: 100%;
		height: 80px;
		line-height: 80px;
		font-size: 48px;
		color: #6c6c6c;
		text-align: center;
	}

	.btn-box {
		margin-top: 40px;
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn-box .btn {
		width: 400px;
		height: 70px;
		background-color: #e97b78;
		border-radius: 36px;
		line-height: 70px;
		text-align: center;
		color: #FFFFFF;
	}
</style>
