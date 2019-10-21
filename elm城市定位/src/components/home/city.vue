<template>
	<div class="city">
		<Head>
			<span slot="left">ele.em</span>
			<span slot="right">登录|注册</span>
		</Head>
		<div class="count">
			<div class="top">
				<span>当前定位城市:</span>
				<span>定位不准时,请在城市列表中选择</span>
			</div>
			<div class="top_two" @click="$router.push({name:'current',params:{id:current.id}})">
				<span class="sp1">
					{{current.name}}
				</span>
				<span>></span>
			</div>
			<!-- 热门城市 -->
			<div class="hoot">
				<p>热门城市</p>
				<div class="hotcity">
					<div v-for="(item,key) in hotcity" :key="key">
						<router-link :to="'/current/'+item.id">{{item.name}}</router-link>
					</div>
				</div>
				
			</div>
			
			<div class="all">
				<Citylist v-for="(item,key) in zm" :key="key" :index="item" :list='list'></Citylist>
				
			</div>
			
			
			
			
			
			
			
			
			
		</div>
		
	</div>
</template>

<script>
	import { current } from '@/api/api'
	import Head from '@/components/head/Head.vue'
	import Citylist from '@/components/home/citylist.vue'
	export default {
		components:{
			Head,Citylist
		},
		data(){
			return{
				current:[],
				hotcity:[],
				zm:[],
				list:[]
			}
		},
		async mounted(){
			//当前城市
			const res =await current({type:"guess"})
			// console.log(res)
			this.current=res.data
			//热门城市
			const data = await current({type:'hot'})
			console.log(data)
			this.hotcity=data.data
			const all = await current({type:'group'})
			//全部城市
			this.zm=Object.keys(all.data).sort()
			// console.log(this.zm)
			this.list=all.data
		}
	}
</script>

<style scoped lang="scss">
.city{
	@include Width();
	height: 100%;
	display: flex;
	flex-direction: column;
	background: #f6f6f6;
	.count{
		width: 100%;
		flex: 1;
		overflow: auto;
		
		
		.top{
			@include Width();
			height: 0.86rem;
			@include Vertical();
			
			color: gray;
			font-size: 0.24rem;
			background: white;
			border-bottom: 0.01rem solid gray;
			span{
				margin: 0 0.1rem;
			}
		}
		.top_two{
			@include Width();
			height: 0.86rem;
			@include Vertical();
			color: gray;
			font-size: 0.36rem;
			background: white;
			border-bottom: 0.02rem solid gray;
			span{
				margin: 0 0.1rem;
			}
			.sp1{
				color: #3190e8;
			}
		}
	}
	.hoot{
		@include Width();
		height: 2.3rem;
		border-top: 0.02rem solid gray;
		margin-top: 0.1rem;
		background: white;
		box-sizing: border-box;
		a{
			text-decoration: none;
			color: #3190e8;
		}
		.hotcity{
			@include Width();
			height: 1.6rem;
			display: flex;
			flex-wrap: wrap;
			div{
				width: 25%;
				height: 0.8rem;
				box-sizing: border-box;
				text-align: center;
				line-height: 0.8rem;
				
				border-top: 0.01rem solid gainsboro;
				border-right: 0.01rem solid gainsboro;
			}
		}
	}
	
	.all{
		@include Width();
	}
	
}
p{
			@include Width();
			height: 0.7rem;
			line-height: 0.7rem;
			padding-left: 0.1rem;
			font-size: 0.26rem;
		}
</style>