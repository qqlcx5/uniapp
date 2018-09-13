<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				设置支付密码
			</view>
			<view class="header-right green">
				<!-- 完成 -->
			</view>
		</view>
		<view class="content">
			<view class="item bord">
				<view class="item-content">
					<input type="text" placeholder="设置新密码">
				</view>
				<image src="../../static/mima.png" mode=""></image>
			</view>
			<view class="item">
				<view class="item-content">
					<input type="text" placeholder="请再次输入新密码">
				</view>
				<image src="../../static/mima.png" mode=""></image>
			</view>

		</view>
		<view class="btn">
			完成
		</view>
	</view>
</template>
<script>
	export default {
		data: {},
		methods: {
			gotoDetail() {
				uni.navigateTo({
					url: "mallMessage"
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

	.content {
		width: 90%;
		min-height: 200px;
		box-sizing: border-box;
		padding: 0 30px;
		background: #FFFFFF;
		margin: 30px auto 0;
	}

	.bord {
		border-bottom: 2px solid #EEEEEE;
	}

	.item {
		height: 100px;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		position: relative;
	}

	.item-content {
		flex: 1;
		padding-left: 60px;
		font-size: 28px;
	}

	.item image {
		position: absolute;
		left: 10px;
		top: 30px;
		width: 35px;
		height: 40px;
	}

	.btn {
		width: 50%;
		height: 70px;
		line-height: 70px;
		display: block;
		background: #e97b78;
		margin: 60px auto 0;
		color: #FFFFFF;
		text-align: center;
		border-radius: 32px;
	}
</style>
