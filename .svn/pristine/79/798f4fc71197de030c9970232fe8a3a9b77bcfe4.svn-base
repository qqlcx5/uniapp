<template>
	<view>
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				提币记录
			</view>

			<view class="header-right">
				<image src="../../static/sousuo.png" mode=""></image>
			</view>
		</view>
		<view class="info-list">
			<view class="time">
				<view>
					碧波币(23984)
				</view>
				<view>
					2018年8月14日 17:30:40
				</view>
			</view>
			<view class="time-info">
				<view class="time-item">
					<h1>65700265448125448Sdd</h1>
					<h3>提币地址</h3>
				</view>
				<view class="time-item">
					<h1>
						<image src="../../static/qrcode.jpg" mode=""></image>
					</h1>
					<h3>提币二维码</h3>
				</view>
				<view class="time-item">
					<h1>5326 CNY</h1>
					<h3>提币数量</h3>
				</view>
			</view>
		</view>
	<view class="info-list">
			<view class="time">
				<view>
					比特币(剩：1个)
				</view>
				<view>
					2018年8月14日 17:30:40
				</view>
			</view>
			<view class="time-info">
				<view class="time-item">
					<h1>65700265448125448Sdd</h1>
					<h3>提币地址</h3>
				</view>
				<view class="time-item">
					<h1>
						<image src="../../static/qrcode.jpg" mode=""></image>
					</h1>
					<h3>提币二维码</h3>
				</view>
				<view class="time-item">
					<h1>5326 CNY</h1>
					<h3>提币数量</h3>
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
		margin-bottom: 0.1rem;
		box-shadow: 0px 2px 4px 0px rgba(238, 238, 238, 0.5);
	}

	.header-left {
		min-width: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-left image {
		width: 0.4rem;
		height: 0.4rem;
	}

	.header-content {
		flex: 1;
		overflow: hidden;
		display: flex;
		justify-content: center;
		font-size: 0.36rem;
	}

	.header-right image {
		max-height: 0.4rem;
		max-width: 0.4rem;
	}

	.header-right {

		min-width: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.body-content {
		text-align: center;
	}

	.info-list {
		border-bottom: 0.02rem solid #e8e8e8;
	}

	.time {
		height: 100px;
		width: 100%;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #b6b6b6;
		font-size: 0.24rem;
		box-sizing: border-box;
		background: #fff;
		
	}

	.time view:nth-child(1) {
		font-size: 0.32rem;
		color: #e97b78;
		font-weight: bold;
	}

	.time-info {
		height: 200px;
		max-width: 100%;
		background: #fff;
		display: flex;
		box-sizing: border-box;
		overflow: hidden;
	}

	.time-item {
		flex: 1;
		display: flex;
		align-items: center;
		margin: 0 0.4rem;
		flex-direction: column;
		
	}

	.time-item h1 {
		height: 160px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		word-break: break-word;
		font-size: 0.28rem;
		color: #585858;
	}

	.time-item h3 {
		height: 0.6rem;
		line-height: 0.6rem;
		color: #6c6c6c;
		font-size: 0.24rem;
		text-align: center;
		color: #8cafea;
	}

	.time-item image {
		width: 100px;
		height: 100px;
	}
</style>
