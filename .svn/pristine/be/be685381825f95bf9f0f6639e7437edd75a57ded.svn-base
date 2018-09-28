<template>
	<view class="page">
		<view class="header">
			<view class="header-content">
				<image class="suosou" src="../../static/sousuo.png" mode=""></image>
				<input type="text" placeholder="碧波币">
			</view>
			<view class="header-right" @click="goback()">
				取消
			</view>
		</view>
		<view class="nearby">
			<view class="nearbyheader">
				<p>最近搜索</p>
				<image src="../../static/shanchu_4.png" mode=""></image>
			</view>
			<view class="nearby-content">
				<ul class="nearby-box">
					<li class="nearby-item">货币</li>
					<li class="nearby-item">的货币</li>
					<li class="nearby-item">钱的货币</li>
					<li class="nearby-item">值钱的货币</li>
					<li class="nearby-item">最值钱的货币</li>
					<li class="nearby-item">值钱的货币</li>
				</ul>
			</view>
		</view>
		<view class="nearby">
			<view class="nearbyheader">
				<p>搜索发现</p>
			</view>
			<view class="nearby-content">
				<ul class="nearby-box">
					<li class="nearby-item">货币</li>
					<li class="nearby-item">的货币</li>
					<li class="nearby-item">钱的货币</li>
					<li class="nearby-item">值钱的货币</li>
					<li class="nearby-item">最值钱的货币</li>
					<li class="nearby-item">值钱的货币</li>
				</ul>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
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
	.page {
		background: #FFFFFF;
		width: 100%;
		height: 100vh;
	}

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

	.nearby {
		min-height: 100px;
		width: 100%;
		overflow: hidden;
	}

	.nearbyheader {
		margin-top: 40px;
		height: 40px;
		width: 100%;
		display: flex;
		padding: 0 20px;
		box-sizing: border-box;
	}

	.nearbyheader p {
		height: 40px;
		line-height: 40px;
		flex: 1;
		font-size: 28px;
		color: #b6b6b6;
	}

	.nearbyheader image {
		width: 40px;
		height: 40px;
	}

	.nearby-box {
		margin: 40px 0;
		display: flex;
		flex-wrap: wrap;
		font-size: 28px;
		width: 100%;
		box-sizing: border-box;
		padding-right: 30px;
		color: #6c6c6c;
	}

	.nearby-item {
		min-width: 40px;
		padding: 10px 30px;
		height: 60px;
		background-color: #f7f7f7;
		border-radius: 30px;
		box-sizing: border-box;
		margin: 0 0 20px 30px;
	}
</style>
