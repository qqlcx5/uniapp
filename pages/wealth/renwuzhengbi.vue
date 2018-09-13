<template>
	<view class="">
		<div class="header-bg">
			<image class="header-back" src="../../static/left_01.png" @click="goback()"></image>
			<image class="header-image" src="../../static/renwuzhenbi.png" mode=""></image>
		</div>

		<!-- <div class="content-title">
        <div class="content-item select">
            每日任务
        </div>
        <div class="content-item">
            成长任务
        </div>
    </div> -->
		<div class="task-list">
			<ul>
				<li class="task-item">
					<div>
						<image src="../../static/ziliao.png" mode=""></image>
					</div>
					<div class="task-content">
						<p class="task-title">完善碧波世界资料</p>
						<p class="task-desc">碧波世界完善个人资料获得碧波 币奖励</p>
					</div>
					<div class="task-btn">
						<div class="task-button">去完成</div>
					</div>
				</li>
				<li class="task-item">
					<div>
						<image src="../../static/qiandao_2.png" mode=""></image>
					</div>
					<div class="task-content">
						<p class="task-title">每日签到</p>
						<p class="task-desc">每日完成签到后送0.0025 CNY</p>
					</div>
					<div class="task-btn">
						<div class="task-button">去完成</div>
					</div>
				</li>
				<li class="task-item">
					<div>
						<image src="../../static/yaoqing.png" mode=""></image>
					</div>
					<div class="task-content">
						<p class="task-title">邀请好友成为福星</p>
						<p class="task-desc">好友同意称为福星后可获得50个 积分／个</p>
					</div>
					<div class="task-btn">
						<div class="task-button">去完成</div>
					</div>
				</li>
				<li class="task-item">
					<div>
						<image src="../../static/fenxiang.png" mode=""></image>
					</div>
					<div class="task-content">
						<p class="task-title">分享福利</p>
						<p class="task-desc">分享福利产生的每个有效点击送 0.003CNY</p>
					</div>
					<div class="task-btn">
						<div class="task-button">去完成</div>
					</div>
				</li>
				<li class="task-item">
					<div>
						<image src="../../static/yaoqing.png" mode=""></image>
					</div>
					<div class="task-content">
						<p class="task-title">开设店铺</p>
						<p class="task-desc">分享福利产生的每个有效点击送 0.003CNY</p>
					</div>
					<div class="task-btn">
						<div class="task-button">去完成</div>
					</div>
				</li>

			</ul>
		</div>
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
			goback: function () {
				uni.navigateBack({
					delta:1,
				})
			},

		}
	}
</script>
<style>
	.header-bg {
		width: 100%;
		height: 55.55vw;
		overflow: hidden;
		position: relative;
	}

	.header-back {
		height: 40px;
		width: 40px;
		position: absolute;
		left: 25px;
		top: 0.4rem;
	}

	.header-image {
		width: 100%;
	}

	.content-title {
		width: 100%;
		height: 0.8rem;

		display: flex;
		font-size: 0.36rem;
		border-bottom: .02rem solid #cccccc;
		overflow: hidden;
	}

	.content-title .select {
		border-bottom: 0.06rem solid #33cccc;
	}

	.content-item {
		width: 50%;
		height: 0.8rem;
		text-align: center;
		line-height: 0.8rem;
		box-sizing: border-box;
	}

	.task-list {
		/* height: calc(100vh - 55.55vw); */
		width: 100%;
		/* overflow: auto; */
		display: flex;
		flex-direction: column;
		padding: 0.2rem 0.2rem 0 0.2rem;
		background: #f7f7f7;
		box-sizing: border-box;
	}

	.task-item {
		height: 1.6rem;
		width: 100%;
		background: #fff;
		border-bottom: 0.02rem solid #ccc;
		display: inline-flex;
		align-items: center;
		box-shadow: 0px 0.02rem 0.04rem 0px #cccccc;
		margin-bottom: 0.16rem;
		border-radius: 0.2rem;
	}

	.task-item image {
		width: 1rem;
		height: 1rem;
		margin: 0 0.4rem;
	}

	.task-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 1.6rem;
		justify-content: center;
	}

	.task-title {
		min-width: 1rem;
		height: .5rem;
		font-size: .32rem;
		line-height: .4rem;
		color: #000000;
		font-weight: 700;
	}

	.task-desc {
		height: .6rem;
		font-size: .24rem;
		line-height: .3rem;
		color: #b6b6b6;
		display: flex;
		align-items: center;
	}

	.task-btn {
		width: 2rem;
		height: 1.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.task-button {
		width: 1.2rem;
		height: 0.6rem;
		background-color: #8cafea;
		border-radius: 0.3rem;
		font-size: 0.24rem;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
