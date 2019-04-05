<template>
  <div class="work">
   <Header/>
   <Connect/>
  </div>
</template>

<script>
import Header from "../../../components/redlip/work/header"
import Connect from "../../../components/redlip/work/concent"
export default {
  name: "Work",
  components: {
   Header,
   Connect
  }
};
</script>
 
  <style scoped  lang="scss">
    .work{
      widows: 100%;
      height: 13rem;
      overflow: auto;
    }

 </style>
 