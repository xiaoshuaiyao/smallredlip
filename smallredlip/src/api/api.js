import http from "@/utils/http.js";
export const getNowGoods = ()=>http("get","/api/goods")
export const getNowLists = ()=>http("get","/api/lists")