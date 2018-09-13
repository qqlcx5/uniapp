<template>
	<view class="">
		<view class="header-bg">
			<image class="header-back" src="../../static/left.png" @click="goback()"></image>
			<image class="header-image" src="../../static/youxi_home.png" mode=""></image>
		</view>
		<view class="content">
			<view class="list">
				<view class="item">
					<view class="item-left">
						<image src="../../static/youxi_1.png" mode=""></image>
					</view>
					<view class="item-right">
						<p class="item-title">吃豆人</p>
						<p class="item-desc">奖励特权卡一张，加息0.1%</p>
						<view class="item-btn">立即开始</view>
					</view>
				</view>
				<view class="item">
					<view class="item-left">
						<image src="../../static/youxi_2.png" mode=""></image>
					</view>
					<view class="item-right">
						<p class="item-title">消消乐</p>
						<p class="item-desc">奖励特权卡一张，加息0.1%</p>
						<view class="item-btn">立即开始</view>
					</view>
				</view>
				<view class="item">
					<view class="item-left">
						<image src="../../static/youxi_3.png" mode=""></image>
					</view>
					<view class="item-right">
						<p class="item-title">连连看</p>
						<p class="item-desc">奖励特权卡一张，加息0.1%</p>
						<view class="item-btn">立即开始</view>
					</view>
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
		onLoad() {

		},
		methods: {
			goback: function () {
				uni.navigateBack({
					delta:1,
				})
			},

		}
	}
</script>
<style>
	.header-bg {
		width: 100%;
		height: 55.55vw;
		overflow: hidden;
		position: relative;
	}

	.header-back {
		width: 40px;
		height: 40px;
		position: absolute;
		left: 25px;
		top: 40px;
		z-index: 1;
	}

	.header-image {
		width: 100%;
	}

	.item {
		margin-top: 20px;
		height: 320px;
		background-color: #ffffff;
		box-shadow: 0px 0px 4px 0px #cccccc;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
	}

	.item-left {
		height: 280px;
		width: 280px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.item-left image {
		max-height: 180px;
		max-width: 180px;
	}

	.item-right {
		flex: 1;
		height: 280px;
		
	}

	.item-title {
		height: 80px;
		line-height: 80px;
		font-size: 48px;
		color: #6c6c6c;
	}

	.item-desc {
		height: 40px;
		line-height: 40px;
		color: #6c6c6c;
		font-size: 28px;
	}

	.item-btn {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40px;
		margin-right: 40px;
		height: 86px;
		background-color: #8cafea;
		color: #FFFFFF;
		font-size: 32px;
	}
</style>
