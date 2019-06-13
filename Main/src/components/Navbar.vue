<template>
  <b-navbar toggleable="md" id="navbar">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#" id="logo">
      <router-link :to="{ name: 'home' }" :class="{ 'nav-link': true }">
        <img src="@/assets/logo_2.png" alt="logo.png" height="50">
      </router-link>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" id="search" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">
            <i class="fa fa-search fa-lg"></i>
          </b-button>
        </b-nav-form>

        <b-nav-item href="#">
          <router-link :to="{}" :class="{ 'nav-link': true }">
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
          </router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link :to="{}" :class="{ 'nav-link': true }">
            <i class="fa fa-award fa-lg" aria-hidden="true"></i>
          </router-link>
        </b-nav-item>

        <b-nav-item-dropdown id="profileNavbar" right>
          <template slot="button-content">
            <img :src="activeUser.profilePic" id="profilePic" alt="logo.png" height="40">
            <span>&nbsp;{{ activeUser.name }}</span>
          </template>
          <b-dropdown-item href="#" @click="userProfile()">Perfil</b-dropdown-item>
          <b-dropdown-item href="#" @click="ControlPanel()">Painel de controlo</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout()">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "navbar",
  data: function() {
    return {
      loggedUser: 0,
      activeUser: {},

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

    this.activeUser = this.getUserById(this.tempLoggedId);
  },
  methods: {
    userProfile() {
      this.$router.push({ name: "profile" });
    },
    ControlPanel() {
      this.$router.push({ name: "gestor" });
    },
    logout() {
      this.$store.dispatch("set_logged_user", 0);
      this.$router.push({ name: "landingPage" });
      localStorage.setItem("loggedUser", 0);
    }
  },
  computed: {
    ...mapGetters(["getUserById"])
  }
};
</script>


<style scoped>
.fa {
  color: #ffd150 !important;
}

#navbar {
  height: 50px;
  padding: 50px;
  background-color: black;
}

#profilePic {
  padding: 0px;
  border-radius: 50%;
}

ul {
  margin-top: 40px;
}

a {
  padding-right: 5px;
  padding-left: 5px;
  color: black;
}

span {
  color: white;
  margin-left: 5px;
}

#search {
  border: 1px solid white;
}

.btn {
  color: #ffd150;
  border: none;
  background-color: transparent !important;
  padding: 0px;
  margin-left: 0px;
}

.btn:hover {
  color: #fdd25ab9 !important;
  background-color: transparent;
}
</style>
