<script>
export default {
  name: 'TopicChat',

  props: {
    messages: Array,
    login: String,
  },

  updated() {
    // Делаем скролл в самый низ при каждом обновлении списка сообщений
    this.$refs.messageWindowRefs.scrollTop = this.$refs.messageWindowRefs.scrollHeight;
  },
};
</script>

<template>
  <div class="chat">
    <div class="chat__message-window" ref="messageWindowRefs">
      <ul class="chat__message-list">
        <li
            v-for="message in messages"
            :key="message.id"
            :class="['chat__message', login === message.login ? 'chat__message_mine' : '']"
        >
          <div class="chat__message-header">
            <div class="chat__message-avatar">
              <img src="./../assets/avatar.svg" alt="avatar" />
            </div>
            <span class="chat__message-author">{{ message.login }}</span>
          </div>
          <div class="chat__message-body">
            {{ message.message }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.chat__message-window {
  height: 400px;
  border: 4px solid #423189;
  border-radius: 8px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #E5E6E9 transparent;
}

.chat__message-window::-webkit-scrollbar {
  width: 12px;
}

.chat__message-window::-webkit-scrollbar-thumb {
  width: 12px;
  min-height: 50px;
  background: #D3D3D3;
  border-radius: 4px;
}

.chat__message-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.chat__message {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  padding: 8px;
}

.chat__message_mine {
  margin-left: auto;
}

.chat__message_mine > .chat__message-header {
  justify-content: flex-end;
}

.chat__message-header {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.chat__message-avatar {
  width: 30px;
  height: 30px;
}

.chat__message-author {
  margin: 0 10px;
  font-family: Segoe UI, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.25em;
  font-weight: bold;
  color: darkmagenta;
}

.chat__message-body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 14px;
  border-radius: 16px;
  background-color: #F5F5F5;
  font-family: Segoe UI, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.25em;
  color: black;
  word-break: break-word;
}
</style>
