<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left_2.png" mode=""></image>
			</view>
			<view class="header-content">
				消息
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="chat-info">
			<view class="chat-item">
				<view class="chat-img">
					<image src="../../static/xitongtongzhi.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<view class="chat-top-time">今天 10:33</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">忘记签到好多天，双签大礼包可别再错过双签大礼包可别再错过</view>
					</view>
				</view>

			</view>

			<view class="chat-item">
				<view class="chat-img">
					<image src="../../static/jiaoyi_2.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<view class="chat-top-time">今天 10:33</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">忘记签到好多天，双签大礼包可别再错过双签大礼包可别再错过</view>
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

	.chat-item {
		width: 100%;
		height: 1.6rem;
		background: #FFFFFF;
		display: flex;
		border-bottom: 0.02rem solid #ccc;
	}

	.chat-img {
		min-width: 1.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.chat-img image {
		max-width: 1rem;
		max-height: 1rem;
		border-radius: 50%;
	}

	.chat-title {
		width: calc(100% - 1.6rem);
		height: 1.6rem;
		overflow: hidden;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.chat-top {
		height: .6rem;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.chat-top-info {
		min-width: 1%;
		max-width: 80%;
		height: .6rem;
		line-height: 0.6rem;
		font-size: 0.32rem;
		color: #6c6c6c;
		display: block;
		align-items: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.chat-top-time {
		flex: 1;
		min-width: 1.3rem;
		height: .6rem;
		display: flex;
		align-items: center;
		font-size: 0.24rem;
		padding-right: 0.2rem;
		box-sizing: border-box;
		justify-content: flex-end;
	}
	/*克里斯小点*/

	.info-point {
		display: block;
		margin-left: 0.1rem;
		min-width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		background-color: #8cafea;
	}

	.chat-bottom {
		height: .4rem;
		align-items: center;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.red-point {
		margin-right: 0.2rem;
		min-width: .36rem;
		height: .36rem;
		border-radius: 50%;
		background-color: #e97b78;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 0.24rem;
	}

	.chat-bottom-info {
		min-width: 10px;
		max-width: 90%;
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 28px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
