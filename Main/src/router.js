import Vue from "vue";
import Router from "vue-router";
import LandingPage from "./views/LandingPage.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import NewQuestions from "./views/NewQuestion.vue";
import Question from "./views/Question.vue";
import Profile from "./views/Profile.vue";
import Courses from "./views/Courses.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: LandingPage
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/newQuestion",
      name: "newQuestion",
      component: NewQuestions
    },
    {
      path: "/question/:id",
      name: "question",
      component: Question
    },
    {
      path: "/courses",
      name: "courses",
      component: Courses
    }
  ]
});
