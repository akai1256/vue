import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from './controllers/Top'
import List from './controllers/List'
import Done from './controllers/Done'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Top},
    { path: '/list', component: List},
    { path: '/done', component: Done}
]

export default new VueRouter({
    routes // `routes: routes` の短縮表記
  })