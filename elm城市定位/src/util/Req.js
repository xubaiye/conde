import axios from 'axios'
let Req = {
	getData({url,data={},method='get'}){
		return new Promise((resolve,reject)=>{
			this._getRequest(url,data,method,resolve,reject)
		})
	},
	_getRequest(url,data={},method="get",resolve,reject){
		let format = method == 'get'?'params':'data';
		axios({
			url:url,
			method:method,
			[format]:data
		}).then(res=>{
			resolve(res)
		}).catch(()=>{
			reject()
		})
	}
}
export { Req }