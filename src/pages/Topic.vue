<script>
import { useIdle } from '@vueuse/core';
import { mapActions, mapMutations, mapState } from 'vuex';
import MessageForm from '../components/MessageForm.vue';
import TopicChat from '../components/TopicChat.vue';
import MyButton from '../components/UI/MyButton.vue';
import MyModal from '../components/UI/MyModal.vue';

export default {
  name: 'Topic',
  components: { MyButton, MessageForm, MyModal, TopicChat },

  data() {
    return {
      isIdle: useIdle(3 * 60 * 1000).idle,
    };
  },

  computed: {
    ...mapState({
      login: state => state.user.login,
      currentTopic: state => state.chat.currentTopic,
      messages: state => state.chat.messages,
      isOpenMessageModal: state => state.chat.isOpenMessageModal,
    }),
  },

  methods: {
    ...mapMutations({
      setIsOpenMessageModal: 'chat/setIsOpenMessageModal',
    }),

    ...mapActions({
      getTopicMessages: 'chat/getTopicMessages',
      sendMessage: 'chat/sendMessage',
      closeChat: 'chat/closeChat',
    }),

    onHideMessageModal() {
      this.setIsOpenMessageModal(false);
    },

    onOpenMessageModal() {
      this.setIsOpenMessageModal(true);
    },

    onSendMessage(message) {
      if (message) {
        this.onHideMessageModal();
        this.sendMessage({
          login: this.login,
          id: +this.$route.params.id,
          message,
        });
      }
    },
  },

  // Делаем запрос за новыми сообщениями при создании чата по теме
  async created() {
    await this.getTopicMessages({
      login: this.login,
      id: +this.$route.params.id
    });
  },

  watch: {
    // Редиректим на страницу с темами при бездействии, закрываем сокет
    isIdle() {
      this.$router.push('/topics');
      this.closeChat();
    }
  },

  // Закрываем сокет при уходе со страницы
  beforeUnmount() {
    this.closeChat();
  },
};
</script>

<template>
  <h1>Chat on the topic: <span class="topic_title">"{{ currentTopic }}"</span></h1>
  <topic-chat :messages="messages" :login="login" />
  <my-modal v-if="isOpenMessageModal" @hide="onHideMessageModal">
    <message-form @submit="onSendMessage" />
  </my-modal>
  <my-button
      :class="'btn_add-message'"
      v-if="!isOpenMessageModal"
      @click="onOpenMessageModal"
  >
    Add message
  </my-button>
</template>

<style scoped>
.topic_title {
  font-style: italic;
}

.btn_add-message {
  margin: 4px auto;
}
</style>
