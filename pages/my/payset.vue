<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				支付设置
			</view>
			<view class="header-right green">
				<!-- 完成 -->
			</view>
		</view>
		<view class="content">
			<view class="item bord">
			<view class="item-content">
				设置支付密码
			</view>
			<image src="../../static/right.png" mode=""></image>
			</view>
			<view class="item">
			<view class="item-content">
				修改支付密码
			</view>
			<image src="../../static/right.png" mode=""></image>
			</view>
			
		</view>

	</view>
</template>
<script>
	export default {
		data: {},
		methods: {
			gotoDetail() {
				uni.navigateTo({
					url: "mallMessage"
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
		height: 200px;
		box-sizing: border-box;
		padding: 0 30px;
		background: #FFFFFF;
		margin: 30px auto 0;
	}
	.bord{
		border-bottom: 2px solid #EEEEEE;
	}
	.item{
		height: 100px;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		}
		.item-content{
			flex: 1;
		}
		.item image{
			width: 30px;
			height: 30px;
		}
</style>
