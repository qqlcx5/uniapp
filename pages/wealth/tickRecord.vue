<template>
	<view>
		<div class="header">
			<div class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</div>
			<div class="header-content">
				提币记录
			</div>
			
			<div class="header-right">
				<image src="../../static/sousuo.png" mode=""></image>
			</div>
		</div>
		<div class="info-list">
			<div class="time">
				<div>
					碧波币(23984)
				</div>
				<div>
					2018年8月14日 17:30:40
				</div>
			</div>
			<div class="time-info">
				<div class="time-item">
					<h1>5.326 CNY</h1>
					<h3>提币价格</h3>
				</div>
				<div class="time-item">
					<h1>1000</h1>
					<h3>提币数量</h3>
				</div>
				<div class="time-item">
					<h1>5326 CNY</h1>
					<h3>提币总额</h3>
				</div>
			</div>
		</div>
		<div class="info-list">
			<div class="time">
				<div>
					夸克币(23984)
				</div>
				<div>
					2018年8月14日 17:30:40
				</div>
			</div>
			<div class="time-info">
				<div class="time-item">
					<h1>5.326 CNY</h1>
					<h3>提币价格</h3>
				</div>
				<div class="time-item">
					<h1>1000</h1>
					<h3>提币数量</h3>
				</div>
				<div class="time-item">
					<h1>5326 CNY</h1>
					<h3>提币总额</h3>
				</div>
			</div>
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
.header-left image{
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

		.body-content {
			text-align: center;
		}

		.info-list {
			border-bottom: 0.02rem solid #e8e8e8;
		}

		.time {
			height: 0.8rem;
			width: 100%;
			padding-left: 0.2rem;
			padding-right: 0.2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #b6b6b6;
			font-size: 0.24rem;
			box-sizing: border-box;
			background: #fff;
		}

		.time div:nth-child(1) {
			font-size: 0.32rem;
			font-weight: 600;
			color: #585858;
		}

		.time-info {
			height: 1.4rem;
			max-width: 100%;
			background: #fff;
			display: flex;
			box-sizing: border-box;
			overflow: hidden;
		}

		.time-item {
			flex: 1;
			display: flex;
			align-items: center;
			margin: 0 0.2rem;
			flex-direction: column;
		}

		.time-item h1 {
			height: 0.8rem;
			width: 100%;
			display: block;
			font-size: 0.28rem;
			text-align: center;
			line-height: 0.8rem;
			color: #585858;
			font-weight: 500;
		}

		.time-item h3 {
			height: 0.4rem;
			line-height: 0.4rem;
			color: #6c6c6c;
			font-size: 0.24rem;
			text-align: center;
			color: #b6b6b6;
		}

		.time-item .greenColor {
			color: #79c343;
		}
</style>
