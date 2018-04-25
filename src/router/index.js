import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Test from '@/components/Test';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import firebase from 'firebase';
import waitForAuth from './waitForAuth';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/test',
        name: 'Test',
        component: Test,
        beforeEnter: waitForAuth,
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    }]
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        next('login');
    } else if (!requiresAuth && currentUser) {
        // next('test');
        next();
    } else {
        next();
    }
});

export default router;
