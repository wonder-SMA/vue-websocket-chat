<script>
import MyForm from './UI/MyForm.vue';
import MyInput from './UI/MyInput.vue';

export default {
  name: 'LoginForm',
  components: { MyForm, MyInput },

  emits: {
    'submit': null
  },

  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    onSubmit() {
      if (this.username && this.password) {
        this.$emit('submit', this.username, this.password);
      }
    },
  }
};
</script>

<template>
  <my-form submitTitle="Sign in" @submit="onSubmit">
    <my-input v-model="username" name="username" autocomplete="username" placeholder="username" />
    <my-input
        v-model="password"
        name="password"
        autocomplete="current-password"
        type="password"
        placeholder="password"
    />
  </my-form>
</template>
