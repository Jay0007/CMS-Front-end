import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    baseUrl: "",
    token: "",
    snackbar: {
      state: false,
      color: "",
      content: ""
    },
    courses: [
      {
        image: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
        term: "",
        subjectCode: "",
        subject: "Past Exams"
      },
      {
        image: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
        term: "2020s",
        subjectCode: "COMP-5015-SDE/SDF/SDG",
        subject: "Ethical issues in computer science"
      },
      {
        image: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
        term: "2020s",
        subjectCode: "COMP-5015-SDE/SDF/SDG",
        subject: "Optimization Methods"
      },
      {
        image: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
        term: "2020s",
        subjectCode: "COMP-5015-SDE/SDF/SDG",
        subject: "Ethical issues in computer science"
      },
      {
        image: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
        term: "2020s",
        subjectCode: "COMP-5015-SDE/SDF/SDG",
        subject: "Ethical issues in computer science"
      }
    ]
  },
  getters: {
    getSnack: state => state.snackbar,
    getBaseUrl: state => state.baseUrl,
    getToken: state => state.token
  },
  mutations: {
    setBaseUrl(state, payload) {
      state.baseUrl = payload;
    },
    async setTokenForUser(state, user) {
      state.token = user.token;
      await window.localStorage.setItem("auth-token", user.token);
      // state.tokenValidity = true
    },
    removeTokenForUser(state) {
      state.token = "";
      window.localStorage.removeItem("auth-token");
      // state.tokenValidity = false
    },
    createSnackbar(state, payload) {
      state.snackbar.state = true;
      state.snackbar.color = payload.color;
      state.snackbar.content = payload.content;
    },
    closeSnackbar(state) {
      state.snackbar.state = false;
      state.snackbar.color = "";
      state.snackbar.content = "";
    }
  },
  actions: {
    async setTokenForUser(context, payload) {
      await context.commit("setTokenForUser", payload);
    }
  }
});
