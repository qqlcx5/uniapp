<template>
	<view class="">
		<view class="header-fix">
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
		</view>
		<view class="search-box">
			<view class="search">
				<image class="search-icon" src="../../static/sousuo.png"></image>
				<input type="text" placeholder="碧波账号／手机号" value="" />
				<image class="search-clear" src="../../static/shanchu.png"></image>
			</view>
		</view>
		<view class="list">
			<view>
				<image class="item-suosou" src="../../static/suosou_3.png" mode=""></image>
			</view>
			<view class="info">
				<p class="info-title">克里斯 (12341265)</p>
				<p class="info-desc">男 25岁 厦门</p>
			</view>
			<view class="btn">
				添加好友
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			goback(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	.header-fix {
		height: 100px;
		width: 100%;
	}

	.header {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #fff;
		position: fixed;
	}

	.header-left,
	.header-right {
		width: 100px;
		height: 64px;

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
		height: 120px;
		background: #f7f7f7;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 40px;
	}

	.search {
		width: 6rem;
		height: 70px;

		background-color: #FFFFFF;
		border-radius: 36px;
		display: flex;
		align-items: center;
		color: #b6b6b6;
		padding: 0 40px;
		box-sizing: border-box;
		/* position: relative; */
	}

	.search-icon {
		max-width: 36px;
		max-height: 36px;
		margin-right: 40px;
	}

	.search-clear {
		max-width: 36px;
		max-height: 36px;
	}

	.search input {
		flex: 1;
		height: 70px;
	}

	.list {
		width: 100%;
		min-height: 160px;
		background: #fff;
		display: flex;
		padding: 0 40px;
		box-sizing: border-box;
		align-items: center;
	}

	.item-suosou {
		max-width: 110px;
		max-height: 110px;
		margin-right: 40px;
	}

	.info {
		height: 110px;
		flex: 1;
		padding: 20px 0;
	}

	.info-title {
		height: 50px;
		line-height: 50px;
		font-size: 32px;
		color: #585858;
	}

	.info-desc {
		font-size: 24px;
		color: #b6b6b6;
		line-height: 40px;
		height: 40px;
	}

	.btn {
		width: 200px;
		height: 70px;
		background-color: #79c343;
		border-radius: 36px;
		text-align: center;
		line-height: 70px;
		color: #FFFFFF;
		font-size: 32px;
	}
</style>
