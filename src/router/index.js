import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PunchIt from "../views/punch-it.vue";
import todo from "../views/todos.vue";
import calculator from "../views/calculator.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/punch-it",
    component: PunchIt,
  },
  {
    path: "/todos",
    component: todo,
  },
  {
    path: "/calculator",
    component: calculator,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

/*
useRoute - Data and action for active route
useRouter - Action and events of route instance

 */
