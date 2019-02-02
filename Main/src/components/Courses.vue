<template>
  <b-container fluid>
    <div class="middle catalog">
      <b-row class="subrow">
        <h2>Unidades Pedagógicas</h2>
      </b-row>

      <!-- COURSES -->
      <b-row class="subrow">
        <b-col md="12" v-for="course in courses" :key="course.id" class="course">
          <b-row>
            <b-col md="12" class="text-left courseTitle yellow">
              <h5>{{ course.course }}</h5>
            </b-col>
          </b-row>

          <b-row v-for="unit in course.courseUnit" :key="unit.id">
            <b-col md="10" id="signInUnit" class="text-left">
              <p>{{ unit.unit }}</p>
            </b-col>
            <b-col md="2" id="signInBtn">
              <b-button @click="signIn(course.id, unit.id)" class="btn" type="button">Inscrever</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>


<script>
export default {
  name: "courses",
  data: function() {
    return {
      tempCourses: [],
      tempUnits: []
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );

    /*this.tempCourses = this.$store.getters.checkCourseLabel;
    this.tempUnits = this.$store.getters.checkCourseUnitLabel;*/
  },
  methods: {
    unitValidation(newUnit) {
      let valid = false;
      if (this.$store.getters.checkUserUnitsById(newUnit) == "") {
        valid = true;
      } else {
        valid = false;
      }

      return {
        valid: valid,
        msg: this.$store.getters.checkUserUnitsById(newUnit)
      };
    },

    signIn(courseId, unitId) {
      let newUnit = {
        unitId: unitId,
        courseId: courseId,
        userId: this.tempLoggedId
      };

      if (this.unitValidation(newUnit).valid) {
        this.$store.dispatch("set_new_unit", newUnit);
        alert("Registo efetuado com sucesso");
        console.log(this.users);
      } else {
        alert(this.unitValidation(newUnit).msg);
      }
    }
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },

    courses() {
      return this.$store.getters.courses;
    }
  }
};
</script>


<style>
.course {
  margin: 5px 0px !important;
  background-color: rgb(218, 218, 218);
}

.course p {
  color: black !important;
  padding-top: auto;
  font-size: 18px;
}

.courseTitle {
  border-radius: 5px;
  padding: 10px;
}

#signInUnit p {
  margin-top: 20px;
}

#signInBtn {
  margin-bottom: 10px;
}
</style>
