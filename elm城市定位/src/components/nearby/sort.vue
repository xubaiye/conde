<template>
	<div class="sort">
		<div class="head">
			<Head>
				<span slot="left" style="font-size: 0.4rem;" @click="$router.go(-1)"><</span>
				<span slot="logo"><font size="4">{{title}}</font></span>
				<span slot="right"><font size="3"></font></span>
			</Head>
			<div class="top">
				<div class="topname" v-for="(item,key) in top" :key='key' @click="down(item,key)" :class="key==index?'triangle':''">
					<span class="title">{{item.name}}</span>
					<i class="el-icon-caret-bottom"></i>
				</div>
				
			</div>
			<transition group name="my-transition">
				<!-- 分类	 -->
				<nav v-show="index!=-1">
					<div class="div2" v-show="index==0">
						
						<div class="left">
							<p v-for="(item,key) in nav" :key='key' :class="{'curre':index2==key}" @click="index2=key" v-if="item.count>0">
								<span>{{item.name}}</span>
								<span><a>{{item.count}}</a> ></span>
							</p>
							
						</div>
						<div class="right">
							<p v-for="(item,key) in nav[index2].sub_categories" :key='key' v-if="item.count>0" @click="down1(item.id)">
								<span>{{item.name}}</span>
								<span>{{item.count}}</span>
							</p>
						</div>
					</div>
					<!-- 排序	 -->
					<div class="div3" v-show="index==1">
						<p v-for="(item,key) in sorting" :key='key' :class="{'bb':index3==key}" @click="index3=key,rank(item.id,item.flag)">
							<span><a :class="item.iconleft"></a>{{item.name}}</span>
							<i :class="item.iconright" v-show="index3==key"></i>
						</p>
						
					</div>
					<!-- 筛选 -->
					<div class="div4" v-show="index==2">
						<div class="div5">
							<p>配送方式</p>
							<div class="div7"></div>
							<p>商家属性(可以多选)</p>
							<div class="box9">
								<div class="div7"></div>
								<div class="div7"></div>
								<div class="div7"></div>
								<div class="div7"></div>
								<div class="div7"></div>
								<div class="div7"></div>
							</div>
							
						</div>
						<div class="div6">
							<el-button>清空</el-button>
							<el-button type="success">确认</el-button>
						</div>
							
					</div>
				</nav>
				
			</transition>
			
		</div>
		
		<div class="business">
			<transition>
				<div class="div1" v-show="done"></div>
			</transition>
			
				<dl v-for="(item,key) in this.list" :key='key' @click="$router.push({name:'shoplist',query:{id:item.id}})">
					<dt>
						<img :src="'//elm.cangdu.org/img/'+item.image_path" alt="">			
					</dt>
					<dd>
						<div class="box1">
							
							<div class="box3">
								<span v-show="item.is_premium==true">品牌</span>
								<h5 style="font-size: 0.30rem;">{{item.name}}</h5>
							</div>
							<div>
								<span class="supports" v-for="(v,i) in item.supports" :key="i">{{v.icon_name}}</span>
							</div>
						</div>
						<div class="box1">
							<div class="box2">
								<el-rate
								  v-model="item.rating"
								 
								  disabled
								  show-score
								  text-color="#ff9900"
								  score-template="{value}">
								</el-rate>
								
								<span class="recent_order_num">月售{{item.recent_order_num}}单</span>
							</div>
							<div>
								<span class="text" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
								<span class="zs" v-if="item.supports[1]">{{item.supports[1].name}}</span>
							</div>
						</div>
						<div class="box1">
							<div>
								<span>￥{{item.float_minimum_order_amount}}起送 / {{item.piecewise_agent_fee.tips}}</span>
							</div>
							<div>
								<span class="timer">{{item.distance}} / <font color="#007AFF">{{item.order_lead_time}}</font></span>
							</div>
						</div>
					</dd>
					
				</dl>
			</div>
		
		
		
	</div>
</template>

