<template>
  <b-container fluid>
    <b-row class="justify-content-md-center">
      <b-col id="forms" sm="3">
        <img src="@/assets/icon.png" alt="logo.png" height="200">
        <b-form id="frmLogin">
          <b-form-group label="Username" label-for="inputUsername">
            <b-form-input id="inputUsername" v-model="form.username" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="inputPassword">
            <b-form-input id="inputPassword" v-model="form.password" type="password" required></b-form-input>
          </b-form-group>
          <b-button type="button" @click="userLogin()" class="btn">Login</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
  name: "login",
  data: function() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    loginValidation() {
      let login = {
        username: this.form.username,
        password: this.form.password
      };
      let userId = this.$store.getters.getUserId(login);
      let valid = false;

      if (this.$store.getters.checkUser(login) == "") {
        valid = true;
      } else {
        valid = false;
      }

      return {
        valid: valid,
        msg: this.$store.getters.checkUser(login),
        loggedUser: userId
      };
    },

    userLogin() {
      if (
        this.loginValidation().valid
      ) {
        this.$store.dispatch("set_logged_user", this.loginValidation().loggedUser);
        this.$router.push({ name: "home" });
      } else {
        alert(
          this.loginValidation().msg
        );
      }
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
  padding: 100px 0px;
}
</style>