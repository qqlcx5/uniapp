<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left_2.png" mode=""></image>
			</view>
			<view class="header-content">
				币种兑换
			</view>
			<view class="header-right">
			</view>
		</view>
			<view class="list">
			<view class="item">
				<view class="item-image">
					<image src="../../static/logo_2.png" mode=""></image>
				</view>
				<view class="item-title">
					CNY
				</view>
				<view class="item-right">
					<p class="item-num">10000</p>
					<p class="item-desc">碧波币</p>
				</view>
			</view>

			<view class="item">
				<view class="item-image">
					<image src="../../static/logo_2.png" mode=""></image>
				</view>
				<view class="item-title">
					CNY
				</view>
				<view class="item-right">
					<p class="item-num">10000</p>
					<p class="item-desc">碧波币</p>
				</view>
			</view>
			<view class="item">
				<view class="item-image">
					<image src="../../static/logo_2.png"></image>
				</view>
				<view class="item-title">
					CNY
				</view>
				<view class="item-right">
					<p class="item-num">10000</p>
					<p class="item-desc">碧波币</p>
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
	.header {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		color: #FFFFFF;
		background: #8cafea;
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

	.item {
		width: 100%;
		height: 140px;
		border-bottom: 2px solid #eee;
		display: flex;
	}

	.item-image {
		width: 140px;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.item-image image {
		width: 114px;
		height: 114px;
	}

	.item-title {
		flex: 1;
		height: 140px;
		display: flex;
		align-items: center;
		font-size: 28px;
		color: #6c6c6c;
	}

	.item-right {
		width: 140px;
		height: 140px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.item-num {
		font-size: 36px;
		height: 50px;
		line-height: 50px;
		color: #6c6c6c;
	}

	.item-desc {
		height: 28px;
		line-height: 28px;
		font-size: 20px;
		color: #b6b6b6;
	}
</style>
