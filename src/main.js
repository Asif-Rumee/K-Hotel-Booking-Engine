import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import router from "./router";
import VueSimpleAlert from "vue-simple-alert";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VueSimpleAlert);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
