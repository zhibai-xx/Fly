<template>
	<view class="login font">
		<view class="login_lump">
			<div>登录</div>
			<div>
				<span>账号</span>
				<div class="ipt" ><input type="text" value="" placeholder="请输入手机号或用户名" /></div>	
				</div>
			<div>
				<span>密码</span>
				<div class="ipt"><input type="text" value="" placeholder="请输入密码" /></div>
				</div>
		</view>
		<view class="enter">
			<button class="enterBtn" type="primary">登录</button>
		</view>
		<view class="forget">
			<span>忘记密码</span>
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
		color: #D8D8D8;
	}
	.enter{
		padding:0 10px;
		padding-top: 20px;
	}
	.enterBtn{
		background-color: #FFAD01;
	}
	.forget{
		font-size: 0.7rem;
		font-weight: lighter;
		color: #F9BC3D;
		text-align: end;
		padding: 10px 10px;
	}
</style>
