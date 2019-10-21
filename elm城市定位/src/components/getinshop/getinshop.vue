<template>
	<div class="getinshop">
		<header>
			<dl>
				<dt>
					<img :src="'//elm.cangdu.org/img/'+this.shop.image_path" alt="">
				</dt>
				<dd>
					<p>{{this.shop.name}}</p>
					<p>商家配送 / 分钟送达 / <!-- <span>{{this.shop.piecewise_agent_fee.tips}}</span> --></p>
					<p>公告:{{this.shop.promotion_info}}</p>
				</dd>
			</dl>
			<p class="p3">
				<router-link :to="'/getinshop/shoplist?id='+id">商品</router-link>
				<router-link :to="'/getinshop/discuss?id='+id">评价</router-link>
			</p>
		</header>
		<div class="box5">
			<router-view></router-view>
		</div>
		
		<footer>
			<div class="foot"><span class="el-icon-shopping-cart-2"></span></div>
			<div class="price" @click="falg=!falg">
				<p>￥{{this.$store.getters.sum}}</p>
				<span>配送费5元</span>
			</div>
			<div class="footright">去结算</div>
			
			<ul v-show="falg">
				<li class="li"><span>购物车</span><span @click="clear()">清空</span></li>
				<li v-for="(item,key) in this.$store.state.cart">
					<span>{{item.name}}</span>
					<span>
						<button @click="subtractcart(item)">-</button>
						<a>{{item.__v}}</a>
						<button @click="addcart(item)">+</button>
					</span>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	import { getinshop,shopfood } from '@/api/api'
	export default {
		data(){
			return{
				shop:[],
				id:null,
				falg:false
			}
		},
		async mounted() {
			
			let id=this.$route.query.id
			this.id=id
			const res = await shopfood({restaurant_id:id})
			// console.log(res)
			this.$store.commit("shoplist",res.data)
			const data = await getinshop({},id)
			// console.log(data)
			this.shop=data.data
			
			
		},
		methods:{
			addcart(item){
				item.__v++
				this.$store.commit('addcart',item)
			},
			subtractcart(item){
				
				item.__v--
				this.$store.commit('subtractcart',item)
			},
			clear(){
				this.$store.commit('clear')
				// alert('aaa')
			}
		}
		
	}
</script>

<style scoped lang="scss">
.getinshop{
	@include Width;
	height: 100%;
	display: flex;
	flex-direction: column;
	header{
		height: 2.74rem;
		border-bottom: 1px solid gray;
		dl{
			@include Width;
			height:1.74rem;
			display: flex;
			background: #adb1c2;
			dt{
				flex: 1;
				img{
					width: 1.4rem;
					margin: 10%;
				}
			}
			dd{
				flex: 3;
				p{
					color: white;
					margin-top: 0.14rem;
				}
				p:nth-of-type(2){
					font-size: 0.24rem;
				}
				p:nth-of-type(3){
					font-size: 0.24rem;
				}
			}
		}
		.p3{
			@include Width;
			height: 1rem;
			background: white;
			display: flex;
			a{
				flex: 1;
				@include kernel();
				text-decoration: none;
				color: black;
			}
			.router-link-active{
				color: #007AFF;
				text-decoration: underline;
			}
		}
	}
	.box5{
		flex: 1;
		overflow: auto;
	}
}
footer{
	width: 100%;
	height: 1rem;
	background: black;
	position: relative;
	
	.foot{
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		position: absolute;
		border: 0.04rem solid black;
		background: #007AFF;
		bottom: 0.2rem;
		left: 0.2rem;
		text-align: center;
		line-height: 1.4rem;
		z-index: 10;
		span{
			font-size: 0.74rem;
			color: white;
		}
		
	}
	.footright{
		width: 25%;
		height: 100%;
		background: lightgreen;
		position: absolute;
		right: 0;
		top: 0;
		line-height: 1rem;
		text-align: center;
		color: white;
	}
	.price{
		color: white;
		position: relative;
		left: 1.4rem;
		top: 0.1rem;
		span{
			font-size: 0.24rem;
		}
	}
}
ul{
	width: 100%;
	background: white;
	list-style: none;
	position: absolute;
	bottom: 1rem;
	left: 0;
	.li{
		background:#adb1c2;
	}
	li{
		width: 100%;
		height: 0.8rem;
		z-index: 5;
		display: flex;
		justify-content: space-between;
		line-height: 0.8rem;
		
		span{
			margin: 0 0.2rem;
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
</style>