<script>
import MyForm from './UI/MyForm.vue';
import MyInput from './UI/MyInput.vue';

export default {
  name: 'MessageForm',
  components: { MyForm, MyInput },

  emits: {
    'submit': null
  },

  data() {
    return {
      message: '',
    };
  },

  methods: {
    onSubmit() {
      if (this.message) {
        this.$emit('submit', this.message);
      }
    },
  }
};
</script>

<template>
  <my-form submitTitle="Send" @submit="onSubmit">
    <my-input v-model="message" name="message" placeholder="Add message" />
  </my-form>
</template>
