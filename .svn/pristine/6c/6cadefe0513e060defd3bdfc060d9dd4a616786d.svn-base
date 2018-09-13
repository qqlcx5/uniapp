<template>
	<view>
		<view class="header">
			<view class="header-left" @click="gotoleft">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">我的店铺</view>
			<view class="header-right"> </view>
		</view>

		<view class="shop_self">
			<image src="../../static/my_12.jpg"></image>
			<view class="shop_self_t">
				<p>店铺2018456789</p>

				<view class="shop_self_m">
					<image src="../../static/my_14.png"></image>
					<span>厦门</span>
				</view>

			</view>
		</view>

		<view class="shop-ins">
			<p>今日收入</p>
			<p>0.00</p>
		</view>

		<view class="shop-self-list">
			<ul>
				<li>
					<p>0</p>
					<p>今日访客</p>
				</li>
				<li>
					<p>0</p>
					<p>本月订单</p>
				</li>
				<li>
					<p>0</p>
					<p>月交易额</p>
				</li>
			</ul>
		</view>

		<view class="shop-add-s">
			<image src="../../static/my_15.png"></image>
			<span>添加商品</span>
		</view>

		<view class="shop-bottom-l">
			<ul>
				<li>
					<image src="../../static/my_16.png"></image>
					<p>店铺管理</p>
				</li>
				<li>
					<image src="../../static/my_17.png"></image>
					<p>订单管理</p>
				</li>
				<li>
					<image src="../../static/my_18.png"></image>
					<p>商品管理</p>
				</li>
				<li>
					<image src="../../static/my_19.png"></image>
					<p>发布商品</p>
				</li>
			</ul>
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
			gotoleft: function () {
				uni.navigateBack({
					delta: 1
				})
			},
		}

	}
</script>

<style>
	.header {
		height: 0.88rem;
		width: 100%;
		display: flex;
		align-items: center;
		overflow: hidden;
		/* box-shadow: 0px 2px 4px 0px rgba(238, 238, 238, 0.5); */
		background: #FFFFFF;
	}

	.header-left,.header-right {
		min-width: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-left image {
		width: 0.4rem;
		height: 0.4rem;
	}

	.header-content {
		flex: 1;
		overflow: hidden;
		display: flex;
		justify-content: center;
		font-size: 0.36rem;
		color: #000;
	}

	.shop_self {
		display: flex;
		margin-top: 1rem;
		height: 1.5rem;
		background-color: #FFFFFF;
		margin-bottom: 0.1rem;
	}

	.shop_self>image {
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		margin: 0.1rem;
	}

	.shop_self_t {
		margin-top: 0.3rem;
		margin-left: 0.5rem;
		/* line-height: 1.2rem; */
	}

	.shop_self_t p {
		font-size: 26px;
		color: #6c6c6c;
	}

	.shop_self_m {
		/* line-height: 1.2rem; */
	}

	.shop_self_m span {
		font-size: 23px;
		color: #b6b6b6;
	}


	.shop_self_m image {
		width: 0.2rem;
		height: 0.2rem;
	}

	.shop-ins {
		height: 1.45rem;
		/* padding: 0.3rem 0.5rem; */
		background-color: #FFFFFF;
		margin-bottom: 0.07rem;
	}



	.shop-ins p:nth-child(1) {
		padding: 0.2rem;
		font-size: 0.3rem;
		color: #6c6c6c;
	}

	.shop-ins p:nth-child(2) {
		padding-left: 0.25rem;
		font-size: 0.4rem;
		color: #e97b78;
	}

	.shop-self-list {
		height: 1.45rem;
		background-color: #FFFFFF;
		margin-bottom: 0.1rem;
	}

	.shop-self-list ul li {
		margin-top: 0.2rem;
		display: inline-block;
		width: 33.3%;
	}

	.shop-self-list ul li p {
		text-align: center;
	}

	.shop-self-list ul li p:nth-child(1) {

		color: #6c6c6c;
	}

	.shop-self-list ul li p:nth-child(2) {
		color: #b6b6b6;
	}

	.shop-add-s {
		height: 1rem;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.shop-add-s image {
		width: 50px;
		height: 50px;
		/* background-color: #6c6c6c; */
	}

	.shop-add-s span {
		padding-left: 0.2rem;
	}

	.shop-bottom-l {}

	.shop-bottom-l ul li {
		background-color: #FFFFFF;
		width: 40%;
		height: 1.2rem;
		border-radius: 5%;
		margin-left: 0.5rem;
		margin-top: 0.3rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.shop-bottom-l ul li image {
		width: 0.6rem;
		height: 0.6rem;
	}

	.shop-bottom-l ul li p {
		font-size: 24px;
		color: #b6b6b6;
		margin-left: 0.1rem;
	}
</style>
