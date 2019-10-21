<template>
	<footer>
		<router-link tag="div" :to="'/nearby/'+this.$store.state.geohash"><span class="el-icon-eleme"></span>外卖</router-link>
		<router-link tag="div" :to="'/search/'+this.$store.state.geohash||'/search/'+this.$store.state.geohash1"><span class="el-icon-discover"></span>搜索</router-link>
		<!-- <router-link tag="div" :to="'/search/'+this.$store.state.geohash1"><span class="el-icon-discover"></span>搜索</router-link> -->
		<router-link tag="div" to=""><span class="el-icon-finished"></span>订单</router-link>
		<router-link tag="div" to=""><span class="el-icon-user"></span>我的</router-link>
	</footer>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
footer{
	@include Width();
	height: 0.9rem;
	border-top: 0.01rem solid gray;
	display: flex;
	div{
		width: 25%;
		@include kernel();
		flex-direction: column;
		font-size: 0.24rem;
		span{
			font-size: 0.44rem;
		}
	}
}
</style>