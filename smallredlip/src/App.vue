<template>
  <div id="app">
    <Tabbar/>
   <router-view/>
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
