<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				个人头像
			</view>
			<view class="header-right">
				更换
			</view>
		</view>
		<view class="img-box">
			<image src="../../static/bg.jpg" mode=""></image>
		</view>
		<view class="btn-box">
			<view class="btn">
				拍照
			</view>
			<view class="btn">
				从手机相册选择
			</view>
			<view class="btn mgt">
				取消
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		data: {},
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
	.page{
		height: 100vh;
		width: 100%;
		overflow: hidden;
	}
	.header {
		height: 128px;
		width: 100%;
		padding-top: 40px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background: #FFFFFF;
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

	.btn-box {
		min-height: 100px;
		width: 100%;
		padding: 60px 0;
		box-sizing: border-box;
	}

	.btn {
		width: 90%;
		height: 70px;
		line-height: 70px;
		display: block;
		background: #FFFFFF;
		margin: 0 auto 4px;
		color: #6C6C6C;
		text-align: center;
		border-radius: 12px;
	}

	.mgt {
		margin-top: 20px;
	}

	.img-box {
		margin-top: 80px;
		width: 100%;
		height: 100vw;
		background-color: #007AFF;
	}

	.img-box image {
		width: 100%;
		height: 100%;
	}
</style>
