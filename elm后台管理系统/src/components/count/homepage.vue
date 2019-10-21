<template>
	<div class="box">
		<header>
			<span slot="left">首页</span>
			<div slot="right" class="headright"><img src="../../assets/my.png" alt=""></div>
		</header>
		<h1>数据统计</h1>
		<div class="box1">
			<p>当日数据 :</p>
			<p><span>{{user}}</span> 新增用户</p>
			<p><span>{{user1}}</span> 新增订单</p>
			<p><span>{{user2}}</span> 新增管理员</p>
		</div>
		<div class="box2">
			<p>总数据 :</p>
			<p><span>{{user3}}</span> 注册用户</p>
			<p><span>{{user4}}</span> 订单</p>
			<p><span>{{user5}}</span> 管理员</p>
		</div>
		<div class="box3">
			<Echarts></Echarts>
		</div>
		
	</div>
</template>

<script>
	import Head from '@/components/Head/Head'
	import Echarts from '@/components/echarts'
	export default {
		components:{
			Head,Echarts
		},
		data(){
			return{
				user:'',
				user1:'',
				user2:'',
				user3:'',
				user4:'',
				user5:'',
				
			}
		},
		 mounted() {
			this.$axios.get('/statis/user/2019-09-25/count').then(res=>{
				this.user=res.data.count
			})
			this.$axios.get('statis/order/2019-09-25/count').then(res=>{
				this.user1=res.data.count
			}),
			this.$axios.get('/statis/admin/2019-09-25/count').then(res=>{
				this.user2=res.data.count
			})
			this.$axios.get('/v1/users/count').then(res=>{
				this.user3=res.data.count
				// this.$store.commit("users",this.user3)
				// console.log(this.user3)
			})
			this.$axios.get('/bos/orders/count').then(res=>{
				this.user4=res.data.count
			})
			this.$axios.get('/admin/count').then(res=>{
				this.user5=res.data.count
			})
		}
	}
</script>

<style scoped lang="less">
.box{
	width: 100%;
	height: 100%;
	text-align: center;
	header{
		height: 60px;
		background: #EFF2F7;
		display: flex;
		font-size: 20px;
		justify-content: space-between;
		align-items: center;
		border: 1px solid white;
		span{
			margin-left: 20px;
		}
		.headright{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			margin-right: 50px;
			img{
				width: 100%;
				vertical-align: middle;
				display: inline-block;
				
			}
		}
	}
	h1{
		font-size: 40px;
		margin: 20px auto;
	}
	.box1{
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		p{
			width: 240px;
			height: 50px;
			border-radius: 4px;
			background: lightgrey;
			margin-left: 30px;
			font-size: 16px;
			text-align: center;
			line-height: 50px;
			span{
				font-size: 24px;
				font-weight: 700;
			}
		}
		p:nth-child(1){
			background: orange;
			color: white;
			font-size: 24px;
		}
	}
	.box2{
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		p{
			width: 240px;
			height: 50px;
			border-radius: 4px;
			background: lightgrey;
			margin-left: 30px;
			font-size: 16px;
			text-align: center;
			line-height: 50px;
			span{
				font-size: 24px;
				font-weight: 700;
			}
		}
		p:nth-child(1){
			background: dodgerblue;
			color: white;
			font-size: 24px;
		}
	}
	.box3{
		margin: 40px;
		margin-top: 80px;
	}
}
</style>