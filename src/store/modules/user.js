import firebase from 'firebase';
import {db} from '../../main';

const state = {
    profile: null,
    data: {}
};

const getters = {
    profile (state) {
        return state.profile;
    },
    data (state) {
        return state.data;
    },
    loggedIn (state) {
        console.log('state', state.profile);
        return state.profile && state.profile.id;
    }
};

const actions = {
    async signUp ({commit}, payload) {
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
            console.log('user', user);
            // const t = await user.sendEmailVerification();
            user.sendEmailVerification().then(() => {
                console.log('send Verification');
            }, error => {
                console.log('not send Verification', error);
            });
            // commit('setUser', {
            //     id: user.uid,
            //     email: user.email
            // });
        } catch (error) {
            console.log('oops, error', error);
        }
    },
    async login ({commit}, payload) {
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
            console.log('user', user);
            // commit('setUser', {
            //     id: user.uid,
            //     email: user.email
            // });
        } catch (error) {
            console.log('oops error, ', error);
        }
    },
    autoSignIn ({commit, dispatch}, payload) {
        console.log('auto signin');
        console.log(payload);
        commit('setUser', {
            id: payload.uid,
            email: payload.email
        });
        dispatch('fetchUserData');
    },
    async fetchUserData ({commit, state}) {
        const user = await db.collection('users').doc(state.profile.id).get();
        commit('setUserData', user.data());
    },
    async logout ({commit}) {
        await firebase.auth().signOut();
    }
};

const mutations = {
    setUser (state, payload) {
        state.profile = payload;
    },
    setUserData (state, payload) {
        state.data = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
