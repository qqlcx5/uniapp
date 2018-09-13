<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				接收地址
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="content">
			<view class="box">
				<image src="../../static/jieshoudizhi.png" mode=""></image>
				<p>您还没有添加接收地址</p>
			</view>
			<view class="btn">
				添加接收地址
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
			goback: function () {
				uni.navigateBack({
					delta: 1,
				})
			},

		}
	}
</script>
<style>
	.header {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #FFFFFF;
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

	.box {
		margin: 30% auto 0;
		width: 50%;
		height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.box image {
		width: 240px;
		height: 200px;
	}

	.box p {
		margin: 30px 0;
		font-size: 32px;
		color: #b6b6b6;
	}

	.btn {
		width: 50%;
		height: 70px;
		background-color: #e97b78;
		border-radius: 36px;
		color: #FFFFFF;
		line-height: 70px;
		text-align: center;
		margin: 5% auto 0;
	}
</style>
