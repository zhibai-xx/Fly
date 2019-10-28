<template>
	<view>
		<view>
			<div class="title">
				<span>推荐</span>
			</div>
			<div class="article" v-for="i in 3" :key="i">
				<span>神奇拉爆四川菜</span>
				<img src="https://via.placeholder.com/500x500" alt="">
			</div>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.title{
			width: 100%;
			height: 3rem;
			border-bottom:1px solid #d8d8d8;
		}
		.title > span {
			width: 100%;
			height: 2rem;
			line-height: 3rem;
			margin-left: 0.45rem;
		}
		.article{
			height: 100%;
	/* 		background-color: #007AFF; */
			padding: 1.2rem 0.45rem 0.45rem 0.45rem;
			border-bottom:1px solid #d8d8d8;
		}
		.article > span {
			letter-spacing: 0.1rem;
			margin-bottom: 0.4rem;
			display: inline-block;
		}
		.article > img {
			width:100%;
			height: auto;
		}
</style>
