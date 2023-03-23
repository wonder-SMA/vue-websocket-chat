<script>
import MyButton from './UI/MyButton.vue';

export default {
  name: 'NavBar',
  components: { MyButton },

  props: {
    login: String,
  },

  emits: {
    'topicsClick': null
  },

  methods: {
    onTopicsClick() {
      this.$emit('topicsClick');
    },
  }
};
</script>

<template>
  <div class="navbar">
    <h2 class="title" @click="$router.push('/')">Main</h2>
    <h2 v-if="login" class="username">{{ login }}</h2>
    <div class="navbar__buttons">
      <my-button @click="onTopicsClick">Topics</my-button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 15px;
  margin-bottom: 8px;
  border: transparent;
  border-radius: 6px;
  font-family: "Trebuchet MS", sans-serif;
  background-color: lightcoral;
  box-shadow: 2px 2px 4px gray;
}

.title {
  margin-right: auto;
  color: white;
  cursor: pointer;
}

.username {
  margin-left: auto;
  color: yellow;
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
