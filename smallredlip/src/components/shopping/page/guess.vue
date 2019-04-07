<template>
	<div class="guess ">
             <div class="like">
                 <p>猜你喜欢</p>
                 <ol>
                     <li v-for="(item,index) in pagelist">
                         <div><img :src="item.g_image" alt=""></div>
                         <span>{{item.g_title}}</span>
                         <span class="capacity">{{item.g_name}}</span>
                         <span class="price">
                             <em class="present-price">{{item.g_price_shop}}</em>
                             <del class="original-price">{{item.g_price_market}}</del>
                         </span>
                     </li>
                 </ol>
             </div>

             <div class="shopping-cart ">
                 <div class="cart-left">
                       <ul>
                           <li v-for="(item,index) in goods">
                               <i class="iconfont" v-html="item.tab"></i>
                               <em>{{item.text}}</em>
                           </li>
                       </ul>
                 </div>
                 <div class="cart-right">
                     <button class="cartl">加入购物车</button>
                     <button class="cartr">立即购买</button>
                 </div>
             </div>
	</div>

</template>

<script>
import Vuex from "vuex";
	export default {
        name: "guess",
        data(){
            
            return {
                 goods:[
                     {
                         tab:"&#xe605;",
                         text:"商城"
                     },
                      {
                         tab:"&#xe60f;",
                         text:"我的"
                     },
                      {
                         tab:"&#xe6b8;",
                         text:"购物车"
                     }
                 ],
               
            }
        },
     computed:{
            ...Vuex.mapState({
            pagelist:state=>state.page.nowDatelist
          
          })
        },
	}
</script>

<style lang="scss" scoped>
   .shopping-cart{
        width:100%;
        height:1.1rem;
        position: fixed;
        display: flex;
        bottom: 0;
        left: 0;
        background: #fff;
        height: 1rem;
        box-shadow: 0 -1px 0.42rem rgba(66,68,69,.1);
        z-index: 90;
        .cart-left{
            width:3.28rem;
            height:1.1rem;
            ul{
                width:3.28rem;
                height:1.1rem;
                align-items: center;
                 
                display: flex;
                justify-content: space-between;
                li{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                      i{
                          font-size:.5rem;
                          color: gray;
                      }
                      em{
                          font-style: normal;
                          font-size:10px;
                           color: gray;
                      }
                }
            }
        }
        .cart-right{
            width:4.6rem;
            height:1.1rem;
            display: flex;
            margin: 0 .15rem;
            font-size: 0;
            border-radius: .35rem;
            overflow: hidden;
            align-items: center;
            .cartl{
                display: inline-block;
                height: .7rem;
                width: 2.1rem;
                line-height: .7rem;
                text-align: center;
                color: #fff;
                font-size: .28rem;
                font-weight: 600;
                vertical-align: middle;
                white-space: nowrap;
                background:#ffa0a0;
                border:none;
                
            }
            .cartr{
                display: inline-block;
                height: .7rem;
                width: 2.1rem;
                line-height: .7rem;
                text-align: center;
                color: #fff;
                font-size: .28rem;
                font-weight: 600;
                vertical-align: middle;
                white-space: nowrap;
                background: linear-gradient(90deg,#ff5d6c,#f6827a);
                border:none;
            }
        }
   }
	
   .like{
        width: 100%;
        height: 32.76rem;
        overflow: auto;
        p{
            font-size: .34rem;
            height: .5rem;
            border-top: .35rem solid #f5f5f5;
            font-weight: 500;
            line-height: .5rem;
            padding-left: 3%;
            text-indent: .55rem;
            background-size: .52rem;
            background-position: 3%;
        }
        ol{
                margin: 0.24rem;
                padding: 3%;
                padding-bottom: 0;
                padding-right: 0;
                background-color: #f5f5f5;
                font-size: .26rem;
                li{
                        display: inline-block;
                        vertical-align: top;
                        font-size: .26rem;
                        list-style-type: none;
                        width: 47%;
                        min-height: 5rem;
                        background-color: #fff;
                        margin-bottom: .225rem;
                        margin-right: 3%;
                        text-align: left;
                        img{
                            width:100%;
                            height:100%;
                        }
                   span{
                           line-height: 2;
                            color: #222;
                            margin: 0;
                            font-weight: 600;
                            letter-spacing: .01rem;
                            display: block;
                            padding-top: .1rem;
                     }
                    .capacity{
                        display: block;
                        height: .8rem;
                        line-height: .4rem;
                        color: gray;
                        overflow: hidden;
                    }
                    .price{
                            margin-top: .15rem;
                            margin-bottom: .2rem;
                            white-space: nowrap;
                            .present-price{
                               font-style: normal;
                                font-size: .28rem;
                                color: #ff3657;
                            }
                    .original-price{
                        font-size: .24rem;
                        color: gray;
                        margin-left: .05rem;
                    }
                    }
                }
        }
   }
</style>