<script>
	import { sortlist,sort } from '@/api/api'
	import Head from '@/components/head/Head.vue'
	export default {
		components:{
			Head
		},
		data(){
			return{
				title:'',
				top:[
					{name:this.title,flag:false},
					{name:'排序',flag:false},
					{name:'筛选',flag:false},
					],
				sorting:[
					{iconleft:'el-icon-sort',name:'智能排序',iconright:'el-icon-check',id:'',flag:false},
					{iconleft:'el-icon-location-outline',name:'距离最近',iconright:'el-icon-check',id:'distance',flag:false},
					{iconleft:'el-icon-pear',name:'销量最高',iconright:'el-icon-check',id:'recent_order_num',flag:true},
					{iconleft:'el-icon-circle-plus-outline',name:'起送价最低',iconright:'el-icon-check',id:'float_minimum_order_amount',flag:false},
					{iconleft:'el-icon-time',name:'配送速度最快',iconright:'el-icon-check',id:'order_lead_time',flag:false},
					{iconleft:'el-icon-star-off',name:'评分最高',iconright:'el-icon-check',id:'rating',flag:true},
				],
				done:false,
				index:-1,
				list:[],
				nav:[],
				index2:1,
				index3:1,
				latitude:this.$store.state.latitude,
				longitude:this.$store.state.longitude,
			}
		},
		async mounted() {
			this.top[0].name=this.$route.query.title
			this.title=this.$route.query.title
			//商家列表
			const res = await sortlist({latitude:this.$store.state.latitude,longitude:this.$store.state.longitude})
			// console.log(res)
			this.list=res.data
			
			//分类列表
			const data = await sort({latitude:this.$store.state.latitude,longitude:this.$store.state.longitude})
			// console.log(data)
			this.nav=data.data
			
		},
		methods:{
			down(v,i){
				this.done=!this.done
				this.index==i?this.index=-1:this.index=i
			},
			async down1(id){
				
				const res1 = await sortlist({
					latitude:this.latitude,
					longitude:this.longitude,
					'extras[]':'activities',
					'restaurant_category_ids[]':id,
					offset:0,
					limit:20
					})
				console.log(res1)
				this.list = res1.data
			},
			rank(id,flag){
				
				if(flag==false){
					function compare(property){
						return function(a,b){
							var value1=parseInt(a[property])
							var value2=parseInt(b[property])
							return value1-value2
							}
					}
					this.list.sort(compare(id))
					// console.log(this.list.sort(compare(id)))
				}else if(flag==true){
						function compare(property){
							return function(a,b){
								var value1=parseInt(a[property])
								var value2=parseInt(b[property])
								return value2-value1
								}
							}
							this.list.sort(compare(id))
							
					}
			}
		}
	}
</script>

<style scoped lang='scss'>
	.div3{
		@include Width();
		height: 4.8rem;
		background: white;
		p{
			height: 0.8rem;
			@include Vertical();
			font-size: 0.24rem;
			border-bottom: 0.01rem solid gainsboro;
			box-sizing: border-box;
			a{
				margin: 0 0.2rem;
			}
			i{
				margin: 0 0.2rem;
			}
		}
		.bb{
			color: #007AFF;
		}
	}
