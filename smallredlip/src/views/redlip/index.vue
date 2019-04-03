<template>
  <div class="redlip">
    <Concent/>
    <Footer/>
    <router-view></router-view>
  </div>
</template>

<script>
import Vuex from "vuex";
import Concent from "../../components/redlip/concent";
import Footer from "../../components/redlip/footer";
export default {
  name: "redlip",
  created(){
    this.getRedlip()
  },
  components: {
    Footer,
    Concent
  },
  methods:{
      ...Vuex.mapActions({
        getRedlip:"redlip/getActionsNowRedlip"
      })
 
}
}
</script>
