<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				添加好友
			</view>
			<view class="header-right">

			</view>
		</view>
		<view class="search-box">
			<view class="search">
				<image class="search-icon" src="../../static/sousuo.png" mode=""></image> 碧波账号/手机号
			</view>
		</view>
		<view class="list-box">
			<view class="list">
				<view class="item-left">
					<image src="../../static/saoyisao.png" mode=""></image>
				</view>
				<view class="item-content">
					扫一扫
				</view>
				<view class="item-right">
					<image src="../../static/right.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="list-box">
			<view class="list" @click="golianxiren()">
				<view class="item-left">
					<image src="../../static/tongxunlu_2.png" mode=""></image>
				</view>
				<view class="item-content">
					通讯录好友
				</view>
				<view class="item-right">
					<image src="../../static/right.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="list-box">
			<view class="list" @click="gonearby()">
				<view class="item-left"  >
					<image src="../../static/fujingderen.png" mode=""></image>
				</view>
				<view class="item-content">
					附近的人
				</view>
				<view class="item-right">
					<image src="../../static/right.png" mode=""></image>
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
			golianxiren(){
				uni.navigateTo({
					url:'tel'
				})
			},
			gonearby(){
				uni.navigateTo({
					url:'nearbyFriend'
				})
			}
		}
	}
</script>

<style>
	.page {
		background: #FFFFFF;
		width: 100%;
		height: 100vh;
	}

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

	.search-box {
		width: 100%;
		height: 1.2rem;
		background: #f7f7f7;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search {
		width: 80%;
		height: 70px;
		background-color: #ffffff;
		border-radius: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #b6b6b6;
		font-size: 28px;
	}

	.search-icon {
		max-width: .36rem;
		max-height: .36rem;
		margin-right: 10px;
	}

	.list-box {

		width: 100%;
		height: 90px;
		padding: 0 40px;
		box-sizing: border-box;
	}

	.list {
		width: 100%;
		height: 90px;
		border-bottom: 2px solid #eeeeee;
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

	.item-left,
	.item-right {
		display: flex;
		align-items: center;
		height: 90px;
		margin: 0 20px;
	}

	.item-content {
		flex: 1;
		height: 90px;
		line-height: 90px;
	}
</style>
