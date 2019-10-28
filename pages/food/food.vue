<template>
	<view>
		<Nav></Nav>
		<Swiper></Swiper>
		<view class="Bborder"></view>
		<Article>
		</Article>
	</view>
</template>

<script>
	import nav from '@/component/NavHeader.vue'
	import swiper2 from '@/component/swiper2'
	import article from '@/component/article'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			Nav:nav,
			Swiper:swiper2,
			Article:article
		}
	}
</script>

<style>
.Bborder {
	width: 100%;
	height: 0.5rem;
	background-color: #ECECEC;
}
		.tity {
			width: 100%;
			height: 2rem;
			line-height: 3rem;
			padding: 0.8rem;
			font-weight: 600;
			font-size: 0.9rem;
		}
</style>