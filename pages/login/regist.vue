<template>
	<view class="content">
		<view class="logo">
			<image class="left" src="../../static/left_01.png" mode=""></image>
			<image src="../../static/logo.png" mode=""></image>
		</view>
		<view class="login">
			<view class="login-item">
				<image class="img" src="../../static/login_2.png" mode=""></image>
				<input type="text" placeholder-class="phcolor" placeholder="用户名">
			</view>
			<view class="login-item">
				<image class="img" src="../../static/mima.png" mode=""></image>
				<input type="text" placeholder-class="phcolor" placeholder="密码">
			</view>
			<view class="login-item">
				<image class="img" src="../../static/mima.png" mode=""></image>
				<input type="text" placeholder-class="phcolor" placeholder="请再次输入密码">
			</view>
			<view class="btn">注册</view>
		</view>

	</view>
</template>

<script>
	export default {
		data: {

		},
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
	.content {
		width: 100%;
		height: 100vh;
		background: url(http://p4ygml8h5.bkt.clouddn.com/loginbg.png) no-repeat fixed center;
		background-size: cover;
	}

	.left {
		position: fixed;
		top: 30px;
		left: 20px;
		width: 40px;
		height: 40px;
	}

	.logo {
		height: 35vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.logo image {
		max-width: 2rem;
		max-height: 2rem;
		margin-bottom: 8vh;
	}

	.login {
		height: 65vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 60px;
		box-sizing: border-box;
	}

	.login-item {
		position: relative;
	}

	.login input {
		width: 100%;
		height: 100px;
		border-radius: 60px;
		margin-bottom: 50px;
		padding-left: 100px;
		box-sizing: border-box;
		border: solid 1px #ffffff;
		color: #b6b6b6;
	}

	.phcolor {
		color: #b6b6b6;
	}

	.login .img {
		position: absolute;
		top: 0;
		bottom: 50%;
		margin-top: 25px;
		left: 30px;
		width: 40px;
		height: 50px;
	}

	.btn {
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		border-radius: 0.6rem;
		margin-top: 0.5rem;
		text-align: center;
		background: #8cafea;
		color: #fff;
		font-size: 0.32rem;
	}

	input::placeholder {
		color: #b6b6b6;
	}
</style>
