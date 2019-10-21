import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import City from '@/components/home/city'
import Current from '@/components/home/current'
import Nearby from '@/components/nearby/nearby'
import Getinshop from '@/components/getinshop/getinshop'
import Search from '@/components/foot/search'
import Shoplist from '@/components/getinshop/shoplist'
import Discuss from '@/components/getinshop/discuss'
import Sort from '@/components/nearby/sort'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/city',
      name: 'city',
      component: City
    },
	{
		path:'/',
		redirect:'/city'
	},
	{
	  path: '/current/:id',
	  name: 'current',
	  component: Current
	},
	{
	  path: '/nearby/:geohash',
	  name: 'nearby',
	  component: Nearby,
	  children:[
		 
	  ]
	},
	{
	  path: '/search/:geohash',
	  name: 'search',
	  component: Search
	},
	{
	  path: '/search/:geohash1',
	  name: 'search',
	  component: Search
	},
	{
	  path: '/getinshop',
	  name: 'getinshop',
	  component: Getinshop, 
	  children:[
		  {
			  path: 'shoplist',
			  name: 'shoplist',
			  component: Shoplist
		  },
		  // {
			 //  path:'/',
			 //  redirect:'/shoplist'
		  // },
		  {
			   path: 'discuss',
		  	   name: 'discuss',
		  	   component: Discuss
		  }
	  ]
	},
	{
	  path: '/sort',
	  name: 'sort',
	  component: Sort
	},
  ]
})
