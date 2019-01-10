import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: 0,
    challenges: [
      {
        id: 1,
        msg: "1a pergunta",
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
        institutionId: 100,
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
          medals: [1]
        }
      },
      {
        id: 2,
        type: "teacher",
        fullName: "João Torres",
        username: "João Torres",
        email: "54321@a.a",
        password: "54321",
        institutionId: 100,
        profilePic:
          "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg",
        notificationsType: [],
        gameElements: {
          xp: 0,
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
        view: 3,
        upvote: 2,
        downvote: 3,
        status: "unlocked",
        answers: []
      },
      {
        id: 2,
        title: "Uma pergunta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        idTags: [1],
        idCourse: 1,
        files: "",
        images: "",
        userId: 1,
        date: "01-01-2018",
        view: 3,
        upvote: 2,
        downvote: 3,
        status: "locked",
        answers: [
          {
            id: 1,
            userId: 2,
            date: "01-01-2018",
            answer: "...",
            upvote: 2,
            downvote: 3
          },
          {
            id: 2,
            userId: 2,
            date: "01-01-2018",
            answer: "...",
            upvote: 2,
            downvote: 3
          }
        ]
      },
      {
        id: 3,
        title: "Outra pergunta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        idTags: [1, 2],
        idCourse: 1,
        files: "",
        images: "",
        userId: 1,
        date: "01-10-2018",
        view: 3,
        upvote: 2,
        downvote: 3,
        status: "locked",
        answers: [
          {
            id: 1,
            userId: 2,
            date: "01-01-2018",
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
    notifications: []
  },
  mutations: { },
  actions: {},
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
          localStorage.setItem("loggedUser", state.loggedUser);
        }
      } else {
        error = "O utilizador inserido não existe";
      }
      return error;
    },

    validQuestion: state => newQuestion => {
      let error = ""

      if(newQuestion.title == "" || newQuestion.description == ""){
        error = "Os dados estão incompletos"
      }

      return error
    },

    loadTags: inputTags => tags => state => newQuestion => {
      for(let i=0; i<tags.lenght; i++){
        inputTags.innerHTML = `<option id='${tags[i].id}'>${tags[i].tag}</option>`
        console.log("tags: " + tags[i])
      }
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
    loggedUser(state){
      return state.loggedUser;
    },
    users(state){
      return state.users;
    }
  }
});
