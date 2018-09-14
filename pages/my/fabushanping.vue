<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				发布商品
			</view>
			<view class="header-right ">

			</view>
		</view>
		<view class="addPicture">
			<image src="../../static/picture.png" mode=""></image>
			<p>添加照片</p>
		</view>
		<view class="shopinfo">
			<view class="shop-box">
				<textarea placeholder-class="placeholder" placeholder="在这里详细描述一下宝贝的规格尺寸、新旧程度、和使用感受吧～"></textarea>
			</view>
		</view>
		<view class="shopinput">
			<view class="input-box">
				<view class="input-item">
					<p>名称：</p>
					<input type="text" placeholder="碧波币（bibobi）">
				</view>
				<view class="input-item">
					<p>价格：</p>
					<input type="text" placeholder="0.5BBB">
				</view>
				<view class="input-item">
					<p>分类：</p>
					<input type="text" placeholder="虚拟货币">
				</view>
				<view class="input-item">
					<p>数量：</p>
					<input type="text" placeholder="333">
				</view>
			</view>
		</view>
		<view class="btn">
			发布商品
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

	.addPicture {
		border-top: 2px solid #eeeeee;
		width: 750px;
		height: 260px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
	}

	.addPicture image {
		width: 100px;
		height: 80px;
	}

	.addPicture p {
		margin-top: 20px;
		font-size: 32px;
		color: #606060;
	}

	.shopinfo {
		padding: 20px;
		width: 750px;
		height: 260px;
		box-sizing: border-box;
		overflow: hidden;
	}

	.shop-box {
		width: 100%;
		height: 100%;
		padding: 40px 40px 40px 20px;
		box-sizing: border-box;
		background: #FFFFFF;
		border-radius: 10px;
	}

	.shop-box textarea {
		width: 100%;
		height: 100%;
		color: #b6b6b6;
	}

	.placeholder {
		color: #b6b6b6;
		font-size: 32px;
	}

	.shopinput {
		height: 440px;
		width: 100%;
		padding: 0 20px;
		box-sizing: border-box;
	}

	.shopinput .input-box {
		width: 100%;
		height: 100%;
		padding: 0 40px;
		box-sizing: border-box;
		background-color: #ffffff;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
	}

	.input-item {
		width: 100%;
		height: 100px;
		align-items: center;
		display: flex;
		border-bottom: solid 2px #eeeeee;
	}

	.input-item p {
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		display: block;
	}

	.input-item input {
		flex: 1;
		height: 100px;
	}

	.btn {
		width: 400px;
		height: 70px;
		line-height: 70px;
		text-align: center;
		background-color: #e97b78;
		border-radius: 36px;
		position: fixed;
		bottom: 40px;
		left: 50%;
		margin-left: -200px;
		color: #ffffff;
	}
</style>
