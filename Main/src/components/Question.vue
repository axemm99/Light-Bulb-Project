<template>
  <b-container fluid>
    <div class="middle questionPage">
      <!-- QUESTION TITLE -->
      <b-row class="subrow questionInfo">
        <h2>{{ question.title }}</h2>
      </b-row>

      <!-- DIVISION BAR -->
      <b-row id="divisionBarQuestion" class="grey"></b-row>

      <!-- QUESTION INFO -->
      <b-row class="subrow questionInfo">
        <!-- QUESTION VOTES -->
        <b-col md="1" id="votesInfo">
          <b-row class="voteBtn">
            <b-button class="upBtn" @click="addUpvote()">
              <i class="fa fa-angle-up fa-lg"></i>
            </b-button>
            <p>{{question.upvote}}</p>
          </b-row>
          <b-row class="voteBtn">
            <b-button class="downBtn" @click="addDownvote()">
              <i class="fa fa-angle-down fa-lg"></i>
            </b-button>
            <p>{{question.downvote}}</p>
          </b-row>
          <b-row class="followBtn">
            <b-button class="likeBtn">
              <i class="fa fa-heart fa-lg"></i>
            </b-button>
          </b-row>
        </b-col>

        <!-- QUESTION CONTENT -->
        <b-col md="8" id="questionContent">
          <p>{{ question.description }}</p>
        </b-col>

        <!-- QUESTION USER DATA -->
        <b-col class="questionUserData">
          <b-row id="questionUserTime">
            <b-col md="12">
              <!--<p>XXXX horas</p>-->
            </b-col>
          </b-row>
          <b-row id="questionUserInfo">
            <b-col md="3">
              <img :src="questionUser.profilePic" alt="pic.png">
            </b-col>
            <b-col md="9">
              <p>{{ questionUser.fullName }}</p>
              <p>Lvl {{ tempLevel.id }} - {{ tempLevel.label }}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <!-- ANSWERS AMOUNT -->
      <b-row id="answersTab" class="subrow questionInfo">
        <h5>{{answers.length}} Respostas</h5>
      </b-row>

      <!-- DIVISION BAR -->
      <b-row id="divisionBarQuestion" class="grey"></b-row>

      <!-- ANSWERS LIST -->
      <b-row v-for="answer in answers" :key="answer.id" class="subrow questionInfo">
        <!-- ANSWER VOTES -->
        <b-col md="1" id="votesInfo">
          <b-row class="voteBtn">
            <b-button class="upBtn">
              <i class="fa fa-angle-up fa-lg"></i>
            </b-button>
            <p>{{answer.upvote}}</p>
          </b-row>
          <b-row class="voteBtn">
            <b-button class="downBtn">
              <i class="fa fa-angle-down fa-lg"></i>
            </b-button>
            <p>{{answer.downvote}}</p>
          </b-row>
        </b-col>

        <!-- ANSWER CONTENT -->
        <b-col md="8" id="answerContent" class="red">
          <p>{{ answer.answer }}</p>
        </b-col>

        <!-- ANSWER USER DATA -->
        <!--<b-col v-id="answer.userId == answerUsers.id" class="answerUserData">
          <b-row id="questionUserTime">
            <b-col md="12">
              <p>XXXX horas</p>
            </b-col>
          </b-row>
          <b-row id="questionUserInfo">
            <b-col md="3">
              <img :src="answerUsers.profilePic" alt="pic.png">
            </b-col>
            <b-col md="9">
              <p>{{answerUsers.fullName}}</p>
              <p>level</p>
            </b-col>
          </b-row>
        </b-col>-->
      </b-row>

      <!-- NEW ANSWER -->
      <b-row class="subrow questionInfo">
        <h5>A tua resposta</h5>
      </b-row>

      <!-- DIVISION BAR -->
      <b-row id="divisionBarQuestion" class="questionInfo grey"></b-row>

      <!-- WRITE NEW ANSWER -->
      <b-row id="newAnswer" class="subrow questionInfo">
        <b-form id="frmAnswer">
          <b-form-group>
            <b-form-textarea
              id="inputAnswer"
              v-model="form.newAnswer"
              :rows="3"
              :max-rows="100"
              required
            ></b-form-textarea>
          </b-form-group>

          <b-button @click="addAnswer()" class="btn" type="button">Publicar</b-button>
        </b-form>
      </b-row>
    </div>
  </b-container>
</template>


