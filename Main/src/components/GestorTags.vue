<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="nameLabel" label="Tag:" label-for="inputName">
        <b-form-input
          id="inputName"
          v-model="form.tag"
          type="text"
          required
          placeholder="Tag"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Adicionar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <br>
    <div>
      <b-table
        striped
        hover
        :items="getTags()"
        :fields="fields"
        :bordered="bordered"
        :outlined="outlined"
      >
        <template slot="remover_tag" slot-scope="row">
          <b-button size="sm" @click="row.removeUser" class="mr-2">Remover</b-button>
        </template>

      </b-table>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "gestor",
  data: function() {
    return {
      form: {
        tag: ""
      },
      items: [
      ],
      fields: ["id", "tag", "remover_tag"],
      units: [],
      show: true
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;
    this.tempTags = this.$store.state.tags;
    //this.tempCourseUnit;
    /* for(let i=0; i<this.tempCourses.length; i++){
      this.tempCourseUnit.push(this.tempCourses[i].courseUnit);
    }*/
    console.log(this.tempTags);

    /********/
    this.tempLoggedId = parseInt(
      JSON.parse(localStorage.getItem("loggedUser"))
    );
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.tag = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    getTags(){
      let temp = [];
      console.log(this.tempTags);
      console.log(this.tempTags.length);

      for (let i = 0; i < this.tempTags.length; i++) {
        console.log("d: " + i);
        
        temp.push(
          {
            id: this.tempTags[i]._id,
            tag: this.tempTags[i].tag
          }
        );
        console.log("c: " + temp);
      }
      return temp;
    },
    
  },
  computed: {}
};
</script>


<style>
.courseList {
  margin-top: 30px;
}
.course {
  margin: 5px 0px !important;
  border-bottom: 2px solid #ffd150;
}

.course p {
  padding-top: auto;
  font-size: 16px;
}

#courseTitle {
  background-color: white;
  border-radius: 5px;
  padding: 5px 15px;
  margin-top: 10px;
}

#courseTitle h5 {
  color: black;
}

#signInUnit p {
  margin-top: 20px;
}

#signInBtn {
  margin-bottom: 10px;
}
</style>