<script>
import TopicItem from './TopicItem.vue';

export default {
  name: 'TopicList',
  components: { TopicItem },

  props: {
    topics: {
      type: Array,
      required: true,
    }
  },

  emits: {
    'open': null,
  },

  methods: {
    onOpen(id) {
      this.$emit('open', id);
    },
  },
};
</script>

<template>
  <section v-if="topics.length" class="topics">
    <h1>Topic list</h1>
    <topic-item
        v-for="topic in topics"
        :key="topic.id"
        :topic="topic"
        @open="onOpen"
    />
  </section>
  <h1 v-else class="empty-list">Topic list is empty!</h1>
</template>

<style scoped>
.topics {
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
}

.empty-list {
  margin: 12px;
  text-align: center;
  color: red;
}
</style>
