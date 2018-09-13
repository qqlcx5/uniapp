<template>
	<view>
		<view class="header">
			<view class="header-bg">
				<image class="face-bg" src="../../static/bg.jpg"></image>
				<view class="black-bg"></view>
			</view>
			<image class="setting-btn" src="../../static/setting@2x.png"></image>
			<view class="user-info">
				<image class="face" src="../../static/bg.jpg"></image>
				<p class="user-nick">克里斯</p>
				<p class="username">账号:kls123123123</p>
			</view>
		</view>
		<view class="body-content">
			<p class="title">碧波服务</p>
			<view class="server-table">
			<ul>
				<li>
					<image class="table-icon" src="../../static/my_02.png"></image>
					<p class="table-text">交易记录</p>
				</li>
				<li>
					<image class="table-icon" src="../../static/my_01.png"></image>
					<p class="table-text">开店设置</p>
				</li>
				<li>
					<image class="table-icon" src="../../static/my_04.png"></image>
					<p class="table-text">联系客服</p>
				</li>
				<li>
					<image class="table-icon" src="../../static/my_05.png"></image>
					<p class="table-text">币商设置</p>
				</li>
				<li>
					<image class="table-icon" src="../../static/my_06.png"></image>
					<p class="table-text">联系公众号</p>
				</li>
				<li>
					<image class="table-icon" src="../../static/my_07.png"></image>
					<p class="table-text">系统设置</p>
				</li>
			</ul>
		</view>
	</view>
	</view>
</template>

<script>
	export default {

	}
</script>

<style>
	.header {
		width: 100%;
		height: 3.85rem;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.setting-btn {
		position: absolute;
		width: 0.48rem;
		top: 10%;
		right: 0.32rem;
		z-index: 99;
	}

	.header-bg {
		width: 110%;
		margin-left: -5%;
		height: 3.85rem;
		/* background-image: url(../static/bg.jpg); */
		-webkit-clip-path: inset(0 round 0 0 50% 50%);
		overflow: hidden;
		-webkit-filter: blur(0.05rem);
		/* Chrome, Opera */
		-moz-filter: blur(0.05rem);
		-ms-filter: blur(0.05rem);
		filter: blur(0.05rem);
	}

	.black-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.3;
	}

	.user-info {
		position: absolute;
		top: 10%;
		width: 100%;
	}

	.face-bg {
		width: 100vw;
		margin-top: -10%;
	}

	.face {
		width: 1.75rem;
		height: 1.75rem;
		-webkit-clip-path: circle(50% at 50% 50%);
	}

	.user-nick {
		font-size: 0.36rem;
		color: #fff;
		margin-top: 0.2rem;
	}

	.username {
		font-size: 0.24rem;
		color: #fff;
		margin-top: 0.2rem;
		opacity: 0.9;
	}

	.setting-btn {
		position: absolute;
		width: 24px;
		height: 24px;

		top: 10%;
		right: 0.32rem;
		z-index: 99;
	}

	.header-bg {
		width: 110%;
		margin-left: -5%;
		height: 3.85rem;
		/* background-image: url(../static/bg.jpg); */
		-webkit-clip-path: inset(0 round 0 0 50% 50%);
		overflow: hidden;
		-webkit-filter: blur(0.05rem);
		/* Chrome, Opera */
		-moz-filter: blur(0.05rem);
		-ms-filter: blur(0.05rem);
		filter: blur(0.05rem);
	}

	.black-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.3;
	}

	.face-bg {
		width: 100vw;
		margin-top: -10%;
	}

	.face {
		width: 1.75rem;
		height: 1.75rem;
		-webkit-clip-path: circle(50% at 50% 50%);
	}

	.setting-btn {
		position: absolute;
		width: 24px;
		height: 24px;
		top: 10%;
		right: 0.32rem;
		z-index: 99;
	}

	.header-bg {
		width: 110%;
		margin-left: -5%;
		height: 3.85rem;
		/* background-image: url(../static/bg.jpg); */
		-webkit-clip-path: inset(0 round 0 0 50% 50%);
		overflow: hidden;
		-webkit-filter: blur(0.05rem);
		/* Chrome, Opera */
		-moz-filter: blur(0.05rem);
		-ms-filter: blur(0.05rem);
		filter: blur(0.05rem);
	}

	.black-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.3;
	}

	.user-info {
		position: absolute;
		top: 10%;
		width: 100%;
	}

	.face-bg {
		width: 100vw;
		margin-top: -10%;
	}

	.face {
		width: 1.75rem;
		height: 1.75rem;
		border-radius:50% 50% ;
	}

	.user-nick {
		font-size: 0.36rem;
		color: #fff;
		margin-top: 0.2rem;
	}

	.username {
		font-size: 0.24rem;
		color: #fff;
		margin-top: 0.2rem;
		opacity: 0.9;
	}
	.title {
			font-size: 0.32rem;
			color: #b6b6b6;
			height: 0.6rem;
			line-height: 0.6rem;
			padding-left: 0.2rem;
		}
	.server-table {
			width: 100%;
			text-align: center;
			vertical-align: middle;
			border-top: 1px solid #e5e5e5;
		}
		.server-table ul {
			
		}
		.server-table ul li{
			width: 245px;
			height: 245px;
			border: solid 1px #e5e5e5;
			display: inline-block;
		}
		.table-icon {
			width: 60px;
			height: 60px;
			margin: 60px 40px 10px 40px;
		}

		.table-text {
			color: #5c5c5c;
			font-size: 20px;
		}
</style>
