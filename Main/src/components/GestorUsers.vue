<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="nameLabel" label="Nome:" label-for="inputName">
        <b-form-input id="inputName" v-model="form.name" type="text" required placeholder="Nome"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Tipo:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.type"
          :options="setType()"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="emailLabel" label="E-mail:" label-for="inputEmail">
        <b-form-input id="inputEmail" v-model="form.email" type="text" required placeholder="E-mail"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Adicionar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <br>
    <div>
      <b-table :items="setItems" :fields="fields" striped>
        <template slot="editar_user" slot-scope="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">Editar Utilizador</b-button>
        </template>

        <template slot="remover_user" slot-scope="row">
          <b-button size="sm" @click="row.removeUser" class="mr-2">Remover Utilizador</b-button>
        </template>

        <template slot="row-details" slot-scope="row">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right">
                <b>ID:</b>
              </b-col>
              <b-col>{{ row.item._id }}</b-col>
            </b-row>

            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right">
                <b>Is Active:</b>
              </b-col>
              <b-col>{{ row.item.isActive }}</b-col>
            </b-row>

            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
          </b-card>
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
        name: "",
        email: "",
        type: ""
      },
      fields: ["id", "name", "type", "email", "editar_user", "remover_user"],
      items: [],
      show: true
    };
  },
  created() {
    this.loggedUser = this.$store.state.loggedUser;
    this.tempUsers = this.$store.state.users;

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
      this.form.name = "";
      this.form.unit = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    setItems() {
      let temp = [];
      console.log(this.tempUsers);
      console.log(this.tempUsers.length);

      for (let i = 0; i < this.tempUsers.length; i++) {
        console.log("d: " + i);

        temp.push({
          id: this.tempUsers[i]._id,
          name: this.tempUsers[i].name,
          type: this.tempUsers[i].type,
          email: this.tempUsers[i].email
        });
        console.log("c: " + temp);
      }
      return temp;
    },

    setType() {
      let temp;
      temp = ["Student", "Teacher"]
      return temp;
    }
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
