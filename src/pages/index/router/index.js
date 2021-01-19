import Vue from "vue";
import Router from "vue-router";

import Home from "../views/home";
import History from "../views/history";
import HistoryDetails from "../views/historyDetails";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/history",
      name: "History",
      component: History
    },
    {
      path: "/historyDetails",
      name: "HistoryDetails",
      component: HistoryDetails
    }
  ]
});
