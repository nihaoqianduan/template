import Vue from "vue";
import Router from "vue-router";

import Home from "../views/home";
import Form from "../views/form";
import ImagePreview from "../views/imagePreview.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/form",
      name: "Form",
      component: Form
    },
    {
      path: "/imagePreview",
      name: "ImagePreview",
      component: ImagePreview
    }
  ]
});
