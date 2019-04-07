<template>
  <div class="tent">
        <div class="auto">
             
                  <ul>
                       <li>
                           <div class="con"><img src="https://wicdn.xiaohongchun.com/cover/980572B4A3AD744E.jpg-small3x.jpg" alt=""></div>
                            <div class="don">
                                <div class="don-top">资生堂无油乳液 | 据说已经停产了……所以直接买2瓶，一瓶50毫升，非常适合夏天使用，非常清爽保湿效果也很nice，味道很清淡，深的我心，15刀一瓶折后人民币也很便宜哦……</div>
                                <div class="don-cont">ᖭི༏ᖫྀ钱宝ོ࿐🎸</div>
                                <div class="don-bottm">9 次点赞 . 2019/02/27</div>
                            </div>
                       </li>
                       <li></li>
                  </ul>
             
        </div>
    
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
    name:"tent",
    data(){
        return{
            
        }
    },
         computed:{
            ...Vuex.mapState({
            pagelist:state=>state.message.nowTentlist
          
          })
        },
 
}
</script>
<style scoped lang="scss">
    .auto{
        width:100%;
        height:44.80rem;
        background:chocolate;
    }
    .auto ul{
         width:100%;
         height:44.80rem;
         padding-left:0.3rem;
         padding-right:0.3rem;
        li{
            padding-top: .2rem;
            padding-bottom: .2rem;
            border-bottom: 1px solid #efefef;
            height:2.24rem;
            display: flex;
            width:100%;
            justify-content: space-between;
            img{
                width:100%;
                height:100%;
            }
        }
    }
    .con{
            width: 1.82rem;
            height: 1.82rem;
            overflow: hidden;
            float: left;
            position: relative;
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat;
    }
    .don{
        overflow: hidden;
        padding-left: .3rem;
        padding-top: .1rem;
        width:5.8rem;
        .don-top{
            font-size: .28rem;
            line-height: .42rem;
            max-height: .84rem;
            overflow: hidden;
             -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        }
       .don-cont{
               font-size: .26rem;
                line-height: 1.5;
                color: #999;
       }
       .don-bottm{
                font-size: .26rem;
                line-height: 1.5;
                color: #999;
       }
    }
</style>