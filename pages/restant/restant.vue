<template>
	<view>
		<Nav></Nav>
		<Swiper></Swiper>
		<view class="Bborder"></view>
		<view v-for="i in 2" :key="i">
			<Article>
				<view slot="titx">
					<span class="tity">苍蝇馆子排名</span>
				</view>
				<view slot="artx">
					<span class="arty">
						TOP1
					</span>
				</view>
			</Article>
			
			<view class="title">
				<view class="titext">
					<view class="tex">
						<view><span>更多排名</span></view>
					</view>
				</view>
			</view>
		</view>
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
	.arty {
		color: #FFAD00;
	}
	
	
	
	
	.title {
		width: 100%;
		height: 3rem;
		display: flex;
		background-color: #ECECEC;
		justify-content: center;
		align-items:center;
	}
	
	.titext {
		display: flex;
		width: 85%;
		height: 2rem;
		background-color: #FFAD00;
		justify-content: center;
		align-items:center;
		line-height: 2rem;
		padding: 0rem 0.7rem 0rem;
	}
	
	.tex {
		display: flex;
		align-items:center;
		font-size: 0.8rem;
		color: #FFFFFF;
	}
</style>
