<template>
  <b-container fluid>
    <div v-if="question" class="middle questionPage">
      <!-- QUESTION TITLE -->
      <b-row class="subrow questionInfo">
        <h2>{{ question.title }}</h2>
        <div id="lock" v-if="question.user == tempLoggedId">
          <div v-if="question.locked == false">
            <b-button class="btn">
              <i
                @click="edit_question_status(question._id)"
                class="fa fa-unlock"
                aria-hidden="true"
              ></i>
            </b-button>
          </div>
          <div v-if="question.locked == true">
            <i class="fa fa-lock" aria-hidden="true"></i>
          </div>
        </div>
      </b-row>

      <!-- DIVISION BAR -->
      <b-row id="divisionBarQuestion" class="yellow"></b-row>

      <!-- QUESTION INFO -->
      <b-row class="subrow rowsInfo">
        <b-col md="12">
          <!-- QUESTION VOTES -->
          <b-row>
            <b-col md="1" class="votes">
              <b-row class="voteBtn">
                <b-button class="upBtn" @click="upvote(question._id)">
                  <i
                    class="fa fa-angle-up fa-lg"
                    :style="checkVote(question.upvotes) ? 'color: rgb(29, 175, 102) !important;' : 'color: rgb(177, 177, 177) !important;'"
                  ></i>
                </b-button>
                <p>{{ question.upvotes.length }}</p>
              </b-row>
              <b-row class="voteBtn">
                <b-button class="downBtn" @click="downvote(question._id)">
                  <i
                    class="fa fa-angle-down fa-lg"
                    :style="checkVote(question.downvotes) ? 'color: rgb(187, 5, 5) !important;' : 'color: rgb(177, 177, 177) !important;'"
                  ></i>
                </b-button>
                <p>{{ question.downvotes.length }}</p>
              </b-row>
              <b-row class="followBtn">
                <b-button class="likeBtn">
                  <i class="fa fa-heart fa-lg"></i>
                </b-button>
              </b-row>
            </b-col>

            <b-col md="11">
              <!-- QUESTION CONTENT -->
              <b-row class="content">
                <p>{{ question.description }}</p>
              </b-row>
              <b-row class="d-flex flex-row-reverse">
                <!-- USER DATA -->
                <b-col md="4" class="userData">
                  <!--<b-row>
                  <b-col md="12">
                    <p>XXXX horas</p>
                  </b-col>
                  </b-row>-->
                  <b-row>
                    <b-col md="4" class="mt-3">
                      <img :src="questionUser.profilePic" alt="pic.png">
                    </b-col>
                    <b-col md="8" class="mt-2">
                      <p>{{ questionUser.name }}</p>
                      <p>Lvl - {{ getLevelById(this.questionUser.gameElements.level).level }}</p>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <!-- ANSWERS AMOUNT -->
      <b-row id="answersTab" class="subrow rowsInfo">
        <h5>{{question.answers.length}} Respostas</h5>
      </b-row>

      <!-- DIVISION BAR -->
      <b-row
        id="divisionBarQuestion"
        class="yellow"
        :style="question.answers.length == 0 ? 'margin: 200px;' : ''"
      ></b-row>

      <!-- ANSWERS LIST -->
      <b-row v-for="answer in question.answers" :key="answer._id" class="subrow rowsInfo">
        <b-col md="12">
          <!-- ANSWER VOTES -->
          <b-row>
            <b-col md="1" class="votes">
              <b-row class="voteBtn">
                <b-button class="upBtn">
                  <i class="fa fa-angle-up fa-lg"></i>
                </b-button>
                <p>{{answer.upvotes.length}}</p>
              </b-row>
              <b-row class="voteBtn">
                <b-button class="downBtn">
                  <i class="fa fa-angle-down fa-lg"></i>
                </b-button>
                <p>{{answer.downvotes.length}}</p>
              </b-row>
            </b-col>

            <b-col md="11">
              <!-- ANSWER CONTENT -->
              <b-row class="content">
                <p>{{ answer.description }}</p>
              </b-row>
              <b-row class="d-flex flex-row-reverse">
                <!-- USER DATA -->
                <b-col md="4" class="userData">
                  <!--<b-row>
                  <b-col md="12">
                    <p>XXXX horas</p>
                  </b-col>
                  </b-row>-->
                   <b-row>
                    <b-col md="4" class="mt-3">
                      <img :src="getUserById(answer.user).profilePic" alt="pic.png">
                    </b-col>
                    <b-col md="8" class="mt-2">
                      <p>{{ getUserById(answer.user).name }}</p>
                      <p>Lvl - {{ getLevelById(getUserById(answer.user).gameElements.level).level }}</p>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <div v-if="question.locked == false">
        <!-- NEW ANSWER -->
        <b-row class="subrow rowsInfo">
          <h5>A tua resposta</h5>
        </b-row>

        <!-- DIVISION BAR -->
        <b-row id="divisionBarQuestion" class="yellow"></b-row>

        <!-- WRITE NEW ANSWER -->
        <b-row id="newAnswer" class="subrow rowsInfo">
          <b-col md="12">
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
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>


