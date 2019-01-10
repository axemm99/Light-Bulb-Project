import Vue from "vue";
import Router from "vue-router";
//import LandingPage from "./views/LandingPage.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import NewQuestions from "./views/NewQuestion.vue";
import Questions from "./views/Question.vue";

Vue.use(Router);

export default new Router({
  routes: [
    /*{
      path: "/",
      name: "landingPage",
      component: LandingPage
    },*/
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/profile#?userId?rand",
      name: "profile",
      component: Profile
    },
    {
      path: "/newQuestion",
      name: "newQuestion",
      component: NewQuestions
    },
    {
      path: "/question",
      name: "question",
      component: Questions
    }
  ]
});
