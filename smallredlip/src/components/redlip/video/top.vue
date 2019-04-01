<template>
  <div class="top">
    <div class="top_video">
      <video
        src="https://wvcdn.xiaohongchun.com/mp4/1552662743900_izH5pSbesR.mp4"
        controls="controls"
      ></video>
    </div>
    <div class="discuss">
      <div class="discuss_top">
        <div class="discuss_top_img">
          <img :src="img" alt>
        </div>
        <div class="discuss_top_a">
          <a href>{{name}}</a>
        </div>
        <div class="discuss_top_love">
          <a href>+关注</a>
        </div>
      </div>
      <div class="discuss_center">
        <div class="one">
          <p>{{discussone}}</p>
        </div>
        <div class="two">
          <p>
            {{discusstwo}}
            <a href>{{time}}</a>
          </p>
        </div>
        <div class="three">
          <p>
            <a href>{{aite}}</a>
            {{discussthress}}
          </p>
        </div>
      </div>
    </div>
    <div class="discuss_bottom">
         <span></span>
         <span></span>
         <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      img:
        "https://wicdn.xiaohongchun.com/cover/540C86DFF63EF3E9.jpg-avatars3x.jpg",
      name: "罐头食品",
      discussone: "3分钟就能学会韩国国民小吃----辣白菜炒年糕",
      discusstwo: "2019.03.15",
      time: "8.3万次播放",
      aite: "#罐头小厨#",
      discussthress: "戴军带你解锁辣白菜+年糕的经典吃法!"
    };
  }
};
</script>


<style scoped lang="scss">
.top {
  margin-top: 0.9rem;
  height: 100%;
}
.top_video {
  width: 100%;
  height: 7.5rem;
  background: black;
}
.top_video > video {
  width: 100%;
  height: 7.5rem;
}
.discuss {
  padding: 0 0.3rem;
  background: #fff;
}
.discuss_top {
  width: 100%;
  height: 1.4rem;
  font-family: PingFang SC, Microsoft YaHei;
  border-bottom: 2px solid hsla(0, 0%, 88%, 0.7);
  display: flex;
  align-items: center;
}
.discuss_top_img > img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}
.discuss_top_a {
  width: 4.8rem;
  height: 1.4rem;
  line-height: 1.4rem;
  color: #222;
  font-size: 0.28rem;
  padding-left: 0.3rem;
}
.discuss_top_love > a {
  display: block;
  width: 1.3rem;
  height: 0.46rem;
  background: #ff3167;
  border-radius: 0.46rem;
  text-align: center;
  line-height: 0.46rem;
  color: #fff;
}
.discuss_center {
  padding-top: 0.3rem;
}
.one {
  padding-bottom: 0.2rem;
  box-sizing: content-box;

  width: 100%;
}
.one > p {
  font-size: 0.3rem;
  line-height: 0.5rem;
  color: #222;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.two {
  padding-bottom: 0.2rem;
  box-sizing: content-box;
}
.two > p {
  font-size: 0.24rem;
  color: #bcbcbc;
}
.two > p > a {
  display: inline-block;
  padding-left: 0.4rem;
  font-size: 0.24rem;
  color: #bcbcbc;
}
.three {
  padding-bottom: 0.2rem;
  box-sizing: content-box;
}
.three > p > a {
  display: inline-block;
  font-size: 0.26rem;
  color: #ff3167;
  padding-right: 0.2rem;
}
.discuss_bottom{
    width: 100%;
    height: .8rem;
    background: blue;
}
</style>
