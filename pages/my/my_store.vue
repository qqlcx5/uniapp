<template>
	<view>
		<view class="header">
			<view class="header-left" @click="gotoleft">
				<image src="../../static/left_2.png" mode=""></image>
			</view>
			<view class="header-content">
				开店设置
			</view>
			<view class="header-right">
				<span>预览</span>
			</view>
		</view>

		<view class="header-bg-img">
			<image src="../../static/my_13.jpg"></image>
		</view>


		<view class="body-content">
			<view class="store">
				<image src="../../static/my_12.jpg"></image>
				<p>点击上传店铺图标</p>
			</view>

			<view class="store-list">
				<ul>
					<li>
						<span>店铺名称</span>
						<view class="store-list-right">
							<input type="text" placeholder="时尚大咖" placeholder-class="placeholder">
							<image src="../../static/right_01.png"></image>
						</view>
					</li>
					<li>
						<span>微信号</span>
						<view class="store-list-right">
							<input type="text" placeholder="时尚大咖" placeholder-class="placeholder">
							<image src="../../static/right_01.png"></image>
						</view>
					</li>
					<li>
						<span>店铺名称</span>
						<view class="store-list-right">
							<input type="text" placeholder="时尚大咖" placeholder-class="placeholder">
							<image src="../../static/right_01.png"></image>
						</view>
					</li>
					<li>
						<span>货币</span>
						<view class="store-list-right">
							<input type="text" placeholder="时尚大咖" placeholder-class="placeholder">
							<image src="../../static/right_01.png"></image>
						</view>
					</li>
					<li>
						<span>支付方式</span>
						<view class="store-list-right">
							<span>未设置</span>
							<image src="../../static/right_01.png"></image>
						</view>
					</li>
					<li>
						<span>店铺描述</span>
						<view class="store-list-right">
							<span>已开启</span>
							<image src="../../static/right_01.png"></image>
						</view>
					</li>
				</ul>
			</view>

			<view class="open-btn">开店</view>
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
		position: absolute;
		top: 0;
		z-index: 10;
		color: #FFFFFF;
	}
	.header-left {
		min-width: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-left image {
		
		width: 30px;
		height: 30px;
	}

	.header-content {
		flex: 1;
		overflow: hidden;
		display: flex;
		justify-content: center;
		font-size: 0.36rem;

	}
	.header-right {
		min-width: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;

	}

	.header-bg-img {
		width: 100%;
		height: 3rem;
		background: #585858;
	}

	.header-bg-img image {
		position: absolute;
		width: 100%;
		height: 3rem;
		top: 0;
		left: 0;
		opacity: 0.3;
	}

	.store image {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		margin-top: -1rem;
	}

	.store p {
		color: #b6b6b6;
		font-size: 0.3rem;
		margin-top: 0.2rem;
	}

	.body-content {
		text-align: center;
	}

	.store-list li {
		height: 1rem;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		border-bottom: solid #F7F7F7 1px;
	}

	.store-list li>span {
		color: #585858;
		font-size: 0.3rem;
		line-height: 1rem;
		padding-left: 0.2rem;
	}

	.store-list-right {
		flex: 1;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		color: #b6b6b6;
	}

	.store-list-right input {
		flex: 1;
		height: 100px;
		text-align: right;
		font-size: 32px;
		color: #b6b6b6;
	}
	.placeholder{
		font-size: 32px;
		color: #b6b6b6;
	}
	.store-list-right image {
		width: 30px;
		height: 30px;
		margin: 0 20px;
	}

	.open-btn {
		margin-left: 23%;
		width: 54%;
		height: 0.68rem;
		background-color: #e97b78;
		line-height: 0.68rem;
		color: white;
		border-radius: 0.5rem;
		font-size: 0.32rem;
		margin-top: 0.6rem;
		margin-bottom: 0.6rem;
	}
</style>
