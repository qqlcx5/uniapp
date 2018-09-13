<template>
	<view class="title-contents">
		<view class="top-view status" :style="{background:statusColor}"></view>
		<view class="top-view titles" :style="{background:statusColor}">
			<view class="titleLeftButton" @click="backButton" v-if="showLeftButton"></view>
			<view class="titleText" :class="titleClass">{{titleText}}</view>
			<view class="titleRightButton" @click="rightButton" v-if="showRightButton"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			titleText:{
				type:String,
				default:""
			},
			statusColor:{
				type:String,
				default:"#8F8F94"
			},
			showLeftButton:{
				type:Boolean,
				default:true
			},
			showRightButton:{
				type:Boolean,
				default:false
			}
		},
		computed: {
			titleClass:function() {
				let classList = [];
				if(!this.showRightButton) {
					classList.push('noRightButton')
				}
				if(!this.showLeftButton) {
					classList.push('noLeftButton')
				}
				return classList
			}
		},
		methods:{
			backButton(){
				uni.navigateBack()
			},
			rightButton(){
				uni.showToast({
					title:"点击了按钮",
					icon:"none",
				})
			}
		}
	}
</script>

<style>
	.title-contents{
		flex-direction: column;
	}
	.titles{
		color: #fff;
		font-size: 36px;
		text-align: center;
	}
	.titleLeftButton,.titleRightButton{
		width: 90px;
		font-size: 50px;
		align-items: center;
		justify-content: center;
		font-family: uniicons;
	}
	.noRightButton{
		margin-right: 90px;
	}
	.noLeftButton{
		margin-left: 90px;
	}
	.titleLeftButton:after{
		content: '\e582';
	}
	.titleRightButton:after{
		content: '\e466';
	}
	.titleText{
		flex: 1;
		justify-content: center;
		align-items: center;
	}
	.top-view{
		width: 100%;
		position: fixed;
		top: 0;
	}
</style>
