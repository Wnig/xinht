// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'

import $ from 'jquery'

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import Home from './components/Home'
import Open from './components/Open'
import Join from './components/Join'

Vue.config.productionTip = false
Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
	routes: [
		{path: "/", component: Home,},
		{path: "/Open", component: Open,},
		{path: "/Join", component: Join,},
	],
	// mode: "history"
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
