<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				交易记录
			</view>
			<view class="header-right">
				<image src="../../static/lianxiren.png" mode=""></image>
			</view>
		</view>
		<view class="banner">
			<image src="../../static/my_10.jpg">
			</image>
		</view>
		<view class="title">
			<view class="titlebox">
				<h2>总资产</h2>
				<p>6.32 CNY</p>
			</view>
			<i class="title-i"></i>
			<view class="titlebox">
				<h2>本月支出</h2>
				<p>2.365 CNY</p>
			</view>
		</view>
		<view class="list">
			<ul>
				<li class="item">
					<view class="item-left">
						<image src="../../static/bg.jpg"></image>
					</view>
					<view class="item-right">
						<view>
							<h2>碧波币</h2>
							<p class="item-desc">[买入]</p>
							<p class="item-time">今天 12:56</p>
						</view>
						<view class="expend">-0.82CNY</view>
					</view>
				</li>
				<li class="item">
					<view class="item-left">
						<image src="../../static/bg.jpg"></image>
					</view>
					<view class="item-right">
						<view>
							<h2>碧波币</h2>
							<p class="item-desc">[买入]</p>
							<p class="item-time">今天 12:56</p>
						</view>
						<view class="expend">-0.82CNY</view>
					</view>
				</li>
			</ul>
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
					delta: 1,
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
		padding-top: 40px;
		align-items: center;
		background: #FFFFFF;
		box-sizing: border-box;
		overflow: hidden;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
		margin-bottom: 10px;
	}

	.header-left,
	.header-right {
		width: 88px;
		height: 88px;
		z-index: 1;
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

	.banner {
		width: 750px;
		height: 240px;
		background-color: #d8d8d8;
		overflow: hidden;
		margin-bottom: 10px;
	}

	.banner image {
		width: 100%;
	}

	.title {
		height: 100px;
		width: 100%;
		background-color: #ffffff;
		box-shadow: 0px 0px 4px 0px #eeeeee;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
	}

	.title-i {
		width: 6px;
		height: 80px;
		background: #f1f1f1;
	}

	.titlebox {
		width: 50%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.titlebox h2 {
		font-size: 28px;
		color: #b6b6b6;
	}

	.titlebox p {
		font-size: 24px;
		color: #585858;
	}

	.list {
		min-height: 136px;
		width: 100%;
		background: #FFFFFF;
	}

	.item {
		height: 136px;
		width: 100%;
		display: flex;

		overflow: hidden;
	}

	.item-left {
		height: 136px;
		display: flex;
		align-items: center;
		padding: 0 20px 0 40px;
	}

	.item image {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}

	.item-right {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 4px solid #EEEEEE;
		box-sizing: border-box;
	}

	.item-right h2 {
		font-size: 28px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #b6b6b6;
	}

	.item-right .item-desc{
		font-size: 20px;
		color: #585858;
	}

	.item-time {
		font-size: 20px;
		color: #b6b6b6;
	}
	.expend{
		font-size: 24px;
		color: #585858;
		padding-right: 40px;
	}
</style>
