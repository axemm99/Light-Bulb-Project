import Vue from "vue";
import Router from "vue-router";
import LandingPage from "./views/LandingPage.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Home from "./views/Home.vue";
import NewQuestions from "./views/NewQuestion.vue";
import Question from "./views/Question.vue";
import Profile from "./views/Profile.vue";
import Courses from "./views/Courses.vue";
import Gestor from "./views/Gestor.vue";
import GestorUsers from "./views/GestorUsers.vue";
import GestorCourses from "./views/GestorCourses.vue";
import GestorCourseUnit from "./views/GestorCourseUnit.vue";
import GestorTags from "./views/GestorTags.vue";
import CourseUnit from "./views/CourseUnit.vue";

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
      path: "/register",
      name: "register",
      component: Register
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
    },
    {
      path: "/gestor",
      name: "gestor",
      component: Gestor
    },
    {
      path: "/gestorUsers",
      name: "gestorUsers",
      component: GestorUsers
    },
    {
      path: "/gestorCourses",
      name: "gestorCourses",
      component: GestorCourses
    },
    {
      path: "/gestorCourseUnit",
      name: "gestorCourseUnit",
      component: GestorCourseUnit
    },
    {
      path: "/gestorTags",
      name: "gestorTags",
      component: GestorTags
    },
    {
      path: "/courseUnit",
      name: "courseUnit",
      component: CourseUnit
    }
  ]
});
