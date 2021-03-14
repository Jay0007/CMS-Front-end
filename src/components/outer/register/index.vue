<template>
  <v-container fill-height class="pa-0">
    <v-row align="center" justify="center">
      <v-card align="center">
        <v-row align="center" justify="center">
        <v-col
          sm="5"
          cols="12"
          class="pa-0"
        >
          <v-card class="login_area" flat>
            <div class="display-1 text--primary"><v-icon>mdi-account</v-icon>Sign Up</div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="7" class="pa-0">
          <v-card elevation='0' outlined>
            <v-card-text>
              <v-form v-model="validx" @keyup.native.enter="login">
                <div class="user_login text-xs-left">
                  <v-text-field
                    v-model="email"
                    label="Email*"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    v-model="password"
                    :rules="passwordRules"
                    label="Password*"
                    required
                    class="mt-4"
                  ></v-text-field>
                </div>
                <v-btn @click="register" :disabled="!validx" :loading="loading" class="ma-0 white--text px-4 font-weight-bold" style="background:#f4a631;border-radius:25px;font-size:0.9em">register</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        </v-row>
      </v-card>
    </v-row>
    <!-- <v-snackbar
      v-model="snackbar"
      :timeout="1000"
      :value="true"
      absolute
      bottom
      color="deep-purple accent-4"
      elevation="24"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    text: "Please, try again...",
    loading: false,
    validx: true,
    show1: false,
    email: null,
    emailRules: [
      v => !!v || "Email is required",
      v => (v && v.length >= 6) || "Email must be greater than 6 characters"
    ],
    password: null,
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 1) || "Password must have 5+ characters"
      // v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      // v => /(?=.*\d)/.test(v) || 'Must have one number',
      // v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
    ]
  }),
  methods: {
    register(){
      this.loading = true;
      var userData = {
        email: this.email,
        password: this.password
      }
      var that = this;
      axios
        .post(this.$store.getters.getBaseUrl + "/api/user/register", userData)
        .then(function (res) {
          that.loading = false;
          that.$store.dispatch("setTokenForUser", {
            token: res.data
          }).then(() => {
            that.$router.push({ path: "/app/home" })
          })
        }).catch(function (error) {
          that.loading = false;
          console.log(error)
          that.$store.commit("createSnackbar", {
            color: "red",
            content: error
          })
        })
    },
    login2() {
      this.loading = true;
      var userData = {
        subDomain: "srmist",
        email: this.email,
        password: this.password
      };
      var that = this;
      axios
        .post(this.$store.getters.getBaseUrl + "/auth/login", userData)
        .then(res => {
          if (res.data.success === false) {
            that.$store.commit("createSnackbar", {
              color: "red",
              content: res.data.reason
            });
            this.loading = false;
          } else {
            this.loading = false;
            this.$store.commit("setTokenForUser", {
              token: res.data.data.token
            }).then(res=>{
              console.log(res +'token already set')
              this.$router.push({ path: "/app/home" })
            })
          }
        })
        .catch(err => {
          console.error(err);
          that.$store.commit("networkError");
        });
    }
  },
  computed: {
    valid: function() {
      return this.email != "" && this.password != ""; // eslint-disable-line
    }
  }
};
</script>
<style scoped>
.material-icons {
  font-size: 36px !important;
}
.login_area {
  font-family: Roboto;
  font-size: 33px;
  font-weight: 100;
}
.reset_password {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
}

a {
  text-decoration: none;
}

.user_login {
  font-family: roboto;
  font-weight: 400;
  font-size: 15px;
  margin-top: 35px;
}

.row {
  margin-right: 0;
  margin-left: 0;
}
/* .login_button {
    margin-top: 30px
  } */

/* .button {
    width:100%;
    height: 68px;
  } */
</style>
