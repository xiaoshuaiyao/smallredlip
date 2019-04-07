<template>
  <div class="video">
    <Top/>
    <Center/>
    <Footer/>
  </div>
</template>

<script>
import Vuex from "vuex"
import {getNowVideo} from "@/api/api"
import Top from "../../../components/redlip/video/top"
import Center from "../../../components/redlip/video/center"
import Footer from "../../../components/redlip/video/footer"
export default {
  name: "Video",
  components: {
    Top,
    Center,
    Footer
  },
   created(){
    this.getVideo();
  },
  methods: {
    ...Vuex.mapActions({
      getVideo:"redlip/video/getActionVideo"
    })
  },
};
</script>
 
  <style scoped  lang="scss">
     .video{
       width: 100%;
       height: 15rem;
       overflow: auto;
     }

 </style>
 