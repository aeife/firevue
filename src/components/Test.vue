<template>
    <div class="hello">
        <h1>test</h1>
        <p>{{msg}}</p>
        <h2>user: {{this.email}}</h2>
        <router-link to="/login">Login</router-link>
        <router-link to="/">Test</router-link>
        <button @click="logout">Logout</button>
        <p>Counter: {{this.count}}</p>
        <input type="number" placeholder="amount" v-model="amount">
        <button @click="apply">Apply</button>
        <h1>posts</h1>
        <!-- {{posts[0].title}} -->
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                <h2>{{post.title}}</h2>
                <small>{{post.id}}</small>
                <input type="text" v-model="post.text">
                <button @click="updatePost(post)">update</button>
                <button class="button is-small is-danger" @click="deletePost(post.id)">
                    Delete
                </button>
            </li>
        </ul>
        <form @submit.prevent="addPost(title, text)">
            <h2>Add a New Post</h2>
            <input v-model="title" placeholder="title" class="input">
            <input v-model="text" placeholder="text" class="input">
            <button type="submit" class="button is-success">Add New Post</button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { db } from '../main';

export default {
    name: 'Test',
    data () {
        return {
            msg: 'This is the Test Page',
            amount: null,
            posts: [],
            title: '',
            text: ''
        };
    },
    firestore () {
        return {
            posts: db.collection('posts')
        };
    },
    computed: {
        email () {
            const profile = this.$store.getters['user/profile'];
            return profile ? profile.email : null;
        },
        ...mapGetters({
            count: 'currentCount',
            profile: 'user/profile'
        })
    },
    methods: {
        apply () {
            console.log(this.posts);
            console.log('increment by ', this.amount);
            this.$store.dispatch('incrementBy', this.amount);
        },
        addPost (title, text) {
            db.collection('posts').add({ title, text });
            this.title = '';
            this.text = '';
        },
        deletePost (id) {
            db.collection('posts').doc(id).delete();
        },
        updatePost (post) {
            db.collection('posts').doc(post.id).set(post);
        },
        async logout () {
            await this.$store.dispatch('user/logout');
            this.$router.replace('login');
        }
    }
};
</script>

<style scoped>

</style>
