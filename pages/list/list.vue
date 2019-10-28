<template>
	<view>
		<view class="keyword font">川菜</view>
		<view class="detailItem" v-for="i in 4" :key="i">
			<view class="font detail-top" >TOP{{i}}</view>
			<view class="detail-title font">全聚德</view>
			<view class="detail-img">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.keyword{
	width: 100%;
	height: auto;
	margin-left: 5%;
	padding-top: 0.6rem;
	padding-bottom: 0.6rem;
}
.detailItem{
	width: 100%;
	height: auto;
	padding-bottom: 0.6rem;
	padding-top: 0.4rem;
	border-top: 1px solid #808080;
	/* border-bottom: 1px solid #808080; */
}
.detail-top{
	width: 90%;
	margin-left: 5%;
	color: #FF6000;
}
.detail-title{
	width: 90%;
	margin-left: 5%;
	/* padding-top: 0.4rem; */
	padding-bottom: 0.4rem;
}
.detail-img{
	width: 90%;
	margin-left: 5%;
	height: 10rem;
	background-color: #007AFF;
}
</style>
