<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				支付
			</view>
			<view class="header-right">
				<!-- <image src="../../static/sousuo.png" mode=""></image> -->
			</view>
		</view>
		<view class="pay">
			<view class="payheader">
				<image src="../../static/clear_@.png" mode=""></image>
				请输入支付密码
			</view>
			<view class="payinfo">
				<p>碧波红包</p>
				<p>3500 BBB</p>
			</view>
			<view class="selectpay">
				<image src="../../static/logo_2.png" mode=""></image>
				<view class="selectpaytitle">碧波零钱</view>
				<image src="../../static/right.png"></image>
			</view>
			<view class="input">
				<input type="text" value="" />
				<input type="text" value="" />
				<input type="text" value="" />
				<input type="text" value="" />
				<input type="text" value="" />
				<input type="text" value="" />
			</view>
		</view>
		<view class="fix">
			<view class="fixnum">1</view>
			<view class="fixnum">2</view>
			<view class="fixnum">3</view>
			<view class="fixnum">4</view>
			<view class="fixnum">5</view>
			<view class="fixnum">6</view>
			<view class="fixnum">7</view>
			<view class="fixnum">8</view>
			<view class="fixnum">9</view>
			<view class="fixnum"></view>
			<view class="fixnum">0</view>
			<view class="fixnum"><image src="../../static/shanchu_2.png" mode=""></image></view>
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
		height: 480px;
		width: 80%;
		background-color: #FFFFFF;
		margin: 60px auto 0;
		display: flex;
		flex-direction: column;
	}

	.payheader {
		width: 100%;
		height: 88px;
		background-color: #FFFFFF;
		display: flex;
		line-height: 88px;
		justify-content: center;
		position: relative;
		border-bottom: 2px solid #8cafea;
	}

	.payheader image {
		width: 25px;
		height: 25px;
		left: 30px;
		top: 36px;
		position: absolute;
	}

	.payinfo {
		height: 170px;
		display: flex;
		width: 90%;
		margin: 0 auto;
		flex-direction: column;
		align-items: center;
		border-bottom: 2px solid #EEEEEE;
	}

	.payinfo p:nth-of-type(1) {
		font-size: 28px;
		color: #b6b6b6;
		height: 30px;
		line-height: 30px;
		margin: 30px 0;
	}

	.payinfo p:nth-of-type(2) {
		font-size: 48px;
		color: #e97b78;
	}

	.selectpay {
		height: 80px;
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.selectpay image:nth-of-type(1) {
		width: 60px;
		height: 60px;
	}

	.selectpay image:nth-of-type(2) {
		width: 24px;
		height: 24px;
	}

	.selectpaytitle {
		padding-left: 30px;
		flex: 1;
		font-size: 28px;
		color: #b6b6b6;
	}
	.input{
		width: 90%;
		display: flex;
		margin: 30px auto 0;
	}
	.input input{
		width: 16.66%;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid #EEEEEE;
	}
	.fix{
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		height: 430px;
		width: 100%;
		padding: 16px 0 0 16px;
		background-color: #BBBBBB;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		
	}
	.fixnum{
		width: 31.33%;
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 40px;
		border-radius: 10px;
		margin: 0 16px 16px 0;
		background-color: #FFFFFF;
	}
	.fixnum:nth-of-type(10){
		background-color: #BBBBBB;
	}
	.fixnum image{
		width: 50px;
		height: 40px;
	}
</style>