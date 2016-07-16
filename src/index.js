import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
});

var app = Vue.extend({});

router.map({
  '/': {
    name: 'home',
    component : require('./views/demo')
  }
});

router.start(app, '#app')
