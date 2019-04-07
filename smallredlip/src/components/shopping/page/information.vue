<template>
	<div class="information">
            <div class="commodity" >
                   <div class="daren" v-for="(item,index) in imgs "><img :src="item" alt=""></div>    
                  
            </div>
	</div>

</template>

<script>
 
	export default {
        name: "information",
        data(){
            return {
                    imgs:[
                        "https://wicdn.xiaohongchun.com/goodsmark/1550568702895_6FCQweFtZd.jpg-big2x.jpg",
                        "https://wicdn.xiaohongchun.com/goodsmark/1550568702907_6mGAJWCx4z.jpg-big2x.jpg",
                        "https://wicdn.xiaohongchun.com/goodsmark/1550568730154_izcp8aZceE.jpg-big2x.jpg"
                    ]
            }
        }
	}
</script>

<style lang="scss" scoped>
	
  .commodity{
      width:100%;
      height:16.5rem;
        
       img{
           width:100%;
           height:100%;
           margin-top:0.1rem;
           
       }
  }
</style>
