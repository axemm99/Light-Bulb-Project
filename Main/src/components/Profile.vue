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
          <h4>{{ activeUser.fullName }}</h4>
          <p>{{ userLevel.label }}</p>
          <p>Level {{ tempGameElements.level }}</p>

          <!-- XP -->
          <p class="w-25 barXP">XP: {{ tempGameElements.xp }}</p>
          <b-progress :value="tempGameElements.xp" :max="userLevel.maxXP" class="w-50"></b-progress>
          <p class="w-25 barXP">{{ tempGameElements.levelXP }} / {{ userLevel.maxXP }}</p>
        </b-col>

        <!-- STATS -->
        <b-col md="2" id="profileStats" class="profileText">
          <b-row>
            <b-col md="6">
              <p>
                {{ stats.questions }}
                <br>Perguntas
              </p>
            </b-col>
            <b-col md="6">
              <p>
                {{ stats.answers }}
                <br>Respostas
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="6">
              <p>
                {{ stats.upvote }}
                <br>Upvotes
              </p>
            </b-col>
            <b-col md="6">
              <p>
                {{ tempGameElements.medals.length }}
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
export default {
  name: "profile",
  data: function() {
    return {
      loggedUser: 0,
      activeUser: {},
      stats: {
        questions: [],
        answers: 0,
        upvote: 0
      },
      userLevel: {
        label: "",
        maxXP: 0
      },
      userMedals: [],
      tempQuestions: [],
      tempLevel: {},
      tempGameElements: {},
      tempChallenges: [],
      tempUserLevel: {},

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

    this.activeUser = this.$store.getters.getUserInfoById(this.tempLoggedId);
    this.tempGameElements = this.activeUser.gameElements;
    this.tempChallenges = this.tempGameElements.medals;
    this.tempLevel = this.$store.getters.getLevelById(
      this.tempGameElements.level
    );
    this.tempQuestions = this.$store.getters.getQuestionsByUserId(
      this.tempLoggedId
    );
  },
  methods: {
    showActiveUser() {
      if (this.tempQuestions != []) {
        this.stats.questions = this.tempQuestions.length;
      }
      this.stats.answers = this.$store.getters.getAnswersByUserId(
        this.tempLoggedId
      );
      this.userLevel.label = this.tempLevel.label;
      this.userLevel.maxXP = this.tempLevel.maxXP;
    },

    countUpvotes() {
      let count = 0;

      if (this.tempQuestions.length != 0) {
        for (let i = 0; i < this.tempQuestions.length; i++) {
          count += this.tempQuestions[i].upvote;
        }
      }
      return count;
    },

    showUserMedals() {
      for (let i = 0; i < this.tempChallenges.length; i++) {
        let tempMedal = {
          id: this.tempChallenges[i],
          label: this.$store.getters.getMedalById(this.tempChallenges[i]).label,
          type: this.$store.getters.getMedalById(this.tempChallenges[i]).type
        };
        this.userMedals.push(tempMedal);
      }
    },

    showUserQuestions() {
      for (let i = 0; i < this.tempChallenges.length; i++) {
        let tempMedal = {
          id: this.tempChallenges[i],
          label: this.$store.getters.getMedalById(this.tempChallenges[i]).label,
          type: this.$store.getters.getMedalById(this.tempChallenges[i]).type
        };
        this.userMedals.push(tempMedal);
      }
    }
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },

    questions() {
      return this.$store.getters.questions;
    },

    levels() {
      return this.$store.getters.levels;
    }
  },
  mounted() {
    this.showActiveUser();
    this.showUserMedals();
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
  color: white;
}

.profile p {
  color: white;
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
  display: inline-block;}
</style>
