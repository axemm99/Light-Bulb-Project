<template>
  <div class>
    <Navbar/>

    <b-container fluid>
      <b-row>
        <b-col sm="2">
          <Leftbar/>
        </b-col>
        <b-col sm="7" class="container-border">
          <AddQuestion/>
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
import AddQuestion from "@/components/AddQuestion.vue";

export default {
  components: {
    Navbar,
    Leftbar,
    Rightbar,
    AddQuestion
  }
};
</script>

<style>
</style>
