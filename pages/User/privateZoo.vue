<template>
	<view>
		<view class="content">
			<view class="title">
				<p>乡村基</p>
			</view>
			<view class="titleImg">
				<image src="/static/img/PrivateImg.png" style="width: 100%; height: 16rem;" mode=""></image>
			</view>
			<view class="footerContiner">
				<span>评分详情</span>
				<span class="start"><image src="/static/icon/start.png" style="width: 1rem; height: 1rem;" mode=""></image>90分</span>
				<span>阅读（{{readNumber}}）</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				readNumber:'5001+'
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.content{
	background-color: #FFFFFF;
	padding: 1rem 0.8rem;
	border-bottom: 0.001rem solid #D8D8D8;
}
.titleImg{
		margin:0.5rem 0;
}
.start{
	display: flex;
	align-items: center;
}
.content p{
	font-size: 0.9rem;
}
.content .footerContiner{
	display: flex;
	justify-content: space-between;
}
.content .footerContiner span{
	font-size: 0.7rem;
}
.content .footerContiner span:nth-child(1){
	font-weight: bold;
	color: #FFAD01;
}
.content .footerContiner span:nth-child(2){
	font-weight: bold;
	color: #FFAD01;
}

</style>
