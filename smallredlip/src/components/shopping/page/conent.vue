<template>
 <div class="page">
     <div class="Pic">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in imgs">
            <img :src="item">   
          </div>
       </div>
      </div>
     <div class="price">
            <div class="price-top">
              <span>限时价</span>
              <em>￥149</em>
            </div>
            <div class="price-bottom">
              <span>距结束</span>
              <span class="count-down">
                    <em>
                           <i>3</i>
                           <b>天</b>
                    </em>
                    <em>
                           <i>20</i>
                           <b>小时</b>
                    </em>
                    <em>
                           <i>45</i>
                           <b>分钟</b>
                    </em>
                    <em>
                           <i>48</i>
                           <b>秒</b>
                    </em>
                     
              </span>
            </div>
     </div>

     <div class="commodity">卸妆洁面两手抓</div>
      <div class="facial-cleanser">ELTA MD 氨基酸泡沫洁面乳 207ml</div>
      <div class="member">开通会员此商品立返¥3.73</div>
      <div class="after-sale">
        <div class="sale">
            <span>满88包邮<i></i></span>
            <span>唯妮保税仓<i></i></span>
            <span>商品包税<i></i></span>
            <span>7天无忧退货<i></i></span>
            <span>正品保证<i></i></span>
            <span>双倍唇印积分<i></i></span>
        </div>
     
      </div>
      <div class="ensure"><a href=""><img :src="activity"></a></div>
      <div class="evaluate">
             <p>商品综合评分</p>
             <div class="star">
               <div class="stars">
                 <div class="stars-left">
                   <span class="iconfont" v-html="tab1"></span>
                   <span class="iconfont" v-html="tab1"></span>
                   <span class="iconfont" v-html="tab1"></span>
                   <span class="iconfont" v-html="tab1"></span>
                   <span class="iconfont" v-html="tab1"></span>
                 </div>
                 <div class="stars-right">
                     <span>99.7% 好评</span>
                 </div>
               </div>
               <div class="more">
                   <h4>更多评价</h4>
                    <span>></span>
               </div>
             </div>
      </div>
 </div>
</template>

<script>
import information from "./information.vue"
	import Swiper from 'swiper';
	import '../../../../node_modules/swiper/dist/css/swiper.min.css'
export default {
  name: "Page",
   data() {
     return {
          tab1:"&#xe604;",
          imgs:[
                  
                  "https://wicdn.xiaohongchun.com/goodsmark/1550568069419_5deRh4fCRn.jpg-big2x.jpg",
                  "https://wicdn.xiaohongchun.com/goodsmark/1550568069434_BXABNdxyiw.jpg-big2x.jpg",
                  "https://wicdn.xiaohongchun.com/goodsmark/1550568069432_n4tk7KYAJz.jpg-big2x.jpg",
                  "https://wicdn.xiaohongchun.com/xhc-plat/1541570878772_B6sbwi5YmE.jpg-big2x.jpg",
                  "https://wicdn.xiaohongchun.com/xhc-plat/1536719294432_4kGtWmtwaA.jpg-big2x.jpg",
                  "https://wicdn.xiaohongchun.com/xhc-plat/1536719294431_WKRdjPSakM.jpg-big2x.jpg",
                  "https://wicdn.xiaohongchun.com/xhc-plat/1536719294431_3zwrB42bfP.jpg-big2x.jpg",
                  "https://wicdn.xiaohongchun.com/xhc-plat/1536719294431_fBT4FShyhB.jpg-big2x.jpg",
                  "https://wicdn.xiaohongchun.com/xhc-plat/1536719294431_rrMSATBN3j.png-big2x.jpg",
                  "https://wicdn.xiaohongchun.com/xhc-plat/1536719294430_Es7aHmmJSX.jpg-big2x.jpg"       
             ],
             activity:"https://wicdn.xiaohongchun.com/xhc-plat/1544782298089_irB35EJzDB.jpg"

       }
   },
   mounted(){
			var mySwiper = new Swiper(".Pic", {
				autoplay: true,
        loop: true,
        pagination: '.swiper-pagination',
				autoplay:{
					disableOnInteraction: false,
        },
        
			})
		
   }
};
</script>


