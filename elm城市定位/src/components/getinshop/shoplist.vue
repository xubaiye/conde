<template>
	<div class="shoplist">
		
			<div class="nav">
				<div class="navlist" v-for="(item,key) in this.$store.state.shoplist" :key="key" @click="lc(key)">
					{{item.name}}
				</div>
			</div>
			<div class="box6">
				
				<ul v-for="(item,key) in this.$store.state.shoplist" :key="key">
					<p class="p4" :id="'scroll'+key">
						<span>
							<font>{{item.name}}</font>
							<font size="1">{{item.description}}</font>
						</span>
					</p>
					<li v-for="(v,i) in item.foods" >
						<div>
							<!-- <div>{{v.attributes[0].icon_name}}</div> -->
							<img :src="'//elm.cangdu.org/img/'+v.image_path" alt="">
						</div>
						<div class="box7">
							<h4>{{v.name}}</h4>
							<span class="sp2">{{v.description}}</span>
							<p class="p5">月售{{v.month_sales}}份 好评率{{v.satisfy_rate}}%</p>
							<!-- <span v-show="v.activity">{{v.activity.image_text}}</span> -->
							<p class="p6">
								<span>￥<font size="4">{{v.specfoods[0].price}}</font></span>
								<span v-show="v.specfoods.length==1">
									<button v-show="v.__v>0" @click="subtract(v)">-</button>
									<a v-show="v.__v>0">{{v.__v}}</a>
									<button @click="add(v)">+</button>
								</span>
								<span v-show="v.specfoods.length>1" class="sp3">
									选规格
								</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
			
		
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				flag:false,
				sum:0
			}
		},
		methods:{
			lc(i){
				document.getElementById('scroll'+i).scrollIntoView({behavior: "smooth"})
			},
			//点击加
			add(item){
				item.__v++
				// console.log(item)
				// let obj={price:item.specfoods[0].price,num:item.__v,id:item.item_id,name:item.name}
				// console.log(item.name)
				this.$store.commit("addsum",item)
			},
			//点击减
			subtract(item){
				item.__v--;
				this.$store.commit("subtract",item)
			}
		}
	}
</script>

<style scoped lang="scss">
.shoplist{
	@include Width();
	height: 100%;
	display: flex;
	
	.nav{
		flex: 1;
		overflow: auto;
		.navlist{
			@include Width();
			height: 1rem;
			@include kernel();
			box-sizing: border-box;
			border-bottom: 1px solid gray;
			border-right: 1px solid gray;
			
		}
		.navlist:hover{
			background: white;
			border-left: 0.08rem solid #007AFF;
		}
	}
	.box6{
		flex: 4;
		overflow: auto;
		ul{
			@include Width();
			
			list-style: none;
			.p4.p4{
				@include Vertical();
				height: 1rem;
				span{
					margin-left: 0.1rem;
				}
				
				
			}
			li{
				@include Width();
				height: 2.7rem;
				box-sizing: border-box;
				background: white;
				display: flex;
				border-bottom: 1px solid gray;
				.box7{
					width: 4.5rem;
				}
				img{
					width: 0.9rem;
					margin: 0.2rem;
				}
				h4{
					margin-top: 0.2rem;
				}
				.sp2{
					font-size: 0.24rem;
					color: gray;
				}
				.p5{
					font-size: 0.24rem;
					color: gray;
					margin-top: 0.1rem;
				}
				.p6{
					color: red;
					font-size: 0.24rem;
					margin-top: 0.1rem;
					@include Vertical();
					.sp3{
						display: inline-block;
						width: 1rem;
						height: 0.4rem;
						background: #007AFF;
						color: white;
						line-height: 0.4rem;
						text-align: center;
						border-radius: 0.1rem;
					}
				}
				button{
					width: 0.4rem;
					height: 0.4rem;
					border-radius: 50%;
					border: none;
				}
				button:nth-of-type(1){
					border: 0.01rem solid #007AFF;
					background: white;
					
				}
				button:nth-of-type(2){
					color: white;
					background: #007AFF;
					
				}
			}
		}
		
	}
}

</style>