<template>
  <div class="">
    <Navbar/>

    <b-container fluid>
      <b-row>
        <b-col sm="2">
          <Leftbar/>
        </b-col>
        <b-col sm="10" class="container-border">
          <Profile/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Leftbar from "@/components/Leftbar.vue";
import Profile from "@/components/Profile.vue";

export default {
  components: {
    Navbar,
    Leftbar,
    Profile
  }
};
</script>

<style>
</style>
