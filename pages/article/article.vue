<template>
	<view>
		<div class="BBQ">
			<div>霸道烧烤单</div>
			<div class="user" >
				<div>
					<img src="../../static/logo.png" mode=""></img>
				</div>
				<div>飞来舌</div>
			</div>
		</div>
		<div class="intro font">
			<div>
				<image src="../../static/logo.png" mode=""></image>
			</div>
			<div>
				<span>水水水水</span><br>
				<span>收拾收拾算算算算算算算算算算算算算算
				算算算算算算算算算算算算算算算算算算算算算
				算算算算算算算算算算算算算算算算算算算算算
				算算算算算算算算</span><br>
				<span>收拾收拾算算算算算算算算算算算算算算
				算算算算算算算算算算算算算算算算算算算算算
				算算算算算算算算算算算算算算算算算算算算算
				算算算算算算算算</span><br>
				<span>收拾收拾算算算算算算算算算算算算算算
				算算算算算算算算算算算算算算算算算算算算算
				算算算算算算算算</span><br>
				<span>收拾收拾算算算算算算算算算算算算算算
				算算算算算算算算</span><br>
			</div>
			<div>
				<div>
					<span>举报</span>
					<img class="like" src="../../static/logo.png" alt="">
				</div>
			</div>
		</div>
		
		<div class="bacolor"></div>
		
		<div class="phone">
			<div>
				<span>电话:18325940582</span>
			</div>
			<div>
				<span>地图导航</span>
				<img class="arrows" src="../../static/logo.png" alt="">
			</div>
			<div>
				<span>分享</span>
				<img class="arrows" src="../../static/logo.png" alt="">
			</div>
		</div>
		
		<div class="bacolor"></div>
		
		<div class="comment">
			<div>评论</div>
			<div><input type="text" value="" placeholder="写下你的评论..."></div>
			<div><input type="text" value="" placeholder="给予您的评分(0-100)"></div>
		</div>
		<view class="enter">
			<button class="enterBtn" type="primary">评论</button>
		</view>
		<div class="userComment">
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
</script>

<style>
	.BBQ{
		border-bottom: 1px solid RGBA(216, 216, 216, 1);
		display: flex;
		flex-direction: column;
		padding: 0 1rem;
	}
	.BBQ>div:first-child{
		height: 2rem;
		display: flex;
		font-weight: bold;
		font-size: 0.7rem;
		align-items: center;
	}
	.user{
		height: 2rem;
		display: flex;
		font-size: 0.3rem;
		align-items: center;
		color: RGBA(153, 153, 153, 1);
	}
	.user>div:nth-child(2){
		padding-left: 0.3rem;
	}
	.user div:first-child>img{
		width: 1rem;
		height: 1rem;
		border-radius: 10px;
	}
	.intro{
		padding: 1rem 1rem;
	}
	.intro image{
		width: 100%;
	}
	.intro>div:last-child{
		widows: 100%;
		height: 3rem;
		display: flex;
		justify-content: flex-end;
		align-items:center;
		color:RGBA(153, 153, 153, 1);
	}
	.intro>div:last-child>div{
		width:20%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.intro .like{
		width:20%;
	}
	.bacolor{
		height:1rem;
		background-color: RGBA(236, 236, 236, 1);
	}
	.phone{
		font-size: 0.8rem;
	}
	.phone div{
		height:2rem;
		display:flex;
		align-items:center;
		border-bottom:solid RGBA(216, 216, 216, 1) 1px;
		justify-content:space-between;
		padding: 0 1rem;
	}
	.arrows{
		width:5%;
	}
	.comment>div:first-child{
		height:2rem;
		display:flex;
		align-items:center;
		border-bottom:solid RGBA(216, 216, 216, 1) 1px;
		padding: 0 1rem;
		font-weight: bold;
	}
	.comment>div:nth-child(2){
		height:5rem;
		padding: 0.3rem 1rem;
		border-bottom:solid RGBA(216, 216, 216, 1) 1px;
	}
	.comment>div:nth-child(3){
		padding: 0 1rem;
		height:2rem;
		display:flex;
		align-items:center;
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
