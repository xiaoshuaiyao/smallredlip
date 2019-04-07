<template>
 <div>
   <div class="ino">
      <div class="ino-top">
        <img :src="imgs" alt="">
      </div>
      <div class="ino-bottom">
          <ul>
              <li>
                <i class="iconfont" v-html="tab"></i>
                <span>274</span>
              </li>

               <li>
                  <b>收纳</b>
                  <span class="btn">关注</span>
               </li>
               
              <li>
                <i class="iconfont" v-html="tab1"></i>
                <span>102</span>
              </li>
          </ul>
      </div>
  </div>


  <div class="inot" >
          <div class="into" v-for="item in goods">
            <div class="into-top">
              <img :src="item.imgs1" alt="">
               <a href=""></a>
            </div>
             <div class="inot-bottom">
               <h4>{{item.h4}}</h4>
               <p>{{item.p1}}</p>
                <a href="">
                   <div><img :src="item.imgs2" alt=""></div>
                    <span class="inot-in">{{item.span}}</span>
                    <em>{{item.em}}</em>
                </a>
               
             </div>
          </div>
  </div>
 </div>
  
</template>

<script>
export default {
  name: "Header",
   data() {
     return {
        imgs:"https://wicdn.xiaohongchun.com/icon/channle_default.jpg-big2x.jpg",
        
        
          tab:"&#xe604;",
          tab1:"&#xe605;",
          goods:[
                    {
                      imgs1:"https://wicdn.xiaohongchun.com/cover/DB54D47908A3D533.jpg-small3x.jpg",
                      imgs2:"https://wicdn.xiaohongchun.com/cover/C93C190E7AFC29AC.jpg-avatars2x.jpg",
                      h4:"元气满满的一天vlog",                  
                     p1:"逛街拍拖逛街拍拖，偷袭，收纳，元气满满的一天！  #收纳# #时尚# #日常#",                
                     span:"大碗哥哥",              
                    em:"7.8万",
                  },{
                    imgs1:"https://wicdn.xiaohongchun.com/cover/DB54D47908A3D533.jpg-small3x.jpg",
                      imgs2:"https://wicdn.xiaohongchun.com/cover/C93C190E7AFC29AC.jpg-avatars2x.jpg",
                      h4:"元气满满的一天vlog",                  
                     p1:"逛街拍拖逛街拍拖，偷袭，收纳，元气满满的一天！  #收纳# #时尚# #日常#",                
                     span:"大碗哥哥",              
                    em:"7.8万",
                  },{
                    imgs1:"https://wicdn.xiaohongchun.com/cover/DB54D47908A3D533.jpg-small3x.jpg",
                      imgs2:"https://wicdn.xiaohongchun.com/cover/C93C190E7AFC29AC.jpg-avatars2x.jpg",
                      h4:"元气满满的一天vlog",                  
                     p1:"逛街拍拖逛街拍拖，偷袭，收纳，元气满满的一天！  #收纳# #时尚# #日常#",                
                     span:"大碗哥哥",              
                    em:"7.8万",
                  },{
                    imgs1:"https://wicdn.xiaohongchun.com/cover/DB54D47908A3D533.jpg-small3x.jpg",
                      imgs2:"https://wicdn.xiaohongchun.com/cover/C93C190E7AFC29AC.jpg-avatars2x.jpg",
                      h4:"元气满满的一天vlog",                  
                     p1:"逛街拍拖逛街拍拖，偷袭，收纳，元气满满的一天！  #收纳# #时尚# #日常#",                
                     span:"大碗哥哥",              
                    em:"7.8万",
                  },{
                    imgs1:"https://wicdn.xiaohongchun.com/cover/DB54D47908A3D533.jpg-small3x.jpg",
                      imgs2:"https://wicdn.xiaohongchun.com/cover/C93C190E7AFC29AC.jpg-avatars2x.jpg",
                      h4:"元气满满的一天vlog",                  
                     p1:"逛街拍拖逛街拍拖，偷袭，收纳，元气满满的一天！  #收纳# #时尚# #日常#",                
                     span:"大碗哥哥",              
                    em:"7.8万",
                  },{
                    imgs1:"https://wicdn.xiaohongchun.com/cover/DB54D47908A3D533.jpg-small3x.jpg",
                      imgs2:"https://wicdn.xiaohongchun.com/cover/C93C190E7AFC29AC.jpg-avatars2x.jpg",
                      h4:"元气满满的一天vlog",                  
                     p1:"逛街拍拖逛街拍拖，偷袭，收纳，元气满满的一天！  #收纳# #时尚# #日常#",                
                     span:"大碗哥哥",              
                    em:"7.8万",
                  }
            ]
          
        }
   },
   
};
</script>


<style scoped lang="scss">
.ino {
  width: 100%;
  margin-top: 1rem;
  height: 300px;
  background: #fff;
  .ino-top {
    width: 7.5rem;
    height: 3rem;
  }
  .ino-bottom {
    width: 100%;
    height: 1.94rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    ul {
      display: flex;
      width: 100%;
      height: 1.94rem;
      align-items: center;
      justify-content: space-between;
      li {
        width: 1.54rem;
        height: 1rem;
        color: gray;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 0.5rem;
        text-align: center;
        i {
          font-size: 20px;
        }
        span {
          font-size: 15px;
        }
        b {
          font-size: 0.25rem;
          text-align: center;
          font-weight: 400;
          color: #222;
        }
      }
    }
  }
}

.ino-top img {
  width: 100%;
  height: 100%;
}
.btn {
  width: 1.3rem;
  height: 0.46rem;
  border: 1px solid fuchsia;
  border-radius: 10px;
  text-align: center;
  line-height: 0.46rem;
  color: fuchsia;
}

.inot {
  width: 100%;
  padding: 0.25rem 0.2rem 0;
  background: #333;
  display: flex;
  flex-wrap: wrap;
  .into {
    width: 3.4rem;
    height: 4.6rem;
    background: #fff;
    margin-bottom: .2rem;
    margin-left:0.15rem;
    .into-top {
      width: 3.48rem;
      height: 2.26rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      a {
        display: block;
        width: 0.46rem;
        height: 0.46rem;
        border: 1px solid #fff;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        right: 0.3rem;
        bottom: 0.12rem;
      }
    }
    .inot-bottom {
      width: 3.48rem;
      padding: 0 0.2rem;
      height: 2.4rem;
      z-index: 2;
      
      display: flex;
      flex-direction: column;
      h4 {
        font-size: 0.28rem;
        color: #000;
        cursor: pointer;
        margin: 0.1rem 0;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        height: 0.72rem;
        color: grey;
        font-size: 0.26rem;
        line-height: 1.5;
        width: 3rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 0.5em;
      }
      a {
        width: 3.08rem;
        height: 0.82rem;
        display: block;
        display: flex;
        border-top: 1px solid #eee;
        padding: 0.2rem 0 0.25rem;
        color: #828282;
        font-size: 0.24rem;
        margin-top: 0.2rem;
        div {
          width: 0.32rem;
          height: 0.32rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        em {
          color: #828282;
          font-size: 0.24rem;
          font-style: normal;
          padding-left: 0.33rem;
          margin-left: 0.05rem;
          float: right;
        }
        span {
          width: auto;
          line-height: 0.32rem;
          max-width: 1.5rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
