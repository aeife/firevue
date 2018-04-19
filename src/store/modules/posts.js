import {db} from '@/main.js';

export default {
    namespaced: true,
    state: {
        list: []
    },
    getters: {
        getAll (state) {
            return state.list;
        }
    },
    actions: {
        async add ({commit}, post) {
            await db.collection('posts').add(post);
        },
        async delete ({commit}, id) {
            await db.collection('posts').doc(id).delete();
        },
        async update ({commit}, post) {
            await db.collection('posts').doc(post.id).set(post);
        },
        init ({commit}) {
            db.collection('posts').onSnapshot(querySnapshot => {
                const posts = [];
                querySnapshot.forEach(doc => {
                    posts.push({ id: doc.id, ...doc.data() });
                });
                commit('setPosts', posts);
            });
        }
    },
    mutations: {
        setPosts (state, payload) {
            state.list = payload;
        }
    }
};
