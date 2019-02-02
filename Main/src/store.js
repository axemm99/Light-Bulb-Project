import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: 0,
    challenges: [
      {
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
      }
    ],
    users: [
      {
        id: 1,
        type: "student",
        fullName: "Ana Maria Torres",
        username: "9100000",
        email: "12345@a.a",
        password: "12345",
        registerDate: "01-01-2017",
        institutionId: 1,
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
          medals: [1, 2]
        }
      },
      {
        id: 2,
        type: "teacher",
        fullName: "João Torres",
        username: "João Torres",
        email: "54321@a.a",
        password: "54321",
        registerDate: "01-01-2017",
        institutionId: 1,
        units: [],
        profilePic:
          "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg",
        notificationsType: [],
        gameElements: {
          xp: 0,
          levelXP: 0,
          level: 1,
          medals: []
        }
      },
      {
        id: 3,
        type: "student",
        fullName: "Manuel Torres",
        username: "9009000",
        email: "a@a.a",
        password: "12345",
        registerDate: "01-01-2017",
        institutionId: 1,
        units: [],
        profilePic:
          "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg",
        notificationsType: [],
        gameElements: {
          xp: 0,
          levelXP: 0,
          level: 1,
          medals: []
        }
      }
    ],
    questions: [
      {
        id: 1,
        title: "Quando é a entrega?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        idTags: [1],
        idCourse: 1,
        files: "",
        images: "",
        userId: 1,
        date: "01-01-2018",
        view: 15,
        upvote: 0,
        downvote: 3,
        status: "unlocked",
        answers: []
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
        upvote: 10,
        downvote: 1,
        status: "locked",
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
        ]
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
        userId: 1,
        date: "01-02-2018",
        view: 30,
        upvote: 5,
        downvote: 1,
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
        ]
      }
    ],
    courses: [
      {
        id: 1,
        course: "Tecnologias e Sistemas de Informação para a Web",
        courseUnit: [
          {
            id: 1,
            unit: "Programação para a Web I",
            year: 2
          },
          {
            id: 2,
            unit: "Progamação Orientada a Objectos",
            year: 1
          }
        ]
      },
      {
        id: 2,
        course: "Design",
        courseUnit: [
          {
            id: 1,
            unit: "Introdução ao Design",
            year: 1
          }
        ]
      }
    ],
    tags: [
      {
        id: 1,
        tag: "poo"
      },
      {
        id: 2,
        tag: "css"
      }
    ],
    notifications: [],
    levels: [
      {
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
      }
    ]
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = payload;
    },

    SET_QUESTION(state, payload) {
      state.questions.push(payload);
    },

    SET_ANSWER(state, payload) {
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].id == payload.questionId) {
          state.questions[i].answers.push(payload.newAnswer);
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
          state.users[i].units.push(temp);
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
          state.questions[i].upvote += payload.amount;
        }
      }
    },

    EDIT_QUESTION_DOWNVOTE(state, payload) {
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].id == payload.question) {
          state.questions[i].downvote += payload.amount;
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
    }
  },

  actions: {
    set_logged_user(context, payload) {
      context.commit("SET_LOGGED_USER", payload);
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

    add_user_medals(context, payload) {
      context.commit("ADD_USER_MEDAL", payload);
    }
  },
  getters: {
    /* check if user login exists */
    checkUser: state => login => {
      let error = "";

      if (login.username === "" || login.password === "") {
        error = "Os dados estão incompletos";
      } else if (state.users.find(user => user.username === login.username) != null) {
        if (state.users.find(user => user.username === login.username).password != login.password) {
          error = "A password não está correta";
        } else {
          state.loggedUser = state.users.find(user => user.username == login.username).id;

          /*********/
          localStorage.setItem("loggedUser", state.loggedUser);
        }
      } else {
        error = "O utilizador inserido não existe";
      }
      return error;
    },

    checkUserUnitsById: state => newUnit => {
      let error = "";

      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id == newUnit.userId) {
          for (let j = 0; j < state.users[i].units.length; j++) {
            if (state.users[i].units[j].unitId == newUnit.unitId && state.users[i].units[j].courseId == newUnit.courseId) {
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
          id: state.courses[i].id,
          course: state.courses[i].course
        };
        tempArray.push(tempCourse);
      }
      return [...new Set(tempArray)];
    },

    /*
    checkCourseUnitLabel: state => {
      let tempArray = [];

      for (let i = 0; i < state.courses.courseUnit.length; i++) {
        let tempCourseUnit = {
          id: state.courses.courseUnit[i].id,
          course: state.courses.courseUnit[i].unit
        };
        tempArray.push(tempCourseUnit);
      }
      return [...new Set(tempArray)];
    },*/

    getUserId: state => login => {
      return state.users.find(user => user.username == login.username).id;
    },

    getQuestionLastId: state => {
      let lastId = 0;
      if (state.questions.length > 0) {
        lastId = state.questions[state.questions.length - 1].id + 1;
      }
      return lastId;
    },

    getAnswerLastId: state => id => {
      let lastId = 0;
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].id == id) {
          if (state.questions[i].answers.length > 0) {
            lastId = state.questions[state.questions[i].answers.length - 1].id + 1;
          }
        }
      }
      return lastId;
    },

    getUserInfoById: state => id => {
      return state.users.find(user => user.id == id);
    },

    getUserUnitsById: state => id => {
      let tempArray = [];
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id == id) {
          tempArray = state.users[i].units;
        }
      }
      return tempArray;
    },

    checkUserLevel: state => checkLevel => {
      let tempLevel = {};

      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id == checkLevel.userId) {
          for (let i = 0; i < state.levels.length; i++) {
            if (state.levels[i].id == checkLevel.levelId) {
              tempLevel = {
                userId: checkLevel.userId,
                level: checkLevel.levelId
              };
            }
          }
        }
      }
      return tempLevel;
    },

    getUnitByCourseId: state => (courseId, unitId) => {
      let tempName = "";

      for (let i = 0; i < state.courses.length; i++) {
        if (state.courses[i].id == courseId) {
          for (let j = 0; j < state.courses[i].courseUnit.length; j++) {
            if (state.courses[i].courseUnit[j].id == unitId) {
              tempName = state.courses[i].courseUnit[j].unit;
            }
          }
        }
      }
      return tempName;
    },

    getQuestionById: state => id => {
      return state.questions.find(question => question.id == id);
    },

    getLockedQuestions: state => {
      let tempArray = [];
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].status === "locked") {
          tempArray.push(state.questions[i]);
        }
      }
      return tempArray;
    },

    getUnlockedQuestions: state => {
      let tempArray = [];
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].status === "unlocked") {
          tempArray.push(state.questions[i]);
        }
      }
      return tempArray;
    },

    getLevelById: state => id => {
      return state.levels.find(level => level.id == id);
    },

    getMedalById: state => id => {
      return state.challenges.find(challenge => challenge.id == id);
    },

    getQuestionsByUserId: state => id => {
      let tempArray = [];
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].userId == id) {
          tempArray.push(state.questions[i]);
        }
      }
      return [...new Set(tempArray)];
    },

    getAnswersByUserId: state => loggedUser => {
      let count = 0;
      for (let i = 0; i < state.questions.length; i++) {
        for (let j = 0; j < state.questions[i].answers.length; j++) {
          if (state.questions[i].answers[j].userId == loggedUser) {
            count++;
          }
        }
      }
      return count;
    },

    getAnswersByQuestionId: state => id => {
      let tempArray = [];
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i].id == id) {
          tempArray = state.questions[i].answers;
        }
      }
      return tempArray;
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
    },

    getRankingUsers() {
      let tempUsers = []
      let xp = 0
      let xp2 = 0
      let xp3 = 0
      let firstPlace
      let secondPlace
      let thirdPlace
      for (let i = 0; i < state.users.length; i++) {
        tempUsers = state.users[i].gameElements;
        for (let j = 0; j < tempUsers.length; j++) {
          if(tempUsers[j].xp > xp){
            xp = tempUsers[j].xp
            firstPlace = state.users[i].id
          }        
        }
      }

      

    },

    users(state) {
      return state.users;
    },

    questions(state) {
      return state.questions;
    },

    tags(state) {
      return state.tags;
    },

    courses(state) {
      return state.courses;
    },

    levels(state) {
      return state.levels;
    }
  }
});
