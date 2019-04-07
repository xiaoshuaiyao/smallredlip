<template>
  <div class="concent">
    <!-- <div class="concent_text" v-for="item in nowRedlipList"> -->
      <div class="concent_text" v-for="(item,index) in videoList">
      <div class="concent_top">
        <router-link class="concent_top_left" tag="div" to="/redlip/work">
          <img :src="item.video.user.avatar" alt>
        </router-link>
        <div class="concent_top_center">
          <a href>{{item.video.user.nick}}</a>
        </div>
        <div class="concent_top_right">
          <b>+关注</b>
        </div>
      </div>
      <router-link class="concent_mid" to="/redlip/video" tag="div">
        <img :src="item.video.cover_url" alt>
      </router-link>
<<<<<<< HEAD
      <router-link class="concent_btm" to="/redlip/video" tag="div">
        <p>{{item.video.dcrp}}</p>
=======
      <router-link class="concent_btm" :to="item.to" tag="div">
        <p>{{item.title}}<router-link tag="span" :to="item.paths">{{item.aite}}</router-link></p>
>>>>>>> yuan
      </router-link>
      <router-link class="concent_bottom" to="/redlip/video" tag="div" >
        <span><img  class="c66" src="https://wicdn.xiaohongchun.com/xhc-plat/1493795946871_PRt5K6mCmx.png" alt="">{{item.video.comment_count}}</span>
        <span><img class="c67" src="https://wicdn.xiaohongchun.com/xhc-plat/1493795728987_nTwKbS2pRZ.png" alt="">{{item.video.collection_count}}</span>
        <span><img class="c67" src="https://wicdn.xiaohongchun.com/xhc-plat/1493795728983_mPQBKhTJBS.png" alt=""> 收藏</span>
      </router-link>
    </div>
  </div>
  
</template>

<script>
import Vuex from "vuex"

export default {
  name: "Concent",
   computed: {
    ...Vuex.mapState({
      videoList:state=>state.redlip.nowVideoList
    })
  },
  data() {
    return {
<<<<<<< HEAD
      // concents:[
      //   {
      //     img:
      //       "https://wicdn.xiaohongchun.com/cover/BFD50E8D9216B911.jpg-avatars3x.jpg",
      //     name: "路遥",
      //     watch: "+关注",
      //     video:
      //       "https://wicdn.xiaohongchun.com/cover/9D4DD1BA22E35ECE.jpg-big2x.jpg",
      //     title: "一根皮筋，瘦锁骨！",
      //     aite:"#国货#",
      //     zan: "31",
      //     say: "1",
      //     collect: "收藏",
      //     to:"/redlip/video"
      //   },
      //   {
      //      img:
      //       "https://wicdn.xiaohongchun.com/cover/2ECB1EE4EF8CED71.jpg-avatars3x.jpg",
      //     name: "Kathikds",
      //     watch: "+关注",
      //     video:
      //       "https://wicdn.xiaohongchun.com/cover/A252346DCBF0AC33.jpg-big2x.jpg",
      //     title: "叮～春夏口红试色分享来学生党也能轻松拥有！希望大家喜欢啦～   ",
      //     aite:"#国货#",
      //     zan: "31",
      //     say: "1",
      //     collect: "收藏",
      //     to:"/redlip/video"
      //   },
      //   {
      //      img:
      //       "https://wicdn.xiaohongchun.com/cover/BFD50E8D9216B911.jpg-avatars3x.jpg",
      //     name: "路遥",
      //     watch: "+关注",
      //     video:
      //       "https://wicdn.xiaohongchun.com/cover/9D4DD1BA22E35ECE.jpg-big2x.jpg",
      //     title: "一根皮筋，瘦锁骨！",
      //      aite:"#国货#",
      //     zan: "31",
      //     say: "1",
      //     collect: "收藏",
      //     to:"/redlip/video"
      //   }
      // ]
=======
      concents: [
        {
          img:
            "https://wicdn.xiaohongchun.com/cover/BFD50E8D9216B911.jpg-avatars3x.jpg",
          name: "路遥",
          watch: "+关注",
          video:
            "https://wicdn.xiaohongchun.com/cover/9D4DD1BA22E35ECE.jpg-big2x.jpg",
          title: "一根皮筋，瘦锁骨！",
          aite:"#国货#",
          zan: "31",
          say: "1",
          collect: "收藏",
          to:"/redlip/video",
          paths:"/redlip/moon"
        },
        {
           img:
            "https://wicdn.xiaohongchun.com/cover/2ECB1EE4EF8CED71.jpg-avatars3x.jpg",
          name: "Kathikds",
          watch: "+关注",
          video:
            "https://wicdn.xiaohongchun.com/cover/A252346DCBF0AC33.jpg-big2x.jpg",
          title: "叮～春夏口红试色分享来学生党也能轻松拥有！希望大家喜欢啦～   ",
          aite:"#国货#",
          zan: "31",
          say: "1",
          collect: "收藏",
          to:"/redlip/video",
          paths:"/redlip/moon"
        },
        {
           img:
            "https://wicdn.xiaohongchun.com/cover/BFD50E8D9216B911.jpg-avatars3x.jpg",
          name: "路遥",
          watch: "+关注",
          video:
            "https://wicdn.xiaohongchun.com/cover/9D4DD1BA22E35ECE.jpg-big2x.jpg",
          title: "一根皮筋，瘦锁骨！",
           aite:"#国货#",
          zan: "31",
          say: "1",
          collect: "收藏",
          to:"/redlip/video",
          paths:"/redlip/moon"
        }
      ]
>>>>>>> yuan
    };
  }
};
</script>


