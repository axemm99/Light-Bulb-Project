<template>
  <b-container fluid>
    <b-row class="top">
      <img src="@/assets/logo.png" alt="logo.png" height="200">
    </b-row>
    <b-row class="justify-content-md-center center">
        <router-link :to="{ name: 'login' }">
          <b-button>Login</b-button>
        </router-link>
    </b-row>
  </b-container>
</template>


<script>
</script>


<style>
.top {
  background-color: white;
  padding: 50px 0px 0px 0px;
}

.center {
  background-color: black;
  padding: 50px 0px 30px 0px;
}
</style>
