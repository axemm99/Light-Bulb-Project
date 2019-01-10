<template>
  <div class="home">
    <br>
    <!-- RENDER REST OF APP -->
    <div class="container">
      <br>
      <br>
      <br>
      <div id="registerContainer" class="col-md-6 mx-auto">
        <form action id="loginForm">
          <div class="row">
            <div class="col-md-12 mx-auto">
              <br>
              <img src="@/assets/logo.png" alt="logo.png" height="50">
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-md-10 mx-auto">
              <div class="form-group form">
                <label for="registerUsername">Username</label>
                <input class="form-control" type="text" id="registerUsername">
              </div>
              <div class="form-group form">
                <label for="registerEmail">Email</label>
                <input class="form-control" type="email" id="registerEmail">
              </div>
              <div class="form-group form">
                <label for="registerPass">Password</label>
                <input class="form-control" type="password" id="registerPass">
              </div>
              <div class="form-group form">
                <label for="registerPassConfirm">Confirmar Password</label>
                <input class="form-control" type="password" id="registerPassConfirm">
              </div>
              <div>
                <input class="btn btn-secondary form" type="submit" value="Registar">
              </div>
            </div>
          </div>
        </form>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Foot from "@/components/Foot.vue";

export default {
  components: {
    Navbar,
    Foot
  }
};
</script>


<style>
#registerContainer {
  border: 1px;
  border-color: rgba(95, 95, 95, 0.5);
  border-style: ridge;
  border-radius: 20px;
}
</style>
