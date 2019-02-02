<template>
  <nav id="sidebar">
    <ul class="list-unstyled components">
      <li>
        <router-link :to="{ name: 'home' }" :class="{ 'nav-link': true }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'courses' }" :class="{ 'nav-link': true }">Unidades Pedagógicas</router-link>
        <ul id="signInUnits">
          <li v-for="unit in arrayTempUserUnits" :key="unit.id">{{ unit.name }}</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>


<script>
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

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
  },
  methods: {
    
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },

    courses() {
      return this.$store.getters.courses;
    },

    arrayTempUserUnits() {
      this.tempIds = this.$store.getters.getUserUnitsById(this.tempLoggedId);
      let tempUserUnits = []

      for (let i = 0; i < this.tempIds.length; i++) {
        let tempUnit = {
          id: this.tempIds[i].unitId,
          name: this.$store.getters.getUnitByCourseId(this.tempIds[i].courseId, this.tempIds[i].unitId),
          courseId: this.tempIds[i].courseId
        }
        tempUserUnits.push(tempUnit);
      }

      return tempUserUnits
    }
  },
  mounted() {
  }
};
</script>


<style>
#sidebar {
  height: 700px;
  overflow: hidden;
  padding-right: 20px;
  border-right: 2px solid #ffd150;
}

#sidebar ul {
  padding-top: 50px;
}

#sidebar li {
  border-bottom: 0.5px solid #ffd050ad;
}

#sidebar a {
  text-align: left;
  text-decoration: none;
  color: white;
}

#signInUnits {
  padding-top: 0px !important;
  text-align: left;
  font-size: 14px;
}

#signInUnits li {
  color: white;
}
</style>
