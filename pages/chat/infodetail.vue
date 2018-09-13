<template>
	<view class="page">
		<view class="header">
			<image src="../../static/mybg.png" mode=""></image>
			<view class="header-left" @click="goback()">
				<image src="../../static/left_01.png"></image>
			</view>
			<view class="headermask">
			</view>
			<view class="user-info">
				<image class="face" src="../../static/bg.jpg"></image>
				<view class="user-name">
					克里斯
					<image src="../../static/xiugai.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="content">
			<view class="bigbox">
				<view class="box">
					<view class="item">
						<image src="../../static/myselect.png" mode=""></image>
						尼古拉斯（1844663555）
					</view>
					<view class="item">
						<image src="../../static/jianjie.png" mode=""></image>
						男 27岁 摩羯座
					</view>
					<view class="item">
						<image src="../../static/weizhi.png" mode=""></image>
						福建－厦门
					</view>
				</view>
			</view>
			<view class="chat">
				<view class="list">
					<view class="item-content">
						聊天记录
					</view>
					<view class="item-right">
						<image src="../../static/right.png" mode=""></image>
					</view>
				</view>
				<view class="list">
					<view class="item-content">
						屏蔽此人
					</view>
					<view class="item-right">
						<switch/>
					</view>
				</view>
			</view>
			<view class="btn1" @click="godialog">
				发消息
			</view>
			<view class="btn2">
				删除好友
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
			godialog() {
				uni.navigateTo({
					url: 'chatdialog'
				})
			}
		}
	}
</script>
<style>
	.page {
		height: 100vh;
		width: 100%;
		background: #FFFFFF;
	}

	.header {
		height: 360px;
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	.headermask {
		height: 360px;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		position: absolute;
		background: #000;
		opacity: 0.2;
	}

	.header-left {
		position: absolute;
		top: 30px;
		left: 20px;
		width: 40px;
		height: 40px;
		z-index: 1;
	}

	.header-left image {
		width: 40px;
		height: 40px;
	}

	.header image {
		width: 100%;
	}

	.user-info {
		position: absolute;
		top: 60px;
		left: 50%;
		margin-left: -150px;
		width: 300px;
		height: 300px;
		display: flex;
		align-items: center;
		flex-direction: column;
		z-index: 10;
		opacity: 1;
	}

	.user-info image {
		max-height: 172px;
		max-width: 172px;
		border-radius: 50%;
	}

	.user-name {
		margin: 10% 0;
		height: 60px;
		width: 100%;
		position: relative;
		text-align: center;
		color: #FFFFFF;
		font-size: 36px;
	}

	.user-name image {
		position: absolute;
		right: 20%;
		top: 10px;
		width: 20px;
		height: 20px;
		border-radius: 0;
	}

	.bigbox {
		min-height: 300px;
		width: 100%;
		background: #f1f1f1;
		padding: 20px 0;
	}

	.box {
		min-height: 300px;
		width: 100%;
		padding: 40px 60px;
		background: #FFFFFF;
		box-sizing: border-box;
	}

	.item {
		height: 80px;
		display: flex;
		align-items: center;
		width: 100%;
		border-bottom: 2px solid #EEEEEE;
	}

	.item image {
		width: 40px;
		height: 40px;
		margin-right: 20px;
	}

	.chat {
		width: 100%;
		padding: 40px 60px;
		min-height: 90px;
		box-sizing: border-box;
	}

	.list {
		width: 100%;
		height: 90px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.item-left image {
		width: 40px;
		height: 40px;
	}

	.item-right image {
		width: 30px;
		height: 30px;
	}

	.item-right {
		display: flex;
		align-items: center;
		height: 90px;
	}

	.item-content {
		flex: 1;
		height: 90px;
		line-height: 90px;
	}

	.btn1 {
		width: 50%;
		height: 70px;
		background-color: #79c343;
		border-radius: 36px;
		color: #FFFFFF;
		line-height: 70px;
		text-align: center;
		margin: 5% auto 0;
	}

	.btn2 {
		width: 50%;
		height: 70px;
		background-color: #e97b78;
		border-radius: 36px;
		color: #FFFFFF;
		line-height: 70px;
		text-align: center;
		margin: 5% auto 0;
	}
</style>
