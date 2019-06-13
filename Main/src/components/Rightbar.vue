<template>
  <nav id="rightbar">
    <ul class="list-unstyled components">
      <li>
        <p>TAGS</p>
      </li>
    </ul>

    <h6>Top utilizadores</h6>
    <table class="table">
      <tbody>
        <tr v-for="(user, index) in showTopUsers(users, questions)" :key="user._id">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <img :src="user.profilePic" id="profilePic" alt="logo.png" height="40">
            {{ user.name }}
          </td>
          <td>{{ user.reputation }}</td>
        </tr>
      </tbody>
    </table>
  </nav>
</template>


<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "rightbar",
  data: function() {
    return {
      loggedUser: 0,
      tempUsers: [],
      topUsers: [],

      /********/
      tempLoggedId: 0
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;
    this.tempUsers = this.getUsers;
    this.tempQuestions = this.getQuestions;

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
    
    this.showTopUsers();
  },
  mounted() {
    
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadCourses");
    this.$store.dispatch("loadQuestions");
    this.$store.dispatch("loadUnits");
  },
  methods: {
    showTopUsers(users, questions) {
     // let questions = this.questions;
      let tempArray = []
      //console.log(this.users)

      this.users.forEach(user => {
        let reputation = 0;
        this.questions.forEach(question => {
             // console.log("000")
          if (question.user === user._id) {
             // console.log("000")
            reputation += question.upvotes.length;
            reputation -= question.downvotes.length;          
            user.reputation = reputation;
            if(user.reputation >= 0) {
              tempArray.push(user);
              //console.log("aaa")
            }
          }
        });
      });
      //console.log(tempArray)
      this.topUsers = [...new Set(tempArray)];
      this.topUsers.sort(this.sortByReputation);
      return this.topUsers
    },

    sortByReputation(a, b) {
      if (a.reputation < b.reputation) return 1;
      if (a.reputation > b.reputation) return -1;
      else return 0;
    }
  },
  computed: {
    ...mapGetters(["getUsers", "getQuestions", "getTopUsers"]),
    ...mapState(["users", "courses", "questions", "courseUnits"]),
  }
};
</script>


<style>
#rightbar {
  overflow: hidden;
  padding: 0px 40px;
  color: white;
  font-size: 13px;
}

#rightbar ul {
  padding-top: 50px;
  color: black;
}

#rightbar li {
  border-bottom: 1px solid #ffd050ad;
}

#rightbar h6 {
  margin-top: 50px;
  color: black;
}

#rightbar img {
  border-radius: 50%;
}

#rightbar .table tbody {
  border-top: none;
  border-bottom: 1px solid #ffd050ad !important;
  text-align: left;
  font-size: 16px;
  color: black;
}
</style>
