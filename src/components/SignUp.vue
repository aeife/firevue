<template>
    <div class="sign-up">
        <h3>Sign Up</h3>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="signUp">Sign Up</button>
        <p>go back to <router-link to="/login">login</router-link></p>
    </div>
</template>

<script>
export default {
    name: 'signup',
    data () {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async signUp () {
            await this.$store.dispatch('user/signUp', {email: this.email, password: this.password});
            this.$router.replace('test');
        }
    }
};
</script>

<style scoped>

</style>
