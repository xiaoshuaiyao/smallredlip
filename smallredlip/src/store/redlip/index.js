import {
    getNowRedlip
} from "@/api/api.js"
export default{
    state:{
        nowVideoList:[]
    },
    mutations: {
        getMutationNowRedlip(state,params){
                state.nowVideoList = params;
        }  
     },
    actions:{
      async getActionsNowRedlip({commit},params){
      let data = await getNowRedlip(params)
      console.log(data);
        commit('getMutationNowRedlip',data)
        }
    },
   
    namespaced: true
}