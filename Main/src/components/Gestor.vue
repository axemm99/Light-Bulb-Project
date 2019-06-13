<template>
  <b-container fluid>
    <div class="middle catalog">
      <b-row class="subrow">
        <h2>Gestor</h2>
      </b-row>

        <div>
            <router-link :to="{ name: 'gestorUsers' }" :class="{ 'nav-link': true }">
                <b-button class="btn" type="button">Gestor de Utilizadores</b-button>
            </router-link>
            <router-link :to="{ name: 'gestorCourseUnit' }" :class="{ 'nav-link': true }">
                <b-button class="btn" type="button">Gestor de Unidades Pedagógicas</b-button>
            </router-link>
            <router-link :to="{ name: 'gestorTags' }" :class="{ 'nav-link': true }">
                <b-button class="btn" type="button">Gestor de Tags</b-button>
            </router-link>
            <router-link :to="{ name: 'gestorCourses' }" :class="{ 'nav-link': true }">
                <b-button class="btn" type="button">Gestor de Cursos</b-button>
            </router-link>
        </div>
    </div>
  </b-container>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "gestor",
  data: function() {
    return {

    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
  },
  methods: {
    
  },
  computed: {
    
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
