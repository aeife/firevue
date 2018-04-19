import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        counter,
        user
    },
    strict: debug
});
