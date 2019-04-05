<template>
  <div class="redlip">
    <Concent/>
    <Footer/>
    <router-view></router-view>
  </div>
</template>

<script>
import {getNowRedlip} from "@/api/api"
import Vuex from "Vuex";
import Concent from "../../components/redlip/concent";
import Footer from "../../components/redlip/footer";
export default {
  name: "redlip",
  components: {
    Footer,
    Concent
  },
  created(){
    this.getActionsNowRedlip();
  },
  methods: {
    ...Vuex.mapActions({
      getActionsNowRedlip:"redlip/getActionsNowRedlip"
    })
  },
}
</script>
