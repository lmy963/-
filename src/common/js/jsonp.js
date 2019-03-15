import Jsonp from "jsonp"

export default  function jsonp(url){

	return new Promise((resove,reject)=>{
		let opt = {
			param:''
		}
		Jsonp(url,opt,(err,data)=>{
			if(err){
				return reject(err)
			}else{
				return resove(data)
			}
		})
	})
}