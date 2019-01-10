<template>
    <form id="addQuestion">
        <div class="form-group">
            <label for="inputTitleQuestion">Titulo da Pergunta</label>
            <input type="text" class="form-control" id="inputTitleQuestion" placeholder="" required>
        </div>

        <div class="form-group">
            <label for="inputDescription">Descrição</label>
            <input type="text" class="form-control" id="inputDescription" placeholder="" required>
        </div>

        <!--<div class="form-group">
            <label for="inputPhoto">Foto (Opcional)</label>
            <input type="url" class="form-control" id="inputPhoto" placeholder="">
        </div>-->
        
        <div class="form-group">
            <label for="inputPhoto">Foto (Opcional)</label>
            <input type="file" multiple accept="image/*,.pdf,.png,.jpg" class="form-control" id="inputPhoto">
        </div>

        <div class="form-group">
            <label for="inputFiles">Ficheiros (Opcional)</label>
            <input type="file" multiple class="form-control" id="inputFiles">
        </div>

        <div class="form-group">
            <label for="inputTags">Tags</label>

            <select id="inputTags" multiple="multiple" size="10" name="duallistbox_demo1">
              <!--  <option value="poo">POO</option>
                <option value="aed">AED</option>
                <option value="tsiw">TSIW</option>
                <option value="multimedia">Multimédia</option>
                <option value="ams">AMS</option>
                <option value="bibloteca">Biblioteca</option>
                <option value="design">Design</option>
                <option value="pwi">PWI</option>
                <option value="esmad">ESMAD</option>
                <option value="matematica1">Matemática I</option>
                <option value="css">CSS</option>-->
            </select>

           <!-- <input type="text" data-role="tagsinput" class="form-control" id="inputTags" placeholder="Separa as palavras com uma virgula">-->
        </div>
        
        <button type="button" @click="addQuestion()" id="btnAdd" class="btn btn-primary">Adicionar</button>
        <button type="button" id="btnCancel" class="btn btn-secondary">Cancelar</button>
    </form>
</template>



<style>
</style>

<script>
//import new form ".../store.js";

//import store from './store.js'

export default {
  //el: "#addQuestion",
  name: "addQuestion",
  data: function() {
    return {
        id: 0,
        title: "",
        description: "",
        idTags: [],
        idCourse: 0,
        files: "",
        images: "",
        userId: 0,
        date: "0",
        view: 0,
        upvote: 0,
        downvote: 0,
        status: "",
        answers: []
      }

    },
   /* computed: {
            questions() {
                return this.$store.getters.questions;
            }
        },*/
  
 /* data: function() {
    return {
      idQuestion: 0,
      //upvotes: 0,
      //downvotes: 0,
      //
      //idUser: 0,
      //username: "",
      title: "",
      description: "",
      questions: []
    };
  },*/
 /* beforeCreated(){
    let inputTags = document.getElementById("inputTags")
    let tags = this.$store.getters.tags
    this.$store.getters.loadTags(inputTags, tags)
  },*/
  created() {
    let questions = this.$store.getters.questions
    if (localStorage.getItem("questions")) {
      this.questions = JSON.parse(localStorage.getItem("questions"));
     // console.log(this.questions)
      //console.log(questions)
    }
    else {
        /*for (let i = 0; i < questions.length; i++) {
            localStorage.setItem("questions", JSON.stringify(questions[i]));     
        }*/
        localStorage.setItem("questions", JSON.stringify(this.questions));
    }
    let inputTags = document.getElementById("inputTags")
    let tags = this.$store.getters.tags
    this.$store.getters.loadTags(inputTags, tags)
  },
  beforeUpdate(){
    let questions = this.$store.getters.questions
    localStorage.setItem("questions", JSON.stringify(this.questions));
  },
  updated(){
    let questions = this.$store.getters.questions
    localStorage.setItem("questions", JSON.stringify(this.questions));
  },
  destroyed() {
    let questions = this.$store.getters.questions
    localStorage.setItem("questions", JSON.stringify(this.questions));
    /*for (let i = 0; i < questions.length; i++) {
        localStorage.setItem("questions", JSON.stringify(questions[i]));     
    }*/
   // localStorage.setItem("questions", JSON.stringify(this.questions));
  },
  methods: {
    validation(title, description){
        let newQuestion = {
            title: title,
            description: description
        }

        let valid = false
        if (this.$store.getters.validQuestion(newQuestion) == "") {
            valid = true;
        }
        else{
            valid = false
        }

        return {
            valid: valid,
            msg: this.$store.getters.validQuestion(newQuestion)
        };
    },
    getLastId() {
      return this.questions.length
        ? this.questions[this.questions.length - 1].id
        : 0;
    },

    getTodaysDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
        dd = '0' + dd;
        }

        if (mm < 10) {
        mm = '0' + mm;
        }

        today = dd + '/' + mm + '/' + yyyy;

        return today
    },

    addQuestion() {
        let inputTitleQuestion = document.getElementById("inputTitleQuestion");
        let inputDescription = document.getElementById("inputDescription");
        let inputPhoto = document.getElementById("inputPhoto");
        let inputFiles = document.getElementById("inputFiles");
        let inputTags = document.getElementById("inputTags");
        let questions = this.$store.getters.questions
        let currentState = this.$store.getters.state
        let tags = this.$store.getters.tags
        let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
        //let currentTagId = 0
        console.log(parseInt(loggedUser))
        for(let i=0; i<tags.length; i++){            
            console.log(tags[i].id)
        }
        //let currentUser = currentState.loggedUser
        //let tags = (inputTags.value).split(",");
       // console.log(tags)

       console.log(inputTags.value)

        if (this.validation(inputTitleQuestion.value, inputDescription.value).valid){
            for(let i=0; i<tags.length; i++){
                if(parseInt(loggedUser)){

                }
            }

            this.questions.push({
                id: Number(this.getLastId()) + 1,
                title: inputTitleQuestion.value,
                description: inputDescription.value,        
                idTags: inputTags.value,
                idCourse: 0,
                files: inputFiles.value,
                images: inputPhoto.value,
                userId: parseInt(loggedUser),
                date: this.getTodaysDate(),
                view: 0,
                upvote: 0,
                downvote: 0,
                status: "unlocked",
                answers: []
            });

            console.log(this.questions)
            

            localStorage.setItem("questions", JSON.stringify(this.questions));


        }
        else {
            alert(
                this.validation(inputTitleQuestion.value, inputDescription.value).msg
            );
        }
        
    }
  }
};
</script>
