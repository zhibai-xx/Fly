<template>
	<view>
		<view class="login_lump">
			<div>分内选择</div>
			<div>
				<span>文章类型</span>
				<div class="ipt" >
					<select>
					<option value="">请选择您的文章类型</option>
					</select>
					</div>	
				</div>
			<div>
				<span>种类</span>
				<div class="ipt">
					<select>
					<option value="">请选择您的种类</option>
					</select>
					</div>
				</div>
		</view>
		<div class="bacolor"></div>
		<view class="login_lump">
			<div>添加文章信息</div>
			<div>
				<span>电话</span>
				<div class="ipt" ><input type="text" value="" placeholder="请留下馆子电话" /></div>	
				</div>
			<div>
				<span>地址</span>
				<div class="ipt"><input type="text" value="" placeholder="请留下馆子地址" /></div>
				</div>
			<div>
				<span>链接</span>
				<div class="ipt"><input type="text" value="" placeholder="请留下馆子相关链接" /></div>
				</div>
		</view>
		<div class="bacolor"></div>
		<view class="articleTitle">
			<div>
				<span>文章标题</span>
				<div><input type="text" value="" placeholder="请输入标题" /></div>	
			</div>
			<div>
				<textarea value="" placeholder-style="color: RGBA(215, 215, 215, 1);" placeholder="写下你感受过的菜品或馆子并简单介绍,最好超过三个不然别的宝宝不愿意看哟..." />
			</div>
			<div>
				 <view><image src="../../static/logo.png" mode=""></image></view>
				<view><image src="../../static/logo.png" mode=""></image></view>
			</div>
		</view>
		<view class="enter">
			<button class="enterBtn" type="primary">发表</button>
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
		display: flex;
	}
	.enter{
		padding:0 10px;
		padding-top: 20px;
	}
	.enterBtn{
		background-color: #FFAD01;
	}
	.login_lump span{
		width: 20%;
		font-size: 0.8rem;
	}
	.bacolor{
		height:1rem;
		background-color: RGBA(236, 236, 236, 1);
	}
	select{
		  -webkit-appearance:none;
		  border: none;
		  color: #D8D8D8;
		  font-size: 0.75rem;
	}
	.uni-input-placeholder{
		color: RGBA(215, 215, 215, 1);
	}
	.articleTitle>div:first-child{
		display: flex;
		height: 3rem;
		border-bottom: 1px solid rgb(240,240,240);
		align-items: center;
		padding-left: 1rem;
		font-weight: bold;
	}
	.articleTitle>div:first-child>div{
		padding-left: 1rem;
		font-weight: 100;
	}
	.articleTitle>div:nth-child(2){
		padding: 1rem 1rem;
		border-bottom: 1px solid rgb(240,240,240);
	}
	.articleTitle>div:nth-child(2) textarea{
		height: 5rem;
		width:100%;
	}
	.articleTitle>div:nth-child(3) image{
		width:1rem;
		height:1rem;
	}
	.articleTitle>div:nth-child(3){
		height:3rem;
		display:flex;
		align-items:center;
	}
	.articleTitle>div:nth-child(3) view{
		padding-left:1rem;
	}
	.enter{
		padding:1rem 10px;
		background-color:rgb(240,240,240);
	}
	.enterBtn{
		background-color: #FFAD01;
	}
</style>
