<template>
	<view>
		<view class="login font">
			<view class="login_lump">
				<div>注册</div>
				<div class="verify-chunk">
					<span>用户名</span>
					<div class="ipt" ><input type="text" value="" placeholder="请输入您的账户名和登录名" /></div>	
					</div>
				<div class="verify-chunk">
					<span>设置密码</span>
					<div class="ipt"><input type="text" value="" placeholder="建议至少两种字符组合" /></div>
					</div>
				<div class="verify-chunk">
					<span>确认密码</span>
					<div class="ipt"><input type="text" value="" placeholder="请再次输入密码" /></div>
					</div>
				<div class="verify-chunk">
					<span>手机号</span>
					<div class="ipt"><input type="text" value="" placeholder="请输入常用手机号" /></div>
					</div>
				<div class="verify-chunk" >
					<span>验证码</span>
					<div class="ipt ipt-verify"><input type="text" value="" placeholder="请输入手机验证码" />
					<div class="verify"> <div> 获取验证码 </div> </div>
					</div>
					<!-- <span class="verify">获取验证码</span> -->
					</div>
			</view>
			<view class="enter">
				<button class="enterBtn" type="primary">登录</button>
			</view>
			<view class="forget">
				<span>忘记密码</span>
			</view>
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
		.verify{
			border: 1px solid #D8D8D8;
			height: 1.5rem;
			width: 6rem;
			line-height: 1.5rem;
			border-radius: 3px;
			color: RGBA(0, 0, 0, 1);
			margin: 0 10px;
			padding: 0 5px;
			text-align: center;
		}
		
		.verify-chunk{
			/* justify-content: center; */
		}
		.verify-chunk span:first-child{
			width: 20%;
		}
		.ipt-verify{
			width: 80%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
</style>
