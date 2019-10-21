<template>
	<div class="current">
		
		<Head>
			<span slot="left" @click="$router.go(-1)"><font size="5"><</font></span>
			<h3 slot="logo">{{current.name}}</h3>
			<span slot="right" @click="$router.go(-1)">
				<font size="2">切换城市</font>
			</span>
		</Head>
		<div class="search">
			<el-input v-model="input" placeholder="请输入学校、商务楼、地址" size='small' clearable></el-input>
			 <el-button size='small' type="primary" @click="search">提交</el-button>
		</div>
		<!-- 搜索历史 -->
		<ul v-show="flag">
			<p class="p1">搜索历史</p>
			<li v-for="(item,key) in this.$store.state.list" :key="key" @click="$router.push({name:'nearby',params:{geohash:item.geohash}})">
				<p>{{item.name}}</p>
				<span>{{item.address}}</span>
			</li>
			<p class="p2" @click="del()" v-show="this.$store.state.list.length>0">清空所有</p>
		</ul>
		<!-- 搜索内容 -->
		<ul>
			<li v-for="(item,key) in list" :key='key' @click="add(item)">
				<p>{{item.name}}</p>
				<span>{{item.address}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import { current1,search } from '@/api/api'
	import Head from '@/components/head/Head.vue'
	export default {
		components:{
			Head
		},
		data(){
			return{
				current:[],
				input:'',
				list:[],
				flag:true,
				done:true
			}
		},
		async created(){
			//当前城市
			let id = this.$route.params.id
			const res =await current1({},id)
			// console.log(res)
			this.current=res.data
			
		},
		methods:{
			//搜索地址
			async search(){
				let id = this.$route.params.id
				const data = await search({
					type:'search',id:id,keyword:this.input
				})
				// console.log(data)
				this.list=data.data
				this.flag=false
				if(this.input==''){
					this.$message({
					    message: '输入内容不能为空',
					    type: 'warning'
					});
				}
			},
			async add(item){
				this.$router.push({name:'nearby',params:{geohash:item.geohash}})
				
				this.$store.commit('ls',item)
			},
			async del(){
				this.$store.commit('del')
				
			}
			
		}
	}
</script>

<style scoped lang="scss">
.current{
	@include Width();
	height: 100%;
	background: #f6f6f6;
	.search{
		@include Width();
		height: 2rem;
		background: white;
		box-sizing: border-box;
		border-top: 0.02rem solid gray;
		border-bottom: 0.02rem solid gray;
		margin-top: 0.1rem;
		@include Vertical();
		flex-direction: column;
		
		
		.el-input,.el-button{
			width: 90%;
			margin-top: 0.2rem;
		}
		.el-button{
			margin-bottom: 0.3rem;
		}
	}
	.p1{
		font-size: 0.2rem;
		border-bottom: 0.02rem solid gray;
		height: 0.4rem;
		line-height: 0.4rem;
		padding-left: 0.1rem;
	}
	ul{
		list-style: none;
		li{
			@include Width();
			height: 1.4rem;
			background: white;
			border-bottom: 0.01rem solid gainsboro;
			border-top: 0.01rem solid gainsboro;
			p{
				margin-top: 5%;
				margin-left: 5%;
			}
			span{
				margin-top: 5%;
				margin-left: 5%;
				font-size: 0.2rem;
				color: gray;
			}
			
		}
	}
	.p2{
		@include Width();
		height: 0.8rem;
		background: white;
		text-align: center;
		line-height: 0.8rem;
	}
}
</style>