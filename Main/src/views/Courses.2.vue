<template>
  <div class>
    <Navbar/>

    <b-container fluid>
      <b-row>
        <b-col sm="2">
          <Leftbar/>
        </b-col>
        <b-col sm="7" class="container-border">
          <b-container fluid>
            <div class="middle catalog">
              <b-row class="subrow">
                <h2>Unidades Pedagógicas</h2>
              </b-row>

              <!-- COURSES -->
              <b-row class="subrow courseList">
                <b-col md="12" v-for="course in getCourses" :key="course.id" class="course">
                  <b-row>
                    <b-col md="12" id="courseTitle" class="text-left">
                      <h5>{{ course.course }}</h5>
                    </b-col>
                  </b-row>

                  <CourseUnit
                    v-for="unit in getUnitsByCourseId(course.id)"
                    :key="unit.id"
                    :unit="unit"
                    class="col-md-4 col-sm-6 col-12 mt-4"
                  ></CourseUnit>



                  <!--
                   <b-col md="9" id="signInUnit" class="text-left">
              <p>{{ unit.unit }}</p>
            </b-col>
            <b-col md="2" id="signInBtn">
              <b-button @click="signIn(course.id, unit.id)" class="btn" type="button">Inscrever</b-button>
              <b-button @click="info(course.id, unit.id)" class="btn" type="button">
                <i class="fas fa-info-circle"></i>
              </b-button>
                  </b-col>-->




                </b-col>
              </b-row>
            </div>
          </b-container>
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
//import CourseUnit from "@/components/CourseUnit.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    Leftbar,
    Rightbar,
    //CourseUnit
  },
  data() {
    return {
      loggedUser: 0,
      tempLoggedId: 0,
      units: []
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
  },
  methods: {},
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


<style>
.courseList {
  margin-top: 30px;
}
.course {
  margin: 5px 0px !important;
  border-bottom: 2px solid #ffd150;
}

.course p {
  padding-top: auto;
  font-size: 16px;
}

#courseTitle {
  background-color: white;
  border-radius: 5px;
  padding: 5px 15px;
  margin-top: 10px;
}

#courseTitle h5 {
  color: black;
}
</style>
