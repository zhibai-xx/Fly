<template>
	<view>
		<view class="login_lump">
			<div>修改密码</div>
			<div>
				<span>原密码</span>
				<div class="ipt" ><input type="text" value="" placeholder="请输入原密码" /></div>	
				</div>
			<div>
				<span>新密码</span>
				<div class="ipt"><input type="text" value="" placeholder="请输入新密码" /></div>
				</div>
			<div>
				<span>确认新密码</span>
				<div class="ipt"><input type="text" value="" placeholder="确认新密码" /></div>
				</div>
		</view>
		<view class="enter">
			<button class="enterBtn" type="primary">提交</button>
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
			
		}
	}
</script>

<style>
	page{
		background-color: #ECECEC;
	}
	.login_lump>div{
		border-bottom: 1px solid rgb(240,240,240);
		height: 3rem;
		display: flex;
		align-items: center;
		padding-left: 1rem;
		background-color: #fff;
	}
	
	.login_lump>div:first-child{
		font-weight: bold;
		font-size: 1rem;
	}
	.ipt{
		margin-left: 1rem;
	}
	.enter{
		padding:0 10px;
		padding-top: 20px;
	}
	.enterBtn{
		background-color: #FFAD01;
	}
	.login_lump span{
		width: 27%;
		font-size: 0.8rem;
	}
</style>
