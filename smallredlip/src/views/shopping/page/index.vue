<template>
  <div class="page">
     <Conent/>
     <Information/>
     <Guess/>
  </div>
</template>

<script>
import Vuex from "vuex";
import Conent from "../../../components/shopping/page/conent"
import Information from "../../../components/shopping/page/information"
import Guess from "../../../components/shopping/page/guess"
export default {
  name: "Page",
  created(){
      this.getNowpage();
  },

  components: {
      Conent,
      Information,
      Guess
  },
  methods: {
    ...Vuex.mapActions({
        getNowpage:"page/getActionPage"
    })
  },
};
</script>
 
  <style scoped  lang="scss">
.page{
  width: 100%;
  height: 15rem;
  overflow: auto;
   
  }

  .information{
  width: 100%;
  height: 16.5rem;
  overflow: auto;
   border-top: 0.2rem solid rgb(245, 245, 245);
   
  }
  .guess{
  width: 100%;
  height: 32.76rem;
  overflow: auto;
  
  }
 </style>