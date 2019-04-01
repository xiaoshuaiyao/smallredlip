<template>
  <div class="video">
    <Top/>
    <Center/>
  </div>
</template>

<script>
import Top from "../../../components/redlip/video/top"
import Center from "../../../components/redlip/video/center"
export default {
  name: "Video",
  components: {
    Top,
    Center
  }
};
</script>
 
  <style scpoed  lang="scss">
     .video{
       width: 100%;
       height:15rem;
       overflow: auto;
     }

 </style>
 