<template>
	<view>
		<view>
			<div class="header">
				<div class="address">
					<a>重庆</a>
				</div>
				<form>
					<input type="text" id="input" value="请输入餐馆名、地名" onfocus="if(value=='请输入要查找的关键字')value=''" align="center" />
				</form>
				<div class="icon"></div>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {

		}
	}
</script>

<style>
	.header {
		width: 100%;
		height: 2.8rem;
		background-color: #FFAD00;
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.address {
		font-size: 0.8rem;
		position: absolute;
		left: 1rem;
		line-height: 2.8rem;
		color: #FFFFFF;
	}

	#input {
		height: 2rem;
		width: 65%;
		border-radius: 3px;
		position: absolute;
		margin-top: 0.4rem;
		margin-left: 3.5rem;
		font-size: 0.8rem;
		color: #AEAEAE;

		background: #FFFFFF url(../static/icon/search3.png) no-repeat;
		background-size: 1.1rem 1.1rem;
		background-position: 1.4rem 0.45rem;
	}

	.icon {
		height: 2rem;
		width: 2rem;
		display: flex;
		position: absolute;
		background: url(../static/icon/personal.png) no-repeat;
		background-size: 1.2rem 1.2rem;
		margin-top: 0.8rem;
		margin-left: 17.6rem;
	}
</style>
