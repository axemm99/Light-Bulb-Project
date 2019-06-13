<template>
  <b-container fluid>
    <div class="middle profile">
      <b-row id="personal" class="subrow">
        <!-- PERSONAL -->
        <b-col md="3">
          <!-- SUB ROW 1 -->
          <b-row id="profilePic">
            <img :src="activeUser.profilePic" alt="pic.png">
          </b-row>
          <b-row id="contact" class="profileText">
            <h6>Endereço eletrónico</h6>
            <p>{{ activeUser.email }}</p>
          </b-row>
        </b-col>
        <b-col md="6" id="profileInfo" class="profileText">
          <h4>{{ activeUser.name }}</h4>
          <p>Level {{ activeUser.gameElements.level }} - {{ userLevel.label }}</p>

          <!-- XP -->
          <p class="w-25 barXP">XP: {{ activeUser.gameElements.xp }}</p>
          <b-progress :value="activeUser.gameElements.xp" :max="userLevel.maxXP" class="w-50"></b-progress>
          <p class="w-25 barXP">{{ activeUser.gameElements.levelXP }} / {{ userLevel.maxXP }}</p>
        </b-col>

        <!-- STATS -->
        <b-col md="2" id="profileStats" class="profileText">
          <b-row>
            <b-col md="6">
              <p>
                {{ getQuestionsByUserId(activeUser.id).length }}
                <br>Perguntas
              </p>
            </b-col>
            <b-col md="6">
              <p>
                {{ countAnswersByUserId() }}
                <br>Respostas
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <p>
                {{ countUpvotes() }}
                <br>Upvotes
              </p>
            </b-col>
            <b-col md="6">
              <p>
                {{ activeUser.gameElements.medals.length }}
                <br>Medalhas
              </p>
            </b-col>
          </b-row>
          <b-row>
            <p></p>
          </b-row>
        </b-col>
      </b-row>

      <b-row id="activity" class="subrow">
        <!-- HISTORY -->
        <b-col id="profileHistory" md="6" class="profileText">
          <h6>Histórico</h6>

          <!-- DIVISION BAR -->
          <b-row id="divisionBarQuestion" class="bar"></b-row>

          <b-col md="12" v-for="question in tempQuestions" :key="question.id" class="history">
            <router-link :to="{ name: 'question', params: { id: question.id } }">
              <b-row>
                <b-col md="7" class="text-left historyQuestions">
                  <p>{{ question.title }}</p>
                </b-col>
                <b-col md="1" class="text-left historyQuestions">
                  <i class="fa fa-long-arrow-alt-up"></i>
                  <p>&nbsp;{{ question.upvote }}</p>
                </b-col>
                <b-col md="1" class="text-left historyQuestions">
                  <i class="fa fa-long-arrow-alt-down"></i>
                  <p>&nbsp;{{ question.downvote }}</p>
                </b-col>
                <b-col md="1" class="text-left historyQuestions">
                  <i class="fa fa-eye"></i>
                  <p>&nbsp;{{ question.view }}</p>
                </b-col>
              </b-row>
            </router-link>
          </b-col>
        </b-col>

        <!-- ACHIVEMENTS -->
        <b-col id="profileMedals" md="5" class="profileText">
          <h6>Conquistas</h6>

          <!-- DIVISION BAR -->
          <b-row id="divisionBarQuestion" class="bar"></b-row>

          <b-row class="subrow">
            <b-col md="4" v-for="medal in userMedals" :key="medal.id" class="medal">
              <p>{{ medal.label }}</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "profile",
  data: function() {
    return {
      loggedUser: 0,
      activeUser: {},
      userLevel: {},
      userMedals: [],
      tempQuestions: [],
      userLevel: {},

      /********/
      tempLoggedId: 0
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );

    this.activeUser = this.getUserById(this.tempLoggedId);
    this.userLevel = this.getLevelById(this.activeUser.gameElements.level);
    this.tempQuestions = this.getQuestionsByUserId(this.tempLoggedId);
    this.showUserMedals();
  },
  methods: {
    countUpvotes() {
      let count = 0;
      if (this.tempQuestions.length != 0) {
        for (let i = 0; i < this.tempQuestions.length; i++) {
          count += this.tempQuestions[i].upvote;
        }
      }
      return count;
    },

    countAnswersByUserId() {
      let count = 0;
      for (let i = 0; i < this.tempQuestions.length; i++) {
        for (let j = 0; j < this.tempQuestions[i].answers.length; j++) {
          if (this.tempQuestions[i].answers[j].userId == this.tempLoggedId) {
            count++;
          }          
        }
      }
      return count;
    },

    showUserMedals() {
      let medals = this.activeUser.gameElements.medals;
      for (let i = 0; i < medals.length; i++) {
        let temp = {
          id: medals[i],
          label: this.getMedalById(medals[i]).label,
          type: this.getMedalById(medals[i]).type
        };
        this.userMedals.push(temp);
      }
    },

    showUserQuestions() {
      for (let i = 0; i < this.tempMedals.length; i++) {
        let temp = {
          id: this.tempMedals[i],
          label: this.getMedalById(this.tempMedals[i]).label,
          type: this.getMedalById(this.tempMedals[i]).type
        };
        this.userMedals.push(temp);
      }
    }
  },
  computed: {
    ...mapGetters([
      "getUsers",
      "getQuestions",
      "getLevels",
      "getUserById",
      "getQuestionsByUserId",
      "getAnswersByUserId",
      "getMedalById",
      "getLevelById"
    ])
  }
};
</script>


<style>
#activity {
  margin-top: 100px;
}

.profile {
  margin: 80px;
  padding: 0px;
}

.profile h6,
h4,
h3 {
  font-weight: bold;
  color: black;
}

.profile p {
  color: black;
  font-size: 14px;
  margin-bottom: 10px;
}

.profileText {
  text-align: left;
}

#profilePic img {
  padding: 0px;
  margin-bottom: 0px;
  border-radius: 50%;
  height: 150px;
  max-height: 150px;
}

#contact {
  margin: 50px 0px 0px 30px;
}

#contact h6,
p {
  display: block;
  padding: 0px;
  margin: 0px 0px 10px 0px;
}

#profileStats {
  padding: 15px;
  margin-bottom: 120px;
  background-color: grey;
}

#profileHistory .bar,
#profileMedals .bar {
  margin-left: 0px;
  background-color: #ffd050ad;
  height: 3px;
}

.medal {
  background-color: #adadadad;
  margin-top: 10px;
  margin-right: 10px;
  display: inline-block;
  border-radius: 10px;
  padding-top: 5px;
}

.medal p {
  color: black;
  font-weight: bold;
  text-align: center !important;
}

.history {
  background-color: #adadadad;
  display: inline-block;
}

.historyQuestions {
  display: inline-block;
}
</style>
