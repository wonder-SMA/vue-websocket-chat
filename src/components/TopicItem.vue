<script>
export default {
  name: 'TopicItem',

  props: {
    topic: {
      id: [Number, String],
      title: String,
      required: true
    }
  },

  emits: {
    'open': null
  },

  methods: {
    onOpen() {
      this.$emit('open', this.topic.id);
    },
  },
};
</script>

<template>
  <div class="topic" @click="onOpen">
    <p>{{ topic.title }}</p>
  </div>
</template>

<style scoped>
.topic {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;
  padding: 8px;
  font-family: Segoe UI, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.25em;
  text-align: justify;
  border-radius: 8px;
  box-shadow: 0 0 12px 2px rgb(0 0 0 / 25%);
  cursor: pointer;
  user-select: none;
  will-change: transform;
  transform: scale(1) translateZ(0);
  transition: all 0.4s;
  backface-visibility: hidden;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: subpixel-antialiased;
}

@media only screen and (hover: hover) {
  .topic:hover {
    transform: scale(1.025);
    transition: all 0.2s;
  }
}

.topic:active {
  transform: scale(1.025);
  transition: all 0.2s;
}
</style>
