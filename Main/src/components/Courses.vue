<template>
  <b-container fluid>
    <div class="middle catalog">
      <b-row class="subrow">
        <h2>Unidades Pedagógicas</h2>
      </b-row>

      <!-- COURSES -->
      <b-row class="subrow courseList">
        <b-col md="12" v-for="course in getCourses" :key="course._id" class="course">
          <b-row>
            <b-col md="12" id="courseTitle" class="text-left">
              <h5>{{ course.course }}</h5>
            </b-col>
          </b-row>

          <b-row v-for="unit in getUnitsByCourseId(course._id)" :key="unit._id">
            <b-col md="8" id="signInUnit" class="text-left">
              <p>{{ unit.unit }}</p>
            </b-col>
            <b-col md="2" id="signInBtn">
              <b-button @click="signIn(course._id, unit._id)" class="btn" type="button">Inscrever</b-button>
            </b-col>
            <b-col md="1" id="infoBtn">
              <b-button v-b-modal.modal-1 class="btn" type="button">
                <i class="fas fa-info-circle"></i>
              </b-button>
            </b-col>            
            <div v-for="courseUnit in course.courseUnit" :key="courseUnit">
              <b-modal id="modal-1" title="Info" v-if="courseUnit == unit._id">
                <p class="my-4">{{unit.unit}}</p>
                <br>
                <p class="my-4">{{unit.year}}º Ano</p>
              </b-modal>
            </div>

          </b-row>
        </b-col>
      </b-row>


    </div>
  </b-container>
</template>


<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "courses",
  data: function() {
    return {
      courses: [],
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
    //this.units = this.checkCourseUnitLabel;

    
  },
  mounted() {
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadCourses");
    this.$store.dispatch("loadQuestions");
    this.$store.dispatch("loadUnits");
    this.$store.dispatch("loadMedals");
    this.$store.dispatch("loadLevels");
    this.$store.dispatch("loadTags");
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
      console.log("newUnit:",newUnit)

      if (this.unitValidation(newUnit).valid) {
        this.$store.dispatch("set_new_unit", newUnit);
        alert("Registo efetuado com sucesso");
        console.log(this.users);
      } else {
        alert(this.unitValidation(newUnit).msg);
      }
    },

    /*async getCourses() {
      let config = {
        headers: {
          'Accept': 'application/json'
        }
      }

      const tempCourses = await axios.get('https://lightbulbserver1819.herokuapp.com/courses', config);
      this.tempCourses = tempCourses.data.courses
      
      /*this.tempCourses = []

      axios.get('https://teste-ginasio-diogof98.c9users.io/').then(res => {
        this.tempCourses = res.data
        console.log(res.data);
      });
    }*/
  },
  computed: {
    ...mapGetters([
      "getUsers",
      "getCourses",
      "getUnitsByCourseId",
      "checkUserUnitsById",
      "checkCourseLabel"
    ]),
    ...mapState([
      "users",
      "courses",
      "questions",
      "courseUnits",
      "medals",
      "levels",
      "tags"
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

#signInUnit p {
  margin-top: 20px;
  color: black;
}

#signInBtn {
  margin-bottom: 10px;
}
</style>
