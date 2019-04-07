<template>
  <div class="moon">
     <Header/>
  </div>
</template>

<script>
import Header from "../../../components/redlip/moon/header"
export default {
  name: "Moon",
  components: {
     Header,
  }
};
</script>
 
  <style scoped  lang="scss">
.moon{
  width: 100%;
  height: 15rem;
  overflow: auto;
}

 </style>