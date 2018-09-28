<template>
	<view>
		<view class="header-box">
			<view class="header">
				<view class="header-left">
					<image src="../../static/sys.png"></image>
				</view>
				<view class="header-center">
					<view class="header-search">
						<image src="../../static/sousuo.png" mode="" class="mgr10"></image>搜索
					</view>
				</view>
				<view class="header-right">
					<image src="../../static/message.png"></image>
				</view>
			</view>
		</view>
		<view class="banner">
			<image src="../../static/banner.png" mode=""></image>
		</view>
		<!-- <view class="swiper-box">
			<swiper :indicator-dots="true" :autoplay="true" :indicator-active-color="indicatorActiveColor" :interval="5000" :duration="duration">
				<swiper-item v-for="(img,key) in imgUrls" :key="key">
					<image :src="img" />
				</swiper-item>
			</swiper>
		</view> -->
		<view class="goods">
			<view class="title">
				<h2>热卖推荐</h2>
				<p>碧波币（bibobi）是一种P2P形式的数字货币。</p>
			</view>
			<view class="card-list">
				<view class="card" @click="gotoDetail()">
					<image src="../../static/shop_2.jpg" mode=""></image>
					<view class="card-info">
						<view class="card-title">
							<h2>碧波币</h2>
							<p>1.256 CNY</p>
						</view>
						<view class="btn">购买</view>
					</view>
				</view>
				<view class="card">
					<image src="../../static/shop_2.jpg" mode=""></image>
					<view class="card-info">
						<view class="card-title">
							<h2>碧波币</h2>
							<p>1.256 CNY</p>
						</view>
						<view class="btn">购买</view>
					</view>
				</view>
				<view class="card">
					<image src="../../static/shop.png" mode=""></image>
					<view class="card-info">
						<view class="card-title">
							<h2>碧波币</h2>
							<p>1.256 CNY</p>
						</view>
						<view class="btn">购买</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorActiveColor: "#fff",
				imgUrls: [
					'http://p4ygml8h5.bkt.clouddn.com/swiper1.png',
					'http://p4ygml8h5.bkt.clouddn.com/swiper3.png',
					'http://p4ygml8h5.bkt.clouddn.com/swiper2.png'
				]
			}
		},
		methods: {
			gotoDetail() {
				uni.navigateTo({
					url: "malldetaill"
				})
			},
		}
	}
</script>

<style>
	.header-box {
		height: 128px;
		width: 100%;
		overflow: hidden;
	}

	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		width: 100%;
		height: 128px;
		display: flex;
		padding-top: 40px;
		box-sizing: border-box;
		background: #8cafea;
		/* background: #FFFFFF; */
		overflow: hidden;
	}

	.header image {
		width: 40px;
		height: 40px;
	}

	.header-left,
	.header-right {
		width: 100px;
		height: 88px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-center {
		flex: 1;
		height: 88px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-search {
		width: 530px;
		height: 60px;
		background-color: #ffffff;
		border-radius: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #b6b6b6;
	}

	.header-search image {
		width: 30px;
		height: 30px;
	}

	.banner {
		width: 750px;
		height: 240px;
		overflow: hidden;
	}

	.banner image {
		width: 750px;
		height: 240px;
	}
	/* 
	swiper {
		width: 100%;
		height: 32vw;
		overflow: hidden;
	}

	swiper-item image {
		width: 100%;
		height: 100%;
	} */

	.goods {
		min-height: 300px;
		width: 100%;
		overflow: hidden;
	}

	.goods .title {
		height: 200px;
		width: 100%;
		display: block;
		box-sizing: border-box;
		padding: 44px 0;
		text-align: center;
	}

	.title h2 {
		font-size: 32px;
		color: #585858;
	}

	.title p {
		margin-top: 20px;
		font-size: 24px;
		color: #b6b6b6;
	}

	.card {
		margin: 0 auto 40px;
		width: 80%;
		height: 400px;
		overflow: hidden;
		border-radius: 20px 20px 0 0;
		position: relative;
	}

	.card image {
		width: 100%;
		height: 400px;
	}

	.card-info {
		width: 100%;
		height: 140px;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
	}

	.card-title {
		display: flex;
		flex: 1;
		padding-left: 40px;
		justify-content: center;
		flex-direction: column;
	}

	.card-title h2 {
		font-size: 32px;
		color: #b6b6b6;
	}

	.card-title p {
		margin-top: 10px;
		font-size: 40px;
		color: #e97b78;
	}

	.btn {
		width: 144px;
		height: 80px;
		line-height: 80px;
		background-color: #8cafea;
		border-radius: 20px;
		align-self: flex-end;
		margin: 24px;
		text-align: center;
		color: #FFFFFF;
	}
</style>