<style scoped lang="scss">

  .Pic{
      width:100%;
      height:8.2rem;
      overflow: hidden;
         img{
           width:100%;
         }
  }
 
  .price{
    width:100%;
    height:1.72rem;
    
    display: flex;
    flex-direction: column;
    padding: .3rem .3rem 0;
    .price-top{
       width:100%;
       height:0.56rem;
       
       margin-bottom: .2rem;
       display: flex;
       align-items: center;
       span{
          color: #fff;
          font-size: .2rem;
          line-height: .2rem;
          font-weight: 700;
          padding: .08rem .1rem;
          border-radius: 3px;
          white-space: nowrap;
          background: linear-gradient(270deg,#fa4365,#ff6e8d);
          box-shadow: 0 2px 8px 0 rgba(253,69,106,.31);
          margin-right: .1rem;
       }
       em{
             font-weight: bold;
             font-style: normal;
             line-height: .5rem;
             font-size: .4rem;
             color: #ff3167;
             margin-right: .25em;
       }
    }
    .price-bottom{
      width:100%;
      height:0.6rem;
      width: 5.5rem;
      padding: .1rem .2rem;
      background: linear-gradient(90deg,#ffe5df,#fdcac7);
      border-radius: 5px;
      display:flex;
      align-items: center;
       span{
             font-size: .28rem;
             margin-right: .1rem;
             white-space: nowrap; 
             display: flex; 
       }
       .count-down{
            width:3.54rem;
            height:0.4rem;
             
            em{
              display: flex;
              width:0.8rem;
              height:0.4rem;
              
              i{
                border-radius: 2px;
                background-color: #000;
                color: #fff;
                display: block;
                font-size: .24rem;
                width: .36rem;
                height: 100%;
                font-style: normal;
                text-align: center;
                line-height: .36rem;
              }
              b{
                  display: block;
                  font-size: .24rem;
                  width: .36rem;
                  height: 100%;
                  font-weight: 400;
                  line-height: .36rem;
                  font-style: normal;
                  text-align: center;
                  color: #222;
              }
            }
       }
    }
  }

  .commodity{
        margin: .1rem .3rem 0;
        font-size: .3rem;
        font-weight: 700;
        word-break: break-all;
        color: #191919;
        line-height: .55rem;
  }
  .facial-cleanser{
    padding: 0 .3rem;
    font-size: .28rem;
    color: #4c4c4c;
    line-height: .55rem;
  }
  .member{
     position: relative;
    display: block;
    box-sizing: border-box;
    width: 6.9rem;
    height: 1.08rem;
    line-height: 1.08rem;
    margin: .1rem auto 0;
    padding-left: 1.1rem;
    font-size: .26rem;
    font-weight: 600;
    color: #cb7841;
    background-size: 100%;
    background-image: url(https://wicdn.xiaohongchun.com/xhc-plat/1545882996729_FanNcfcwHN.png)
  }
  .after-sale{
      margin-top: .2rem;
      border-top: 1px solid #f5f5f5;
      font-size: .32rem;
      color: #222;
      .sale{
            position: relative;
            padding: .3rem;
            font-size: .24rem;
            display: flex;
            flex-wrap: wrap;
            color: #222;
             span{
               position: relative;
                display: block;
                line-height: 1.7;
                margin-right: .3rem;
                padding-left: .2rem;
                color: gray;
                i{
                  position: absolute;
                   
                  left: 0;
                  top: 50%;
                  margin-top: -2px;
                  display: block;
                  width: 4px;
                  height: 4px;
                  background-color: #ff9da7;
                  border-radius: 4px;
                }
             }
      }
  }
  .ensure{
         width:100%;
         height: 1.24rem;
         background:pink;
         position: absolute;
         a{
           width:100%;
           height: 1.24rem;
           display: block;
           img{
             width:100%;
             height: 1.24rem;
           }
         }
  }
  .evaluate{
        width:100%;
        padding: .3rem;
        border-top: 1px solid #f5f5f5;
        position: absolute;
        p{
            color: #191919;
            font-weight: 600;
            font-size: .28rem;
        }
        .star{
          width:100%;
          height:0.5rem;
          display: flex;
          font-size: .26rem;
          line-height: .48rem;
          justify-content: space-between;
          
          .stars{
            width:3.8rem;
            height:0.52rem;
           
            display: flex;
            .stars-left{
                width:2.36rem;
                height:0.52rem;
               
            }
            .stars-right{
                width:1.4rem;
                height:0.52rem;
                span{
                      font-weight: 300;
                      color: gray;
                }
            }
          }
          .more{
                width:1.44rem;
                height:0.5rem;
                
                display: flex;
                justify-content: space-between;
                position: relative;
                font-size: .24rem;
                padding-right: .25rem;
                font-weight: 600;
                color: #4c4c4c;
          }
        }
  }
</style>
