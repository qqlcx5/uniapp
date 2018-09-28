<template>
	<view class="">
		<view class="header">
			<view class="header-content">
				<image class="suosou" src="../../static/sousuo.png" mode=""></image>
				<image class="shanchu" src="../../static/shanchu_3.png" mode=""></image>
				<input type="text">
			</view>
			<view class="header-right" @click="goback()">
				取消
			</view>
		</view>
		<view class="dialog">
			<view class="title">聊天记录</view>
			<view class="info">
				<view class="">
					<image src="../../static/bg.jpg" mode=""></image>
				</view>
				<view class="info-content">
					<h4>尼古拉斯</h4>
					<P>碧波碧波币很好哦碧波币很好哦碧波币很好哦碧波币很好哦碧波币很好哦币很好哦</P>
				</view>
			</view>
			<view class="info">
				<view class="">
					<image src="../../static/bg.jpg" mode=""></image>
				</view>
				<view class="info-content">
					<h4>尼古拉斯</h4>
					<P>碧波碧波币很好哦碧波币很好哦碧波币很好哦碧波币很好哦碧波币很好哦币很好哦</P>
				</view>
			</view>
		<strong></strong>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		props: ['headertitle'],
		methods: {
			goback: function () {
				uni.navigateBack({
					delta: 1
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
		box-sizing: border-box;
		padding-top: 20px;
		align-items: center;
		background-color: #f7f7f7;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
	}

	.header-right {
		width: 80px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #79c343;
	}

	.header-content {
		flex: 1;
		display: flex;
		align-items: center;
		padding-left: 20px;
		font-size: 36px;
		position: relative;
	}

	.header-content image:nth-of-type(1) {
		width: 24px;
		height: 24px;
		position: absolute;
		top: 50%;
		margin-top: -12px;
		left: 40px;
		z-index: 10;
	}

	.header-content image:nth-of-type(2) {
		width: 24px;
		height: 24px;
		position: absolute;

		top: 50%;
		margin-top: -12px;
		right: 20px;
		z-index: 10;
	}

	.header-content input {
		flex: 1;
		padding-left: 50px;
		font-size: 36px;
		text-align: left;
		background-color: #ffffff;
		border-radius: 10px;
		border: solid 2px #e6e6ea;
		font-size: 26px;
	}

	.dialog {
		min-height: 100px;
		width: 100%;
		padding: 0 20px;
		box-sizing: border-box;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
	}

	.title {
		height: 80px;
		line-height: 80px;
		font-size: 28px;
		color: #b6b6b6;
		border-bottom: 2px solid #EEEEEE;
	}

	.info {
		display: flex;
		align-items: center;
		height: 160px;
		width: 100%;
		border-bottom: 2px solid #EEEEEE;
	}

	.info image {
		width: 120px;
		height: 120px;
	}

	.info-content {
		flex: 1;
		margin-left: 20px;
	}

	.info-content h4 {
		font-size: 24px;
		color: #b6b6b6;
	}

	.info-content p {
		width: 580px;
		display: block;
		height: 40px;
		font-size: 28px;
		color: #595959;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space:nowrap;
	}
</style>
