<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">

				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				订单详情
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="detail-box">
			<view class="detail-info">
				<view class="detail-info-title">
					<view class="detail-info-title-left">
						<image src="../../static/shop.png" mode=""></image>
					</view>
					<view class="detail-info-title-right">
						<view class="title">
							公爵209磨砂钢笔优惠券
						</view>
						<view class="title-desc">
							0.5BBB 209钢笔宝珠笔
						</view>
						<view class="title-num">
							*1
						</view>
						<view class="title-totle">
							总价：0.5BBB
						</view>
					</view>
				</view>
				<view class="detail-desc">
					<view class="detail-desc-item">
						<image src="../../static/zhifuchenggong.png" mode=""></image>
						支持随时退款
					</view>
					<view class="detail-desc-item">
						<image src="../../static/zhifuchenggong.png" mode=""></image>
						过期自动退
					</view>
				</view>
			</view>
			<view class="detail-ticked">
				<view class="ticked-title">
					<text>优惠券</text>
					<text>有效期至：2019-06-14</text>
				</view>
				<view class="ticked-item">
					<view class="tick-pay">
						消费码：B2018102236548S
					</view>
					<view class="blue">
						复制
					</view>
				</view>
				<view class="ticked-item">
					<view class="tick-pay">
						使用状态：
					</view>
					<view>
						未使用
					</view>
				</view>


			</view>
		</view>
		<view class="btn-box">
			我想退款
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

	.detail-box {
		min-height: 700px;
		width: 100%;
		padding: 30px;
		box-sizing: border-box;
	}

	.detail-info {
		width: 100%;
		height: 360px;
		background-color: #ffffff;
		border-radius: 12px;
		display: flex;
		flex-direction: column;

	}

	.detail-info-title {
		height: 280px;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		border-bottom: 4px solid #EEEEEE;
	}

	.detail-info-title-left,
	.detail-info-title-right {
		width: 50%;
		min-height: 236px;
		display: flex;
		flex-direction: column;
	}

	.detail-info-title-left image {
		width: 100%;
		height: 100%;
		border-radius: 12px;

	}

	.title {
		margin-top: 20px;
		padding-left: 20px;
		font-size: 28px;
		color: #6c6c6c;

	}

	.title-desc {
		padding-left: 20px;
		font-size: 24px;

		color: #6c6c6c;
	}

	.title-num {
		margin: 20px 0;
		width: 100%;
		text-align: right;
		height: 44px;
		font-size: 32px;
		color: #6c6c6c;

	}

	.title-totle {
		font-size: 28px;
		color: #6c6c6c;
		width: 100%;
		height: 40px;
		text-align: right;
	}

	.detail-desc {
		height: 80px;
		width: 100%;
		padding-left: 20px;
		box-sizing: border-box;
		display: flex;
	}

	.detail-desc-item {
		height: 80px;
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 28px;
		color: #79c343;
		margin-right: 100px;
	}

	.detail-desc-item image {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		margin-right: 20px;
	}

	.detail-ticked {
		margin-top: 30px;
		width: 100%;
		height: 288px;
		background-color: #ffffff;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
	}

	.ticked-title {
		width: 100%;
		height: 120px;
		padding: 20px;
		box-sizing: border-box;
		border-bottom: solid 4px #eeeeee;
		font-size: 28px;
		color: #6c6c6c;
		display: flex;
		flex-direction: column;
	}

	.ticked-item {
		width: 100%;
		height: 80px;
		line-height: 80px;
		padding: 0 20px;
		display: flex;
		font-size: 28px;
		color: #6c6c6c;
		box-sizing: border-box;
		border-bottom: solid 4px #eeeeee;
	}

	.tick-pay {
		flex: 1;
	}

	.ticked-item:nth-child(3) {
		border: none;
	}

	.blue {
		color: #8cafea;
	}

	.btn-box {
		margin: 40px auto 0;
		line-height: 88px;
		color: #FFFFFF;
		text-align: center;
		width: 400px;
		height: 88px;
		background-color: #e97b78;
		border-radius: 44px;
	}
</style>
