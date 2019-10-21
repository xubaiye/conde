<template>
	<div class="business">
		<p class="p1"><span class="el-icon-house"></span>附近商家</p>
		<dl v-for="(item,key) in this.$store.state.business" :key='key' @click="$router.push({name:'shoplist',query:{id:item.id}})">
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
						<span class="text">{{item.delivery_mode.text}}</span>
						<span class="zs">{{item.supports[1].name}}</span>
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
</template>

<script>
	
	export default {
		
	}
</script>

<style lang="scss">
	.business{
		@include Width();
		background: white;
		margin-top: 0.2rem;
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