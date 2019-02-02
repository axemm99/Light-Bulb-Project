<template>
  <b-container fluid>
    <div class="middle newQuestion">
      <b-row class="subrow">
        <h2>Nova Pergunta</h2>
      </b-row>

      <b-row class="subrow frmQuestion">
        <b-form id="frmQuestion">
          <b-form-group label="Título" label-for="inputTitle">
            <b-form-input id="inputTitle" v-model="form.title" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label="Descrição" label-for="inputDescription">
            <b-form-textarea
              id="inputDescription"
              v-model="form.description"
              :rows="5"
              :max-rows="100"
              required
            ></b-form-textarea>
          </b-form-group>

          <div class="form-group">
            <label for="inputPhoto">Imagens (Opcional)</label>
            <input type="url" class="form-control" id="inputPhoto">
          </div>

          <!--<div class="form-group">
            <label for="inputPhoto">Imagens (Opcional)</label>
            <input
              type="file"
              multiple
              accept="image/*, .pdf, .png, .jpg"
              class="form-control"
              id="inputPhoto"
            >
          </div>

          <div class="form-group">
            <label for="inputFiles">Ficheiros (Opcional)</label>
            <input type="file" multiple class="form-control" id="inputFiles">
          </div>

          TAGS ?????
          <div class="form-group">
            <label for="inputTags">Tags</label>
            <select id="inputTags" multiple="multiple" size="10">
              <option :value="tags.id">{{ tags.tag }}</option>
            </select>
          </div>

          COURSE ?????
          <div class="form-group">
            <label for="inputCourses">Curso</label>
            <select id="inputCourses" multiple="multiple" size="10">
              <option :value="courses.id">{{ courses.course }}</option>
            </select>
          </div>
          
          UNITS ?????
          <div class="form-group">
            <label for="inputUnits">Disciplinas</label>
            <select id="inputUnits" multiple="multiple" size="10">
              <option :value="courses.courseUnit.id">{{ courses.courseUnit.unit }}</option>
            </select>
          </div>-->
          <b-button @click="addQuestion()" class="btn" type="button">Publicar</b-button>
        </b-form>
      </b-row>
    </div>
  </b-container>
</template>


<script>
export default {
  name: "addQuestion",
  data: function() {
    return {
      loggedUser: 0,
      form: {
        title: "",
        description: "",
        idTags: [],
        idCourse: 0,
        files: "",
        images: ""
      },
      tempQuestions: [],
      todaysDate: "",

      /********/
      tempLoggedId: 0
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;
    this.todaysDate = this.$store.getters.getTodaysDate;

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
  },
  methods: {
    checkQuestion(fields) {
      let error = "";

      if (fields.title == "" || fields.description == "") {
        error = "Os dados estão incompletos";
      }
      return error;
    },

    questionValidation() {
      let fields = {
        title: this.form.title,
        description: this.form.description
      };
      let valid = false;

      if (this.checkQuestion(fields) == "") {
        valid = true;
      } else {
        valid = false;
      }

      return {
        valid: valid,
        msg: this.checkQuestion(fields)
      };
    },

    addQuestion() {
      let newQuestion = {
        id: this.$store.getters.getQuestionLastId,
        title: this.form.title,
        description: this.form.description,
        idTags: [],
        idCourse: 0,
        files: "",
        images: "",
        userId: this.tempLoggedId,
        date: this.$store.getters.getTodaysDate,
        view: 0,
        upvote: 0,
        downvote: 0,
        status: "unlocked",
        answers: []
      };

      if (this.questionValidation().valid) {
        this.addXP();
        this.checkChallenges();
        this.$store.dispatch("set_question", newQuestion);
        alert("Registo efetuado com sucesso");
      } else {
        alert(this.questionValidation().msg);
      }
    },

    addXP() {
      let xp = {
        amount: 5,
        user: this.tempLoggedId
      };
      this.$store.dispatch("edit_user_xp", xp);
    },

    checkChallenges() {
      let temp = this.$store.getters.getQuestionsByUserId(this.tempLoggedId);

        console.log(temp.length);
      if (temp.length == 0) {
        let newMedal = {
          medal: 2,
          userId: this.tempLoggedId
        };

        console.log(newMedal);
        this.$store.dispatch("add_user_medals", newMedal);
      }
    }
  },
  computed: {
    questions() {
      return this.$store.getters.questions;
    },
    tags() {
      return this.$store.getters.tags;
    }
  }
};
</script>


<style>
.newQuestion h2 {
  color: white;
}

.frmQuestion {
  margin: 50px 0px 0px 0px;
}

#frmQuestion {
  padding: 5px;
  width: 100%;
  text-align: left;
}

#frmQuestion .btn {
  float: right;
}
</style>
