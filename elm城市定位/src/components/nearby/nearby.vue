<template>
	<div class="nearby">
		<Head>
			<span slot="left" class="el-icon-search" style="font-size: 0.4rem;"></span>
			<span slot="logo"><font size="4">{{nearby.name}}</font></span>
			<span slot="right"><font size="3">登录|注册</font></span>
		</Head>
		<div class="box">
			<Rotary></Rotary>
			<Business></Business>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import { search1,business } from '@/api/api'
	import Head from '@/components/head/Head.vue'
	import Rotary from '@/components/nearby/rotary.vue'
	import Foot from '@/components/foot/foot.vue'
	import Business from '@/components/nearby/business.vue'
	export default {
		components:{
			Head,Rotary,Foot,Business
		},
		data(){
			return{
				nearby:[],
				latitude:null,
				longitude:null
			}
		},
		async mounted() {
			let geohash=this.$route.params.geohash
			const res = await search1({},geohash)
			// console.log(res.data)
			this.nearby=res.data
			this.latitude=res.data.latitude
			this.longitude=res.data.longitude
			const data = await business({latitude:this.latitude,longitude:this.longitude})
			this.$store.commit('business',data.data)
			// console.log(data.data.supports)
		}
	}
</script>

<style scoped lang="scss">
.nearby{
	@include Width();
	height: 100%;
	display: flex;
	flex-direction: column;
	.box{
		width: 100%;
		flex: 1;
		overflow: auto;
	}
}
</style>