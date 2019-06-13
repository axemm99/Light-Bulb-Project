<template>
  <b-container fluid>
    <b-row class="top">
      <img src="@/assets/logo_lb.png" alt="logo.png" height="200">
    </b-row>
    <b-row class="justify-content-md-center">
        <router-link :to="{ name: 'login' }">
          <b-button>Login</b-button>
        </router-link>

        <router-link :to="{ name: 'register' }">
          <b-button>Registar</b-button>
        </router-link>
    </b-row>
  </b-container>
</template>


<style scoped>
img {
  display: block;
  margin: auto;
  margin-bottom: 50px;
}

.top {
  background-color: white;
  padding: 50px 0px 0px 0px;
}

.center {
  background-color: black;
  padding: 50px 0px 30px 0px;
}

.btn {
  margin-top: 50px;
}
</style>
