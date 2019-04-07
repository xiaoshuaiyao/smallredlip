import {
    getNowpage
} from "@/api/api.js"
export default {
    state:{
        nowDatelist:[]
    },
    mutations:{
        getActionsNowPage(state,params){
             state.nowDatelist = params;
        }
    },
    actions:{
        async getActionPage({commit},params){
            let data = await getNowpage(params);   //调用一下上面getNowpage的方法
            
            commit("getActionsNowPage",data[0].data);
          
        }
    },
 
    namespaced:true
}