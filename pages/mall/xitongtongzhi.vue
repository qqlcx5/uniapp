<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				系统通知
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="list">
			<view class="item">
				<view class="item-li">
					<image src="../../static/xitongtongzhi.png" mode=""></image>
					<text class="item-name">系统</text>
					<text class="item-time">09/12 12:51</text>
				</view>
				<view class="info">
					<text class="info-title">2000个碧波币免费送</text>
					<text class="info-sign">点击跳转：签到</text>
				</view>
			</view>

			<view class="item">
				<view class="item-li">
					<image src="../../static/xitongtongzhi.png" mode=""></image>
					<text class="item-name">系统</text>
					<text class="item-time">09/12 12:51</text>
				</view>
				<view class="info">
					<text class="info-title">2000个碧波币免费送</text>
					<text class="info-desc">你还在为赚碧波币而苦恼吗？今天小编给大家带来好消息，正好可以解决这个问题，那就是海里碧波币免费送。只要完成三个点赞活动即可参加哦。限量2000个碧波币免费送，先到先得哦～</text>
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
			goback: function() {
				uni.navigateBack({
					delta: 1,
				})
			},

		}
	}
</script>
<style>
	.header {
		height: 128px;
		width: 100%;
		padding-top: 20px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background: #FFFFFF;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
	}

	.header-left,
	.header-right {
		width: 100px;
		height: 88px;

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

	.list {
		min-height: 200px;
		width: 100%;
		padding: 0 30px;
		box-sizing: border-box;
	}

	.item {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 260px;
		background-color: #ffffff;
		box-shadow: 0px 4px 8px 0px #eeeeee;
		border-radius: 12px;
		overflow: hidden;
	}

	.item-li {
		display: flex;
		height: 160px;
		align-items: center;
		padding: 0 20px;
		box-sizing: border-box;
	}

	.item-li image {
		width: 100px;
		height: 100px;
		margin-right: 20px;
		border-radius: 50%;
	}

	.item-li .item-name {
		flex: 1;
		font-size: 28px;
		color: #6c6c6c;
	}

	.item-li .item-time {
		font-size: 28px;
		color: #b6b6b6;
	}

	.info {
		min-height: 100px;
		width: 100%;
		padding: 0 20px 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		font-size: 26px;
	}

	.info-title {
		color: #6c6c6c;
	}

	.info-desc {
		line-height: 36px;
		color: #b6b6b6;
		text-align: justify;
	}

	.info-sign {
		font-size: 26px;
		color: #719deb;
	}
</style>
