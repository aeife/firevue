const state = {
    count: 0
};

const getters = {
    currentCount: state => state.count
};

const actions = {
    incrementBy ({ commit }, amount) {
        commit('increment', amount);
    }
};

const mutations = {
    increment (state, amount) {
        state.count += parseInt(amount, 10);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
