<script>
import { mapActions, mapState } from 'vuex';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },

  computed: {
    ...mapState({
      login: state => state.user.login,
    }),
  },

  methods: {
    ...mapActions({
      getTopics: 'topics/getTopics',
    }),

    async onTopicsClick() {
      if (this.$route.path !== '/topics') {
        await this.getTopics();
      }
    },
  },

  // Делаем запрос за новыми темами при создании приложения
  async created() {
    await this.getTopics();
  },
};
</script>

<template>
  <div class="App">
    <nav-bar :login="login" @topicsClick="onTopicsClick" />
    <router-view />
  </div>
</template>

<style>
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.App {
  min-height: 100vh;
  max-width: 1024px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

h1, h2 {
  padding: 4px;
  font-family: "Trebuchet MS", sans-serif;
  line-height: 1.25em;
}
</style>
