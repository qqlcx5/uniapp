<template>
	<view class="content">
		<view class="logo">
			<view class="regist">注册</view>
			<image src="../../static/logo.png"></image>
		</view>
		<view class="mobile">
			<view class="mobile-item selectd">
				<image src="../../static/login.png"></image>
				账号登录
			</view>
			<view class="mobile-item">
				<image src="../../static/shouji_2.png"></image>
				手机登录
			</view>
		</view>

		<view class="login">
			<view class="login-item">
				<image src="../../static/shouji_2.png" mode=""></image>
				<input type="text" placeholder-class="placeholder" placeholder="输入账号登录">
			</view>
			<view class="login-item">
				<image src="../../static/mima.png" mode=""></image>
				<input type="text" placeholder-class="placeholder" placeholder="输入密码">
			</view>
			<view class="btn">登录</view>
			<view class="login-desc">
				＊登录即表示您同意
				<a href="#">《碧波世界用户协议》</a>
			</view>
			<view class="friend-style">
				<view class="borders"></view>
				<view class="friend-title">已有账号，快速登录</view>
				<view class="borders"></view>
			</view>
			<view class="QQ-login">
				<view class="friend-login">
					<view class="friend-img">
						<image src="../../static/qq_2.png" mode=""></image>
					</view>
					<view class="friend-desc">
						QQ
					</view>
				</view>
				<view class="friend-login">
					<view class="friend-img">
						<image src="../../static/wxchat.png" mode=""></image>
					</view>
					<view class="friend-desc">
						微信
					</view>
				</view>
				<view class="friend-login">
					<view class="friend-img">
						<image src="../../static/weibo.png" mode=""></image>
					</view>
					<view class="friend-desc">
						微博
					</view>
				</view>
			</view>
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
		overflow: hidden;
	}

	.logo {
		height: 20vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.regist {
		position: fixed;
		top: 0.2rem;
		right: .2rem;
		color: #fff;
		font-size: 32px;
	}

	.logo image {
		width: 200px;
		height: 200px;
	}

	.mobile {
		height: 10vh;
		width: 100%;
		display: flex;
		color: #fff;
		align-items: center;
	}

	.mobile image {
		width: 34px;
		height: 40px;
		margin-right: 10px;
	}

	.mobile-item {
		width: 50%;
		line-height: 10vh;
		height: 10vh;
		text-align: center;
		box-sizing: border-box;
	}

	.selectd {
		color: #8cafea;
	}

	.login {
		height: 80vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 0.4rem;
		box-sizing: border-box;
	}

	.login-item {
		position: relative;
	}

	.login image {
		width: 36px;
		height: 40px;
		position: absolute;
		top: 30px;
		left: 40px;
	}

	.login input {
		width: 100%;
		height: 1rem;
		border-radius: 0.6rem;
		margin-bottom: 0.5rem;
		padding-left: 1rem;
		background: none;
		box-sizing: border-box;
		border: solid 1px #ffffff;
		color: #b6b6b6;
	}

	.placeholder {
		color: #b6b6b6;
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

	.login-desc {
		height: 6vh;
		line-height: 6vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #a7a7a7;
		font-size: 24px;
	}

	.login-desc a {
		color: #719deb;
	}

	.friend-style {
		height: 5vh;
		width: 100%;
		margin-top: 0.4rem;
		margin-bottom: 0.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.friend-title {
		font-size: .28rem;
		color: #b6b6b6;
		padding: 0 0.2rem;
	}

	.borders {
		flex: 1;
		height: 2px;
		background: #b6b6b6;
	}

	.QQ-login {
		height: 15vh;
		width: 100%;
		display: flex;
	}

	.friend-login {
		width: 33.33%;
		height: 15vh;
		display: flex;
		flex-direction: column;
	}

	.friend-img {
		height: 12vh;
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.friend-img image {
		position: absolute;
		left: 50%;
		margin-left:-40px;
		width: 80px;
		height: 80px;
	}

	.friend-desc {
		height: 3vh;
		width: 100%;
		color: #b6b6b6;
		font-size: 28px;
		text-align: center;
	}
</style>
