<template>
  <div class="concent">
     <div class="concent_title"><p>{{til}}</p></div>
     <div class="concent_label"><a href="" v-for="item in goods">{{item}}</a></div>
  </div>
</template>

<script>
export default {
    name:"concent",
    data(){
        return{
            til:"唇蜜们都在搜",
            goods:["眉笔","防嗮","阿玛尼","眼影","素颜霜","眼线笔","科曼","防嗮喷雾","化妆","面膜","防嗮霜","口红","悦肤之研"]          
        }
    }
 
}
</script>
<style lang="scss">
   .concent{
       padding-left: .3rem;
       padding-right: .3rem;
       margin-top: .9rem;
       width: 100%;
       height: 3.264rem;
   }
   .concent_title{
       position: relative;
       color: #636262;
       padding-top: .36rem;
       margin:.3rem 0;
       font-size: .26rem;
   }
   .concent_label{
       width: 100%;
       height: 1rem;   
   }
   .concent_label>a{
       display: block;
       float: left;
       padding: .05rem .2rem;
       border-radius: .5rem;
       border: 1px solid #ccc;
       margin: 0 .2rem .2rem 0;
       font-size: .26rem;
   }
    
</style>