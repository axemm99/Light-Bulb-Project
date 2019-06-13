<template>
  <nav id="leftbar">
    <ul class="list-unstyled components">
      <li>
        <router-link :to="{ name: 'home' }" :class="{ 'nav-link': true }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'courses' }" :class="{ 'nav-link': true }">Unidades Pedagógicas</router-link>
        <ul id="signInUnits" class="list-unstyled">
          <li v-for="unit in courseUnits" :key="unit._id">{{ unit.unit }}</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>


<script>
//userUnits(users, courseUnits)
import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "courses",
  data: function() {
    return {
      loggedUser: 0,
      tempIds: [],

      /********/
      tempLoggedId: 0
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;
    this.tempCourseUnits = this.$store.state.courseUnits;
    this.tempCourses = this.$store.state.courses;

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
  },
  mounted() {
    
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadCourses");
    this.$store.dispatch("loadQuestions");
    this.$store.dispatch("loadUnits");
  },
  methods: {

    getCourseByUnitId(unitId) {
      let tempUnitIds = []
      for (let i = 0; i < this.courses.length; i++) {
        if (unitId == this.courses[i].units[this.courses[i].units.length]) {
          tempUnitIds.push(unitId)
        }

      }

      return tempUnitIds
    }
    
  },
  computed: {
    ...mapGetters(["getUsers", "getCourses", "getUnitsByUserId", "getUnitByCourseId"]),
    ...mapState(["users", "courses", "questions", "courseUnits"]),

    userUnits() {
      this.tempIds = this.getUnitsByUserId(this.tempLoggedId);
      let tempUserUnits = []

      for (let i = 0; i < this.courseUnits.length; i++) {
        let tempUnit = {
          id: this.courseUnits[i]._id,
          name: this.courseUnits[i].unit,
          courseId: this.getCourseByUnitId(this.courseUnits[i]._id)
        }
        tempUserUnits.push(tempUnit);
      }
      return tempUserUnits
    }
  }
};
</script>


<style>
#leftbar {
  height: 700px;
  overflow: hidden;
  padding-right: 20px;
  margin-left: 0px;
  background-color: #ffd150;
}

#leftbar ul {
  padding-top: 50px;
}

#leftbar a {
  text-align: left;
  text-decoration: none;
  color: black;
}

#signInUnits {
  padding-top: 0px !important;
  text-align: left;
  font-size: 14px;
}

#signInUnits li {
  padding: 0px 0px 0px 40px;
  color: black;
}
</style>
