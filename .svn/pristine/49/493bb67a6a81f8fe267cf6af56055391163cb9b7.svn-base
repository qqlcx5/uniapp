<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				转换成功
			</view>
			<view class="header-right green">
				<!-- 完成 -->
			</view>
		</view>
		<view class="content">
			<view class="box">
				<image src="../../static/zhifuchenggong.png" mode=""></image>
				<p class="box-title">
					转换成功
				</p>
				<p class="box-desc">
					感谢支持，我们将继续努力！
				</p>
				<view class="box-info">
					<view class="info-item">
						<view>订单号</view>
						<view>S54865548521545</view>
					</view>
					<view class="info-item">
						<view>转换币种</view>
						<view>碧波币转比特币</view>
					</view>
					<view class="info-item">
						<view>手续费</view>
						<view>1 碧波币</view>
					</view>
					<view class="info-item">
						<view>下单时间</view>
						<view>2018年9月4日13:55</view>
					</view>

				</view>
				<view class="box-detail">订单详情</view>
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		data: {},
		methods: {
// 			gotoDetail() {
// 				uni.navigateTo({
// 					url: "mallMessage"
// 				})
// 			},
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

	.box {
		background-color: #ffffff;
		margin: 100px auto;
		width: 80%;
		height: 9rem;
		box-sizing: border-box;
		padding: 0.4rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		border-radius: 0.3rem;
	}

	.box image {
		max-width: 2rem;
		max-height: 2rem;
		margin: 0.4rem 0;
		border-radius: 50%;
	}

	.box-title {
		font-size: 0.36rem;
		color: #585858;
		height: 0.6rem;
		line-height: 0.6rem;
	}

	.box-desc {
		line-height: 0.4rem;
		height: 0.4rem;
		font-size: 0.32rem;
		color: #b6b6b6;
		margin-top: 0.1rem;
	}

	.box-info {
		width: 100%;
		height: 4rem;
		margin-top: 0.1rem;
	}

	.info-item {
		height: 1rem;
		width: 100%;

		display: flex;
		font-size: 0.32rem;
		color: #b6b6b6;
		align-items: center;
		justify-content: space-between;
	}

	.box-detail {
		color: #79c343;
		font-size: 0.32rem;
	}
</style>
