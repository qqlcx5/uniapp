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
					<li @click="gotorect">
						<image class="table-icon" src="../../static/my_02.png"></image>
						<p class="table-text bordl">交易记录</p>
					</li>
					<li @click="gotostore">
						<image class="table-icon" src="../../static/my_01.png"></image>
						<p class="table-text ">开店设置</p>
					</li>
					<li @click="show">
						<image class="table-icon" src="../../static/my_04.png"></image>
						<p class="table-text bordr">联系客服</p>
					</li>
					<li @click="gotoaddres">
						<image class="table-icon" src="../../static/my_05.png"></image>
						<p class="table-text bordl">地址薄</p>
					</li>
					<li @click="gotoshop">
						<image class="table-icon" src="../../static/my_06.png"></image>
						<p class="table-text">我的店铺</p>
					</li>
					<li @click="gotosys">
						<image class="table-icon" src="../../static/my_07.png"></image>
						<p class="table-text bordr">系统设置</p>
					</li>
				</ul>
			</view>
		</view>
		<view class="mask" v-show="showMask" @click="hide"></view>
		<view class="popup popup-middle" v-show="showState.middle">
			<view class="desc">
				<p>手机号码:0592-6397953</p>
				<p>微信:Bbobi688922</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'popup',
				showState: {
					top: false,
				},
				showMask: false,
				activePop: 'middle'
			}
		},
		onLoad() {

		},
		methods: {
			gotorect: function () {
				uni.navigateTo({
					url: "my_rect"
				})
			},
			gotostore: function () {
				uni.navigateTo({
					url: "my_store"
				})
			},
			gotoser: function () {
				uni.navigateTo({
					url: "my_ser"
				})
			},
			gotoaddres: function () {
				uni.navigateTo({
					url: "my_addres"
				})
			},
			gotoshop: function () {
				uni.navigateTo({
					url: "my_shop"
				})
			},
			gotosys: function () {
				uni.navigateTo({
					url: "my_sys"
				})
			},
			show(evt) {
				var pos = evt.target.dataset.position
				switch (pos) {
					case 'top':
						this.activePop = 'top'
						break
				}
				this.showMask = true
				this.showState[this.activePop] = true
			},
			hide() {
				this.showMask = false
				this.showState[this.activePop] = false
			}

		}
	}
</script>

<style>
	.server-table .bordl {
		border-left: none;
	}

	.server-table .bordr {
		border-left: none;
	}

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
		/* background-image: url(../../static/bg.jpg); */
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
		/* background: #000; */
		opacity: 0.1;
	}

	.user-info {
		position: absolute;
		top: 10%;
		width: 100%;
	}

	.face-bg {
		width: 100%;
		/* margin-top: -10%; */
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
		border-radius: 50% 50%;
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

	.server-table ul {}

	.server-table ul li {
		width: 245px;
		height: 245px;
		border: solid 1px #e5e5e5;
		background-color: #FFFFFF;
		display: inline-block;
	}

	.server-table ul li:nth-child(1),
	.server-table ul li:nth-child(4) {
		border-left: #FFFFFF;
	}

	.server-table ul li:nth-child(3),
	.server-table ul li:nth-child(6) {
		border-right: #FFFFFF;
	}

	.table-icon {
		width: 80px;
		height: 80px;
		margin: 60px 40px 10px 40px;
	}

	.table-text {
		color: #5c5c5c;
		font-size: 24px;
	}

	.mask {
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}

	.popup {
		position: absolute;
		z-index: 20;
		background-color: #ffffff;
		-webkit-box-shadow: 0 0 30px rgba(0, 0, 0, .1);
		box-shadow: 0 0 30px rgba(0, 0, 0, .1);
	}

	.popup-middle {
		width: 400px;
		height: 400px;
		border-radius: 10px;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}

	.popup-top {
		top: 0;
		width: 100%;
		height: 100px;
		text-align: center;
	}

	.popup-top text {
		line-height: 100px;
		margin-left: 20px;
		font-size: 32px;
	}

	.popup-bottom {
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
	}

	.popup-bottom text {
		line-height: 100px;
		font-size: 32px;
	}

	.popup .list-view {
		height: 600px;
	}

	.list-view-item {
		position: relative;
		padding: 22px 30px;
		overflow: hidden;
		font-size: 28px;
	}

	.list-view-item::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 30px;
		height: 2px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row .btn {
		margin: 20px;
	}

	.desc {
		padding: 10px 20px;
		font-size: 20px;
		color: #8cafea;
		letter-spacing: 3px;
		line-height: 30px;
		margin-top: 120px;
		text-align: center;
	}

	.desc p {
		height: 100px;
		line-height: 100px;
		font-size: 28px;
	}
</style>
