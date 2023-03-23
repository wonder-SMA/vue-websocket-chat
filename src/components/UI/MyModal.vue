<script>
export default {
  name: 'MyModal',

  emits: {
    'hide': null
  },

  methods: {
    onHide() {
      this.$emit('hide');
    }
  },
};
</script>

<template>
  <div class="modal" @click="onHide">
    <div class="modal__content" @click.stop>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}

.modal__content {
  min-height: 50px;
  min-width: 300px;
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  background: #e9ebeb;
}
</style>
