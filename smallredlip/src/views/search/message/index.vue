<template>
  <div class="message">
        <Tabar/>
        <Tent/>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
        
  </div>
</template>

<script>
import Tabar from "@/components/search/message/tabar"
import Tent from "@/components/search/message/tent"

export default {
    name:"message",
    components:{
      Tabar,
      Tent
    

    }
 
}
</script>
<style lang="scss">
.message{
    width: 100%;
     
    height: 100%;
}
</style>
