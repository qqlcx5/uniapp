<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				付款
			</view>
			<view class="header-right">
				<!-- <image src="../../static/sousuo.png" mode=""></image> -->
			</view>
		</view>
		<view class="pay">
			<view class="payheader">
				<view class="paytitle">
					付款给个人
				</view>
				<view class="payuser">
					<image src="../../static/bg.jpg" mode=""></image>
					<p>昵称:克里斯(陈*钦)</p>
				</view>
			</view>
			<view class="payinfo">
				<h2>金额</h2>
				<view class="paymoney">
					<image src="../../static/logo_2.png" mode=""></image>
					360 BBB
				</view>
			</view>
			<view class="paybtn">
				<view class="btn">付款</view>
				<p>添加备注</p>
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

	.pay {
		height: 540px;
		width: 700px;
		background-color: #FFFFFF;
		margin: 40px auto 0;
		display: flex;
		flex-direction: column;
	}

	.payheader {
		width: 100%;
		height: 140px;
		background-color: #8cafea;
		display: flex;
	}

	.paytitle {
		flex: 1;
		height: 140px;
		color: #FFFFFF;
		line-height: 140px;
		font-size: 36px;
		padding-left: 30px;
		color: #ffffff;
	}

	.payuser {
		min-width: 200px;
		height: 140px;
		display: flex;
		padding-right: 30px;
		align-items: center;
		/* justify-content: center; */
		flex-direction: column;
	}

	.payuser image {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background-color: #d8d8d8;
		margin: 10px 0;
	}

	.payuser p {
		font-size: 24px;
		color: #ffffff;
	}

	.payinfo {
		height: 200px;
		padding-left: 30px;
		border-bottom: 2px solid #EEEEEE;
	}

	.payinfo h2 {
		height: 100px;
		line-height: 100px;
		font-size: 36px;
		color: #b6b6b6;
	}

	.paymoney {
		height: 100px;
		display: flex;
		font-size: 48px;
		color: #6c6c6c;
		align-items: center;
	}

	.paymoney image {
		width: 60px;
		height: 60px;
		margin-right: 30px;
	}

	.paybtn {
		height: 200px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.paybtn .btn {
		width: 60%;
		height: 70px;
		background-color: #79c343;
		border-radius: 44px;
		line-height: 70px;
		color: #FFFFFF;
		text-align: center;
		margin: 30px 0;
	}

	.paybtn p {
		font-size: 28px;
		color: #8cafea;
	}
</style>
