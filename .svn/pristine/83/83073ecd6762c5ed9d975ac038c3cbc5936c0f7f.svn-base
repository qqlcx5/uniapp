<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">

				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				我的订单
			</view>
			<view class="header-right">
				<image src="../../static/message.png" mode=""></image>
			</view>
		</view>
		<view class="bill-box">
			<view class="bill-list">
				<view class="bill-item">
					<view class="bill-header">
						<view class="bill-header-left">
							<image src="../../static/saoyisao.png" mode=""></image>
						</view>
						<view class="bill-header-content">
							paide文具
						</view>
					</view>
					<view class="bill-title">
						<view class="bill-title-img">
							<image src="../../static/bg.jpg" mode=""></image>
						</view>
						<view class="bill-title-desc">
							<p>公爵209磨砂钢笔优惠券</p>
							<p>0.5BBB 209钢笔宝珠笔</p>
						</view>
						<view class="bill-title-right">
							<image src="../../static/right_01.png" mode=""></image>
						</view>
					</view>
					<view class="bill-time">
						交易日期：2018-09-22 12:22:22
					</view>
					<view class="bill-time">
						数 量：1
					</view>
					<view class="bill-time">
						总 价：0.5BBB
					</view>
				</view>
			</view>
		</view>
		<view class="btn-box">
			<view class="btn">
确认退款
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

	.bill-box {
		min-height: 460px;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.bill-list {
		width: 100%;
		min-height: 460px;
		padding: 30px 30px 0;
		box-sizing: border-box;
	}

	.bill-item {
		width: 100%;
		min-height: 300px;
		border-radius: 12px;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
	}

	.bill-header {
		width: 100%;
		height: 100px;
		border-bottom: 4px solid #EEEEEE;
		display: flex;
		align-items: center;
		font-size: 28px;
	}

	.bill-header-left image {
		width: 60px;
		height: 60px;
	}

	.bill-header-left,
	.bill-header-right {
		display: flex;
		align-items: center;
		height: 100px;
		margin: 0 20px;
	}

	.bill-header-content {
		flex: 1;
		height: 100px;
		line-height: 100px;

		color: #6c6c6c;
	}

	.doneColor {
		color: #79c343;
	}

	.bill-title {
		width: 100%;
		box-sizing: border-box;
		height: 120px;
		padding: 20px;
		display: flex;
		align-items: center;
	}

	.bill-title-img {
		width: 80px;
		height: 80px;

		margin-right: 20px;
	}

	.bill-title-img image {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		overflow: hidden;
	}

	.bill-title-right image {
		width: 30px;
		height: 30px;
	}

	.bill-title-desc {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.bill-title-desc p:nth-child(1) {
		font-size: 28px;
		color: #6c6c6c;
	}

	.bill-title-desc p:nth-child(2) {
		margin-top: 10px;
		font-size: 24px;
		color: #b6b6b6;
	}

	.bill-time {
		height: 60px;
		width: 100%;
		line-height: 60px;
		padding-left: 20px;
		font-size: 28px;
		color: #6c6c6c;
	}

	.btn-box {
		height: 180px;
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}

	.btn {
		width: 400px;
		height: 88px;
		background-color: #e97b78;
		border-radius: 44px;
		line-height: 88px;
		text-align: center;
		color: #FFFFFF;
	}
</style>
