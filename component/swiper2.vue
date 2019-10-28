<template>
	<view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item v-for="i in 3" :key="i">
                            <view class="swiper-item uni-bg-red">
								<img src="https://via.placeholder.com/100x100" alt="">
							</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
			<div class="menu">
				<div class="classification">
					<span>分类</span>
					<div class="iconsc"></div>
				</div>
			</div>
			<div class="ification">
				<view class="btnx">
					<div class="btn1"><button class="btnn">1</button></div>
					<div class="btn1"><button class="btnn">2</button></div>
					<div class="btn1"><button class="btnn">2</button></div>
					<div class="btn1"><button class="btnn">3</button></div>
					<div class="btn1"><button class="btnn">3</button></div>
				</view>                   
				<view class="btnx">           
					<div class="btn2"><button class="btnn">1</button></div>
					<div class="btn2"><button class="btnn">2</button></div>
					<div class="btn2"><button class="btnn">3</button></div>
					<div class="btn2"><button class="btnn">2</button></div>
					<div class="btn2"><button class="btnn">3</button></div>
				</view>
			</div>
		</view>
	</view>
	
</template>

<script>

	export default {
		data() {
			return {
				indicatorDots: true,
	            autoplay: true,
				interval: 2000,
			}
		},
		methods: {

		},
		components: {

		},
		mounted: {
		}
	}
</script>

<style>
	/* @import url("../static/style/swiper.min.css"); */
	
	.swiper {
		width: 100%;
		height: 8.4rem;
		/* background: #007AFF; */
		overflow: hidden;
		position: relative;
	}
	
	.swiper-item > img {
		height: 100%;
		width: 100%;
		position: absolute;
	}
	.menu {
		width: 100%;
		/* height: 8.4rem; */
		height: 2.5rem;
		/* border: 0.2rem solid #4CD964; */
		display: flex;
		flex-direction: row;
		justify-content: center;
	
	}
	
	.classification {
		width: 4rem;
		height: 2rem;
		font-size: 0.9rem;
		color: #FFAD00;
		display: flex;
		justify-content: center;
	
		background: url(../static/icon/classification.png) no-repeat;
		background-size: 0.8rem 0.8rem;
		background-position: 0rem 0.1rem;
		margin-top: 0.7rem;
		margin-left: 1.22rem;
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
	
	.btnn{
		background-color: #FFAD00;
		color: #FFFFFF;
	}
	
	
	
</style>
