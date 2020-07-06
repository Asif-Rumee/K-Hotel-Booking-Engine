import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import IbeLite from "./components/IbeLite.vue";
import IbeRoomBook from "./components/IbeRoomBook.vue";

export default new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: "/", component: IbeLite, name: "home" },
    { path: "/booking", component: IbeRoomBook, name: "booking" }
  ]
});
