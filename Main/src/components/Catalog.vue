<template>
  <div class="container catalog">
    <div class="row">
      <h2>Explorar Perguntas</h2>
    </div>

    <div class="row">
      <!-- FILTER -->
      <div id="filter" class="col-md-6 d-flex filter">
        <div class="col-md-6 d-flex filter">
          <b-button @click="orderMostAnswers" class="btn">Destaques</b-button>
          <b-button @click="orderMostRecent" class="btn">Recentes</b-button>
        </div>
        <div class="col-md-2 d-flex filter">
          <b-button class="btn">
            <i class="fa fa-lock" aria-hidden="true"></i>
          </b-button>
          <b-button class="btn">
            <i class="fa fa-unlock" aria-hidden="true"></i>
          </b-button>
        </div>
      </div>

      <!-- NEW QUESTION -->
      <div id="newQuestion" class="col-md-6 d-flex flex-row-reverse">
        <router-link :to="{ name: 'newQuestion' }">
          <b-button class="btn">Nova Questão</b-button>
        </router-link>
      </div>
    </div>

    <!-- QUESTIONS -->
    <div v-for="question in questions" :key="question.id" class="row mb-3">
      <div class="col-md-12">
        <div class="row">
          <div
            v-for="course in courses"
            :key="course.id"
            class="col-md-12"
            style="background-color:lightgrey; border-radius:10px"
          >
            <div class="col-md-12 d-flex" v-if="question.idCourse === course.id">
              <p>{{ course.course }}</p>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1">
            <i v-if="question.status === 'locked'" class="fa fa-lock" aria-hidden="true"></i>
            <i v-else class="fa fa-unlock" aria-hidden="true"></i>
          </div>
          <div class="col-md-8 text-left">
            <router-link :to="{ name: 'Questions' }">
              <h5>{{ question.title }}</h5>
            </router-link>
          </div>

          <div class="col-md-3">
            <i class="fa fa-arrow-up" style="color:green" aria-hidden="true"></i>
            {{ question.upvote }}
            <i
              class="fa fa-arrow-down ml-3"
              style="color:red"
              aria-hidden="true"
            ></i>
            {{ question.downvote}}
            <i class="fa fa-eye ml-3" aria-hidden="true"></i>
            {{ question.view}}
          </div>
        </div>

        <!-- STILL TESTING -->
        <div class="row">
          <div class="col-md-11 offset-1 text-left">
            <div class="row">
              <div v-for="tag in tags" :key="tag.id">
                <div v-for="questionIdTag in question.idTags" :key="questionIdTag">
                  <h5
                    v-if="questionIdTag === tag.id"
                    class="badge badge-secondary mr-2"
                  >{{ tag.tag }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-3" style="background-color:grey"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Catalog",
  data: function() {
    return {};
  },
  methods: {
    showQuestions() {
      this.$store.state.questions;
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
    orderDownAnswers(a, b) {
      if (a.answers.length < b.answers.length) return 1;
      if (a.answers.length > b.answers.length) return -1;
      else return 0;
    },

    orderMostRecent() {
      this.$store.state.questions.sort(this.orderDownDate);
    },
    orderMostAnswers() {
      this.$store.state.questions.sort(this.orderDownAnswers);
    }
  },
  computed: {
    questions() {
      return this.$store.getters.questions;
    },
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
#filter,
#newQuestion {
  margin: 0px;
}

#filter .btn {
  padding: 5px 0px;
  margin: 50px 15px 0px 0px;
}

#newQuestion .btn {
  padding: 5px 0px;
  margin: 0px 15px 0px 0px;
}

#filter i {
  padding: 0px 10px;
  color: white;
}

#newQuestion a {
  margin: 0px;
}

.catalog {
  margin: 20px 0px;
  background-color: white;
}

.catalog h2 {
  margin-top: 20px;
}

.filter {
  padding: 5px 0px;
  margin-right: 15px;
}
</style>