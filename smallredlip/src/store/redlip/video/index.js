import {
    getNowVideo
} from "@/api/api.js"
export default{
    state:{
        nowVideoList:[]
    },
    mutations: {
        getMutationNowVideo(state,params){
                state.nowVideoList = params;
        }  
     },
    actions:{
      async getActionVideo({commit},params){
      let data = await getNowVideo(params)
      console.log(data);
        commit('getMutationNowVideo',data)
        }
    },   
    namespaced: true
}