// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire);

firebase.initializeApp({
    projectId: process.env.FIREBASE_PROJECT,
    databaseURL: process.env.FIREBASE_DB
});

export const db = firebase.firestore();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
});
