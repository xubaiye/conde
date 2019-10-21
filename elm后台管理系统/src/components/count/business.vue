<template>
	<div class="userlist">
		<header>
			<p slot="left">
				<span @click="$router.push('/manage/homepage')" class="sp1">首页</span> / 
				<span class="sp1">数据管理</span> / 
				<span>用户列表</span>
			</p>
			<div slot="right" class="headright"><img src="../../assets/my.png" alt=""></div>
		</header>
		
		<el-pagination
		  background
		  :page-size="pagesize"
		  @current-change="getData"
		  layout="prev, pager, next"
		  :total="num">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				list:[],
				num:0,
				pagesize:20
			}
		},
		mounted() {
			
			this.$axios.get('/v1/users/count').then(res=>{
				this.num=res.data.count
				
			})
			this.getData(1)
		},
		methods:{
			getData(grow){
				// https://elm.cangdu.org/v1/users/list?offset=0&limit=20
				
				var url="/v1/users/list?offset="+grow+"&limit="+this.pagesize
				this.$axios.get(url).then(res=>{
					this.list=res.data
				})
				
			}
		}
	}
</script>

<style scoped lang="less">
.userlist{
	width: 100%;
	height: 100%;
	overflow: auto;
	header{
		height: 60px;
		background: #EFF2F7;
		display: flex;
		font-size: 20px;
		justify-content: space-between;
		align-items: center;
		border: 1px solid white;
		p{
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
	
	.el-pagination{
		margin-left: 50px;
		margin-bottom: 40px;
	}
}
</style>