import Vue from 'vue'
import Vuex from 'vuex'
import redlip from "./redlip"
<<<<<<< HEAD
import video from "./redlip/video"

=======
import page from "./shopping/page"
import message from "./search/message"
>>>>>>> yuan
Vue.use(Vuex)

export default new Vuex.Store({

  modules:{
   redlip,
<<<<<<< HEAD
   video
=======
   page,
   message
>>>>>>> yuan
  }
})
