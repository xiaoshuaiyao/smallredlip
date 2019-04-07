import {
    getNowtent
} from "@/api/api.js"
export default {
    state:{
        nowTentlist:[]
    },
    mutations:{
        getActionsNowTent(state,params){
            console.log(2323)
             state.nowTentlist = params;
        }
    },
    actions:{
        async getActionTent({commit},params){
            let data = await getNowtent(params);   //调用一下上面getNowpage的方法
            console.log(data);
            commit("getActionsNowTent",tent[0].data);
          
        }
    },
 
    namespaced:true
}