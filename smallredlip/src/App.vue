<template>
  <div id="app">
    <Tabbar v-if="this.$route.meta.tabBarFlag"/>
    <keep-alive>
<router-view/>
    </keep-alive>
   
  </div>
</template>
<script>
import Tabbar from "./common/header"
export default {
  name:"app",
  components:{
    Tabbar
  }
}
</script>
<style lang="scss">

</style>
