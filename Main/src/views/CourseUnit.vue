<template>
  <div class="">
    <Navbar/>

    <b-container fluid>
      <b-row>
        <b-col sm="2">
          <Leftbar/>
        </b-col>
        <b-col sm="8" v-for="course in getCourses" :key="course.id">
          <CourseUnits
            v-for="unit in getUnitsByCourseId(course.id)"
            :key="unit.id"
            :unit="unit"
            class="col-md-4 col-sm-6 col-12 mt-4"/>
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
import CourseUnits from "@/components/CourseUnit.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    Leftbar,
    Rightbar,
    CourseUnits
  },
  computed: {
    ...mapGetters([
      "getUsers",
      "getCourses",
      "checkUserUnitsById",
      "checkCourseLabel",
      "getUnitsByCourseId"
    ])
  }
};
</script>