<template>
  <div class="redlip">
    <Concent/>
    <Footer/>
  </div>
</template>

<script>
import Concent from "../../components/redlip/concent";
import Footer from "../../components/redlip/footer";
export default {
  name: "redlip",
  components: {
    Footer,
    Concent
  }
};
</script>
