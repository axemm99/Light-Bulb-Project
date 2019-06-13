<template>
  <div id="landingPage">
    <LandingPage/>
  </div>
</template>


<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";

export default {
  name: "landingPage",
  components: {
    LandingPage
  }
};
</script>


<style scoped>
.container-fluid {
  background-color: black;
}
</style>
