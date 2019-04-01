<template>
  <div class="header">
      <div class="top_left">
          <a href="">{{}}</a>
      </div>
      <div>{{del}}</div>
  </div>
</template>

<script>
export default {
    name:"search",
    data(){
        return{
            data:"秋冬润唇膏大全",
            del:"取消"
        }
    }
 
}
</script>
<style scoped lang="scss">
   .header{
       position: fixed;
       left: 0;
       top: 0;
       background: black;
       height: .9rem;      
 }
</style>