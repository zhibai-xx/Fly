<template>
	<view>
		<view class="top">
			<p>个人资料</p>
			<p>头像</p>
			<p>苍蝇签名 <input type="text" placeholder="请输入签名"> </p>
		</view>
		<view class="bottom">
			<view class="sex">
				<radio-group @change="radioChange">
					性别：<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value"> 
						<radio :value="item.value" :checked="index === current" /> {{item.name}}
				</label>
				</radio-group>
			</view>
			<view class="Birthday">
				<p>生日<input type="text" placeholder="请输入生日" > </p>
			</view>
			<view class="home">
				<p>家乡<input type="text" placeholder="请输入家乡" > </p>
			</view>
			<view class="email">
				<p>email<input type="text" placeholder="请输入email" > </p>
			</view>
			<view class="work">
				<p>职业<input type="text" placeholder="请输入职业" > </p>
			</view>
			<view class="company">
				<p>公司<input type="text" placeholder="请输入公司" > </p>
			</view>
			<view class="school">
				<p>学校<input type="text" placeholder="请输入学校" > </p>
			</view>
			<view class="add">
				<p>地址<input type="text" placeholder="请输入地址" > </p>
			</view>
		</view>
		<view class="footer">
			<button type="primary">完成</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						value: '0',
						name: '男',
						checked: 'true'
					},
					{
						value: '1',
						name: '女',
					}
				],
				current: 0
			}
		},
		methods: {
				radioChange: function(evt) {
					for (let i = 0; i < this.items.length; i++) {
						if (this.items[i].value === evt.target.value) {
							this.current = i;
							break;
						}
					}
				}
			}

	}
</script>

<style>
	.footer{
		margin-top: 1rem;
		padding:0 1rem 1rem 1rem;
	}
	.footer button{
		background-color: #FFAD01;
	}
	.top,.bottom {
		margin-top: 0.6rem;
		font-size: 0.7rem;
		padding: 0.5rem 0.7rem;
		background-color: #ffffff;
	}
	.top>p {
		border-bottom: 0.1rem solid #9F9F9F;
		padding: 0.5rem 0.7rem;
		font-size: 0.7rem;
	}
	.bottom p{
		border-bottom: 0.1rem solid #9F9F9F;
		padding: 0.5rem 0.7rem;
		font-size: 0.7rem;
		}
</style>
