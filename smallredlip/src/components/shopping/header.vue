<template>
  <div class="header">
      <div class="top_left">
          <a href="" id="search_a">{{data}}</a>        
      </div>
      <div class="delete">{{del}}</div>
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
    width: 100%;
    height: .9rem;   
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    padding: .16rem .3rem;
    border-bottom: 1px solid #efefef;
    background: #fff;
    z-index: 6;   
    display: flex;
    align-items: center;   
 }
 #search_a{
    display: inline-block;
    width: 6.06rem;
    height: .6rem;
    border: 0;
    padding-left: .9rem;
    border-radius: 3rem;
    background: #f5f5f5;
    font-size: .28rem;
    line-height: .6rem;
 }
 .delete{
     font-size: .28rem;
 }
</style>