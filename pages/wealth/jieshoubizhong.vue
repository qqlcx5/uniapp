<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				接收币种
			</view>
			<view class="header-right">
			</view>
		</view>
		<view class="qrcode">
			<view class="qrheader">
				<image src="../../static/qianbao.png" mode=""></image>
				<span>二维码收币</span>
			</view>
			<view class="image-box">
				<image src="../../static/qrcode.jpg"></image>
			</view>
			<p>请发送者通过二维码扫描支付</p>
		</view>
		<view class="address">
			<p>需要接收的数量（可选）</p>
			<view class="address-item">
				<p>数量（个）</p>
				<input type="number" placeholder-class="place" placeholder="0" name="" id="">
			</view>
		</view>
		<view class="btn">确定</view>
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
					delta: 1,
				})
			},

		}
	}
</script>
<style>
	/* .page {
		background: #F1F1F1;
		min-height: 100vh;
		width: 100%;
	} */

	.header {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		color: #000;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
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

	.qrcode {
		display: flex;
		margin-top: 80px;
		min-height: 600px;
		width: 80%;
		margin: 80px auto 0;
		flex-direction: column;
		align-items: center;
		border: 2px solid #EEEEEE;
		background: #FFFFFF;
	}

	.qrheader {
		height: 100px;
		width: 100%;
		background-color: #8cafea;
		display: flex;
		color: #FFFFFF;
		align-items: center;
	}

	.qrheader image {
		width: 40px;
		height: 40px;
		margin: 0 20px;
	}

	.image-box {
		margin: 40px 0;
		height: 368px;
		width: 368px;
		padding: 20px;
		
	}

	.image-box image {
		width: 100%;
		height: 100%;
	}

	.qrcode p {
		color: #8cafea;
		font-size: 28px;
		color: #b6b6b6;
		margin-bottom: 30px;
	}

	.address {
		display: flex;
		flex-direction: column;
		min-height: 100px;
		width: 80%;
		margin: 0 auto;
		font-size: 24px;
	}

	

	.address-item {
		display: flex;
		height: 100px;
		width: 100%;
		align-items: center;
		border: 2px solid #EEEEEE;
		background: #FFFFFF;
	}
	.address p {
		height: 40px;
		line-height: 40px;
		font-size: 28px;
		color: #b6b6b6;
		margin: 30px 0;
		padding: 0 20px;
	}
	input{
		flex: 1;
		padding-left: 20px;
		font-size: 36px;
		color: #b6b6b6;
	}
	.place{
		color: #b6b6b6;
	}
	.btn{
	width: 50%;
	height: 70px;
	background-color: #e97b78;
	border-radius: 36px;
	display: block;
	line-height: 70px;
	text-align: center;
	color: #FFFFFF;
	font-size: 36px;
	margin: 40px auto 0;
	}
</style>
