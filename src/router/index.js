import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import iView from 'view-design';
import locale from 'view-design/dist/locale/en-US'

Vue.use(VueRouter);
Vue.use(iView, {locale: locale});

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
