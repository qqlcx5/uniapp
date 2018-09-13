<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left_2.png" mode=""></image>
			</view>
			<view class="header-content">
				币种兑换
			</view>
			<view class="header-right">
			</view>
		</view>
		<view class="list">
			<view class="item">
				<view class="item-image">
					<image src="../../static/logo_2.png" mode=""></image>
				</view>
				<view class="item-title">
					CNY
				</view>
				<view class="item-right">可转换</p>
					<p class="item-desc">10000.8
						<i class='item-desc-sub'>碧波币</i>
					</p>
				</view>
			</view>
		</view>
		<view class="list-title">选择您要兑换的币种</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view class="list-item">
						<image src="../../static/logo_3.png" mode=""></image>
						<p>BTC</p>
						<p>比特币</p>
					</view>
					<view>
						<radio :value="item.value" checked="true" />
					</view>
				</label>
			</radio-group>
		</view>
<view class="fix-height"></view>
		<view class="fix-bottom">
					<view class="fix1">
						<view class="logobox">
							<image src="../../static/logo_2.png" mode=""></image>
							<p>BBB</p>
						</view>
						<image class="exchangeicon" src="../../static/zhuanhuan.png" mode=""></image>
						<view class="logobox">
							<image src="../../static/logo_2.png" mode=""></image>
							<p>BTB</p>
						</view>
					</view>
					<view class="fix2">
						<view class="fix2-title">
							<p>转换额度</p>
							<input type="number" placeholder="123">
						</view>
						<view class="fix2-title">
							<p>转换后</p>
							<input type="number" placeholder="123">
						</view>
		
					</view>
					<view class="fix3">
						<view class="bill">手续费：1 BBB</view>
						<view class="btn">确认转换</view>
					</view>
				</view>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'radio',
				items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
						checked: 'true'
					},
					{
						value: 'BRA',
						name: '巴西'
					},
					{
						value: 'JPN',
						name: '日本'
					},
					{
						value: 'ENG',
						name: '英国'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			goback: function () {
				uni.navigateBack({
					delta: 1,
				})
			},

		}
	}
</script>
<style>
	.fix-height{
		height: 620px;
		width: 100%;
		background: #f1f1f1;
	}
	.header {
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		color: #FFFFFF;
		background: #8cafea;
	}

	.header-left,
	.header-right {
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header image {
		width: 40px;
		height: 40px;
	}

	.header-content {
		flex: 1;
		text-align: center;
	}

	.item {
		width: 100%;
		height: 140px;
		border-bottom: 2px solid #eee;
		display: flex;
	}

	.item-image {
		width: 140px;
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.item-image image {
		width: 114px;
		height: 114px;
	}

	.item-title {
		flex: 1;
		height: 140px;
		display: flex;
		align-items: center;
		font-size: 28px;
		color: #6c6c6c;
	}

	.item-right {
		min-width: 180px;
		height: 140px;
		padding: 0 20px;
		box-sizing: border-box;
		display: flex;
		/* align-items: center; */
		flex-direction: column;
		justify-content: center;
	}

	.item-num {
		font-size: 36px;
		height: 50px;
		line-height: 50px;
		color: #6c6c6c;
	}

	.item-desc {
		height: 40px;
		line-height: 40px;
		font-size: 36px;
		color: #b6b6b6;
		display: flex;
	}

	.item-desc-sub {
		margin-left: 20px;
		font-size: 20px;
	}

	.list-title {
		height: 100px;
		width: 100%;
		line-height: 100px;
		box-sizing: border-box;
		padding-left: 40px;
		font-size: 28px;
		color: #b6b6b6;
		background: #f1f1f1;
	}

	.uni-list-cell {
		justify-content: flex-start
	}

	.uni-list-cell-pd {
		display: flex;
		height: 120px;
		width: 100%;
		align-items: center;
		flex-direction: row;
		border-bottom: 4px solid #F1F1F1;
		padding: 0 30px 0 40px;
		box-sizing: border-box;
		background: #fff;
	}

	.list-item {
		height: 120px;
		flex: 1;
		display: flex;
		align-items: center;
	}

	.list-item image {
		max-height: 60px;
		max-width: 60px;
	}

	.list-item p:nth-of-type(1) {
		font-size: 28px;
		color: #6c6c6c;
		margin-left: 20px;
	}

	.list-item p:nth-of-type(2) {
		font-size: 20px;
		color: #b6b6b6;
		margin-left: 20px;
	}

	.fix-bottom {
		border-top: 20px solid #EEEEEE;
		height: 620px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		width: 100%;
		padding: 40px 80px 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		/* border: 2px solid #EEEEEE; */
	}

	.fix1 {
		width: 100%;
		height: 200px;
		/* background: #000; */
		display: flex;
		justify-content: space-between;
	}

	.fix1 image {
		max-height: 120px;
		max-width: 120px;
	}

	.fix1 .exchangeicon {
		margin: 30px 15px;
		max-height: 60px;
		max-width: 60px;
	}

	.logobox {
		display: flex;
		flex-direction: column;
		width: 120px;
		height: 160px;
		text-align: center;
		font-size: 28px;
		color: #6c6c6c;
	}

	.fix2 {
		width: 100%;
		height: 120px;
		/* background: #000; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 2px solid #EEEEEE;
	}

	.fix2-title {
		width: 120px;
		height: 120px;
		/* background: #000; */
		display: flex;
		align-items: center;
		flex-direction: column;
		font-size: 28px;
		/* background: #000; */
		color: #6c6c6c;
	}

	.fix2-title input {
		width: 80px;
		height: 60px;
		text-align: center;
		/* border-bottom: 2px solid #EEEEEE; */
	}

	.fix3 {
		height: 200px;
		width: 100%;
		display: flex;
		flex-direction: column;

		/* background: #000; */
	}

	.fix3 .bill {
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 28px;
		color: #8cafea;
	}

	.fix3 .btn {
		width: 60%;
		height: 70px;
		background-color: #e97b78;
		border-radius: 36px;
		line-height: 70px;
		text-align: center;
		color: #FFFFFF;
		margin: 0 auto;
	}
</style>
