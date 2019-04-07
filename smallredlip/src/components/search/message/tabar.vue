<template>
  <div class="tabar">
       <div class="header">
           <div class="puten">
             <form action="">
                  <input type="text" name="" placeholder="资生堂">
             </form>
             <a href="">取消</a>
            </div>
            
       <div class="switchs">
            <a href="" class="vin">内容</a>
            <a href="">商品</a>
            <router-link href="" to="/redlip/message/cont">用户</router-link>
       </div>
       </div>
       
  </div>
</template>
<script>
export default {
    name:"tabar",
    data(){
        return{
            
        }
    }
 
}
</script>
<style scoped lang="scss">
     .header{
         width:100%;
         height:100%;
         
     }
     .puten{
         width:100%;
         height:0.94rem;
         display: flex;
         align-items: center;
         justify-content: space-between;
        left: 0;
        top: 0;
        right: 0;
        padding: .16rem .3rem;
        border-bottom: 1px solid #efefef;
        background-color: #fff;
        z-index: 6;
        form{
           position: relative;
           input{
               height: .6rem;
                width: 6.06rem;
                border: none;
                padding-left: .9rem;
                box-sizing: border-box;
                border-radius: 3rem;
                font-size: .28rem;
                background: #f5f5f5;
                font-size: .28rem;
           }
        }
        a{
            text-decoration: none;
            color: inherit;
            font-size: .28rem;
        }
     }

     .switchs{
         height:0.94rem;
         width: 100%;
         background:red;     
        left: 0;
        color: #999;
        line-height: .92rem;
        border-bottom: 1px solid #efefef;
        background-color: #fff;
        z-index: 34;
        a{
            display: inline-block;
            font-size: .3rem;
            width: 33.3%;
            text-align: center;
            vertical-align: top;
             text-decoration: none;
        }
     }

    .vin{
        color: #ff3657;
        font-weight: 600;
        border-bottom:6px solid #ff3657;
    }
</style>