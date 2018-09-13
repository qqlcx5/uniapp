<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				收款通知
			</view>
			<view class="header-right">
				<!-- <image src="../../static/sousuo.png" mode=""></image> -->
			</view>
		</view>
		<view class="pay">
			<view class="payheader">
				2018年8月16日 13:44
			</view>
			<view class="payinfo">
				<h2>收款到账通知</h2>
				<image src="../../static/logo_2.png" mode=""></image>

				<view class="paymoney">
					<span>+360</span>
					<em>BBB</em>
				</view>
				<p>收款成功，已存入钱包。今日共计 360BBB</p>
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
		min-height: 200px;
		width: 80%;
		margin: 40px auto 0;
		display: flex;
		flex-direction: column;
	}

	.payheader {
		display: block;
		width: 100%;
		height: 80px;
		line-height: 80px;
		text-align: center;
		font-size: 24px;
		color: #b6b6b6;
		background: #F8F8F8;
	}

	.pay .payinfo {
		height: 340px;
		box-sizing: border-box;
		padding: 30px 0;
		overflow: hidden;
		background-color: #ffffff;
		box-shadow: 0px 0px 8px 0px rgba(202, 202, 202, 0.8);
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.payinfo image {
		width: 60px;
		height: 60px;
		margin: 30px 0;
	}

	.payinfo h2 {
		height: 44px;
		width: 100%;
		line-height: 44px;
		text-align: center;
		font-size: 32px;
		color: #b6b6b6;
	}

	.paymoney {
		
		display: flex;
		align-items: flex-end;
		font-size: 48px;
		color: #595959;
	}

	.paymoney em {
		margin-left: 14px;
		font-size: 36px;
		color: #595959;
	}
	.payinfo p{
		margin-top: 16px;
		font-size: 28px;	
		color: #b6b6b6;
	}
</style>
