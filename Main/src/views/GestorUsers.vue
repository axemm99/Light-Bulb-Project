<template>
  <div class="">
    <Navbar/>

    <b-container fluid>
      <b-row>
        <b-col sm="2">
          <Leftbar/>
        </b-col>
        <b-col sm="8">
          <GestorUsers/>
        </b-col>
        <b-col sm="3">
          <Rightbar/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Leftbar from "@/components/Leftbar.vue";
import Rightbar from "@/components/Rightbar.vue";
import GestorUsers from "@/components/GestorUsers.vue";

export default {
  components: {
    Navbar,
    Leftbar,
    Rightbar,
    GestorUsers
  }
};
</script>
