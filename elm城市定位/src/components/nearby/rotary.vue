<template>
	<div>
		<swiper :options="swiperOption">
		　　<!-- <swiper-slide v-for="(item,key) in list" :key="key"> -->
				<router-link v-for="(item,key) in list" :key="key" tag="div" :to="'/sort?title='+item.title+'&'"  class="swiper-slide">
					<img :src="'https://fuss10.elemecdn.com/'+item.image_url" alt="">
					<p>{{item.title}}</p>
				</router-link>
			<!-- </swiper-slide> -->
		　　
		　　<div class="swiper-pagination" slot="pagination"></div>
		　　
		</swiper>
		
	</div>
</template>

<script>
	import { foodType } from '@/api/api'
	import Swiper from 'swiper'
	
	export default {
		data(){
			return{
				list:[],
				swiperOption: {
					pagination: {
					　　el: '.swiper-pagination',
					　　clickable: true // 允许点击小圆点跳转
					},
				    slidesPerView:4,
					slidesPerGroup:8,
					slidesPerColumn:2
				    
				},
			}
		},
		async mounted(){
			//导航食品类型
			const res =await  foodType({}) 
			// console.log(res)
			this.list=res.data
			
		}
	}
</script>

<style scoped lang="scss">
	
	.swiper-container{
		@include Width();
		height: 4rem;
		background: white;
		.swiper-wrapper{
			@include Width();
			height: 100%;
			display: flex;
			// flex-wrap: wrap;
			
		}
		.swiper-slide{
			width: 25%;
			height: 45%;
			@include  kernel;
			flex-direction: column;
			p{
				font-size: 0.24rem;
				margin-top: 0.2rem;
			}
			img{
				width: 0.8rem;
			}
		}
	}
	

</style>