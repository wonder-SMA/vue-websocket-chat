<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Topics',

  computed: {
    ...mapState({
      login: state => state.user.login,
      topics: state => state.topics.topics,
    }),
  },

  methods: {
    ...mapActions({
      initializeChat: 'chat/initializeChat',
    }),

    // Запускаем создание сокета
    async openTopic(id) {
      await this.initializeChat(id);
    },
  },
};
</script>

<template>
  <topic-list :topics="topics" @open="openTopic" />
</template>
