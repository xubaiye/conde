import { Req } from '@/util/Req'
//热门城市、当前城市、全部城市
export const current = data =>  Req.getData({
	url:`/api/v1/cities`,
	method:'get',
	data
})
//当前城市跳转页
export const current1 = (data,id) =>  Req.getData({
	url:`/api/v1/cities/`+id,
	method:'get',
	data
})
//搜索当前城市地址
export const search = data =>  Req.getData({
	url:`/api/v1/pois`,
	method:'get',
	data
})
//搜索地址详细信息
export const search1 = (data,geohash) =>  Req.getData({
	url:`/api/v2/pois/`+geohash,
	method:'get',
	data
})
//导航食品类型
export const foodType = data => Req.getData({
	url:`/api/v2/index_entry`,
	method:'get',
	data
})
//附近商家
export const business = (data) => Req.getData({
	url:`/api/shopping/restaurants/`,
	method:'get',
	data
})
//所搜附近美食
export const food = data =>Req.getData({
	url:`/api/v4/restaurants`,
	method:'get',
	data
})
//商家食品列表
export const shopfood = (data) =>Req.getData({
	url:`/api/shopping/v2/menu`,
	method:'get',
	data
})
//商家详情列表
export const getinshop = (data,id) =>Req.getData({
	url:`/api/shopping/restaurant/`+id,
	method:'get',
	data
})
//评价
// export const discuss = (data,id) => Req.getData({
// 	url:`/api/ugc/v2/restaurants`+id,
// 	method:'get',
// 	data,
// })
//分类列表页商家列表
export const sortlist = data => Req.getData({
	url:`/api/shopping/restaurants`,
	method:'get',
	data
})
//分类列表
export const sort = data=>Req.getData({
	url:`/api/shopping/v2/restaurant/category`,
	method:'get',
	data,
})
//分类接口
// export const sorting = data => Req.getData({
// 	
// 	method:'get',
// 	data,
// })