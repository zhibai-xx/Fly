<template>
	<!-- 个人信息 组件 -->
	<view>
		<view class="all">
			<view class="person">
				<view>
					<view class="personInfo">
						<!-- 左边 -->
						<view class="avatar">
							<image src="../../static/logo.png" style=" width: 4.2rem; height: 4.2rem;" mode=""></image>
						</view>
						<view class="user">
							<p>{{UserName}}</p>
							<p>编辑个人资料</p>
							
						</view>
						<view class="autograph">
							<!-- 个人签名 -->
							<laber>苍蝇签名:{{autographValue}}</laber>
						</view>
					</view>
					
					<view class="personPick">
						<!-- 右边 -->
						<view class="pick">
							<laber>给他评论打分</laber>
						</view>
						<view class="grade">
							<laber class="gradeNumber">{{grade}}分</laber>
							<view class="grade_product">
								评分详情
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				grade: 90,
				autographValue: '苍蝇馆就怕没有烟火!',
				UserName: '嘀哩嘀哩'
			}
		},
		methods: {

		}
	}
</script>

<style>
	.personInfo {
		text-align: center;
		float: left;
		display: inline-block;
	}

	.personPick {
		float: right;
	}

	.person {
		width: 93%;
		padding: 0.75rem 0.75rem 0.75rem 0.75rem;
		height: 5.5rem;
		background-color: #FFBD31;
	}

	.avatar,
	.user {
		display: inline-block;
		vertical-align: middle;
	}

	.user p:nth-child(1) {
		letter-spacing: 0.03rem;
		font-weight: bold;
		margin-top: 0.8rem;
		margin-left: 0.4rem;		
		font-size: 0.9rem;
	}

	.user p:nth-child(2) {
		font-size: 0.6rem;
		margin-left: 0.4rem;
		color: #FFFFFF;
		margin-top: 0.1rem;
	}

	.pick laber {
		color: #FFFFFF;
		font-size: 0.6rem;
		margin-right: 1rem;
	}

	.grade {
		width: 5rem;
		vertical-align: middle;
	}

	.grade laber {
		display: inline-block;
		color: #FF6000;

		font-style: italic;
	}

	.grade_product {
		width: 60%;
		font-size: 0.6rem;
		text-align: center;
		color: #FFFFFF;
		background-color: #FFAD00;
		padding: 0.3rem;
		border-radius: 0.2rem;
	}
	.autograph{
		/* display: block; */
		font-size: 0.6rem;
		font-weight: bold;
		letter-spacing: 0.03rem;
	}
</style>