<script>
//'5cfa466e4e08b34490da46df'
//tempLoggedId
import { mapGetters, mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "question",
  data: function() {
    return {
      loggedUser: 0,
      question: null,
      questionUser: {},
      answers: [],
      form: {
        newAnswer: ""
      },
      tempQuestionId: 0,

      /********/
      tempLoggedId: 0
    };
  },
  watch: {
    // whenever question changes, this function will run
    questions: function(newQuestion, oldQuestion) {
      console.log("newQuestion");
      console.log(newQuestion);
      if (newQuestion.length > 0) {
        this.answers = this.getAnswersByQuestionId(this.tempQuestionId);
        this.question = this.getQuestionById(this.tempQuestionId);
        this.questionUser = this.getUserById(this.question.user);
      }
    }
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;
    this.tempQuestionId = this.$route.params.id;
    console.log(this.$route);

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
  },
  mounted() {
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadCourses");
    this.$store.dispatch("loadQuestions");
    this.$store.dispatch("loadUnits");
    this.$store.dispatch("loadMedals");
    this.$store.dispatch("loadLevels");
    this.$store.dispatch("loadTags");
  },
  methods: {
    ...mapActions(["edit_question_status"]),
    upvote(question) {
      let tempParams = {
        question: question,
        user: this.tempLoggedId
      };
      if (!this.checkVote(this.question.upvotes)) {
        this.$store.dispatch("edit_question_upvote", tempParams);
      }
    },
    downvote(question) {
      let tempParams = {
        question: question,
        user: this.tempLoggedId
      };
      if (!this.checkVote(this.question.downvotes)) {
        this.$store.dispatch("edit_question_downvote", tempParams);
      }
    },
    checkVote(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == this.tempLoggedId) {
          return true;
        } else {
          return false;
        }
      }
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
        id: this.getAnswerLastId(this.tempQuestionId),
        user: this.loggedUser,
        date: this.$store.getters.getTodaysDate,
        description: this.form.newAnswer,
        upvotes: [],
        downvotes: []
      };
      let tempParams = {
        newAnswer: newAnswer,
        questionId: this.tempQuestionId
      };

      if (this.answerValidation().valid) {
        this.$store.dispatch("set_answer", tempParams);
        alert("Registo efetuado com sucesso");
      } else {
        alert(this.answerValidation().msg);
      }
    }
  },
  computed: {
    ...mapGetters([
      "getQuestions",
      "getUsers",
      "getCourses",
      "getQuestionById",
      "getUserById",
      "getAnswersByQuestionId",
      "getLevelById"
    ]),
    ...mapState([
      "users",
      "courses",
      "questions",
      "courseUnits",
      "medals",
      "levels",
      "tags"
    ])
  }
};
</script>


<style>
.questionPage h2,
.questionPage h5,
.questionPage p,
.questionPage .fa {
  color: black;
}

.rowsInfo {
  padding: 20px !important;
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
}

.votes {
  padding: 5px 15px;
}

.content {
  text-align: left !important;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
}

.content p {
  color: black;
}

.userData {
  background-color: #ffd150;
  margin: 15px 0px 0px 0px;
  padding-bottom: 15px;
  font-size: 13px;
  border-radius: 5px;
}

.userData p {
  float: right;
  margin: 10px 0px 0px 0px;
  color: black;
}

.userData img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 0px;
  margin: 0px;
}

#answersTab h5 {
  margin-bottom: 0px;
  color: black;
}

#newAnswer .form-control {
  border: 1px solid grey !important;
}

#newAnswer .btn {
  float: right;
}

#newAnswer .text {
  color: black;
}

#lock {
  margin: 35px 0px 0px 15px;
}

#lock .btn {
  margin: 0px;
  padding: 0px;
  background-color: transparent;
}
</style>
