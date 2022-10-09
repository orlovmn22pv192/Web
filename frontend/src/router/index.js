import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import NewsView from "@/views/NewsView";
import NewsPageView from "@/views/NewsPageView";
import GamesView from "@/views/GamesView";
import GamePageView from "@/views/GamePageView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView
  },
  {
    path: '/news_page',
    name: 'NewsPage',
    component: NewsPageView
  },
  {
    path: '/games',
    name: 'Games',
    component: GamesView
  },
  {
    path: '/game_page',
    name: 'GamePage',
    component: GamePageView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router