.sort{
	@include Width();
	height: 100%;
	display: flex;
	flex-direction: column;
	.head{
		@include Width();
		height: 1.7rem;
		.top{
			@include Width();
			height: 0.8rem;
			border-bottom: 0.01rem solid gainsboro;
			font-size: 0.24rem;
			.topname{
				width: 33.33%;
				height: 100%;
				float: left;
				flex: 1;
				@include kernel();
				
				span{
					margin-left: 0.1rem;
				}
				/* .topname>span:hover{
					
					transition: 0.3s;
					transform: rotate(360deg);
				} */
				
				
				
			}
		}
	}
	
	.topname>i{
			transform-origin:center center;
			transition:all 0.3s;
			transform: rotate(0deg);
		
	}
	.triangle{
		color: #007AFF;
		>i{
			transform-origin:center center;
		    transform: rotate(180deg);
		    transition: all .3s;
		}
		  
	}
	
	nav{
		width: 100%;
		
		position: fixed;
		z-index: 99;
		top:1.7rem;
		.div2{
			display: flex;
			width: 100%;
		}
		.curre:hover{
			background: white;
		}
		.left{
			width: 50%;
			
			float: left;
			background: #f6f6f6;
			
			p{
				display: flex;
				@include Width();
				height: 0.8rem;
				font-size: 0.24rem;
				@include Vertical();
				span{
					margin: 0 0.2rem;
					a{
						border-radius: 0.16rem;
						background: gray;
						color: white;
					}
				}
			}
		}
		.right{
			width: 50%;
			
			float: left;
			background: white;
			
			p{
				display: flex;
				@include Width();
				height: 0.8rem;
				font-size: 0.24rem;
				@include Vertical();
				span{
					margin: 0 0.2rem;
				}
			}
		}
	}
}
.v-enter,.v-leave-to{
	height: 0;
	transition: 0.5s;
}
.v-leave,.v-enter-to{
	height: 100%;
	transition: 0.5s;
}
.div4{
	@include Width();
	height: 5rem;
	background: gainsboro;
	.div5{
		@include Width();
		height: 4rem;
		background: white;
		border-top: 1px solid white;
		p{
			font-size: 0.24rem;
			margin: 0.2rem 0.2rem  0;
		}
		.box9{
			@include Width();
			display: flex;
			flex-wrap: wrap;
		}
		.div7{
			width: 2.2rem;
			height: 0.6rem;
			border: 0.01rem solid gainsboro;
			border-radius: 0.1rem;
			margin-left: 0.2rem;
			margin-top: 0.2rem;
		}	
		
	}
	.div6{
		@include Width();
		.el-button{
			width: 45%;
			/* height: 40%; */
			border: none;
			margin: 0.1rem 0.15rem;
		}
	}
	
}
	.business{
		@include Width();
		background: white;
		/* margin-top: 0.2rem; */
		flex: 1;
		overflow: auto;
		position: relative;
		.div1{
			@include Width();
			height: 100%;
			position: fixed;
			top:1.7rem;
			background: black;
			opacity: 0.5;
		}
		.p1{
			@include Width();
			height: 0.7rem;
			margin-left: 0.3rem;
			line-height: 0.7rem;
			color: gray;
		}
		dl{
			@include Width();
			height: 2.1rem;
			box-sizing: border-box;
			border-bottom: 0.01rem solid gainsboro;
			display: flex;
			dt{
				flex: 2;
				img{
					width: 70%;
					margin: 15%;
				}
			}
			dd{
				flex: 5;
				.box1{
					margin-top: 0.3rem;
					@include Vertical();
					font-size: 0.20rem;
					div{
						.supports{
							font-size: 0.24rem;
							margin-right: 0.1rem;
							color: gray;
							
						}
						.text{
							background: #007AFF;
							color: white;
							border-radius: 0.04rem;
							
						}
						.zs{
							border: 0.01rem solid #007AFF;
							color: #007AFF;
							border-radius: 0.04rem;
							margin-right: 0.1rem;
						}
						.timer{
							margin-right: 0.1rem;
						}
						// .el-rate{
							
						// 	height: 0.2rem !important;
						// }
						.el-rate__text{
							font-size: 0.24rem !important;
							
						}
						.el-rate__icon{
							font-size: 0.2rem !important;
							margin: 0;
							
						}
						.recent_order_num{
							margin-left: 0.05rem;
						}
						.el-rate{
							line-height: 0.5rem;
						}
						
					}
					.box2{
						@include Center();
					}
					.box3{
						@include Center();
						span{
							display: inline-block;
							height: 0.3rem;
							font-size: 0.24rem;
							line-height: 0.3rem;
							background: #fedd2d;
							border-radius: 0.08rem;
							margin-right: 0.1rem;
						}
					}
				}
			}
			
		}
	}
</style>
