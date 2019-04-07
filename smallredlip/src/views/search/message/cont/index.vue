<template>
  <div class="cont">
        <Tabar/>
        <Cont/>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
        
  </div>
</template>

<script>
import Tabar from "@/components/search/message/cont/tabar"
import Cont from "@/components/search/message/cont/cont"

export default {
    name:"cont",
    components:{
      Tabar,
      Cont
    

    }
 
}
</script>
<style lang="scss">
.cont{
    width: 100%;
     
    height: 100%;
}
</style>
