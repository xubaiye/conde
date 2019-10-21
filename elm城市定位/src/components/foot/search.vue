<template>
	<div class="box">
		<Head>
			<span slot='left' @click="$router.go(-1)"><</span>
			<span slot='logo'>搜索</span>
			<span slot='right'></span>
		</Head>
		<div class="box4">
			<div class="search">
				<el-input
				  
				  placeholder="请输入商家或美食名称"
				  v-model="title"
				  clearable>
				</el-input>
				<el-button type="primary" @click="search(title)">提交</el-button>
			</div>
			<div v-show="done">
				<p class="business">搜索历史</p>
				<p class="list" v-for="(item,key) in this.$store.state.arr">{{item}}</p>
				<p class="alldel" @click="alldel()" v-show="this.$store.state.arr.length>0">清空搜索历史</p>
			</div>
			<div v-show="flag">
				<p class="business">
					商家
				</p>
				<dl v-for="(item,key) in list" :key='key'>
					<dt>
						<img :src="'//elm.cangdu.org/img/'+item.image_path">
					</dt>
					<dd>
						<p>{{item.name}}</p>
						<p>月售 {{item.recent_order_num}} 单</p>
						<p>{{item.float_minimum_order_amount}} 元起送/ 距离{{item.distance}}</p>
					</dd>
				</dl>
			</div>
			
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import { food } from '@/api/api'
	import Head from '@/components/head/Head.vue'
	import Foot from '@/components/foot/foot.vue'
	export default {
		components:{
			Head,Foot
		},
		data(){
			return{
				title:'',
				list:[],
				flag:false,
				done:true
			}
		},
		methods: {
			async search(item){
				var geohash=this.$route.params.geohash||this.$route.params.geohash1
				
			const res =await food({geohash:geohash,keyword:this.title})
			console.log(res)
			this.list=res.data
			this.$store.commit('add',item)
			this.flag=true
			this.done=false
				if(this.title==''){
					this.done=true
					this.flag=false
				}
			},
			alldel(){
				this.$store.commit('alldel')
			}
		}
	}
</script>

<style scoped lang="scss">
	.box{
		@include Width();
		height: 100%;
		display: flex;
		flex-direction: column;
		header{
			font-size: 0.4rem;
		}
		.search{
			@include Width();
			height: 1.2rem;
			background: white;
			@include  Vertical();
			.el-input{
				width: 75%;
				margin: 0.2rem;
			}
			.el-button{
				margin-right: 0.2rem;
			}
		}
		.box4{
			@include Width();
			flex: 1;
			overflow: auto;
			
		}
		.business{
			@include  Width();
			height: 0.9rem;
			padding-left: 0.2rem;
			line-height: 0.9rem;
			font-weight: 700;
			color: gray;
			background: #f6f6f6;
		}
		.list{
			@include  Width();
			height: 0.9rem;
			padding-left: 0.2rem;
			line-height: 0.9rem;
			background: white;
		}
		.alldel{
			@include  Width();
			height: 0.9rem;
			@include  kernel();
			font-size: 0.4rem;
			color: #007AFF;
		}
		dl{
			@include  Width();
			height: 2rem;
			display: flex;
			background: white;
			border-bottom: 1px solid gainsboro;
			dt{
				flex: 1;
				img{
					width: 60%;
					margin: 0.2rem;
				}
			}
			dd{
				height: 1.7rem;
				border-bottom: 1px solid gainsboro;
				flex: 3;
				p{
					font-size: 0.24rem;
					margin-top: 0.2rem;
				}
			}
			
		}
	}
	
</style>