<template>
  <nav id="sidebar">
    <ul class="list-unstyled components">
      <li>
        <router-link :to="{ name: '' }" :class="{ 'nav-link': false }">Ranking</router-link>
      </li>
      <li>
        <ul id="signInUnits">
          <li v-for="profile in arrayTempUsers" :key="profile.id">{{ profile.name }}</li>
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

    arrayTempUsers() {
      let tempUsers = []
      let xp = 0
      let arrayXp = []
      let places = []
      for (let i = 0; i < this.$store.state.users.length; i++) {
        tempUsers = this.$store.state.users[i].gameElements;
        for (let j = 0; j < tempUsers.length; j++) {
            console.log(tempUsers[j])
          if(tempUsers[j].xp > xp){
            xp = tempUsers[i].xp
            arrayXp.push(tempUsers[i].xp)
            places.push(this.$store.state.users[i].id)
            console.log("places: " + places)
            console.log("xp: " + xp)
          }      
        }
      }

      return places, xp
    },
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
