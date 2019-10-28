<template>
	<view>
		<Mean></Mean>
		<MyCardBtn></MyCardBtn>
		<view class="Componts">
			<p class='hr'>会员: {{VipLevel}}</p>
			<p @click="goprivate()">认证: {{Authentication}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				VipLevel:'超级会员',
				Authentication:'商家已认证'
			}
		},
		methods: {
			goprivate(){
				console.log(111)
			}
		}
	}
</script>

<style>
page{
	background-color: #ECECEC;
}
.hr{
	border-bottom: 0.01rem solid #D8D8D8;
}
.Componts{
margin-top: 0.4rem;
line-height: 2rem;
background-color: #FFFFFF;	
padding: 0.5rem 0.7rem;
font-size: 0.6rem;
}
.Componts p:nth-child(1){
	color: #FC6800;
	letter-spacing: 0.1rem;
}
.Componts p:nth-child(3){
	color: #9F9F9F;
	letter-spacing: 0.1rem;
}
</style>
