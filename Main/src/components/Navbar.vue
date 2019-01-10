<template>
  <nav id="navbar" class="navbar navbar-expand-sm">
    <a class="navbar-brand" href="/">
      <img src="@/assets/logo.png" alt="logo.png" height="50">
    </a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">Search</li>
      <li class="nav-item">
        <router-link :to="{}" :class="{ 'nav-link': true }">
          <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{}" :class="{ 'nav-link': true }">
          <i class="fa fa-award fa-lg" aria-hidden="true"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'profile' }" :class="{ 'nav-link': true }">
          <i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>
          <span> {{ fullname }}</span>
        </router-link>
      </li>
      <li v-if="id === 0" class="nav-item">
        <router-link :to="{ name: 'log-in' }" :class="{ 'nav-link': true }">Log In</router-link>
      </li>
      <li v-if="id === 0" class="nav-item">
        <router-link :to="{ name: 'register' }" :class="{ 'nav-link': true }">Registar</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'newQuestion' }" :class="{ 'nav-link': true }">Nova Questão</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
        id: 0,
        fullname: "",
        username: "",
        profilePic: ""
    }
  },
  mounted(){
    let loggedUser = this.$store.getters.loggedUser;
    let users = this.$store.getters.users;
      for (let i = 0; i < users.length; i++) {
        if(users[i].id == loggedUser){
          this.id = users[i].id;
          this.fullname = users[i].fullName;
          this.username = users[i].username;
          this.profilePic = users[i].profilePic;
        }
    }
  },
  computed: {
    loggedUser() {
      return this.$store.getters.loggedUser;
    },
    users() {
      return this.$store.getters.users;
    },
  }
};
</script>


<style>
.fa {
  color: black;
}

#navbar {
  height: 50px;
  padding: 50px;
}

#navbar img {
  margin-top: 50px;
}

#navbar ul {
  margin-top: 20px;
}

#navbar li {
  margin: 0px 8px;
}

#navbar a {
  padding: 0px;
}
</style>
