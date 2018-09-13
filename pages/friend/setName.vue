<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				设置名称
			</view>
			<view class="header-right green">
				完成
			</view>
		</view>
		<view class="search-box">
			<view class="search">
				<image class="search-icon" src="../../static/clear2@2x.png" mode=""></image>
				<input type="text" placeholder="时尚大咖" value="" />
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

	.green {
		color: rgba(121, 195, 67, 0.5);
	}

	.search-box {
		width: 100%;
		height: 1.2rem;
		background: #f7f7f7;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search {
		width: 100%;
		height: 80px;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		color: #b6b6b6;
		font-size: 28px;
		padding-left: 20px;
		box-sizing: border-box;
		position: relative;
	}

	.search-icon {
		position: absolute;
		right: 20px;
		top: 25px;
		max-width: .36rem;
		max-height: .36rem;
	}
</style>
