<template>
  <b-container fluid>
    <b-row class="justify-content-md-center">
      <b-col class="forms" md="3">
        <img src="@/assets/icon.png" alt="logo.png" height="200">
        <b-form id="frmRegister">
          <b-form-group label="Nome Completo" label-for="inputFullName">
            <b-form-input id="inputFullName" v-model="form.name" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label="E-mail instituicional" label-for="inputEmail">
            <b-form-input id="inputEmail" v-model="form.email" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="inputPassword">
            <b-form-input id="inputPassword" v-model="form.password" type="password" required></b-form-input>
          </b-form-group>
          <b-button type="button" @click="userRegister()" class="btn">Registar</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "register",
  data: function() {
    return {
      form: {
        fullName: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    registerValidation() {
      let register = {
        id: this.getUserLastId,
        type: "student",
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        registerDate: this.getTodaysDate,
        units: [],
        profilePic: "http://www.investigacionsalud.gob.ec/webs/episig/wp-content/uploads/2016/03/gnr_prf.png",
        notifications: [],
        gameElements: {
          xp: 5,
          levelXP: 5,
          level: 1,
          medals: [1],
          reputation: 0
        }
      };
      let valid = false;

      if (this.checkUserRegister(register) == "") {
        valid = true;
      } else {
        valid = false;
      }

      return {
        valid: valid,
        msg: this.checkUserRegister(register),
        newUser: register
      };
    },
    userRegister() {
      if (this.registerValidation().valid) {
        this.$store.dispatch("set_new_user", this.registerValidation().newUser);
        this.$router.push({ name: "home" });
      } else {
        alert(this.registerValidation().msg);
      }
    }
  },
  computed: {
    ...mapGetters(["getUserLastId", "checkUserRegister", "getTodaysDate"])
  }
};
</script>


<style>

</style>
