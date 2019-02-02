<template>
  <nav id="navbar" class="navbar navbar-expand-sm">
    <a class="navbar-brand">
      <router-link :to="{ name: 'home' }" :class="{ 'nav-link': true }">
        <img src="@/assets/logo.png" alt="logo.png" height="50">
      </router-link>
    </a>
    <ul class="navbar-nav ml-auto">
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
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'landingPage' }" :class="{ 'nav-link': true }">
          <i class="fas fa-sign-out-alt" aria-hidden="true" @click="logOut()"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "navbar",
    data: function() {
      return {
        tempLoggedId: 0
      };
    },
    created(){
      this.loggedUser = this.$store.state.loggedUser;

      /********/
      this.tempLoggedId = parseInt(
        JSON.parse(localStorage.getItem("loggedUser"))
      );
    },

    methods: {
      logOut(){
        this.$store.dispatch("set_logged_user", 0);
        localStorage.setItem("loggedUser", 0);
      }
    }
  }
</script>


<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
