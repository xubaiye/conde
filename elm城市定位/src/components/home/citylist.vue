<template>
	<div class="citylist">
		<p>{{index}}</p>
		<div class="list">
			<div v-for="(item,key) in list[index]" :key='key'>
				<router-link :to="'/current/'+item.id">{{item.name}}</router-link>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		props:['index','list']
	}
</script>

<style scoped lang="scss">
.citylist{
	@include Width();
	margin-top: 0.1rem;
	background: white;
	border-top: 0.02rem solid gray;
	border-bottom: 0.02rem solid gray;
	p{
		@include Width();
		height: 0.7rem;
		line-height: 0.7rem;
		padding-left: 0.2rem;
		font-size: 0.26rem;
		border-bottom: 0.01rem solid gainsboro;
	}
	.list{
		@include Width();
		display: flex;
		flex-wrap: wrap;
		
		div{
			width: 25%;
			height: 0.8rem;
			box-sizing: border-box;
			text-align: center;
			line-height: 0.8rem;
			// color: #3190e8;
			border-bottom: 0.01rem solid gainsboro;
			border-right: 0.01rem solid gainsboro;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			a{
				text-decoration: none;
				color: #000000;
			}
		}
	}
	
}
</style>