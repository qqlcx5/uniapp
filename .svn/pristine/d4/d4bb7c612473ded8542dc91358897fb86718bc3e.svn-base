<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">

				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				认证成功
			</view>
			<view class="header-right">
				<!-- <image src="../../static/sousuo.png" mode=""></image> -->
			</view>

		</view>
		<view class="show">
			<view class="show-img">
				<image src="../../static/shenfenzheng_4.png" mode=""></image>
			</view>
			<p class="show-title">恭喜！认证成功</p>
			<p class="show-desc">可以立即开启店铺啦</p>
		</view>
		<view class="shop-btn">
			<view class="btn redbtn">
				立即开店
			</view>
			<view class="btn defalutbtn">
				暂不开通
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

	.show {
		min-height: 400px;
		width: 100%;
		padding: 120px 0 80px;
		box-sizing: border-box;
	}

	.show-img {
		width: 200px;
		height: 160px;
		overflow: hidden;
		margin: 0 auto;

	}

	.show-img image {
		width: 100%;
		height: 100%;
	}

	.show-title {
		margin: 40px 0 10px;
		width: 100%;
		font-size: 36px;
		text-align: center;
		color: #585858;
	}

	.show-desc {
		width: 100%;
		text-align: center;
		font-size: 28px;
		color: #b6b6b6;
	}

	.shop-btn {
		min-height: 200px;
		width: 100%;
	}

	.btn {
		width: 400px;
		height: 88px;
		border-radius: 44px;
		line-height: 88px;
		text-align: center;


	}

	.redbtn {
		background-color: #e97b78;
		border: solid 4px #e97b78;
		color: #FFFFFF;
		margin: 0 auto;
	}

	.defalutbtn {
		background-color: #FFFFFF;
		font-size: 36px;
		border: solid 4px #e97b78;
		color: #e97b78;
		margin: 40px auto 0;
	}
</style>
