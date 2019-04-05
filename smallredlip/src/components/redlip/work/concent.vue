<template>
  <div class="connect">
    <div class="connect_tab">
      <div class="connect_tab_left">
        <em>{{count}}</em>
        <span>
          {{
          release}}
        </span>
      </div>
      <div>
        <span class="iconfont" v-html="tab1" v-if="!flag" @click="handle($event)"></span>
        <span class="iconfont" v-html="tab" v-if="flag" @click="handle($event)"></span>
      </div>
    </div>
    <div class="connection">
      <div class="con" v-for="item in works">
        <p>{{item.p}}</p>
        <ul class="con_img" v-for="abb in item.img">
          <img :src="abb" alt>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  created() {
    return {};
  },
  data() {
    return {
      count: "269",
      release: "发布",
      tab: "&#xe604;",
      tab1: "&#xe605;",
      flag: true,

      works: [
        {
          p: "2019/04",
          img: [
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg"
          ]
        },
        {
          p: "2019/03",
          img: [
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
          ]
        },
        {
          p: "2019/02",
          img: [
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg"
          ]
        },
        {
          p: "2019/01",
          img: [
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg",
            "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7dac85b2825494ee982209191df4e0e1/c2cec3fdfc03924558fae5028994a4c27d1e256b.jpg"
          ]
        }    
      ]
    };
  },

  methods: {
    handle() {
      this.flag = !this.flag;
    }
  }
};
</script>


<style scoped lang="scss">
.connect_tab {
  margin-top: 0.5rem;
  border-top: 2px solid #efefef;
  height: 0.86rem;
  padding: 0 0.3rem;
  border-bottom: 0.2rem solid #f5f5f5;
  font-size: 0.28rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.connect_tab_left > em {
  color: #ff3167;
  margin-right: 0.3rem;
  font-size: 0.28rem;
}
.connect_tab_left > span {
  font-size: 0.28rem;
}
.con {
  padding-top: 0.4rem;
  width: 7.5rem;
  background: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.con > p {
  width: 100%;
  font-size: 0.32rem;
  margin-bottom: 0.1rem;
  color: gray;
}
.con_img {
  display: flex;
  width: 2.2rem;
  height: 2.2rem;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  margin-right: 0.1rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>







