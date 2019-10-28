<template>
	<view>
		<view class="btns">
			<view class="btn" v-for="i in 4" :key="i">
				<image src="/static/logo.png" style="width: 2rem; height: 2rem;" mode=""></image>
				<p>新建分享</p>
			</view>
		</view>
		<view class="TextBtns">
			<view class="TextBtn" v-for="i in 3" :key="i">
				<label>开会员</label>
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
align-items: center;
height: 4.5rem;
background-color:#FFAD01 ;
}
.btn{
	/* flex: ; */
	display: inline-block;
	text-align: center;
}
.TextBtns{
	background-color: #FFFFFF;
	display: flex;
	justify-content: space-between;
	padding: 0 1rem 0 1rem;
	height: 2rem;
}
.TextBtn{
	align-items: center;
	display: inline-block;
}
label{
	font-size: 0.3rem;
	color:#B3B3B3 ;
}
p{	
	margin-top: 0.3rem;
	color: #FFFCF9;
	font-size: 0.3rem;
}


</style>
