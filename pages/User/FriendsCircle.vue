<template>
	<view>
		<Mean></Mean>
		<MyCardBtn></MyCardBtn>
		<view class="content">
			<view class="title">
				<p>在重庆除了火锅还有这些东西</p>
			</view>
			<view class="titleImg">
				<image src="/static/img/PrivateImg.png" style="width: 100%; height: 16rem;" mode=""></image>
			</view>
			<view class="footerContiner">
				<span>重庆小面CEO</span>
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
	page{
		background-color: #ffffff;
		}
.content{
	margin-top: 0.6rem;
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
	font-size: 0.83rem;
}
.content .footerContiner{
	display: flex;
	justify-content: space-between;
}
.content .footerContiner span{
	font-size: 0.7rem;
}


</style>
