import Vue from 'vue'
import Vuex from 'vuex'
import redlip from "./redlip"
import page from "./shopping/page"
import message from "./search/message"
Vue.use(Vuex)

export default new Vuex.Store({

  modules:{
   redlip,
   page,
   message
  }
})
