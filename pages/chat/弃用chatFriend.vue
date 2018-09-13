<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/sys_2.png"  @tap="scanCode" ></image>
			</view>
			<view class="header-content">
				<view class="header-content-item">
					<view class="header-content-item-title" @click="goto()">聊天</view>

					<view class="header-content-item-title selected">朋友</view>
				</view>
			</view>
			<view class="header-right">
				<image src="../../static/add.png"></image>
			</view>
		</view>
		<view class="search-box">
			<view class="search">
				<image class="search-icon" src="../../static/sousuo.png"></image>

				搜索
			</view>
		</view>
		<view class="friend-box">
			<ul>
				<li class="friend-li border-bot">
					<image src="../../static/pengyou.png" alt="" class="mglr"></image> 新的朋友
				</li>
				<li class="friend-li">
					<image src="../../static/tongxinlu.png" alt="" class="mglr"></image> 手机联系人
				</li>
			</ul>
		</view>
		<view>
			<ul class="list">
				<li class="item">A</li>
				<li class="item">B</li>
				<li class="item">C</li>
				<li class="item">D</li>
				<li class="item">E</li>
				<li class="item">F</li>
				<li class="item">G</li>
				<li class="item">H</li>
				<li class="item">I</li>
				<li class="item">J</li>
				<li class="item">K</li>
				<li class="item">L</li>
				<li class="item">N</li>
				<li class="item">M</li>
				<li class="item">O</li>
				<li class="item">P</li>
				<li class="item">Q</li>
				<li class="item">R</li>
				<li class="item">R</li>
				<li class="item">R</li>
				<li class="item">R</li>
			</ul>
		</view>
		<!-- <scroll-view> -->
		<view>
			<view class="Addressbook-title">
				A
			</view>
			<view class="Addressbook-list">
				<ul>
					<li class="Addressbook-item">
						<view class="Addressbook-item-img">
							<image src="../../static/bg.jpg" mode=""></image>
						</view>
						<view class="mglr">阿米灵感</view>
					</li>
					<li class="Addressbook-item">
						<view class="Addressbook-item-img">
							<image src="../../static/bg.jpg" mode=""></image>
						</view>
						<view class="mglr">阿米灵感</view>
					</li>
				</ul>
			</view>
			<view class="Addressbook-title">
				B
			</view>
			<view class="Addressbook-list">
				<ul>
					<li class="Addressbook-item">
						<view class="Addressbook-item-img">
							<image src="../../static/bg.jpg" mode=""></image>
						</view>
						<view class="mglr">阿米灵感</view>
					</li>
					<li class="Addressbook-item">
						<view class="Addressbook-item-img">
							<image src="../../static/bg.jpg" mode=""></image>
						</view>
						<view class="mglr">阿米灵感</view>
					</li>
				</ul>
			</view>
			<view class="Addressbook-title">
				A
			</view>
			<view class="Addressbook-list">
				<ul>
					<li class="Addressbook-item">
						<view class="Addressbook-item-img">
							<image src="../../static/bg.jpg" mode=""></image>
						</view>
						<view class="mglr">阿米灵感</view>
					</li>
					<li class="Addressbook-item">
						<view class="Addressbook-item-img">
							<image src="../../static/bg.jpg" mode=""></image>
						</view>
						<view class="mglr">阿米灵感</view>
					</li>
				</ul>
			</view>

		</view>
		<!-- </scroll-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: [],
				pList: [],
				hosturl: global.hosturl,
			}
		},
		onLoad() {

		},
		methods: {
			goto: function () {
				uni.switchTab({
					url: 'chat'
				});
			},
		}
	}
</script>

<style>
	.header {
		height: 1rem;
		width: 100%;
		display: flex;
		align-items: center;
		background: #FFFFFF;
	}

	.header-left {
		min-width: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-left image {
		margin-left: 0.1rem;
		width: 0.4rem;
		height: 0.4rem;
	}

	.header-content {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.header-content-item {
		display: flex;
		width: 2rem;
		height: 0.6rem;
		justify-content: space-between;
		align-items: center;
	}

	.header-content-item-title {
		display: flex;
		justify-content: center;
		color: #000;
		width: 0.72rem;
		height: 0.6rem;
		box-sizing: border-box;
		align-items: center;
		font-size: 0.36rem;
		cursor: default;
	}

	.selected {
		color: #8cafea;
		border-bottom: 0.04rem solid #8cafea;
	}

	.header-right {
		min-width: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header-right image {
		width: 0.4rem;
		height: 0.4rem;
	}

	.search-box {
		width: 100%;
		height: 1.2rem;
		background: #f7f7f7;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search {
		width: 6rem;
		height: 0.7rem;
		background-color: #FFFFFF;
		border-radius: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #b6b6b6;
	}

	.search-icon {
		max-width: .36rem;
		max-height: .36rem;
		margin-right: 0.1rem;
	}

	.friend-li {
		width: 100%;
		height: 0.8rem;
		display: flex;
		align-items: center;
		background-color: #fff;
	}

	.friend-li image {
		width: 0.4rem;
		height: 0.4rem;
	}

	.border-bot {
		border-bottom: 0.02rem solid #f7f7f7;
	}

	.mglr {
		margin: 0 0.2rem;
	}

	.Addressbook-title {
		height: 0.6rem;
		width: 100%;
		background: #f7f7f7;
		box-sizing: border-box;
		padding-left: 0.2rem;
		display: flex;
		align-items: center;
	}

	.Addressbook-item {
		width: 100%;
		box-sizing: border-box;
		height: 1.6rem;
		background-color: #fff;
		display: flex;
		align-items: center;
		padding-left: 0.2rem;
		border-bottom: 0.04rem solid #f7f7f7;
	}

	.Addressbook-item-img image {
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		overflow: hidden;
	}

	.list {
		position: fixed;
		top: 1.58rem;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 0.4rem;
		z-index: 1;
	}

	.item {
		line-height: 0.4rem;
		text-align: center;
		color: #888;
	}
</style>