<script>
export default {
  name: "question",
  data: function() {
    return {
      loggedUser: 0,
      question: {},
      questionUser: {},
      answers: [],
      answerUsersId: [],
      answerUsers: [],
      form: {
        newAnswer: ""
      },

      /********/
      tempLoggedId: 0,
      tempQuestionId: 0,
      tempLevel: ""
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;
    this.tempQuestionId = this.$route.params.id;

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
  },
  methods: {
    showQuestion() {
      this.question = this.$store.getters.getQuestionById(this.tempQuestionId);
    },

    showQuestionUser() {
      this.questionUser = this.$store.getters.getUserInfoById(
        this.question.userId
      );
      this.tempLevel = this.$store.getters.getLevelById(this.questionUser.gameElements.level);
    },

    showAnswers() {
      this.answers = this.$store.getters.getAnswersByQuestionId(
        this.tempQuestionId
      );
    },

    getAnswerUserId() {
      for (let i = 0; i < this.answers.length; i++) {
        this.answerUsersId.push(this.answers[i].userId);
      }
    },

    showAnswerUser() {
      for (let i = 0; i < this.answerUsersId.length; i++) {
        this.answerUsers = this.$store.getters.getUserInfoById(
          this.answerUsersId[i]
        );
      }
      console.log(this.answerUsers);
    },

    checkAnswer(field) {
      let error = "";

      if (field) {
        error = "Os dados estão incompletos";
      }
      return error;
    },

    answerValidation() {
      let valid = false;

      if (!this.checkAnswer(this.form.newAnswer) == "") {
        valid = true;
      } else {
        valid = false;
      }

      return {
        valid: valid,
        msg: this.checkAnswer(this.form.newAnswer)
      };
    },

    addAnswer() {
      let newAnswer = {
        id: this.$store.getters.getAnswerLastId(this.tempQuestionId),
        userId: this.loggedUser,
        date: this.$store.getters.getTodaysDate,
        answer: this.form.newAnswer,
        upvote: 0,
        downvote: 0
      };

      let tempParams = {
        newAnswer: newAnswer,
        questionId: this.tempQuestionId
      };

      if (this.answerValidation().valid) {
        this.$store.dispatch("set_answer", tempParams);
        alert("Registo efetuado com sucesso");
        console.log(this.answers);
      } else {
        alert(this.answerValidation().msg);
      }
    },

    addUpvote() {
      let upvote = {
        amount: 1,
        question: this.tempQuestionId
      };
      this.$store.dispatch("edit_question_upvote", upvote);
    },

    addDownvote() {
      let downvote = {
        amount: 1,
        question: this.tempQuestionId
      };
      this.$store.dispatch("edit_question_downvote", downvote);
    }
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    questions() {
      return this.$store.getters.questions;
    },
    courses() {
      return this.$store.getters.courses;
    }
  },
  mounted() {
    this.showQuestion();
    this.showQuestionUser();
    this.showAnswers();
  }
};
</script>


<style>
.questionPage {
  background-color: rgb(255, 255, 255);
}

#divisionBarQuestion {
  margin: 20px 50px 0px 50px;
}

#votesInfo {
  padding: 15px 0px 0px 20px !important;
  margin: 0px;
}

.upBtn,
.downBtn,
.likeBtn {
  background-color: transparent;
  color: rgb(177, 177, 177) !important;
}

.upBtn:hover {
  background-color: transparent;
  color: rgb(29, 175, 102) !important;
}

.downBtn:hover {
  background-color: transparent;
  color: rgb(187, 5, 5) !important;
}

.likeBtn:hover {
  background-color: transparent;
  color: rgb(255, 174, 0) !important;
}

.voteBtn .btn,
.voteBtn p,
.followBtn .btn,
.followBtn p {
  padding: 0px 5px;
  margin: 2px 0px;
  text-align: center;
  display: inline-block;
  color: black;
}

.questionInfo {
  margin: 50px 50px 0px 50px;
}

#questionContent,
#answerContent {
  margin: 0px 15px 0px 0px;
  padding: 10px;
  background-color: rgb(192, 192, 192);
  font-size: 15px;
}

.questionUserData {
  margin-right: 0px;
}

#questionUserTime,
#questionUserInfo {
  font-size: 13px;
  background-color: rgb(192, 192, 192);
}

#questionUserTime p {
  float: right;
  margin-top: 10px;
}

#questionUserInfo {
  padding-bottom: 15px;
}

#questionUserInfo p {
  margin: 0px 0px 0px 10px;
}

#questionUserInfo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0px;
  margin: 0px;
}

#answersTab h5 {
  margin-bottom: 0px;
}

#newAnswer .form-control {
  border: 1px solid grey !important;
}
</style>