<style scoped lang="scss">
.concent{
  position: absolute;
  top: .896rem;
  width: 100%;
  height: 100%;
  overflow:scroll;
}
.concent_text{
  position: relative;
  padding: 0 0.3rem;
  width: 7.5rem;
  height: 8.5rem;
  border-bottom: 0.2rem solid #efefef;
}
.concent_top {
  width: 6.9rem;
  height: 1.35rem;
  display: flex;
  align-items: center;
}
.concent_top_left > img {
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  margin-right: 0.3rem;
}
.concent_top_center {
  width: 4.3rem;
  height: .384rem;
}
.concent_top_center > a {
  font-size: 0.28rem;
  width: 4.2992rem;
  display: block;
  color: #191919;
  white-space: nowrap;
}
.concent_top_right {
  width: 1.3rem;
  height: 0.46rem;
  background: rgb(249, 41, 90);
  border-radius: 0.2rem;
  text-align: center;
}
.active{
   width: 1.3rem;
  height: 0.46rem;
  background: rgb(249, 41, 90);
  border-radius: 0.2rem;
  text-align: center;
}
.concent_top_right > b {
  line-height: 0.46rem;
  color: #f8f8f8;
  font-size: 0.24rem;
  font-weight: 400;
}
.concent_mid {
  width: 6.9rem;
  height: 4.4186rem;
}
.concent_mid > img {
  width: 100%;
  height: 100%;
}
.concent_btm {
  width: 6.9rem;
  height: 0.4rem;
  margin-top: 0.28rem;
  margin-bottom: 0.28rem;
}
.concent_btm > p {
  font-size: 0.28rem;
  line-height: .4rem;
  color: #010101;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
  height: 1.2rem;
}
.concent_bottom {

  position: absolute;
  left:0; 
  bottom: 0;
  width: 7.5rem;
  height:0.82rem;
  border-top: 1px solid #ebe9e9;
  display: flex;
  align-items: center;
}
.concent_bottom > span {
  padding-left: 0;
  display: inline-block;
  width: 2.5rem;
  height: 0.384rem;
  border-right: 1px solid #ebe9e9;
  vertical-align: middle;
  color: #999;
  font-size: 0.28rem;
  text-align: center;
  img{
    font-size: .32rem;
    display: inline-block;
    margin-right: .2rem;
  }
}
</style>
