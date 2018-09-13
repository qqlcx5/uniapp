<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				修改资料
			</view>
			<view class="header-right green">
				<!-- 完成 -->
			</view>
		</view>
		<view class="content">
			<view class="item bord">
				<view class="item-title">
					昵称
				</view>
				<view class="item-content">
					<input type="text" placeholder="克里斯">
				</view>
			</view>
			<view class="item bord">
				<view class="item-title">
					性别
				</view>
				<view class="item-content">
					<input type="text" placeholder="男">
				</view>
			</view>
			<view class="item">
				<view class="item-title">
					生日
				</view>
				<view class="item-content">
					<input type="text" placeholder="1997-02-15">
				</view>
			</view>
		</view>
		<view class="content mgt">
			<view class="item bord">
				<view class="item-title">
					星座
				</view>
				<view class="item-content">
					<input type="text" placeholder="摩羯座">
				</view>
			</view>
			<view class="item bord">
				<view class="item-title">
					故乡
				</view>
				<view class="item-content">
					<input type="text" placeholder="福建-厦门">
				</view>
			</view>
		</view>

		<view class="btn">
			保存
		</view>
	</view>
</template>
<script>
	export default {
		data: {},
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

	.mgt {
		margin-top: 40px;
	}

	.item {
		height: 100px;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.item-title {
		padding-right: 40px;
		width: 130px;
		box-sizing: border-box;
		height: 100px;
		line-height: 100px;
		font-size: 32px;
		color: #6c6c6c;
	}

	.item-content {
		flex: 1;
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
