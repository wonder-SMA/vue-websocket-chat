<script>
import { mapActions } from 'vuex';
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'Login',
  components: { LoginForm },

  methods: {
    ...mapActions({
      signIn: 'user/signIn',
    }),

    async onSignIn(login, password) {
      await this.signIn({ login, password });
    },
  },
};
</script>

<template>
  <h1>Please sign in</h1>
  <login-form @submit="onSignIn" />
</template>

<style scoped>
</style>
