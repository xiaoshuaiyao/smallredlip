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
            <div>
              <em>{{item.name}}</em>
            </div>
            <div>
              <p>{{item.comment}}</p>
            </div>
            <div>
              <em>{{item.time}}</em>
              <em>{{item.reply}}</em>
            </div>
          </div>
          <div class="center_liu"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Center",
  data() {
    return {
      comments: [
        {
          img: "https://static.xiaohongchun.com/people/3592780",
          name: "jessica",
          comment: "很棒",
          time: "7天前",
          reply: "回复"
        },
        {
          img: "https://static.xiaohongchun.com/people/3592780",
          name: "jessica",
          comment: "很棒",
          time: "7天前",
          reply: "回复"
        },
        {
          img: "https://static.xiaohongchun.com/people/3592780",
          name: "jessica",
          comment: "很棒",
          time: "7天前",
          reply: "回复"
        },
        {
          img: "https://static.xiaohongchun.com/people/3592780",
          name: "jessica",
          comment: "很棒",
          time: "7天前",
          reply: "回复"
        }
      ]
    };
  }
};
</script>


<style scoped lang="scss">
.center {
  width: 100%;
  height: 100%;
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
.center_comment{
  width: 100%
}
</style>
