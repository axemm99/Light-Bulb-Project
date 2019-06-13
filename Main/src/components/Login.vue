<template>
  <b-container fluid>
    <b-row class="justify-content-md-center">
      <b-col class="forms" md="3">
        <img src="@/assets/icon.png" alt="icon.png" height="200">
        <b-form id="frmLogin">
          <b-form-group label="E-mail Instituicional" label-for="inputEmail">
            <b-form-input id="inputEmail" v-model="form.email" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="inputPassword">
            <b-form-input id="inputPassword" v-model="form.password" type="password" required></b-form-input>
          </b-form-group>
          <p>{{ error }}</p>
          <b-button type="button" @click="login()" class="btn">Login</b-button>
        </b-form>
      </b-col>
    </b-row>
    
  <p v-for="(item, index) in users" :key="index">{{index.email}}</p>
  </b-container>
</template>


<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "login",
  data: function() {
    return {
      error: "",
      form: {
        email: "",
        password: ""
      }
    };
  },
  mounted(){    
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadCourses");
    this.$store.dispatch("loadQuestions");
    this.$store.dispatch("loadAnswers");
    this.$store.dispatch("loadUnits");
  },
  methods: {
    login() {
      if (this.loginValidation().valid) {
        this.$store.dispatch("set_logged_user", this.loginValidation().userId);
        this.$router.push({ name: "home" });
      } else {
        this.error = this.loginValidation().msg;
      }
    },

    loginValidation() {
      let login = {
        email: this.form.email,
        password: this.form.password
      };
      let valid = false;

      if (this.checkLogin(login).error == "") {
        valid = true;
      } else {
        valid = false;
      }

      return {
        valid: valid,
        msg: this.checkLogin(login).error,
        userId: this.checkLogin(login).userId
      };
    }
  },
  computed: {
    ...mapGetters(["checkLogin"]),
    ...mapState(["users", "courses", "questions", "answers", "courseUnits"])
  }
};
</script>


<style scoped>
img {
  display: block;
  margin: auto;
  margin-bottom: 50px;
}

#frmLogin {
  margin-top: 50px;
}

#frmLogin p {
  color: orange;
  text-align: left;
  margin: 15px 0px;
}
</style>
