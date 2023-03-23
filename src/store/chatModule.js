import { router } from '../router/router.js';

const ws_base_url = import.meta.env.VITE_WS_BASE_URL;

export const chatModule = {
  state: () => ({
    currentTopic: '',
    messages: [],
    isOpenMessageModal: false,
    socket: null,
  }),

  getters: {},

  mutations: {
    setCurrentTopic(state, currentTopic) {
      state.currentTopic = currentTopic;
    },

    setMessages(state, messages) {
      state.messages = messages;
    },

    addMessage(state, message) {
      state.messages.push(message);
    },

    setIsOpenMessageModal(state, isOpenMessageModal) {
      state.isOpenMessageModal = isOpenMessageModal;
    },

    setSocket(state, socket) {
      state.socket = socket;
    },
  },

  actions: {
    async initializeChat({ commit, dispatch, state }, id) {
      try {
        const userData = await dispatch('user/getUserData', null, { root: true });
        if (userData.token) {
          const socket = new WebSocket(ws_base_url + '/chat?token=' + userData.token);
          commit('setSocket', socket);
          socket.onopen = async () => {
            dispatch('subscribe');
            await router.push(`/topics/${id}`);
          };
        } else {
          await router.push('/login');
        }
      } catch (error) {
        console.error(error);
      }
    },

    async getTopicMessages({ state }, { login, id }) {
      state.socket.send(JSON.stringify({
        login,
        topics: id,
      }));
    },

    sendMessage({ commit, dispatch, state }, { login, id, message }) {
      state.socket.send(JSON.stringify({
        login,
        topics: id,
        message,
      }));
    },

    subscribe({ commit, state }) {
      state.socket.onmessage = event => {
        const data = JSON.parse(event.data);

        if (data.topics && data.result) {
          commit('setCurrentTopic', data.topics);
          commit('setMessages', data.result);

          if (!data.result.length) {
            commit('setIsOpenMessageModal', true);
          }
        }

        if (data.id && data.login && data.message) {
          commit('addMessage', data);
        }
      };

      state.socket.onerror = error => {
        console.error(error);
      };

      state.socket.onclose = async event => {
        commit('setSocket', null);
        if (!event.wasClean) {
          console.error('Socket closed due to ', event.reason);
        }
      };
    },

    async closeChat({ state }) {
      state.socket.close(1000, 'work is complete');
    },
  },

  namespaced: true,
};
