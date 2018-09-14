<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				商品
			</view>
			<view class="header-right ">

			</view>
		</view>
		<view class="calssly">
			<view class="calssly-item selectColor">
				在售
			</view>
			<view class="calssly-item">
				已售出
			</view>
			<view class="calssly-item">
				仓库
			</view>
		</view>
		<view class="search-box">
			<view class="search" @click="gosuosouFriend">
				<image class="search-icon" src="../../static/sousuo.png"></image>
				搜索
			</view>
		</view>
		<view class="shop-list">
			<view class="shop-item">
				<view class="shop-info">
					<view class="shop-left">
						<image src="../../static/hongbao.png" mode=""></image>
					</view>
					<view class="shop-content">
						<view class="shop-content-top">
							<h2>碧波币</h2>
							<p>更新时间：08月22日14:30</p>
						</view>
						<view class="shop-content-bottom">
							<h2>0.5BBB</h2>
							<p>已售：155件</p>
						</view>
					</view>
					<view class="shop-right">
						<image src="../../static/top.png" mode=""></image>
					</view>
				</view>
				<view class="shop-desc">
					<view class="shop-desc-item">
						<image src="../../static/bianji.png" mode=""></image>
						<p>编辑</p>
					</view>
					<view class="shop-desc-item">
						<image src="../../static/bianji.png" mode=""></image>
						<p>编辑</p>
					</view>
					<view class="shop-desc-item">
						<image src="../../static/bianji.png" mode=""></image>
						<p>编辑</p>
					</view>
					<view class="shop-desc-item">
						<image src="../../static/bianji.png" mode=""></image>
						<p>编辑</p>
					</view>
				</view>
			</view>
			<view class="shop-item">
				<view class="shop-info">
					<view class="shop-left">
						<image src="../../static/hongbao.png" mode=""></image>
					</view>
					<view class="shop-content">
						<view class="shop-content-top">
							<h2>碧波币</h2>
							<p>更新时间：08月22日14:30</p>
						</view>
						<view class="shop-content-bottom">
							<h2>0.5BBB</h2>
							<p>已售：155件</p>
						</view>
					</view>
					<view class="shop-right">
						<image src="../../static/top.png" mode=""></image>
					</view>
				</view>
				<view class="shop-desc">
					<view class="shop-desc-item">
						<image src="../../static/bianji.png" mode=""></image>
						<p>编辑</p>
					</view>
					<view class="shop-desc-item">
						<image src="../../static/xiajia.png" mode=""></image>
						<p>下架</p>
					</view>
					<view class="shop-desc-item">
						<image src="../../static/fenzu.png" mode=""></image>
						<p>分组</p>
					</view>
					<view class="shop-desc-item">
						<image src="../../static/shanchu%20(2).png" mode=""></image>
						<p>删除</p>
					</view>
				</view>
			</view>
		
		</view>
	</view>
</template>
<script>
	export default {
		data: {},
		methods: {

		}
	}
</script>

<style>
	.header {
		padding-top: 40px;
		box-sizing: border-box;
		overflow: hidden;
		height: 128px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #FFFFFF;
	}

	.header-left,
	.header-right {
		width: 100px;
		height: 88px;
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

	.calssly {
		height: 100px;
		width: 100%;
		display: flex;
		border-bottom: 4px solid #EEEEEE;
	}

	.calssly-item {
		flex: 0 0 33.33%;
		height: 100px;
		font-size: 36px;
		line-height: 100px;
		text-align: center;
		color: #b6b6b6;
	}

	.selectColor {
		color: #8cafea;
	}

	.search-box {
		width: 100%;
		height: 120px;
		/* background: #999; */
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search {
		width: 6rem;
		height: 0.7rem;
		background-color: #FFFFFF;
		border-radius: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #b6b6b6;
	}

	.search-icon {
		max-width: .36rem;
		max-height: .36rem;
		margin-right: 0.1rem;
	}

	.shop-item {
		width: 750px;
		min-height: 160px;
		display: flex;
		flex-direction: column;
	}

	.shop-info {
		background: #fff;
		width: 750px;
		padding: 0 20px;
		box-sizing: border-box;
		height: 160px;
		display: flex;
	}

	.shop-left {
		width: 160px;
		height: 160px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.shop-left image {
		width: 100px;
		height: 100px;
	}

	.shop-content {
		flex: 1;
		height: 160px;

		display: flex;
		flex-direction: column;
		padding: 30px 0;
		box-sizing: border-box;
	}

	.shop-content-top {
		display: flex;
		height: 50px;
		align-items: center;
		justify-content: space-between;
	}

	.shop-content-top h2 {
		font-size: 36px;

		color: #6c6c6c;
	}

	.shop-content-top p {
		font-size: 24px;
		color: #b6b6b6;
	}

	.shop-content-bottom {
		margin-top: 10px;
		display: flex;
		height: 40px;
		align-items: center;
		justify-content: space-between;
	}

	.shop-content-bottom h2 {
		font-size: 28px;
		color: #e97b78;
	}

	.shop-content-bottom p {
		font-size: 28px;

		color: #b6b6b6;
	}


	.shop-right {
		width: 60px;
		height: 160px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.shop-right image {
		width: 40px;
		height: 40px;
	}

	.shop-desc {
		width: 750px;
		height: 120px;
		background-color: #f7f7f7;
		display: flex;
		border-bottom: solid 4px #e5e5e5;
	}

	.shop-desc-item {
		flex: 0 0 25%;
		height: 120px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.shop-desc-item image {
		width: 50px;
		height: 50px;
	}

	.shop-desc-item p {
		margin-top: 10px;
		font-size: 28px;
		color: #b6b6b6;
	}
</style>
