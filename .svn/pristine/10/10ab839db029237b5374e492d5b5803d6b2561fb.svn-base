<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image class="header-back" src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				兑换记录
			</view>
			<view class="header-right">
				<image src="../../static/sousuo.png" mode=""></image>
			</view>
		</view>
		<view>
			<view class="time">2018年8月16日 17:30:40</view>
			<view class="time-info">
				<view class="time-item">
					<h1>
						<i class="bule">碧波币</i>
						<span>转</span>
						<i class="bule">比特币</i>
					</h1>
					<h2>100 = 0.5</h2>
					<h3>2018－8-13 17:30:40</h3>
				</view>
				<view class="time-right">
					<h1>手续费</h1>
					<h3 class="redColor">1 碧波币</h3>
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
					delta: 1,
				})
			},

		}
	}
</script>
<style>
	.header {
		height: 0.88rem;
		width: 100%;
		display: flex;
		align-items: center;
		background: #fff;
		overflow: hidden;
		box-shadow: 0px 2px 4px 0px rgba(238, 238, 238, 0.5);
	}

	.header-left {
		min-width: 1rem;
		padding: 20px;
	}

	.header-back {
		width: 40px;
		height: 40px;
	}

	.header-content {
		flex: 1;
		overflow: hidden;
		display: flex;
		justify-content: center;
		font-size: 0.36rem;
	}



	.header-right {
		min-width: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-right image {
		max-height: 0.4rem;
		max-width: 0.4rem;
	}

	.body-content {
		text-align: center;
	}

	.time {
		height: 80px;
		width: 100%;
		padding-left: 0.2rem;
		line-height: 0.8rem;
		color: #b6b6b6;
		font-size: 0.24rem;
		box-sizing: border-box;
		overflow: hidden;
	}

	.time-info {
		min-height: 160px;
		max-width: 100%;
		background: #fff;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
	}

	.time-item {
		flex: 1;
		display: flex;
		justify-content: center;
		padding: 20px;
		box-sizing: border-box;
		flex-direction: column;
	}

	.bule {
		color: #719deb;
		/* margin: 0 10px; */
	}

	.time-item h1 {
		display: flex;
		/* justify-content: center; */
		color: #b6b6b6;
	}

	.time-item h1 span {
		margin: 0 12px;
	}

	.time-item h2 {
		font-size: 32px;
		color: #b6b6b6;
	}

	.time-item h3 {
		font-size: 24px;
		color: #b6b6b6;
		/* text-align: center; */
	}

	.redColor {
		color: #e97b78;
	}

	.time-right {
		width: 200px;
		min-height: 160px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.time-right h1{
	color: #b6b6b6;
	}
</style>
