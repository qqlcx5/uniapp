<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				支付失败
			</view>
			<view class="header-right">
				<!-- <image src="../../static/sousuo.png" mode=""></image> -->
			</view>
		</view>
		<view class="payimage">
			<image src="../../static/fukuanshibai.png"></image>
			<p>支付密码错误，请重试</p>
			<view class="payinfo">
				<view class="btn chongsi">重试</view>
				<view class="btn forget">忘记密码</view>
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
			goto: function () {
				uni.navigateTo({
					url: "tickRecord"
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
		background: #8cafea;
		background-color: #fff;
		box-sizing: border-box;
		padding-top: 22px;
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

	.payimage {
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 500px;
		align-items: center;
		/* background-color: #fff; */
		padding-top: 120px;
	}

	.payimage image:first-child {
		width: 240px;
		height: 200px;
	}

	.payimage p {
		margin: 40px 0;
		font-size: 28px;
		color: #6c6c6c;
	}

	.payinfo {
		height: 70px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn {
		width: 200px;
		height: 70px;
		background-color: #ffffff;
		border-radius: 34px;
		border: solid 1px #b6b6b6;
		line-height: 70px;
		text-align: center;
	}

	.chongsi {
		margin-right: 20px;
		color: #6c6c6c;
	}

	.forget {
		margin-left: 20px;
		color: #79c343;
	}
</style>
