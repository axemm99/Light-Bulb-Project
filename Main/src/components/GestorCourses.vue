<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="nameLabel" label="Nome do Curso:" label-for="inputName">
        <b-form-input
          id="inputName"
          v-model="form.name"
          type="text"
          required
          placeholder="Nome do Curso"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Unidades Pedagógicas:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.unit"
          :options="getUnits()"
          required
          multiple="true"
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Adicionar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <br>
    <div>
      <b-table :items="getCouses()" :fields="fields" striped>
        <template slot="editar_curso" slot-scope="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">Editar Curso</b-button>
        </template>

        <template slot="remover_curso" slot-scope="row">
          <b-button size="sm" @click="row.removeUser" class="mr-2">Remover Curso</b-button>
        </template>

        <template slot="row-details" slot-scope="row">
          <b-card>
            
            <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="nameEditLabel" label="Nome do Curso:" label-for="editName">
              <b-form-input
                id="editName"
                v-model="form.name"
                type="text"
                placeholder="Nome do Curso"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Unidades Pedagógicas:" label-for="input-4">
              <b-form-select
                id="input-4"
                v-model="form.unit"
                :options="getUnits()"
                multiple="true"
              ></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Adicionar</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>

            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
          </b-card>
        </template>
      </b-table>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "gestor",
  data: function() {
    return {
      form: {
        name: "",
        unit: ""
      },
      items: [
      ],
      fields: ["id", "name", "units", "editar_curso", "remover_curso"],
      units: [],
      show: true
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;
    this.tempCourseUnits = this.$store.state.courseUnits;
    this.tempCourses = this.$store.state.courses;
    //this.tempCourseUnit;
    /* for(let i=0; i<this.tempCourses.length; i++){
      this.tempCourseUnit.push(this.tempCourses[i].courseUnit);
    }*/
    console.log(this.tempCourseUnits);

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.unit = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    getUnits() {
      let temp = [];
      console.log(this.tempCourseUnits);
      console.log(this.tempCourseUnits.length);

      for (let index = 0; index < this.tempCourseUnits.length; index++) {
        console.log("a: " + index);
        temp.push(this.tempCourseUnits[index].unit);
        console.log("b: " + temp);
      }
      return temp;
    },

    getCouses(){
      let temp = [];
      console.log(this.tempCourses);
      console.log(this.tempCourses.length);

      for (let i = 0; i < this.tempCourses.length; i++) {
        console.log("d: " + i);
        
        temp.push(
          {
            id: this.tempCourses[i]._id,
            name: this.tempCourses[i].course,
            units: this.getUnitsByCourseId2(this.tempCourses[i]._id) + " "
          }
        );
        console.log("c: " + temp);
      }
      return temp;
    },
    
  },
  computed: {
    ...mapGetters([
      "getUnitsByCourseId2"
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
}

#signInBtn {
  margin-bottom: 10px;
}
</style>