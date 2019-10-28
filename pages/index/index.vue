<template>
	<view class="header">
		<Nav></Nav>
		<Swiper></Swiper>
		<view class="popular">
			<view class="icon"></view>
			<view class="text"><span>热门</span></view>
		</view>
		
			<view class="ification">
				<view class="btnx">
					<view class="btn1" v-for="i in 5" :key="i"><button class="btnn">火锅</button></view>
				</view>                   
				<view class="btnx">           
					<view class="btn2" v-for="i in 5" :key="i"><button class="btnn">串串</button></view>
				</view>
			</view>
			
			<view class="title">
				<view class="titext">
					<view class="tex">
						<view class="iconc"></view>
						<view><span>已认证美食</span></view>
					</view>
					<view class="icond"></view>
				</view>
			</view>
			
		<Article></Article>
	</view>
		

</template>

<script>
	import nav from '../../component/NavHeader.vue'
	import swiper2 from '../../component/swiper2'
	import article from '../../component/article'
  export default{
	  data() {
		 return{
			 
			 }
		  },
		  components:{
			  Nav:nav,
			  Swiper:swiper2,
			  Article:article
		  }
  }
</script>

<style>
	.header {
		display: flex;
		flex-direction:column;
	}
.popular {
	display: flex;
	justify-content:center;
	align-items:center;
}

.icon {
	width: 1rem;
	height: 1rem;
	background: url(../../static/icon/popular.png) no-repeat;
	background-position: 0rem 0rem;
	background-size: 0.8rem 0.8rem;
}

.text {
	font-size: 0.9rem;
	color: #FFAD00;
}

	.btnx {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		height: 3rem;
	
	}
	
	.btn1 {
		flex: 1;
		display: inline-block;
		padding: 0.5rem;
	
	}
	
	.btn2 {
		flex: 1;
		display: inline-block;
		padding: 0.5rem;
	}
	
	.btnn {
		background-color: #FFFFFF;
		color: #FFAD00;
		outline:none;
		font-size: 0.7rem;
		/* font-weight: bold; */
	}
	button:after {  
		border: none;  
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
		justify-content: space-between;
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
	.iconc {
		width: 1rem;
		height: 1rem;
		background: url(../../static/icon/safety.png) no-repeat;
		background-size: 0.8rem 0.8rem;
		background-position: 0rem 0.1rem;
	}
	.icond {
		width: 1rem;
		height: 1rem;
		background: url(../../static/icon/direction.png) no-repeat;
		background-size: 1rem 0.8rem;
		background-position: 0rem 0.1rem;
	}

</style>
