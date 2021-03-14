import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
Vue.prototype.$axios = axios;
import { store } from "./store/store";

Vue.config.productionTip = false;
axios.defaults.headers.common["auth-token"] = localStorage.getItem(
  "auth-token"
);
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!window.localStorage.getItem("auth-token")) {
      console.log("global ckecker failed");
      next({ path: "/login" });
    } else {
      console.log("global ckecker pass");
      next();
    }
  } else {
    next();
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
