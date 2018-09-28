<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">

				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				实名认证
			</view>
			<view class="header-right">
				<!-- <image src="../../static/sousuo.png" mode=""></image> -->
			</view>

		</view>

		<view class="banner">
			<image src="../../static/shenfenzheng_5.png" mode=""></image>
			<text>根据国家监管要求，完成可信渠道的身份验证，可立即开启店铺，并实施运营。</text>
		</view>
		<view class="id">
			<view class="id-item">
				<view class="id-name">
					真实姓名
				</view>
				<input type="text" value="" placeholder-class="placeholder" placeholder="请输入真实姓名" />
			</view>
			<view class="id-item">
				<view class="id-name">
					身份证号
				</view>
				<input type="text" value="" placeholder-class="placeholder" placeholder="请输入15位或18位身份证号" />
			</view>
		</view>
		<view class="upid">
			<view class="upid-name">
				上传身份证照片
			</view>
			<view class="upimg-box">
				<view class="upimg-item">
					<image src="../../static/shenfenzheng_3.png" mode=""></image>
				</view>
				<view class="upimg-item">
					<image src="../../static/shenfenzheng_2.png" mode=""></image>
				</view>
			</view>
			<view class="submit-box">
				<view class="btn">
					提交
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

	.banner {
		width: 750px;
		height: 320px;
		background-color: #d8d8d8;
		overflow: hidden;
		position: relative;

	}

	.banner image {
		width: 100%;
		height: 100%;
	}

	.banner text {
		position: absolute;
		bottom: 50px;
		left: 0;
		padding: 0 80px;
		font-size: 24px;
		line-height: 32px;
		color: #ffffff;
	}

	.id {
		min-height: 100px;
		width: 100%;
		padding-top: 60px;
		overflow: hidden;
		background-color: #FFFFFF;
		border-bottom: 20px solid #EEEEEE;
	}

	.id-item {
		width: 100%;
		height: 136px;
		border-bottom: solid 2px #f7f7f7;
		display: flex;
		align-items: center;
	}

	.id-name {
		padding: 0 30px;
	}

	.id input {
		flex: 1;
		height: 136px;
	}

	.placeholder {
		font-size: 32px;
		color: #b6b6b6;
	}

	.upid {
		min-height: 100px;
		width: 100%;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	.upid-name {
		width: 100%;
		height: 136px;
		border-bottom: solid 2px #f7f7f7;
		display: flex;
		padding-left: 30px;
		align-items: center;
	}

	.upimg-box {
		min-height: 200px;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		padding: 30px 0 0 30px;
		display: flex;
	}

	.upimg-item {
		box-sizing: border-box;
		padding: 20px;
		border: dashed 4px #b6b6b6;
		width: 50%;
		height: 220px;
		margin: 0 30px 30px 0;
		overflow: hidden;
	}

	.upimg-item image {
		width: 100%;
		height: 100%;
	}

	.submit-box {
		min-height: 80px;
		width: 100%;
		background-color: #FFFFFF;
		padding: 40px 0;
		overflow: hidden;
	}

	.submit-box .btn {
		width: 400px;
		height: 88px;
		background-color: #79c343;
		border-radius: 44px;
		line-height: 88px;
		text-align: center;
		color: #FFFFFF;
		margin: 0 auto;

	}
</style>
