<script>
export default {
  name: 'MyButton'
};
</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  min-width: 80px;
  margin: 4px;
  padding: 0.6em 1em;
  text-align: center;
  border: transparent;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1.25em;
  font-family: "Trebuchet MS", sans-serif;
  color: rgb(255, 255, 255);
  background-color: rgb(8, 94, 221);
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  transition: all 0.3s ease 0s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

@media only screen and (hover: hover) {
  .btn:hover {
    background-color: #4096ff;
    transition: all 0.3s;
  }
}

.btn:active {
  background-color: #002fdd;
  transition: all 0.3s;
}
</style>
