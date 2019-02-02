<template>
  <div class="">
    <Navbar/>

    <b-container fluid>
      <b-row>
        <b-col sm="2">
          <Sidebar/>
        </b-col>
        <b-col sm="8">
          <Courses/>
        </b-col>
        <b-col sm="2"></b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Courses from "@/components/Courses.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Courses
  }
};
</script>
