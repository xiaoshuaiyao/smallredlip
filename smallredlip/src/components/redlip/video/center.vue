<template>
  <div class="center">
    <div class="center_dis">
      <div>
        <img src="https://wicdn.xiaohongchun.com/xhc-plat/1484881150047_zJPxd6zQH4.png" alt>
      </div>
      <input type="text" name id value="点赞都是套路，评论才是真爱">
    </div>
    <div class="center_comment">
      <ul>
        <li v-for="item in comments">
          <div class="center_img">
            <img :src="item.img" alt>
          </div>
          <div class="center_center_dis">
            <div class="center1">
              <em>{{item.name}}</em>
            </div>
            <div class="center2">
              <p>{{item.comment}}</p>
            </div>
            <div class="center3">
              <em>{{item.time}}</em>
              <em>{{item.reply}}</em>
            </div>
          </div>
        </li>
      </ul>
    </div>
      <div class="dis_count">
            <p>查看全部{{count}}条评论</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "Center",
  data() {
    return {
        count:"65",
      comments: [
        {
          img: "https://i.xiaohongchun.com/261D7CA964ECAC05-avatars3x.jpg",
          name: "jessica",
          comment: "很棒",
          time: "7天前",
          reply: "回复"
        },
        {
          img: "https://i.xiaohongchun.com/261D7CA964ECAC05-avatars3x.jpg",
          name: "jessica",
          comment: "很棒",
          time: "7天前",
          reply: "回复"
        },
        {
          img: "https://i.xiaohongchun.com/261D7CA964ECAC05-avatars3x.jpg",
          name: "jessica",
          comment: "很棒",
          time: "7天前",
          reply: "回复"
        }
      ]
    };
  },
};
</script>


<style scoped lang="scss">
.center {
  width: 100%;
  height: 6.8rem;
}
.center_dis {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #fff;
  z-index: 100;
  padding: 0.3rem 0.3rem;
}
.center_dis > div > img {
  width: 0.68rem;
  height: 0.68rem;
  border-radius: 50%;
  margin-right: 0.3rem;
}
.center_dis > input {
  border: 0;
  height: 0.8rem;
  width: 6rem;
  line-height: 0.8rem;
  font-size: 0.26rem;
  padding-left: 0.3rem;
  margin: 0;
  border-radius: 0.4rem;
  background: #f2f2f2;
}
.center_comment {
  width: 100%;
}
.center_comment > ul > li {
  width: 100%;
  height: 1.6rem;
  margin-right: -0.3rem;
  border-top: 2px solid hsla(0, 0%, 88%, 0.7);
  padding: 0.2rem 0.3rem 0.2rem 0;
  display: flex;
  align-items: center;

  padding: 0 0.3rem;
}
.center_comment > ul > li > div > img {
  width: 0.68rem;
  height: 0.68rem;
  border-radius: 50%;
  display: block;
}
.center_center_dis {
  padding-left: 0.3rem;
  height: 1.6rem;
  width: 100%;
  margin: 0 .3rem;
}
.center1 {
  width: 100%;
  height: 0.6rem;
  em {
    color: gray;
    font-size: 0.24rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 0.6rem;
  }
}
.center2 {
  height: 0.5rem;
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  p {
    font-size: 0.26rem;
    line-height: 170%;
  }
}
.center3 > em {
  color: gray;
  font-size: 0.24rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dis_count{
  
   padding: .2rem 0;
   font-size: .26rem;
   border-top:2px solid hsla(0,0%,88%,.7);
   display: flex;
   align-items: center;
   justify-content: center;
   border-bottom:.15rem solid #e0e0e0;
   p{
     color: gray;
     cursor: pointer;
   }
}
</style>
