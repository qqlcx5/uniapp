<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				订单详情
			</view>
			<view class="header-right">
				完成
			</view>
		</view>
		<view class="info">
			<view class="item">
				<h3>转换提交申请</h3>
				<p class="item-desc">您已提交转换申请</p>
				<p class="item-time">2018年9月4日 13:53</p>
			</view>
			<view class="item">
				<h3>努力转换中</h3>
				<p class="item-desc">您的订单会尽快进行处理</p>
				<p class="item-time">2018年9月4日 13:54</p>
			</view><view class="item">
				<h3>转换成功</h3>
				<p class="item-time">2018年9月4日 13:53</p>
			</view>
		</view>
		<view class="btn">再次转换</view>
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
			goback: function () {
				uni.navigateBack({
					delta: 1,
				})
			},

		}
	}
</script>
<style>
	/* .page {
		background: #F1F1F1;
		min-height: 100vh;
		width: 100%;
	} */

	.header {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		color: #000;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
	}

	.header-left,
	.header-right {
		width: 100px;
		height: 100px;
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

	.info {
		display: flex;
		flex-direction: column;
		min-height: 400px;
		width: 80%;
		margin: 80px auto;
	 
	}

	.item {
	
		min-height: 100px;
		width: 100%;
		margin-bottom: 80px;
	}

	.item h3 {
		font-weight: bold;
		font-size: 36px;
		color: #585858;
	}

	.item-desc {
		margin-top: 10px;
		font-size: 28px;
		color: #b6b6b6;
		height: 30px;
		line-height: 30px;
	}

	.item-time {
		margin-top: 20px;
		font-size: 24px;
		color: #b6b6b6;
	}

	 .btn {
		width: 50%;
		height: 70px;
		background-color: #e97b78;
		border-radius: 36px;
		display: block;
		line-height: 70px;
		text-align: center;
		color: #FFFFFF;
		font-size: 36px;
		margin: 40px auto 0;
	}
</style>
