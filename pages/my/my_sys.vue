<template>
	<view>
		<view class="header">
			<view class="header-left" @click="gotoleft">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				系统设置
			</view>
			<view class="header-right">
				<!-- <image src="../../static/sousuo.png" mode=""></image> -->
			</view>
		</view>

		<view class="body-content">
			<view class="list-box">
				<ul>
					<li @click="gotonum">
						<span>账户管理</span>
						<image src="../../static/right_01.png"></image>
					</li>
					<li  @click="gotopay">
						<span>支付管理</span>
						<image src="../../static/right_01.png"></image>
					</li>
					<!-- <li>
						<span>语音管理</span>
						<image src="../../static/right_01.png"></image>
					</li> -->
				</ul>
			</view>

			<view class="list-box header-margin">
				<ul>
					<li>
						<span>消息通知</span>
						<image src="../../static/right_01.png"></image>
					</li>
					<li>
						<span>关于我们</span>
						<image src="../../static/right_01.png"></image>
					</li>
				</ul>
			</view>
			<footer>
				<div class="exit-btn">退出登录</div>
				<div class="switch-account-btn">切换账号</div>
			</footer>
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
			gotonum: function () {
				uni.navigateTo({
					url: "my_num"
				})
			},
			gotopay: function () {
				uni.navigateTo({
					url: "my_pay"
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
		background: #fff;
		overflow: hidden;
		margin-bottom: 0.1rem;
		box-shadow: 0px 2px 4px 0px rgba(238, 238, 238, 0.5);
	}

	.header-left {
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
	}

	.header-right image {
		max-height: 0.4rem;
		max-width: 0.4rem;
	}

	.header-right {
		min-width: 1rem; 
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.list-box {
		margin: 0.2rem;
		padding: 0 0.4rem;
		background: #fff;
		border-radius: 0.1rem;
		padding-bottom: 0.2rem;
	}

	.list-box li {
		padding-top: 0.2rem;
		border-bottom: 1px solid #eee;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.32rem;
		display: flex;
		justify-content: space-between;
	}

	.list-item-title {
		font-family: PingFangSC-Medium;
		font-size: 24px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #606060;
	}

	.list-box li span {
		font-size: 24px;
		color: #585858;
	}

	.list-box li image {
		width: 0.2rem;
		height: 0.2rem;
		margin-top: 0.5rem;
	}

	.height-margin {
		margin-top: 0.4rem;
	}

	footer div {
		margin-left: 23%;
		width: 54%;
		height: 0.6rem;
		line-height: 0.6rem;
		border-radius: 0.5rem;
		font-size: 0.3rem;
	}

	.exit-btn {
		margin-top: 0.6rem;
		background-color: #e97b78;
		color: white;
		text-align: center;
	}

	.switch-account-btn {
		margin-top: 0.4rem;
		border: 1px solid #e4e2e5;
		text-align: center;
	}
</style>
