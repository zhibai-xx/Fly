<template>
	<view class="login font">
		<view class="login_lump">
			<div>找回密码</div>
			<div>
				<span>手机号</span>
				<div class="ipt ipt-verify"><input type="text" value="" placeholder="请输入您的手机号" />
				<div class="verify"> <div> 获取验证码 </div> </div>
				</div>	
				</div>
			<div>
				<span>验证码</span>
				<div class="ipt"><input type="text" value="" placeholder="请输入6位短信验证码" /></div>
				</div>
		</view>
		<view class="enter">
			<button class="enterBtn" type="primary">提交</button>
		</view>
	</view>
</template>

<script>
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
	.ipt-verify{
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	
</style>
