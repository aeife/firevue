<template>
    <div class="hello">
        <h1>test</h1>
        <p>{{msg}}</p>
        <router-link to="/">Test</router-link>
        <p>Counter: {{this.count}}</p>
        <input type="number" placeholder="amount" v-model="amount">
        <button @click="apply">Apply</button>
        <h1>posts</h1>
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                <h2>{{post.title}}</h2>
                <small>{{post.id}}</small>
                <p>{{post.text}}</p>
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
console.log('db', db);

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
    computed: mapGetters({
        count: 'currentCount'
    }),
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
        }
    }
};
</script>

<style scoped>

</style>
