import http from "@/utils/http.js";

export const getNowRedlip =()=>http("get","/api/data")
//https://napi.xiaohongchun.com/auto_index/editor_recommend/v2?rank=80&size=20
//https://napi.xiaohongchun.com/goods/tag/v2/1/goods?orderby=default_desc&rank=0&rt_type=