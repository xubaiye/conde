import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/signin/signin'
import Manage from '@/components/count/manage'
import Homepage from '@/components/count/homepage'
import Userlist from '@/components/count/userlist'
import Business from '@/components/count/business'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
	{
		path:'/',
		redirect:'/signin'
	},
	{
	  path: '/manage',
	  name: 'Manage',
	  component: Manage,
		children:[
			{
			  path: 'homepage',
			  name: 'Homepage',
			  component: Homepage
			},
			{
				path:'/',
				redirect:'/manage/homepage'
			},
			{
			  path: 'userlist',
			  name: 'Userlist',
			  component: Userlist
			},
			{
			  path: 'business',
			  name: 'Business',
			  component: Business
			},
		]
	},
  ]
})
