import Vue from 'vue'
import Router from 'vue-router'
import redlip from './redlip'
import shopping from './shopping'
import search from './search'
import video from './redlip/video'
<<<<<<< HEAD
import work from './redlip/work'
<<<<<<< HEAD
=======

>>>>>>> long
=======
import moon from './redlip/moon'
import page from './shopping/page'
import message from './search/message'
import cont from './search/message/cont'
>>>>>>> yuan
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/redlip'
    }, 
    redlip,
    shopping,
    search,
    video,
<<<<<<< HEAD
<<<<<<< HEAD
    work
=======
	
>>>>>>> long
=======
    work,
    moon,
    page,
    message,
    cont
>>>>>>> yuan
  ]
})
