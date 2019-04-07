import Vue from 'vue'
import Vuex from 'vuex'
import redlip from "./redlip"
import video from "./redlip/video"

Vue.use(Vuex)

export default new Vuex.Store({

  modules:{
   redlip,
   video
  }
})
