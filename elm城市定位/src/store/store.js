import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
	state:{
		business:[],
		list:JSON.parse(localStorage.getItem('f1'))||[],
		geohash:'',
		geohash1:'',
		arr:JSON.parse(localStorage.getItem('f2'))||[],
		shoplist:[],
		latitude:'',
		longitude:'',
		id:'',
		cart:JSON.parse(localStorage.getItem('f3'))||[],
		count:0, //商品小计
		
	},
	mutations:{
		//附近商家搜索历史
		ls(state,data){
			state.geohash=data.geohash
			state.latitude=data.latitude
			state.longitude=data.longitude
			state.id=data.id
			console.log(data)
			let index=state.list.findIndex((v,i)=>{
				return v.name==data.name
			})
			if(index==-1){
				state.list.push(data)
			}	
			// console.log(state.list,"222222")
			state.list.map((v,i)=>{
				state.geohash1=state.list[i].geohash
				
			})
			// console.log(state.geohash1,'11111111')
			
			// console.log(state.geohash)
		},
		// 清空附近商家搜索历史
		del(state){
			state.list=[]
		},
		//附近商家
		business(state,data){
			state.business=data
			
		},
		add(state,item){
			var index = state.arr.findIndex((v,i)=>{
				return v==item
			})
			if(index==-1){
				state.arr.push(item)
			}
			
		},
		alldel(state){
			state.arr=[]
		},
		shoplist(state,item){
			state.shoplist=item
			console.log(state.shoplist)
		},
		//商品数量加
		addsum(state,item){
			var index = state.cart.findIndex((v,i)=>{
				return v.item_id==item.item_id
			})
			if(index==-1){
				state.cart.push(item)
			}else{
				state.cart[index].__v+1
			}
			// console.log(state.cart)
		},
		// 商品数量减
		subtract(state,item){
			var index = state.cart.findIndex((v,i)=>{
				return v.item_id==item.item_id
			})
			if(state.cart[index].__v==0){
				state.cart.splice(index,1)
			}else{
				state.cart[index].__v-1
			}
		},
		addcart(state,item){
			var index = state.cart.findIndex((v,i)=>{
				return v.item_id==item.item_id
			})
			// state.cart[index].num++
			console.log(index)
		},
		subtractcart(state,item){
			var index = state.cart.findIndex((v,i)=>{
				return v.item_id==item.item_id
			})
			if(item.__v==0){
				state.cart.splice(index,1)
			}
			
		},
		//清空
		clear(state){
			state.cart.map((v,i)=>{
				return v.__v=0
			})
			state.cart=[]
		}
		
		
		
	},
	getters:{
		sum(state){
			var s=0;
			state.cart.map((v,i)=>{
				 s += Number(v.specfoods[0].price*v.__v)
			})
			return s;
		}
		
	}
})

store.subscribe(function(mutations,state){
	localStorage.setItem('f1',JSON.stringify(state.list))
	localStorage.setItem('f2',JSON.stringify(state.arr))
	localStorage.setItem('f3',JSON.stringify(state.cart))
})

export default store;