<template>
	<view>
		<view class="header-fix">
			<view class="header">
				<view class="header-left">
					<!-- <image src="../../static/left.png" mode=""></image> -->
				</view>
				<view class="header-content">
					社交
				</view>
				<view class="header-right">
					<image src="../../static/add.png" mode=""></image>
				</view>
			</view>
		</view>
			<view class="chat-info">
			<view class="chat-item" @click="gotodialog">
				<view class="chat-img">
					<image src="../../static/myselect.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<i class="info-point"></i>
						<view class="chat-top-time">12分钟前</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">作业交了吗？我六点要收的，超过时间大大...</view>
						<view class="red-point">99</view>
					</view>
				</view>

			</view>
			<view class="chat-item" @click="gotodialog()">
				<view class="chat-img">
					<image src="../../static/myselect.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<i class="info-point"></i>
						<view class="chat-top-time">12分钟前</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">作业交了吗？555555555555我六点要收的，超过时间大大...</view>
						<view class="red-point">99</view>
					</view>
				</view>

			</view>
			<view class="chat-item">
				<view class="chat-img">
					<image src="../../static/myselect.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<i class="info-point"></i>
						<view class="chat-top-time">12分钟前</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">作业交了吗？我六点要收的，超过时间大大...</view>
						<view class="red-point">99</view>
					</view>
				</view>

			</view>
			<view class="chat-item">
				<view class="chat-img">
					<image src="../../static/myselect.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<i class="info-point"></i>
						<view class="chat-top-time">12分钟前</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">作业交了吗？我六点要收的，超过时间大大...</view>
						<view class="red-point">99</view>
					</view>
				</view>

			</view>
			<view class="chat-item">
				<view class="chat-img">
					<image src="../../static/myselect.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<i class="info-point"></i>
						<view class="chat-top-time">12分钟前</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">作业交了吗？我六点要收的，超过时间大大...</view>
						<view class="red-point">99</view>
					</view>
				</view>

			</view>
			<view class="chat-item">
				<view class="chat-img">
					<image src="../../static/myselect.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<i class="info-point"></i>
						<view class="chat-top-time">12分钟前</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">作业交了吗？我六点要收的，超过时间大大...</view>
						<view class="red-point">99</view>
					</view>
				</view>

			</view>
			<view class="chat-item">
				<view class="chat-img">
					<image src="../../static/myselect.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<i class="info-point"></i>
						<view class="chat-top-time">12分钟前</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">作业交了吗？我六点要收的，超过时间大大...</view>
						<view class="red-point">99</view>
					</view>
				</view>

			</view>
			<view class="chat-item">
				<view class="chat-img">
					<image src="../../static/myselect.png" mode=""></image>
				</view>
				<view class="chat-title">
					<view class="chat-top">
						<view class="chat-top-info">
							系统通知
						</view>
						<i class="info-point"></i>
						<view class="chat-top-time">12分钟前</view>
					</view>
					<view class="chat-bottom">
						<view class="chat-bottom-info">作业交了吗？我六点要收的，超过时间大大...</view>
						<view class="red-point">99</view>
					</view>
				</view>

			</view>

		</view>
	</view>
</template>

<script>
	
	
	export default {
			data() {
				return{
					 
				}	
			},
			onLoad() {

			},
			methods: {
				gotodialog: function () {
					uni.navigateTo({
						url:"chatdialog"
					})
				},
				
	}
		}
	
</script>

<style>
	.header-fix{
		height: 100px;
		width: 100%;
	}
	.header{
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #8cafea;
		position: fixed;
		
	}
	.header-left,.header-right{
		width: 100px;
		height: 64px;
		
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.header image{
		width: 40px;
		height: 40px;
	}
	.header-content{
		flex: 1;
		text-align: center;
		
	}

	

	.chat-item {
		width: 100%;
		height: 1.6rem;
		background: #FFFFFF;
		display: flex;
		border-bottom: 0.02rem solid #ccc;
	}

	.chat-img {
		min-width: 1.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.chat-img image {
		max-width: 1rem;
		max-height: 1rem;
		border-radius: 50%;
	}

	.chat-title {
		width: calc(100% - 1.6rem);
		height: 1.6rem;
		overflow: hidden;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.chat-top {
		height: .6rem;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.chat-top-info {
		min-width: 1%;
		max-width: 80%;
		height: .6rem;
		line-height: 0.6rem;
		font-size: 0.32rem;
		color: #6c6c6c;
		display: block;
		align-items: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.chat-top-time {
		flex: 1;
		min-width: 1.3rem;
		height: .6rem;
		display: flex;
		align-items: center;
		font-size: 0.24rem;
		padding-right: 0.2rem;
		box-sizing: border-box;
		justify-content: flex-end;
	}
	/*克里斯小点*/

	.info-point {
		display: block;
		margin-left: 0.1rem;
		min-width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		background-color: #8cafea;
	}

	.chat-bottom {
		height: .4rem;
		align-items: center;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.red-point {
		margin-right: 0.2rem;
		min-width: .36rem;
		height: .36rem;
		border-radius: 50%;
		background-color: #e97b78;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 0.24rem;
	}

	.chat-bottom-info {
		min-width: 1%;
		max-width: 90%;
		height: 0.4rem;
		font-size: 28px;
		line-height: 0.4rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
