<template>
	<view>
		<Mean></Mean>
		<MyCardBtn></MyCardBtn>
		<view class="top">
			<p>个人资料</p>
			<p>头像</p> 
			<view class="flex qms">
				<p>苍蝇签名  </p> <input type="text" class="qm" placeholder-class="placeholder"  placeholder="请输入签名">
			</view>
		</view>
		<view class="bottom">
			<view class="sex">
				<radio-group class="radios" @change="radioChange">
					<span style="margin-right: 6%;">性别：</span> <view><label  class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value"> 
						<radio :value="item.value" :checked="index === current" /> {{item.name}}
				</label>
				</view>
				</radio-group>
			</view>
			<view class="Birthday">
				<p class="flex"><span>生日</span><input type="text" placeholder-class="placeholder" placeholder="请输入生日" > </p>
			</view>
			<view class="home">
				<p class="flex"><span>家乡</span><input type="text" placeholder-class="placeholder" placeholder="请输入家乡" > </p>
			</view>
			<view class="email">
				<p class="flex"><span>邮件</span><input type="text" placeholder-class="placeholder" placeholder="请输入email" > </p>
			</view>
			<view class="work">
				<p class="flex"><span>职业</span><input type="text" placeholder-class="placeholder" placeholder="请输入职业" > </p>
			</view>
			<view class="company">
				<p class="flex"><span>公司</span><input type="text" placeholder-class="placeholder" placeholder="请输入公司" > </p>
			</view>
			<view class="school">
				<p class="flex"><span>学校</span><input type="text" placeholder-class="placeholder" placeholder="请输入学校" > </p>
			</view>
			<view class="add">
				<p class="flex"><span>地址</span><input type="text" placeholder-class="placeholder" placeholder="请输入地址" > </p>
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
		padding: 0.5rem 0.4rem;
		background-color: #ffffff;
	}
	.top>p {
		border-bottom: 0.001rem solid #D8D8D8;
		 padding: 0.5rem 0.4rem; 
		 font-weight: bold;
		font-size: 0.7rem;
	}
	.bottom p,.qms,.radios{
		border-bottom: 0.001rem solid #D8D8D8;
		 padding: 0.6rem 0.4rem; 
		 font-weight: bold;
		font-size: 0.7rem;
		}
	.qm{
		font-size: 0.6rem;
	}
	.flex{
		display: flex;
		flex-wrap: nowrap;
	}
	.flex input {
		margin-left: 10%;
		font-weight: 400;
		font-size: 0.6rem;
	}
	.placeholder{
		font-size: 0.6rem;
		font-weight: 100;
	}
	.radios{
		display: flex;
		flex-wrap: nowrap;
	}
	.qms{
		display: flex;
		flex-wrap: nowrap;
	}
		
</style>
