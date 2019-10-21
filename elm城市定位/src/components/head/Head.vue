<template>
	<header>
		<slot name="left"></slot>
		<slot name="logo"></slot>
		<slot name="right"></slot>
	</header>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
header{
	@include Width();
	height: 0.9rem;
	background: #3190e8;
	@include Vertical();
	color: white;
	box-sizing: border-box;
	span{
		margin: 0 0.2rem;
	}
}
</style>