<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  mounted() {
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadCourses");
    this.$store.dispatch("loadQuestions");
    this.$store.dispatch("loadUnits");
    this.$store.dispatch("loadTags");
    this.$store.dispatch("loadMedals");
    this.$store.dispatch("loadLevels");
  },
  computed: {
    ...mapState(["users", "courses", "questions", "courseUnits", "tags", "medals", "levels"])
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  color: white;
  font-weight: 400;
}

h2 {
  margin-top: 30px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: none;
  color: black;
}

.container-fluid {
  background-color: white;
  margin: 0px;
  min-height: 100vh;
}

.container-border {
  margin: 0px;
  padding: 0px 25px;
}

.subrow {
  margin: 0px;
}

.forms {
  padding: 100px 0px;
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
  color: black;
  text-align: center;
  border: none;
  background-color: #ffd150;
  margin: 20px 10px 0px 10px;
}

.btn:hover {
  color: black;
  background-color: black;
}

.grey {
  background-color: rgb(192, 192, 192);
  height: 5px;
}

.yellow {
  background-color: #ffd150;
  height: 2px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
