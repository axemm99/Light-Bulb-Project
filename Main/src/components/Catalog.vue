<template>
  <b-container fluid>
    <div class="middle catalog">
      <b-row class="subrow">
        <h2>Explorar Perguntas</h2>
      </b-row>

      <!--BUTTONS -->
      <b-row class="subrow row1">
        <!-- FILTER -->
        <b-col id="filter" md="6" class="d-flex filter">
          <b-button
            :pressed.sync="topClicked"
            @click="orderTopQuestions"
            id="topQuestions"
            class="btn text"
          >Destaques</b-button>
          <b-button
            :pressed.sync="recentClicked"
            @click="orderRecentQuestions"
            id="recentQuestions"
            class="btn text"
          >Recentes</b-button>
          <b-button
            :pressed.sync="lockedClicked"
            @click="showOnlyLocked"
            id="lockedQuestions"
            class="btn"
          >
            <i class="fa fa-lock" aria-hidden="true"></i>
          </b-button>
          <b-button
            :pressed.sync="unlockedClicked"
            @click="showOnlyUnlocked"
            id="unlockedQuestions"
            class="btn"
          >
            <i class="fa fa-unlock" aria-hidden="true"></i>
          </b-button>
        </b-col>

        <!-- NEW QUESTION -->
        <b-col id="newQuestion" md="6" class="d-flex flex-row-reverse align-self-end">
          <router-link :to="{ name: 'newQuestion' }">
            <b-button class="btn text">Nova Pergunta</b-button>
          </router-link>
        </b-col>
      </b-row>

      <!-- QUESTIONS -->
      <b-row class="subrow">
        <b-col md="12" v-for="question in sortedQuestions" :key="question.id" class="question">
          <b-row>
            <b-col md="1" class="questionDetails">
              <i class="fa fa-heart"></i>
            </b-col>
            <b-col>
            <router-link :to="{ name: 'question', params: { id: question.id } }">
              <b-row>
                <b-col md="8" class="text-left questionDetails">
                  <h5>{{ question.title }}</h5>
                </b-col>
                <b-col md="3" class="text-left questionDetails">
                  <i class="fa fa-long-arrow-alt-up"></i>
                  <p>&nbsp;{{ question.upvote }}</p>
                  <i class="fa fa-long-arrow-alt-down"></i>
                  <p>&nbsp;{{ question.downvote }}</p>
                  <i class="fa fa-eye"></i>
                  <p>&nbsp;{{ question.view }}</p>
                </b-col>
                <b-col md="1" class="text-left questionDetails">
                  <i v-if="question.status === 'locked'" class="fa fa-lock" aria-hidden="true"></i>
                  <i v-else class="fa fa-unlock" aria-hidden="true"></i>
                </b-col>
              </b-row>
            </router-link>
            </b-col>
          </b-row>
          <!--<b-row>
            <b-col
              md="12"
              v-for="course in courses"
              :key="course.id"
              class="text-left questionCourse"
            >
              <router-link :to="{ name: '', params: { } }">
                <p v-if="question.idCourse === course.id">{{ course.course }}</p>
              </router-link>
            </b-col>
          </b-row>
          <b-row class="orange">
            <b-col md="12" v-for="tag in tags" :key="tag.id" class="text-left yellow">
              <router-link :to="{ name: '', params: { } }">
                <p v-if="question.idTags === tag.id">{{ tag.tag }}</p>
              </router-link>
            </b-col>
          </b-row>-->
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>


<script>
export default {
  name: "catalog",
  data: function() {
    return {
      tempCourses: [],
      tempQuestions: [],
      sortedQuestions: [],
      tempLocked: [],
      tempUnlocked: [],
      topClicked: false,
      recentClicked: false,
      lockedClicked: false,
      unlockedClicked: false
    };
  },
  created() {
    //this.tempsortedQuestionsCourses = this.$store.getters.checkCourseLabel;
    this.tempQuestions = this.$store.getters.questions;
    this.sortedQuestions = this.tempQuestions;
    this.tempLocked = this.$store.getters.getLockedQuestions;
    this.tempUnlocked = this.$store.getters.getUnlockedQuestions;
  },
  methods: {
    orderQuestionById(a, b) {
      if (a.questions.id < b.questions.id) return 1;
      if (a.questions.id > b.questions.id) return -1;
      else return 0;
    },

    orderQuestionsUp(a, b) {
      if (a.answers.length < b.answers.length) return 1;
      if (a.answers.length > b.answers.length) return -1;
      else return 0;
    },

    orderUpDate(a, b) {
      if (Date.parse(a.date) > Date.parse(b.date)) return 1;
      if (Date.parse(a.date) < Date.parse(b.date)) return -1;
      else return 0;
    },

    orderDownDate(a, b) {
      if (Date.parse(a.date) < Date.parse(b.date)) return 1;
      if (Date.parse(a.date) > Date.parse(b.date)) return -1;
      else return 0;
    },

    orderTopQuestions() {
      if (this.topClicked) {
        this.sortedQuestions = [...this.sortedQuestions].sort(this.orderQuestionsUp);
      } else {
        this.sortedQuestions = this.tempQuestions;
      }
    },

    orderRecentQuestions() {
      if (this.recentClicked) {
        this.sortedQuestions = [...this.sortedQuestions].sort(this.orderDownDate);
      } else {
        this.sortedQuestions = this.tempQuestions;
      }
    },

    showOnlyLocked() {
      if (this.lockedClicked) {
        this.sortedQuestions = this.tempLocked;
      } else {
        this.sortedQuestions = this.tempQuestions;
      }
    },

    showOnlyUnlocked() {
      if (this.unlockedClicked) {
        this.sortedQuestions = this.tempUnlocked;
      } else {
        this.sortedQuestions = this.tempQuestions;
      }
    }
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
    courses() {
      return this.$store.getters.courses;
    }
  }
};
</script>


<style>
.catalog h2,
.catalog h5,
.catalog p,
.catalog .fa {
  color: white;
}

.catalog p {
  display: inline-block;
  margin-right: 6px;
}

.row1 {
  margin-bottom: 25px;
}

.catalog .fa-long-arrow-alt-up {
  color: rgb(29, 175, 102) !important;
}

.catalog .fa-long-arrow-alt-down {
  color: rgb(187, 5, 5) !important;
}

.catalog .fa-heart {
  background-color: transparent;
}

.catalog .fa-heart:hover {
  background-color: transparent;
  color: rgb(255, 174, 0) !important;
}

#filter,
#newQuestion {
  margin: 0px;
}

.filter {
  padding: 5px 0px;
  margin-right: 15px;
}

#filter .btn {
  padding: 5px 0px;
  margin: 50px 15px 0px 0px;
}

#filter .text {
  padding: 5px;
}

#filter i {
  padding: 0px 10px;
  color: white;
}

#newQuestion b-button {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.questionCourse {
  font-size: 12px;
  padding-left: 50px !important;
}

.question {
  margin: 5px 0px !important;
  border-bottom: 0.5px solid grey;
}

.questionDetails {
  padding: 0px;
}
</style>
