<template>
	<view class="">
		<view class="header-fix">
			<view class="header">
				<view class="header-left">
					<image src="../../static/chat_01.png" mode=""></image>
				</view>
				<view class="header-content">
					朋友
				</view>
				<view class="header-right" @click="gotoaddfriend()">
					<image src="../../static/add.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="search-box">
			<view class="search" @click="gosuosouFriend">
				<image class="search-icon" src="../../static/sousuo.png"></image>
				搜索
			</view>
		</view>
		
		
		<view class="friend-box">
			<ul>
				<li class="friend-li border-bot" @click="gotonewfriend()">
					<image src="../../static/pengyou.png" alt="" class="mglr"></image> 新的朋友
				</li>
				<li class="friend-li" @click="gototel()">
					<image src="../../static/tongxunlu.png" alt="" class="mglr"></image> 手机联系人
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
			</ul>
		</view>
		<view>
			<article class="area">
				<div class="area-title">A</div>
				<div class="area-item">
					<view class="area-image">
						<image src="../../static/bg.jpg" mode=""></image>
					</view>
					<view>
						啊啊啊啊啊啊
					</view>
				</div>
				<div class="area-item">
					<view class="area-image">
						<image src="../../static/bg.jpg" mode=""></image>
					</view>
					<view>
						啊啊啊啊啊啊
					</view>
				</div>

			</article>
			<article class="area">
							<div class="area-title">B</div>
							<div class="area-item">
								<view class="area-image">
									<image src="../../static/bg.jpg" mode=""></image>
								</view>
								<view>
									啊啊啊啊啊啊
								</view>
							</div>
							<div class="area-item">
								<view class="area-image">
									<image src="../../static/bg.jpg" mode=""></image>
								</view>
								<view>
									啊啊啊啊啊啊
								</view>
							</div>
			
						</article>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			gotonewfriend: function () {
				uni.navigateTo({
					url: 'newFriend',
				})
			},
			gototel: function () {
				uni.navigateTo({
					url: 'tel',
				})
			},
			gotoaddfriend: function () {
				uni.navigateTo({
					url: 'addFriend',
				})
			},
			goinfodetail() {
				uni.navigateTo({
					url: 'infodetail',
				})
			},
			gosuosouFriend() {
				uni.navigateTo({
					url: 'suosouFriend',
				})
			}
		}
	}
</script>

<style>
	.header-fix {
		height: 100px;
		width: 100%;
	}

	.header {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #8cafea;
		position: fixed;
	}

	.header-left,
	.header-right {
		width: 100px;
		height: 64px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header image {
		width: 30px;
		height: 30px;
	}

	.header-content {
		flex: 1;
		text-align: center;
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
	}.mglr{
		margin: 0 20px 0 40px;
		}

	.border-bot {
		border-bottom: 0.02rem solid #f7f7f7;
	}


	.list {
		position: fixed;
		top: 158px;
		right: 10px;
		bottom: 0;
		font-size: 28px;
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

	.area {
		min-height: 200px;
		width: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
	}

	.area-title {
		height: 60px;
		width: 100%;
		line-height: 60px;
		background: #F7F7F7;
		font-size: 28px;
		color: #6c6c6c;
		padding-left: 20px;
	}

	.area-item {
		display: flex;
		align-items: center;
		height: 160px;
		width: 100%;
		overflow: hidden;
		border-bottom: 4px solid #F1F1F1;
		font-size: 28px;
		color: #6c6c6c;
	}

	.area-image {
		height: 160px;
		width: 160px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.area-image image {
		width: 120px;
		height: 120px;
		border-radius: 50%;
	}
</style>
