<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				新增接收地址
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="content">
			<view class="box">
				<h3>添加二维码</h3>
				<textarea></textarea>
			</view>
			<view class="box2">
				<view class="box2-btn">
					生成二维码
				</view>
				<view class="box2-image">

				</view>

			</view>
			<view class="address">
				<span>添加地址</span>
				<input type="text" placeholder-class="place" placeholder="请输入接收地址" value="" />
			</view>
			<view class="btn">
				保存并使用
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

	.box {
		width: 90%;
		height: 300px;
		margin: 5%;
		display: flex;
		flex-direction: column;
	}

	.box h3 {
		font-size: 32px;
		color: #6c6c6c;
	}

	.box textarea {
		margin-top: 30px;
		width: 100%;
		min-height: 40px;
		background: #fff;
	}

	.box2 {
		width: 90%;
		height: 500px;
		margin: 0 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.box2-btn {
		width: 60%;
		height: 70px;
		background-color: #8cafea;
		border-radius: 36px;
		color: #FFFFFF;
		line-height: 70px;
		text-align: center;
		margin: 0 auto;
	}

	.box2-image {
		margin-top: 40px;
		width: 300px;
		height: 300px;
		background: #fff;
	}

	.address {
		width: 100%;
		height: 90px;
		display: flex;
		background-color: #ffffff;
		align-items: center;
		padding: 0 30px;
	}
	.address input{
		flex: 1;
		height: 90px;
		padding-left: 60px;
		font-size: 28px;
		color: #d0d0d0;
	}
	.place{
		font-size: 28px;
		color: #d0d0d0;
	}
	

	.btn {
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
