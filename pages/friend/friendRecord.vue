<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()" >
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				尼古拉斯
			</view>
			<view class="header-right">
				<image src="../../static/lianxiren.png" mode=""></image>
			</view>
		</view>
		<view class="dialog">
			<view class="dialogTime">
				星期六 16:48
			</view>
			<view class="you">
				<view class="you-image">
					<image src="../../static/bg.jpg"></image>
				</view>
				<view class="you-box">
					在吗？在吗？在吗？在吗？
				</view>
			</view>
			<view class="my">
				<view class="my-box">
					在吗？在吗？在吗？在吗？在吗？
				</view>
				<view class="my-image">
					<image src="../../static/bg.jpg"></image>
				</view>

			</view>
		</view>
		<view class="bottom">
			<view class="send-message">
				日期控件
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
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #FFFFFF;
		box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.5);
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

	.dialogTime {
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 24px;
		color: #b6b6b6;
		text-align: center;
		margin: 40px 0;
	}

	.you {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		min-height: 140px;

		margin: 40px 0;
	}

	.you-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 140px;
		height: 140px;
	}

	.dialog image {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}

	.you-box {
		min-width: 40px;
		max-width: 50%;
		min-height: 60px;
		padding: 15px;
		font-size: 32px;
		box-sizing: border-box;
		word-break: break-word;
		background: #FFFFFF;
		border-radius: 10px;
	}

	.my {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		min-height: 140px;

		margin: 40px 0;
	}

	.my-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 140px;
		height: 140px;
	}

	.my-box {
		min-width: 40px;
		max-width: 50%;
		min-height: 60px;
		padding: 15px;
		font-size: 32px;
		box-sizing: border-box;
		word-break: break-word;
		background-color: #79c343;
		border-radius: 10px;
		color: #ffffff;
	}

	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		min-height: 100px;
		width: 100%;
	}

	.send-box {
		position: relative;
		bottom: 0;
		left: 0;
		min-height: 300px;
		width: 100%;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.send-item {
		flex: 1;
		min-height: 100px;
	
		margin: 50px;
		display: flex;
		flex-direction: column;
	}

	.item-image {
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		position: relative;
		
	}

	.send-item image {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
		right: 0;
		margin-left: -40%;
		width: 80%;
		height: 80%;
	}

	.send-item p {

		width: 100%;
		height: 100%;
		font-size: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}


	.send-message {
		position: relative;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100px;
		background: #eee;
		display: flex;
		align-items: center;
	}

	.send-message image {
		height: 60px;
		width: 60px;
	}

	.send-message input {
		margin: 0;
		flex: 1;
		height: 60px;
		background-color: #ffffff;
		border: 2px solid #EEEEEE;
		border-radius: 12px;
	}

	.mgl {
		margin-left: 0.2rem;
	}

	.mgr {
		margin-right: 0.2rem;
	}
</style>
