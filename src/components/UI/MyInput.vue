<script>
export default {
  name: 'MyInput',

  props: {
    modelValue: [String, Number]
  },

  emits: {
    'update:modelValue': null
  },

  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  },
};
</script>

<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>


<style scoped>
.input {
  width: 100%;
  padding: 6px;
  font-size: 16px;
  line-height: 1.25em;
  font-family: "Trebuchet MS", sans-serif;
  border: 1px solid darkgray;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 8px 2px;
  outline: none;
  transition: all 0.2s ease 0s;
}


@media only screen and (hover: hover) {
  .input:hover {
    box-shadow: 0 0 8px 4px rgb(0 0 0 / 20%);
    transition: all 0.2s;
  }
}

.input:focus {
  border: 1px solid gray;
  box-shadow: 0 0 8px 4px rgb(0 0 0 / 25%);
  transition: all 0.2s;
}
</style>
