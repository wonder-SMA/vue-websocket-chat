<script>
import MyButton from './MyButton.vue';

export default {
  name: 'MyForm',
  components: { MyButton },

  props: {
    submitTitle: String,
  },

  emits: {
    'submit': null
  },

  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  }
};
</script>

<template>
  <form class="form" @submit.prevent="onSubmit">
    <slot />
    <my-button type="submit">{{ submitTitle }}</my-button>
  </form>
</template>

<style scoped>
.form {
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  gap: 8px;
  margin: 4px;
}
</style>
