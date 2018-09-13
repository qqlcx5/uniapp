<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left_2.png" mode=""></image>
			</view>
			<view class="header-content">
				提币
			</view>
			<view class="header-right">
			</view>
		</view>
		<view class="moneyOver">
			<view class="logo">
				<view class="logo-box">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<p>BBB</p>
			</view>
			<view class="over">
				<p class="num">100.8</p>
				<p class="desc">可用余额</p>
			</view>
		</view>
		<view class="address">
			<view class="address-box">
				<view class="address-item">
					<view class="item-left">
						提币地址：
					</view>
					<view class="item-content">
						<input placeholder-class="placeholder" type="text" placeholder="输入或长按粘贴地址" value="" />
					</view>
					<view class="item-right">
						<image src="../../static/qrcode.png" class="qrcode"></image>
					</view>
				</view>
				<view class="address-item">
					<view class="item-left">
						数量：
					</view>
					<view class="item-content">
						<input placeholder-class="placeholder" type="text" placeholder="最小提币数量1200BBB" value="" />
					</view>
					<view class="item-right">
						全部
					</view>
				</view>
				<view class="address-item">
					<view class="item-left">
						手续费：
					</view>
					<view class="item-content">
						<input placeholder-class="placeholder" type="text" placeholder="1000" value="" />
					</view>
					<view class="item-right">
						BBB
					</view>
				</view>
			</view>
		</view>
		<view class="arrival">
			<view class="arrival-left">
				到账数量：
			</view>
			<view class="arrival-right">
				55555BBB
			</view>
		</view>
		 <view class="btn">
		 	确定
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
			goback: function () {
				uni.navigateBack({
					delta:1,
				})
			},
		}
	}
</script>
<style>
	.page {
		background: #F1F1F1;
		min-height: 100vh;
		width: 100%;
	}

	.header {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		color: #FFFFFF;
		background-color: #8cafea;
	}

	.header-left,
	.header-right {
		width: 100px;
		height: 100px;
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

	.moneyOver {
		height: 340px;
		width: 100%;
		background: #8cafea;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #FFFFFF;
		font-size: 28px;
	}

	.logo {
		height: 200px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.logo-box {
		height: 114px;
		width: 114px;
		margin: 20px 0;
	}

	.logo-box image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.over {
		height: 140px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.num {
		height: 60px;
		line-height: 60px;
		font-size: 48px;
	}

	.desc {
		height: 80px;
		line-height: 80px;
	}

	.address {
		height: 440px;
		width: 100%;
		
		box-sizing: border-box;
		overflow: hidden;
		padding: 20px;
		font-size: 32px;
	}

	.address-box {
		width: 100%;
		height: 400px;
		background: #FFFFFF;
		box-shadow: 0px 0px 8px 0px #d3d3d3;
		border-radius: 10px;
		box-sizing: border-box;
		padding: 40px 40px 0 40px;
	}

	.address-item {
		width: 100%;
		height: 80px;

		margin-bottom: 40px;
		display: flex;
		align-items: center;
	}

	.item-left {
		width: 160px;
		height: 80px;
		line-height: 80px;
		font-size: 32px;
		color: #585858;
	}

	.item-content {
		flex: 1;
	}

	.item-content input {
		height: 76px;
		border-radius: 10px;
		background: #fff;
		padding-left: 20px;
		border: solid 2px #d0d0d0;
	}

	.placeholder {
		font-size: 28px;
		color: #b6b6b6;
	}

	.qrcode {
		width: 40px;
		height: 40px;
	}

	.item-right {
		width: 80px;
		height: 80px;

		color: #b6b6b6;
		font-size: 28px;
		display: flex;
		align-items: center;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.arrival{
		height: 80px;
		width: 100%;
		
		padding: 0 60px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	.arrival-right{
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}
	.btn{
	width: 50%;
	height: 70px;
	margin: 5% auto 0;
	background-color: #e97b78;
	border-radius: 32px;
	display: flex;
	color: #fff;
	align-items: center;
	justify-content: center;
	}
</style>
