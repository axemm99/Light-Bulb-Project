<template>
  <div class="container mx-auto">
    <div id="forms" class="col-md-6 mx-auto">
      <img src="@/assets/icon.png" alt="logo.png" height="180">
      <form id="frmLogin" action>
        <div class="form-group form">
          <label for="inputUsername">Username</label>
          <input class="form-control" type="text" id="inputUsername">
        </div>
        <div class="form-group form">
          <label for="inputPassword">Password</label>
          <input class="form-control" type="password" id="inputPassword">
        </div>
        <!--<input class="btn btn-secundary form" type="submit" value="Login">-->
        <b-button type="button" @click="userLogin()" class="btn">Login</b-button>
      </form>
      <div class="col-md-6 mr-auto">
        <p>Precisa de ajuda?</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Login",
  data: function() {
    return {
      id: 0,
      username: "",
      status: false
    };
  },

  methods: {
    userLogin() {
      let inputUsername = document.getElementById("inputUsername");
      let inputPassword = document.getElementById("inputPassword");

      if (
        this.loginValidation(inputUsername.value, inputPassword.value).valid
      ) {
        this.$router.push({ name: "home" });
      } else {
        alert(
          this.loginValidation(inputUsername.value, inputPassword.value).msg
        );
      }
    },

    loginValidation(username, password) {
      let login = {
        username: username,
        password: password
      };
      let valid = false;

      if (this.$store.getters.checkUser(login) == "") {
        valid = true;
      } else {
        valid = false;
      }

      return {
        valid: valid,
        msg: this.$store.getters.checkUser(login)
      };
    }
  }
};
</script>


<style>
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  color: white;
  font-weight: 400;
}

img {
  display: block;
  margin: auto;
  margin-bottom: 50px;
}

p {
  color: white;
  text-align: left;
  margin: 15px 0px;
}

#forms {
  padding: 40px 60px;
  border: 5px solid #000;
  background-color: #000;
  border-radius: 25px;
}

.container {
  margin: 200px 0px;
  height: 600px;
}

.form {
  width: 100%;
  text-align: left;
}

.form-control {
  display: block;
  background-color: white;
  border: none;
}

.btn {
  color: white;
  text-align: center;
  border: none;
  background-color: #ffd150;
  width: 100%;
  margin-top: 20px;
}

.btn :active {
  background-color: #fdd25ab9;
}
</style>