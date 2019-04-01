import Vue from 'vue'
import Router from 'vue-router'
import redlip from './redlip'
import shopping from './shopping'
import search from './search'
import video from './redlip/video'
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
    video
  ]
})
