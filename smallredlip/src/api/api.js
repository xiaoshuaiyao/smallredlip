import http from "@/utils/http.js";
<<<<<<< HEAD

export const getNowRedlip =()=>http("get","/api/data")
export const getNowVideo =()=>http("get","/api/video")
//https://napi.xiaohongchun.com/auto_index/editor_recommend/v2?rank=80&size=20
//https://napi.xiaohongchun.com/goods/tag/v2/1/goods?orderby=default_desc&rank=0&rt_type=
=======
export const getNowGoods = ()=>http("get","/api/goods")
export const getNowLists = ()=>http("get","/api/lists")
>>>>>>> long
