<template>
	<view>
		<Mean></Mean>
		<MyCardBtn2></MyCardBtn2>
		<view class="bacolor"></view>
		<view class="comments">
			<view class="title font">写评论</view>
			<view>
				<textarea class="input font" value="" placeholder="写下你的评论" />
				</view>
		</view>
		
		<view class="enter">
			<button class="enterBtn" type="primary">评论</button>
		</view>
		
		<div class="userComment font">
			<div><span>用户评论</span></div>
			<div>
				<div class="title">
					<div><img class="" src="../../static/logo.png" alt=""></div>
					<div>
						<span>嗖嗖嗖</span>
						<span>2013.3.8</span>
					</div>	
				</div>
					<div class="content">轻轻巧巧我我旺旺旺旺雪下的点点滴滴
						都想笑嘻嘻系想笑嘻嘻死死死死死死死死洒下是
						滴答滴答滴答吓死我往往往往是生生世世事实生生
						世世洒手续费全智贤所谓的吃软饭是他刚毕业黑奴剑魔
					</div>
					<div class="contentLike"><img class="like" src="../../static/logo.png" alt=""></div>
			</div>
			
		</div>
	</view>
</template>

<script>
	import Mean from '../../component/Mean.vue';
	import MyCardBtn2 from '../../component/mycardBtn2.vue';
	export default {
		components:{
			Mean,
			MyCardBtn2
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.comments{
	width: 100%;
	height: auto;
}
.title{
	font-weight: bold;
	padding: 0.6rem;
}
.input{
	width: 100%; 
	padding: 0.6rem;
	border-top: 1px solid #808080;
	border-bottom: 1px solid #808080;
}
.score{
	width: 100%;
	padding: 0.6rem;
}
.bacolor{
		height:1rem;
		background-color: RGBA(236, 236, 236, 1);
}
.enter{
		padding:20px 10px;
		background-color:RGBA(236, 236, 236, 1);
	}
	.enterBtn{
		background-color: #FFAD01;
	}
.userComment{
		/* padding: 0 1rem; */
	}
	.userComment>div:first-child{
		height:2rem;
		border-bottom:solid RGBA(216, 216, 216, 1) 1px;
		display:flex;
		align-items:center;
		font-weight:bold;
		padding: 0 1rem;
	}
	.userComment>div:nth-child(2){
		border-bottom:solid RGBA(216, 216, 216, 1) 1px;
	}
	.userComment .title{
		height:3rem;
		display:flex;
		align-items:center;
		padding: 0 1rem;
	}
	.userComment .title>div:nth-child(1)>img{
		border-radius:1rem;
		width:2rem;
	}
	.userComment .title>div:nth-child(2){
		display:flex;
		flex-direction:column;
		padding-left:0.5rem;
	}
	.userComment .title>div:nth-child(2)>span:nth-child(2){
		color:RGBA(216, 216, 216, 1);
	}
	.userComment .content{
		padding:0 1rem;
	}
	.userComment .contentLike{
		height:3rem;
		display:flex;
		justify-content:flex-end;
		padding:0 1rem;
		align-items:center;
	}
	.userComment .like{
		height:20%;
	}
</style>
