<template>
    <div class="login">
        <h3>Log In</h3>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="login">Connection</button>
        <p>No Account? <router-link to="/sign-up">Create one</router-link></p>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login () {
            await this.$store.dispatch('user/login', {email: this.email, password: this.password});
            this.$router.replace('test');
        }
    }
};
</script>

<style scoped>

</style>
