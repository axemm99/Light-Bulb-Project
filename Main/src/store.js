import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    loggedUser: 0,
    users: [
      /*{
        id: 1,
        type: "student",
        name: "Ana Maria Torres",
        email: "a@a.a",
        password: "123",
        registerDate: "01-01-2017",
        units: [
          {
            unitId: 1,
            courseId: 1
          },
          {
            unitId: 2,
            courseId: 1
          }
        ],
        profilePic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HsP8RYZ6xkXYwHOFmkLV1cRx-DjWnphDX_TOrJ4xGnMP9sLl",
        notifications: [
          {
            id: 1,
            type: "class",
            title: "pwi"
          },
          {
            id: 2,
            type: "tag",
            title: "css"
          }
        ],
        gameElements: {
          xp: 10,
          levelXP: 10,
          level: 1,
          medals: [1, 2],
          reputation: 0
        }
      },*/
      /*{
        id: 2,
        type: "teacher",
        name: "João Torres",
        email: "b@a.a",
        password: "123",
        registerDate: "01-01-2017",
        units: [],
        profilePic:
          "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg",
        notificationsType: [],
        gameElements: {
          xp: 0,
          levelXP: 0,
          level: 2,
          medals: [],
          reputation: 0
        }
      },
      {
        id: 3,
        type: "student",
        name: "Manuel Torres",
        email: "c@a.a",
        password: "123",
        registerDate: "01-01-2017",
        units: [],
        profilePic:
          "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg",
        notificationsType: [],
        gameElements: {
          xp: 0,
          levelXP: 0,
          level: 1,
          medals: [],
          reputation: 0
        }
      }*/
    ],
    questions: [
     /* {
        id: 1,
        title: "Quando é a entrega?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        idTags: [1],
        idCourse: 1,
        files: "",
        images: "",
        userId: 2,
        date: "01-01-2018",
        view: 15,
        upvote: [],
        downvote: [1, 3],
        status: "unlocked",
        answers: [
          {
            id: 1,
            userId: 2,
            date: "01-06-2018",
            answer:
              "Lorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id eLorem ipsum dolor sit amet,llit anim id e",
            upvote: 5,
            downvote: 1
          },
          {
            id: 2,
            userId: 1,
            date: "01-10-2018",
            answer: "Lorem ipsum dolor sit amet,llit anim id est laborum.",
            upvote: 20,
            downvote: 3
          }
        ],
        followers: [2, 3]
      },
      {
        id: 2,
        title: "Como se faz um for?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        idTags: [1],
        idCourse: 1,
        files: "",
        images: "",
        userId: 1,
        date: "05-05-2018",
        view: 11,
        upvote: [1],
        downvote: [2],
        status: "locked",
        answers: [],
        followers: [1]
      },
      {
        id: 3,
        title: "Erro Photoshop",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        idTags: [1, 2],
        idCourse: 2,
        files: "",
        images: "",
        userId: 3,
        date: "01-02-2018",
        view: 30,
        upvote: [1, 2],
        downvote: [],
        status: "locked",
        answers: [
          {
            id: 1,
            userId: 2,
            date: "01-11-2018",
            answer: "...",
            upvote: 2,
            downvote: 3
          }
        ],
        followers: [1]
      }*/
    ],
    courses: [
     /* {
        id: 1,
        course: "Tecnologias e Sistemas de Informação para a Web",
        courseUnit: [1, 2]
      },
      {
        id: 2,
        course: "Design",
        courseUnit: [3]
      }*/
    ],
    courseUnits: [
      /*{
        id: 1,
        unit: "Programação para a Web I",
        year: 2
      },
      {
        id: 2,
        unit: "Progamação Orientada a Objectos",
        year: 1
      },
      {
        id: 3,
        unit: "Introdução ao Design",
        year: 1
      }*/
    ],
    tags: [
      /*{
        id: 1,
        tag: "poo"
      },
      {
        id: 2,
        tag: "css"
      }*/
    ],
    notifications: [],
    medals: [
      /*{
        id: 1,
        label: "Bem-vindo",
        type: "bronze"
      },
      {
        id: 2,
        label: "1a pergunta",
        type: "bronze"
      },
      {
        id: 3,
        label: "1a resposta",
        type: "bronze"
      }*/
    ],
    levels: [
     /* {
        id: 1,
        label: "Principiante",
        maxXP: 25
      },
      {
        id: 2,
        label: "Assistente",
        maxXP: 50
      },
      {
        id: 3,
        label: "Mestre",
        maxXP: 100
      }*/
    ],
    top: 10
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = payload;
    },
    SET_NEW_USER(state, payload) {
      //state.users.push(payload);
      try {
        axios
          .post('https://lightbulbserver1819.herokuapp.com/user', payload)
        
      } catch (error) {
        console.log(error)
      }
    },
    SET_QUESTION(state, payload) {
      //state.questions.push(payload);
      try {
        console.log("try")
        console.log(payload)
        axios
          .post('https://lightbulbserver1819.herokuapp.com/question', payload)
        
      } catch (error) {
        console.log("oooo")
        console.log(error)
      }
    },
    SET_ANSWER(state, payload) {
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i]._id == payload.questionId) {
          //state.questions[i].answers.push(payload.newAnswer);
          axios
            .post('https://lightbulbserver1819.herokuapp.com/question/answer', payload.newAnswer)
          
        }
      }
    },
    SET_NEW_UNIT(state, payload) {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id == payload.userId) {
          let temp = {
            unitId: payload.unitId,
            courseId: payload.courseId
          };
          //state.users[i].units.push(temp);
          console.log("yyyy")
          axios
            .post('https://lightbulbserver1819.herokuapp.com/user/units', temp)
        }
      }
    },
    EDIT_USER_XP(state, payload) {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id == payload.user) {
          state.users[i].gameElements.xp += payload.amount;
          state.users[i].gameElements.levelXP += payload.amount;
        }
      }
    },
    EDIT_QUESTION_UPVOTE(state, payload) {
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].id == payload.question) {
          state.questions[i].upvote.push(payload.user);
        }
      }
    },
    EDIT_QUESTION_DOWNVOTE(state, payload) {
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].id == payload.question) {
          state.questions[i].downvote.push(payload.user);
        }
      }
    },
    EDIT_QUESTION_STATUS(state, payload) {
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].id == payload) {
          state.questions[i].status = "locked";
        }
      }
    },
    EDIT_QUESTION_FOLLOWER(state, payload) {
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i]._id == payload.question) {
          state.questions[i].followers.push(payload.user);
        }
      }
    },
    ADD_USER_MEDAL(state, payload) {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id == payload.userId) {
          alert("ASD");
          state.users[i].gameElements.medals.push(payload.medal);
        }
      }
    },
    SET_USERS(state, users) {
      state.users = users
    },
    SET_COURSES(state, courses) {
      state.courses = courses
    },
    SET_QUESTIONS(state, questions) {
      state.questions = questions
    },
    SET_ANSWERS(state, answers) {
      state.answers = answers
    },
    SET_UNITS(state, units) {
      state.courseUnits = units
    },
    SET_TAGS(state, tags) {
      state.tags = tags
    },
    SET_MEDALS(state, medals) {
      state.medals = medals
    },
    SET_LEVELS(state, levels) {
      state.levels = levels
    }
  },
  actions: {
    loadUsers({ commit }) {
      axios
        .get('https://lightbulbserver1819.herokuapp.com/user')
        .then(data => {
          console.log("users: " + data.data)
          let users = data.data
          commit('SET_USERS', users)
        })
        .catch(error => {
          console.log(error)
          console.log("kkkkk")
        })
    },
    loadCourses({ commit }) {
      axios
        .get('https://lightbulbserver1819.herokuapp.com/course')
        .then(data => {
          console.log("courses: " + data.data)
          let courses = data.data
          commit('SET_COURSES', courses)
        })
        .catch(error => {
          console.log(error)
          console.log("kkkkk")
        })
    },
    loadQuestions({ commit }) {
      axios
        .get('https://lightbulbserver1819.herokuapp.com/question')
        .then(data => {
          console.log(data.data)
          let questions = data.data
          commit('SET_QUESTIONS', questions)
        })
        .catch(error => {
          console.log(error)
          console.log("kkkkk")
        })
    },
    loadAnswers({ commit }) {
      axios
        .get('https://lightbulbserver1819.herokuapp.com/question/answer')
        .then(data => {
          console.log("answers: " + data.data)
          let answers = data.data
          commit('SET_ANSWERS', answers)
        })
        .catch(error => {
          console.log(error)
          console.log("kkkkk")
        })
    },
    loadUnits({ commit }) {
      axios
        .get('https://lightbulbserver1819.herokuapp.com/unit')
        .then(data => {
          console.log("units: " + data.data)
          let units = data.data
          commit('SET_UNITS', units)
        })
        .catch(error => {
          console.log(error)
          console.log("kkkkk")
        })
    },
    loadTags({ commit }) {
      axios
        .get('https://lightbulbserver1819.herokuapp.com/tag')
        .then(data => {
          console.log("tags: " + data.data)
          let tags = data.data
          commit('SET_TAGS', tags)
        })
        .catch(error => {
          console.log(error)
          console.log("kkkkk")
        })
    },
    loadMedals({ commit }) {
      axios
        .get('https://lightbulbserver1819.herokuapp.com/medal')
        .then(data => {
          console.log("medals: " + data.data)
          let medals = data.data
          commit('SET_MEDALS', medals)
        })
        .catch(error => {
          console.log(error)
          console.log("kkkkk")
        })
    },
    loadLevels({ commit }) {
      axios
        .get('https://lightbulbserver1819.herokuapp.com/level')
        .then(data => {
          console.log("levels: " + data.data)
          let levels = data.data
          commit('SET_LEVELS', levels)
        })
        .catch(error => {
          console.log(error)
          console.log("kkkkk")
        })
    },
    set_new_user1(context){
      
    },
    set_logged_user(context, payload) {
      context.commit("SET_LOGGED_USER", payload);
    },
    set_new_user(context, payload) {
      context.commit("SET_NEW_USER", payload);
    },
    set_question(context, payload) {
      context.commit("SET_QUESTION", payload);
    },
    set_answer(context, payload) {
      context.commit("SET_ANSWER", payload);
    },
    set_new_unit(context, payload) {
      context.commit("SET_NEW_UNIT", payload);
    },
    edit_user_xp(context, payload) {
      context.commit("EDIT_USER_XP", payload);
    },
    edit_question_upvote(context, payload) {
      context.commit("EDIT_QUESTION_UPVOTE", payload);
    },
    edit_question_downvote(context, payload) {
      context.commit("EDIT_QUESTION_DOWNVOTE", payload);
    },
    edit_question_status(context, payload) {
      context.commit("EDIT_QUESTION_STATUS", payload);
    },
    edit_question_follower(context, payload) {
      context.commit("EDIT_QUESTION_FOLLOWER", payload);
    },
    add_user_medals(context, payload) {
      context.commit("ADD_USER_MEDAL", payload);
    }
  },
  getters: {
    getUsers: state => state.users,
    getQuestions: state => {
      let temp = state.questions.sort(function orderQuestionsByDate(a, b) {
        if (Date.parse(a.date) < Date.parse(b.date)) return 1;
        if (Date.parse(a.date) > Date.parse(b.date)) return -1;
        else return 0;
      });
      return temp;
    },
    getCourses: state => state.courses,
    getUnits: state => state.courseUnits,
    getTags: state => state.tags,
    getMedals: state => state.medals,
    getLevels: state => state.levels,
    /* getUnitsByCourseId: state => {
       let tempUnits
     },*/
    checkLogin: state => login => {



      let error = "";
      if (state.users.find(user => user.email === login.email) != null) {
        if (state.users.find(user => user.email === login.email).password != login.password) {
          error = "A password não está correta";
        } else {
          state.loggedUser = state.users.find(user => user.email == login.email)._id;

          /*********/
          localStorage.setItem("loggedUser", state.loggedUser);
        }
      } else {
        error = "O utilizador inserido não existe!";
      }
      return {
        error: error,
        userId: state.loggedUser
      };
    },
    checkUserRegister: state => register => {
      let error = "";
      if (state.users.find(user => user.email === register.email) == null) {
        state.loggedUser = register._id;

        /*********/
        localStorage.setItem("loggedUser", state.loggedUser);
      } else {
        error = "Esse utilizador já está registado";
      }
      return error;
    },
    getUserLastId: state => {
      let lastId = 0;
      if (state.users.length > 0) {
        lastId = state.users[state.users.length - 1]._id + 1;
      }
      return lastId;
    },
    getUserById: state => id => {
      return state.users.find(user => user._id === id);
    },
    getUserId: state => login => {
      return state.users.find(user => user.email === login.email)._id;
    },
    getUnitsByUserId: state => id => {
      let tempArray = [];
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i]._id == id) {
          tempArray = state.users[i].units;
        }
      }
      return tempArray;
    },
    getQuestionsByUserId: state => id => {
      let tempArray = [];
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].user == id) {
          tempArray.push(state.questions[i]);
        }
      }
      return [...new Set(tempArray)];
    },
    getQuestionById: state => id => {
      console.log("oal",state.questions)
      return state.questions.find(question => question._id == id);
    },
    getQuestionsByStatus: state => status => {
      let tempArray = [];
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].status === status) {
          tempArray.push(state.questions[i]);
        }
      }
      return tempArray;
    },
    getFollowersByQuestionId: state => id => {
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i]._id === id) {
          return state.questions[i].followers;
        }
      }
    },
    getAnswersByQuestionId: state => id => {
      let tempArray = [];
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i]._id == id) {
          tempArray = state.questions[i].answers;
        }
      }
      return tempArray;
    },
    getUnitByCourseId: state => (courseId, unitId) => {
      let tempUnit = "";
      for (let i = 0; i < state.courses.length; i++) {
        if (state.courses[i]._id == courseId) {
          for (let j = 0; j < state.courses[i].courseUnit.length; j++) {
            if (state.courses[i].courseUnit[j]._id == unitId) {
              tempUnit = state.courses[i].courseUnit[j].unit;
            }
          }
        }
      }
      return tempUnit;
    },
    getUnitsByCourseId: state => id => {
      // let tempCourseUnits;
      let tempUnits = [];
      let tempUnits2 = [];
      console.log("id:", id)
      let cont;
      for (let i = 0; i < state.courses.length; i++) {
        //tempCourseUnits = state.courses[i].courseUnit
        if (state.courses[i]._id == id) {
          tempUnits = state.courses[i].units;
        }
      }

      // tempUnits.splice(",")
      console.log(tempUnits[tempUnits.length - 1])

      for (let i = 0; i < state.courseUnits.length; i++) {
        for (let j = 0; j < tempUnits.length; j++) {
          console.log("k: " + state.courseUnits[i]._id)
          if (tempUnits[j] == state.courseUnits[i]._id && tempUnits[j] == state.courseUnits[i]._id) {
            tempUnits2.push(state.courseUnits[i])
            console.log("aaa")
          }
        }
      }
      console.log("j: " + tempUnits[tempUnits.length - 1])
      return tempUnits2;
    },
    getUnitsByCourseId2: state => id => {
      // let tempCourseUnits;
      let tempUnits = [];
      let tempUnits2 = [];
      console.log("id:", id)
      let cont;
      for (let i = 0; i < state.courses.length; i++) {
        //tempCourseUnits = state.courses[i].courseUnit
        if (state.courses[i]._id == id) {
          tempUnits = state.courses[i].units;
        }
      }

      // tempUnits.splice(",")
      console.log(tempUnits[tempUnits.length - 1])

      for (let i = 0; i < state.courseUnits.length; i++) {
        for (let j = 0; j < tempUnits.length; j++) {
          console.log("k: " + state.courseUnits[i]._id)
          if (tempUnits[j] == state.courseUnits[i]._id && tempUnits[j] == state.courseUnits[i]._id) {
            tempUnits2.push(state.courseUnits[i].unit)
            console.log("aaa")
          }
        }
      }
      console.log("j: " + tempUnits[tempUnits.length - 1])
      return tempUnits2;
    },
    getTeacherNameById: state => id => {
      let temp = ""
      for (let i = 0; i < state.users.length; i++) {
        if(id == state.users[i]._id){
          temp = state.users[i].name
        }
      }
      console.log("temp:",temp)
      return temp
      //return state.users.find(id => user._id == id);
    },
    getLevelById: state => id => {
      return state.levels.find(level => level._id == id);
    },
    getMedalById: state => id => {
      return state.medals.find(medal => medal._id == id);
    },
    checkUserUnitsById: state => newUnit => {
      let error = "";

      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i]._id == newUnit) {
          for (let j = 0; j < state.users[i].subscriptions.length; j++) {
            if (state.users[i].subscriptions[j] == newUnit && state.users[i].subscriptions[j] == newUnit) {
              error = "Já está inscrita";
            }
          }
        }
      }
      return error;
    },
    checkCourseLabel: state => {
      let tempArray = [];
      for (let i = 0; i < state.courses.length; i++) {
        let tempCourse = {
          id: state.courses[i]._id,
          course: state.courses[i].course
        };
        tempArray.push(tempCourse);
      }
      return [...new Set(tempArray)];
    },

    checkCourseUnitLabel: state => {
      let tempArray = [];
      for (let i = 0; i < state.courseUnits.length; i++) {
        let tempUnit = {
          id: state.courseUnits[i]._id,
          unit: state.courseUnits[i].unit
        };
        tempArray.push(tempUnit);
      }
      return [...new Set(tempArray)];
    },

    getTodaysDate() {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }
      today = dd + "/" + mm + "/" + yyyy;
      return today;
    }
  }
});
