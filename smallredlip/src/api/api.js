import http from "@/utils/http.js";

export const getNowpage = ()=>http("get","/api/json-server/page")
export const getNowtent = ()=>http("get","/api/json-server/tent")
//https://napi.xiaohongchun.com/auto_index/editor_recommend/v2?rank=80&size=20
//https://napi.xiaohongchun.com/goods/tag/v2/1/goods?orderby=default_desc&rank=0&rt_type=
//https://napi.xiaohongchun.com/goods/detail/recommended?gid=16637