<template name="page-head">
	<view class="uni-flex uni-row">
		<view class="text" style="width: 200px;">固定宽度</view>
		<view class="text" style="flex: 1;">自动占满</view>
		<view class="text" style="width: 200px;">固定宽度</view>
	</view>
</template>

<script>
	export default {
		name: "page-head",
		props: {
			title: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style>
	
	.page-head {
		padding: 0px 0px 0px;
		text-align: center;
		line-height: initial;
		height: 60px;
		background: #1E1E78;
		border: 0px;
	}
    
	.page-head-left{
		
		width: 100px;
		height: 60px;
		border: 1px solid #000;
	}
	
	.page-head-center
	{
		width: 100px;
		height: 60px;
		
		justify-content: center;
		align-items: center;
		border: 1px solid #00000;
	}
	
	.page-head-right{
		
		width: 100px;
		height: 60px;
		
	}
	
	.page-search{
		width: 530px;
		height: 50px;
		margin: 5px 10px;
		background: #FFFFFF;
		
	}
	
</style>