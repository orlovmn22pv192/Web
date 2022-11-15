import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import NewsView from "@/views/NewsView";
import ListOfNews from "@/views/ListOfNewsView";
import GamesView from "@/views/GamesView";
import GameView from "@/views/GameView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
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
    path: '/list_of_news',
    name: 'ListOfNews',
    component: ListOfNews
  },
  {
    path: '/games',
    name: 'Games',
    component: GamesView
  },
  {
    path: '/game',
    name: 'Game',
    component: GameView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router