<template>
  <div id="app">
   <!-- <keep-alive>
			 <router-view  />
		</keep-alive> -->
		
		<transition name="fade" mode="out-in">
		   <router-view  />
		</transition>
		
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	
}
body,html,#app{
	width: 100%;
	height: 100%;
	font-size: 0.32rem;
	background: #f6f6f6;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
