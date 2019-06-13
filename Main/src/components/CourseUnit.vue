<template>
  <div>
    <b-card title="AAA" tag="article" style="max-width: 20rem;" class="mb-2">
      <b-card-text id="textUnit">{{ unit.unit }}</b-card-text>
      <b-button @click="signIn(course.id, unit.id)" class="btn" type="button">Inscrever</b-button>
      <b-button @click="info(course.id, unit.id)" class="btn" type="button">
        <i class="fas fa-info-circle"></i>
      </b-button>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["unit"],
  name: "courseUnit",
  data: function() {
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

    this.courses = this.checkCourseLabel;
    this.units = this.checkCourseUnitLabel;
  },
  methods: {
    unitValidation(newUnit) {
      let valid = false;
      if (this.checkUserUnitsById(newUnit) == "") {
        valid = true;
      } else {
        valid = false;
      }

      return {
        valid: valid,
        msg: this.checkUserUnitsById(newUnit)
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
    ...mapGetters([
      "getUsers",
      "getCourses",
      "checkUserUnitsById",
      "checkCourseLabel",
      "checkCourseUnitLabel"
    ])
  }
};
</script>


<style>
#textUnit{
  color: black;
}
.card-title h4 {
  color: black !important;
}
#signInUnit p {
  margin-top: 20px;
  color: black;
}

#signInBtn {
  margin-bottom: 10px;
}
</style>
