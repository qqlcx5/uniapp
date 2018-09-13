<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				二维码
			</view>
			<view class="header-right green">
				<!-- 完成 -->
			</view>
		</view>
		<view class="content">
			<view class="box">
				<view class="qrcode">
					<image src="../../static/qrcode.jpg" mode=""></image>
				</view>
				<p class="desc">
					长按二维码，关注碧波币官方微信
				</p>
				<view class="btn">
					保存图片
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data: {},
		methods: {
			goback: function () {
				uni.navigateBack({
					delta:1,
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
	/* .content {
            width: 100%;
            box-sizing: border-box;
            padding: 0 0.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
        } */

	.box {
		background: #ccc;
		border-radius: 0.06rem;
		width: 80%;
		height: 800px;
		margin: 100px auto;
		box-sizing: border-box;
		padding: 60px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.box .qrcode {
		width: 500px;
		background: #fff;
		height: 500px;
		box-sizing: border-box;
		padding: 60px;
	}

	.qrcode image {
		width: 100%;
		height: 100%;
	}

	.desc {
		height: 100px;
		line-height: 100px;
		font-size: 28px;
		color: #ffffff;
	}

	.btn {
		margin-top: 30px;
		width: 80%;
		height: .7rem;
		text-align: center;
		line-height: 0.7rem;
		background: #fff;
		border-radius: 0.36rem;
	}
</style>
