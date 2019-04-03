import {
    getNowRedlip
} from "@/api/api.js"
export default{
    state:{

    },
    actions:{
      async getActionsNowRedlip(){
           let data = await getNowRedlip();
           console.log(data)
        }
    },
    mutations: {
        
    },
    namespaced: true
}