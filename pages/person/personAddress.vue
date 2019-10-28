<template>
	<view>
		<Mean></Mean>
		<MyCardBtn2></MyCardBtn2>
		<view class="bacolor"></view>
		<view class="address">
			<view class="title font">联系及地址</view>
			<view class="comtent font">电话：13888888888</view>
			<view class="comtent font">地址：太阳系地球村北半球东经106度33分,北纬29度34分</view>
			<view class="map font">
				<view>地图</view>
				<view><image style="width: 0.6rem;height: 0.6rem;" src="../../static/icon/to.png" mode=""></image></view>
			</view>
		</view>
	</view>
</template>

<script>
	import Mean from '../../component/Mean.vue';
	import MyCardBtn2 from '../../component/mycardBtn2.vue';
	export default{
		components:{
			Mean,
			MyCardBtn2
		}
	}
</script>

<style>
.address{
	width: 100%;
	height: auto;
	background-color: #F8F8F8;
}
.bacolor{
	height:1rem;
	background-color: RGBA(236, 236, 236, 1);
}
.title{
	padding: 0.6rem;
	font-weight: bold;
}
.comtent{
	padding: 0.6rem;
	border-top: solid RGBA(216, 216, 216, 1) 1px;
}
.map{
	width: 90%;
	height: auto;
	display: flex;
	flex-direction: row;
	padding: 0.6rem;
	justify-content: space-between;
}
</style>
