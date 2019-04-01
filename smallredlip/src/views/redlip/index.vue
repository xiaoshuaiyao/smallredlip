<template>
  <div class="redlip">
    <Concent/>
    <Footer/>
  </div>
</template>

<script>
import Concent from "./concent"
import Footer from "./footer"
export default {
    name:"redlip",
    components:{ 
      Footer,
      Concent
    }
}
</script>
