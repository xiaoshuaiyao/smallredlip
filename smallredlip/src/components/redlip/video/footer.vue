<template>
  <div class="footer">
    <div class="footer_love">
      <p>{{love}}</p>
    </div>
    <div class="footer_video">
      <ul>
        <li v-for="item in loves">
          <div class="love">
            <div class="love_top">
             <img :src="item.image" alt="">
              <p>{{item.titles}}</p>
              <div class="love_discuss">
                 <em>{{item.discuss}}</em>
              </div>            
            </div>
            <div class="love_bottom">
                <div class="love_supper"><img :src="item.imgs" alt=""><a href="">{{item.names}}</a></div>
                <div class="love_see"><span>{{item.see}}</span></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      love: "猜你喜欢",
      loves: [{
          image:"https://wicdn.xiaohongchun.com/cover/32A560B11493EA1A.jpg-small3x.jpg",
          titles:"早餐嘎嘣脆，快乐每一天",
          discuss:"脆骨乐除了牛奶泡着吃你还能怎么吃？我是坐成了法华寺是的的是的",
          imgs:"https://wicdn.xiaohongchun.com/cover/2ECB1EE4EF8CED71.jpg-avatars3x.jpg",
          names:"大腕哥哥",
          see:"7.9万"
          },{
             image:"https://wicdn.xiaohongchun.com/cover/32A560B11493EA1A.jpg-small3x.jpg",
          titles:"早餐嘎嘣脆，快乐每一天",
          discuss:"脆骨乐除了牛奶泡着吃你还能怎么吃？我是坐成了法华寺是的的是的",
          imgs:"https://wicdn.xiaohongchun.com/cover/2ECB1EE4EF8CED71.jpg-avatars3x.jpg",
          names:"大腕哥哥",
          see:"7.9万"
          },{
             image:"https://wicdn.xiaohongchun.com/cover/32A560B11493EA1A.jpg-small3x.jpg",
          titles:"早餐嘎嘣脆，快乐每一天",
          discuss:"脆骨乐除了牛奶泡着吃你还能怎么吃？我是坐成了法华寺是的的是的",
          imgs:"https://wicdn.xiaohongchun.com/cover/2ECB1EE4EF8CED71.jpg-avatars3x.jpg",
          names:"大腕哥哥",
          see:"7.9万"
          },{
             image:"https://wicdn.xiaohongchun.com/cover/32A560B11493EA1A.jpg-small3x.jpg",
          titles:"早餐嘎嘣脆，快乐每一天",
          discuss:"脆骨乐除了牛奶泡着吃你还能怎么吃？我是坐成了法华寺是的的是的",
          imgs:"https://wicdn.xiaohongchun.com/cover/2ECB1EE4EF8CED71.jpg-avatars3x.jpg",
          names:"大腕哥哥",
          see:"7.9万"
          },{
             image:"https://wicdn.xiaohongchun.com/cover/32A560B11493EA1A.jpg-small3x.jpg",
          titles:"早餐嘎嘣脆，快乐每一天",
          discuss:"脆骨乐除了牛奶泡着吃你还能怎么吃？我是坐成了法华寺是的的是的",
          imgs:"https://wicdn.xiaohongchun.com/cover/2ECB1EE4EF8CED71.jpg-avatars3x.jpg",
          names:"大腕哥哥",
          see:"7.9万"
          }
      ]
    };
  }
};
</script>


<style scoped lang="scss">
.footer {
  margin-top: 0.4rem;
  width: 100%;
  height: 100%;
}
.footer_love {
  padding: 0.2rem 0;
  margin: 0 0.3rem;
  height: 0.8rem;
  border-bottom: 2px solid hsla(0, 0%, 88%, 0.7);
  p {
    font-size: 0.28rem;
  }
}
.footer_video {
  width: 100%;
  height: 100%;
  margin: 0 0.3rem;
}
.footer_video > ul > li {
    width: 3.3rem;
    margin-bottom: .3rem;
    border: 2px solid hsla(0,0%,88%,.7);  
    float: left;
    margin-right:.2rem;
}
.love{
    width:3.3rem;
   height: 4.31rem;
}
.love_top{
  width: 3.3rem;
  height:3.6rem; 
}
.love_top>img{
    width: 3.3rem;
    height: 2.1rem;
}
.love_top>p{
    width: 90%;
    height:.65rem ;
    margin: auto;
    font-size: .28rem;
    color: #222;
    padding: .3rem 0 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}
.love_discuss{
     
      margin: .1rem .2rem;
      border-bottom: 2px solid hsla(0,0%,88%,.7);
      font-family: PingFang SC,Microsoft YaHei;
      width: 90%;
       height: .64rem;
      overflow: hidden;
      em{
    color: gray;
    font-size: .24rem;
}   
}
.love_bottom{
      width: 90%;
      margin: .23rem auto;
      font-size: .22rem;
      display: flex;
      justify-content: space-between;
}
.love_supper{
  justify-content: space-between;
    align-items: center;
    display: flex;
      img{
        width: .32rem;
        height: .32rem;
        border-radius: 50%;
      }
      a{
        display: inline-block;
        line-height: .32rem;
        color: #828282;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
}
.love_see>span{
    display: block;
    line-height: .32rem;
    color: #828282;
    font-size: .22rem;
}
</style>
