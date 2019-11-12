import Vue from 'vue'
import VueRouter from 'vue-router'
import app_page from "../views/app_page";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'app_page',
    component: app_page
  },
]

const router = new VueRouter({
  routes
})

export default router
