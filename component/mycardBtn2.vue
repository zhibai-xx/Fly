<template>
	<view>
		<view class="btns">
			<view class="btn" v-for="i in 2" :key="i">
				<p>新建分享</p>
			</view>
		</view>
		<view class="TextBtns">
			<view class="TextBtn" v-for="i in 4" :key="i">
				<laber>品牌介绍</laber>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				// list : [1,2,3]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background-color:#ECECEC ;
	}
.btns{
width: 100%;
display: flex;
justify-content: space-around;
height: 3rem;
background-color:#FFAD01 ;
}
.btn{
margin-top: 0.7rem;
	/* flex: ; */
	display: inline-block;
	text-align: center;
}
.TextBtns{
	background-color: #FFFFFF;
	width: 100%;
	display: flex;
	justify-content: space-around;
	height: 3rem;
}
.TextBtn{
	display: inline-block;
	margin-top: 0.8rem;
	text-align: center;
}
laber{
	font-size: 0.3rem;
	color:#B3B3B3 ;
}
p{	
	margin-top: 0.3rem;
	color: #FFFCF9;
	font-size: 0.3rem;
}


</style>
