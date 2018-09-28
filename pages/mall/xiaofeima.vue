<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				消费码
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="bg-title">
			消费码验证
		</view>
		<view class="input-box">
			<input type="text" placeholder="B2018092215665S" value="" />
			<view class="input-btn-box">
				<view class="btn">
					验证
				</view>
			</view>

		</view>
		<view class="valid-box">
			<image src="../../static/zhifuchenggong.png" mode=""></image>
			<text>消费成功</text>
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

	.bg-title {
		width: 100%;
		height: 340px;
		line-height: 200px;
		color: #FFFFFF;
		font-size: 36px;
		text-align: center;
		background: url(http://p4ygml8h5.bkt.clouddn.com/pay-info) no-repeat center bottom;
			background-size: cover;
	}

	.input-box {
		min-height: 160px;
		width: 100%;
		padding: 0 30px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.input-box input {
		flex: 1;
		height: 88px;
		padding-left: 20px;
		border-radius: 12px;
		border: solid 2px #6c6c6c;
	}

	.input-btn-box {
		margin-top: 40px;
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.input-btn-box .btn {

		width: 140px;
		height: 64px;
		border-radius: 44px;
		line-height: 64px;
		text-align: center;
		border: solid 2px #79c343;
	}

	.valid-box {
		margin-top: 140px;
		width: 100%;
		min-height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 36px;
		color: #585858;
	}

	.valid-box image {
		width: 200px;
		height: 200px;
		margin-bottom: 40px;
	}
</style>
