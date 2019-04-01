<template>
  <div class="header">
    <router-link tag="div" class="header_left" to="/redlip" :name="1">
      <img :src="img">
    </router-link>
    <router-link class="header_center" to="/search" tag="div" :name="2">
      <a href>{{val}}</a>
    </router-link>
    <router-link class="header_right" tag="div" to="/shopping" :name="3">
      <a href>{{shop}}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      img:
        "https://wicdn.xiaohongchun.com/xhc-plat/1481701402617_XFWMrRySem.png",
      val: "秋冬润唇膏大全",
      shop: "商城"
    };
  }
};
</script>


<style scoped lang="scss">
.header {
  width: 100%;
  height: 0.896rem;
  padding: 0.3rem;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: #fff;
  display: flex;
  border-bottom: 1px solid #efefef;
  align-items: center;
}
.header_left {
  width: 1.37rem;
  height: 0.896rem;
}
.header_left > img {
  margin-top: 0.3rem;
  width: 1.37rem;
  height: 0.3rem;
}
.header_center {
  width: 3.24rem;
  height: 0.54rem;
  background: #f5f5f5;
  margin-left: 0.76rem;
  border-radius: 0.3rem;
  font-size: 0.24rem;
}
.header_center > a {
  color: gray;
  line-height: 0.53712rem;
  margin-left: 0.7rem;
}
.header_right {
  width: 1.35rem;
  height: 0.896rem;
  display: flex;
  align-items: center;
}
.header_right > a {
  color: #ff3167;
  line-height: 0.54rem;
  margin-left: 0.7rem;
  font-size: 0.26rem;
}
</style>
