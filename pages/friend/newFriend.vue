<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content" >
				新的朋友
			</view>
			<view class="header-right" @click="goyanzhenxiaoxi()">
				添加
			</view>
		</view>
		<view>
			<view class="time">2018年8月16日</view>
			<view class="time-info">
				<view class="time-img">
					<image src="../../static/bg.jpg" mode=""></image>
				</view>
				<view class="time-title">
					<p>Kabir</p>
					<p>我是夸克币的总监</p>
					<p>来源：碧波账号搜索</p>
				</view>
				<view class="time-pay">
					<view class="time-agree">已同意</view>
				</view>
			</view>

		</view>
		<view>
			<view class="time">2018年8月16日</view>
			<view class="time-info">
				<view class="time-img">
					<image src="../../static/bg.jpg" mode=""></image>
				</view>
				<view class="time-title">
					<p>Kabir</p>
					<p>我是夸克币的总监</p>
					<p>来源：碧波账号搜索</p>
				</view>
				<view class="time-pay">
					<view class="green">同意</view>
					<i class="line"></i>
					<view class="red">拒绝</view>
				</view>
			</view>

		</view>

	</view>
</template>
<script>
	export default {
		data: {},
		methods: {
			goback: function () {
				uni.navigateBack({
					delta:1,
				})
			},
			goyanzhenxiaoxi(){
				uni.navigateTo({
					url:'yanzhenxiaoxi'
				})
			}
		}
	}
</script>

<style>
	.header {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #FFFFFF;
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

	.time {
		height: 0.6rem;
		width: 100%;
		padding-left: 0.2rem;
		line-height: 0.8rem;
		color: #b6b6b6;
		font-size: 0.24rem;
		box-sizing: border-box;
		overflow: hidden;
	}

	.time-info {
		height: 1.8rem;
		max-width: 100%;
		background: #fff;
		display: flex;
		margin-top: 0.2rem;
	}

	.time-img {
		height: 1.8rem;
		width: 1.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.time-img image {
		border-radius: 50%;
		max-height: 1.2rem;
		max-width: 1.2rem;
	}

	.time-title {
		flex: 1;
		padding: 0.2rem 0;
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}

	.time-title p:nth-child(1) {
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 32px;
		color: #585858;
	}

	.time-title p:nth-child(2) {
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 28px;
		color: #b6b6b6;
	}

	.time-title p:nth-child(3) {
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 0.2rem;
		color: #b6b6b6;
	}

	.time-pay {
		min-width: 1.6rem;
		margin-right: 0.2rem;
		font-size: 0.28rem;
		display: inline-flex;
		justify-content: center;
		align-items: center;
	}

	.line {
		width: 4px;
		height: 28px;
		background: #eee;
		margin: 0 10px;
	}

	.green {
		color: #79c343;
	}

	.red {
		color: #e97b78;
	}

	.time-agree {
		color: #b6b6b6;
	}
</style>
