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
let app;

firebase.initializeApp({
    projectId: process.env.FIREBASE_PROJECT,
    databaseURL: process.env.FIREBASE_DB,
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
});

export const db = firebase.firestore();

firebase.auth().onAuthStateChanged(user => {
    if (!app) {
        /* eslint-disable no-new */
        app = new Vue({
            el: '#app',
            router,
            components: { App },
            template: '<App/>',
            store,
            beforeCreate () {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        this.$store.dispatch('user/autoSignIn', user);
                    }
                });
            }
        });
    } else {
        if (user) {
            store.dispatch('user/autoSignIn', user);
        } else {
            // AUTO LOGOUT??
        }
    }
});
