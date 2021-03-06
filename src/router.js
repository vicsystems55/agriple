import Vue from "vue";
import Router from "vue-router";
import Agriple from "./views/Agriple.vue";
import Search from "./views/Search.vue";
import SingleView from "./views/SingleView.vue";

Vue.use(Router);

export default new Router({
  routes: [
  

    {
      path: "/",
      name: "agriple",
      component: Agriple
    },


    {
      path: "/search",
      name: "search",
      component: Agriple
    },
    {
      path: "/singleView/:slug",
      name: "singleView",
      component: SingleView
    },
    {
      path: "/about/:slug",
      name: "about",
     
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
