<template>
	<view class="">
		<view class="header">
			<view class="header-left" @click="goback()">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				绑定手机号
			</view>
			<view class="header-right green">
				<!-- 完成 -->
			</view>
		</view>
		<div class="content">
        <div class="phone-img">
            <image src="../../static/shouji_3.png" mode=""></image>
        </div>
        <div class="tel"><span>您的手机号：</span>15965621233</div>
        <div class="btn green">上传通讯录找好友</div>
        <div class="btn">更换手机号码</div>
    </div>
		
		</view>
</template>
<script>
	export default {
		data: {},
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
		height: 100px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #FFFFFF;
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
       .content {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .phone-img {
            margin: 40px 0;
            max-width: 3.2rem;
            max-height: 3.2rem;
        }

        .phone-img image {
            max-width: 3.2rem;
            max-height: 3.2rem;
        }
		

        .tel {
            font-size: .36rem;
            color: #585858;
            margin-bottom: 0.4rem;
        }

        .btn {
            width: 4rem;
            height: .7rem;
            border-radius: 18px;
            text-align: center;
            line-height: 0.7rem;
            margin-top: 0.4rem;
            background: #fff;
            color: #b6b6b6;
        }

        .content .green {
            background: #79c343;
            color: #fff;
        }
</style>
