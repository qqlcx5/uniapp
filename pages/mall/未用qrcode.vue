<template>
	<view class="">
		<view class="header">
			<view class="header-left">
				<image src="../../static/left.png" mode=""></image>
			</view>
			<view class="header-content">
				支付成功
			</view>
			<view class="header-right green">
				<!-- 完成 -->
			</view>
		</view>
		<div class="content">
        <div class="box">
            <div class="qrcode">
                <img src="../icon/qrcode.jpg" alt="">
            </div>
            <p class="desc">
                长按二维码，关注碧波币官方微信
            </p>
            <div class="btn">
                保存图片
            </div>
        </div>
    </div>
	</view>
</template>
<script>
	export default {
		data: {},
		methods: {
			gotoDetail() {
				uni.navigateTo({
					url: "mallMessage"
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
            
            width: 100%;
            box-sizing: border-box;
            padding: 0 0.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .box {
            background: #ccc;
            border-radius: 0.06rem;
            min-width: 6.5rem;
            min-height: 8rem;
            box-sizing: border-box;
            padding: 0.6rem;
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .box .qrcode {
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 5rem;
            min-height: 5rem;
            box-sizing: border-box;
            padding: 0.4rem;
        }

        .qrcode img {
            width: 100%;
            height: 100%;
        }

        .desc {
            height: 1rem;
            line-height: 1rem;
            font-size: 0.28rem;
            color: #ffffff;
        }

        .btn {
            margin-top: 0.4rem;
            width: 80%;
            height: .7rem;
            text-align: center;
            line-height: 0.7rem;
            background: #fff;
            border-radius: 0.36rem;
        }
</style>
