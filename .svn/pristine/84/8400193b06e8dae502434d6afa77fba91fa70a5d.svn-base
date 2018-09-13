<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				添加好友
			</view>
			<view class="header-right">
				发送
			</view>
		</view>
		<view class="list-box">
			<view class="list">
				<view class="item-left">
					<image src="../../static/bg.jpg" mode=""></image>
				</view>
				<view class="item-content">
					<p class="item-title">Kabir</p>
					<p class="item-desc">男 25岁 厦门</p>
				</view>
			</view>
		</view>
		<view class="test">
			<h3>请填写验证信息</h3>
			<textarea placeholder="我是克里斯"></textarea>
			<h3>请填写验证信息</h3>
			<view class="note">
				<span>备注</span>
				<input type="text">
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

	.list-box {
		width: 100%;
		height: 200px;
		padding: 40px 0;
		box-sizing: border-box;
	}

	.list {
		width: 100%;
		height: 120px;
		display: flex;
		/* background: #ccc; */
	}

	.item-left image {
		width: 120px;
		height: 120px;
		border-radius: 50%;
	}

	.item-left {
		display: flex;
		align-items: center;
		height: 120px;
		margin: 0 40px;
	}

	.item-content {
		flex: 1;
		padding: 20px 0;
		box-sizing: border-box;
	}

	.item-title {
		height: 50px;
		line-height: 50px;
		font-size: 32px;
		color: #585858;
	}

	.item-desc {
		font-size: 24px;
		color: #b6b6b6;
		line-height: 40px;
		height: 40px;
	}

	.test {
		display: flex;
		flex-direction: column;
	}

	.test h3 {
		font-size: 28px;
		color: #b6b6b6;
		height: 70px;
		line-height: 70px;
		/* background: #000; */
		padding-left: 20px;
	}

	.test textarea{
		width: 100%;
		height: 200px;
		padding: 20px;
		font-size: 28px;
		text-align: justify;
		background-color: #ffffff;
		margin-bottom: 40px;
	}
	.note {
		display: flex;
		height: 100px;
		align-items: center;
		background: #FFFFFF;
		padding: 0 40px;
	}
	.note span{
		margin-right: 30px;
	}
	.note input{
		flex: 1;
		height: 100px;
	}
</style>
