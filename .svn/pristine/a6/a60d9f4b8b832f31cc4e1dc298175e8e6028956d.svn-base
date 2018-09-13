<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				付款成功
			</view>
			<view class="header-right">
				<!-- <image src="../../static/sousuo.png" mode=""></image> -->
			</view>
		</view>
		<view class="payimage">
			<image src="../../static/zhifuchenggong.png"></image>
			<p>支付成功</p>
			<view class="payinfo">
				<image src="../../static/logo_2.png" mode=""></image>
				360 BBB
			</view>
		</view>
		<view class="user">
			<image src="../../static/bg.jpg" mode=""></image>
			<p>收款人:克里斯(陈*钦)</p>
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
		padding-top: 60px;
	}

	.payimage image:first-child {
		width: 200px;
		height: 200px;
	}

	.payimage p {
		font-size: 36px;
		color: #585858;
		margin: 40px 0;
	}

	.payinfo {
		height: 70px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 48px;
		color: #6c6c6c;
	}

	.payimage .payinfo image {
		width: 60px;
		height: 60px;
		margin-right: 20px;
	}

	.user {
		width: 100%;
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	.user image {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}

	.user p {
		margin-top: 20px;
		font-size: 32px;
		color: #585858;
	}
</style>
