<template>
  <div class="concent">
    <div class="concent_title">
      <p>{{til}}</p>
    </div>
    <div class="concent_label">
      <router-link v-for="item in goods" to="/search/message">{{item}}</router-link>
    </div>
    <div class="record" v-for="item in records">
            <div class="record_time"><span>{{item.time}}</span></div>
            <div class="record_good"><p>{{item.good}}</p></div>
            <div class="record_del"><span>{{item.del}}</span></div>
    </div>
    <div class="history">
            <p>清除历史记录</p>
    </div>
     
  </div>
</template>

<script>
export default {
  name: "concent",
  data() {
    return {
      til: "唇蜜们都在搜",
      goods: [
        "眉笔",
        "防嗮",
        "阿玛尼",
        "眼影",
        "素颜霜",
        "眼线笔",
        "科曼",
        "防嗮喷雾",
        "化妆",
        "面膜",
        "防嗮霜",
        "口红",
        "悦肤之研"
      ],
      records:[
          {
              time:"",
              good:"眉笔",
              del:""
          },
          {
              time:"",
              good:"阿玛尼",
              del:""
          },
          {
              time:"",
              good:"化妆",
              del:""
          }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.concent {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-top: 0.9rem;
  width: 100%;
  height: 100%;
 
}
.concent_title {
  position: relative;
  color: #636262;
  padding-top: 0.36rem;
  margin: 0.3rem 0;
  font-size: 0.26rem;
}
.concent_label {
  width: 100%;
  height: 1rem;
  margin-bottom: .3rem;
}
.concent_label > a {
  display: block;
  float: left;
  padding: 0.05rem 0.2rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin: 0 0.2rem 0.2rem 0;
  font-size: 0.26rem;
}
.active {
  display: block;
  float: left;
  padding: 0.05rem 0.2rem;
  border-radius: 0.5rem;
  border: 2px solid #ff3657;
  margin: 0 0.2rem 0.2rem 0;
  font-size: 0.26rem;
  color: #ff3657;
}
.record{
    height: 1rem;
    overflow: hidden;
    width: 100%;
    padding: .3rem 0 .3rem .65rem ;
    border-top: 2px solid #efefef;
    display: flex;
    .record_time{
        width: .34rem;
       height: .34rem;
    }
    .record_good{
        width: 5rem;
        height: .6rem;
    }
    .record_good>p{
        font-size: .32rem;
        color: #222;
    }
}
.history{
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
     p{
  color: #ff3657;
    font-size: .32rem;
    
     }
  
}
</style>