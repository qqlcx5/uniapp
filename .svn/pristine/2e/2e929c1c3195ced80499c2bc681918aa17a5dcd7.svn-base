-
<template>
	<view>
		<view class="header">
			<view class="header-left" @click="gotoleft">
				<image src="../../static/left_01.png" mode=""></image>
			</view>
			<view class="header-content">碧波币地址</view>
			<view class="header-right"> </view>
		</view>

		<view class="add-num">
			<image src="../../static/my_09.jpg"></image>
			<p>www.bbb.org</p>
		</view>
		<view class="add-t">
			<p>您的碧波地址</p>
		</view>

		<view class="add-list">
			<span>BBB</span>
			<span>XM0120180822</br>6wdgdgsfgsw52</br>5wd55f6f4s6</span>
		</view>
		<view class="add-list">
			<span>莱特币</span>
			<span>XM0120180822</br>6wdgdgsfgsw52</br>5wd55f6f4s6</span>
		</view>
		<view class="add-list">
			<span>比特币</span>
			<span>XM0120180822</br>6wdgdgsfgsw52</br>5wd55f6f4s6</span>
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
		/* box-shadow: 0px 2px 4px 0px rgba(238, 238, 238, 0.5); */
		position: absolute;
		top: 0;
		left: 0;
		background: #8cafea;
	}

	.header-left,.header-right {
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
		color: #FFFFFF;
	}

	.add-num {
		background-color: #8cafea;
		border-radius: 0.06rem;
		min-height: 2.5rem;
		box-sizing: border-box;
		padding: 0.6rem;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.add-num image {
		box-sizing: border-box;
		width: 1.5rem;
		height: 1.8rem;
		background: #FFFFFF;
		padding: 0.2rem;
		padding-top: 0.4rem;
	}

	.add-num p {
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.28rem;
		color: #ffffff;
	}

	.add-t {
		height: 0.5rem;
		padding: 0.1rem;
		font-size: 24px;
		color: #b6b6b6;
	}

	.add-list {
		height: 1.5rem;
		background-color: #FFFFFF;
		margin-bottom: 20px;
		position: relative;
	}

	.add-list span:nth-child(1) {
		color: #6c6c6c;
		margin-left: 30px;
		line-height: 1.5rem;
	}

	.add-list span:nth-child(2) {
		height: 1rem;
		position: absolute;
		right: 30px;
		font-size: 24px;
		color: #b6b6b6;
		margin-top: 0.2rem;
	}
</style>
