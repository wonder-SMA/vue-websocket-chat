import { router } from '../router/router.js';

const http_base_url = import.meta.env.VITE_HTTP_BASE_URL;

export const topicsModule = {
  state: () => ({
    topics: [],
  }),

  getters: {},

  mutations: {
    setTopics(state, topics) {
      state.topics = Object.keys(topics).map(topicId => ({ id: topicId, title: topics[topicId] }));
    },
  },

  actions: {
    async getTopics({ commit, dispatch }) {
      try {
        const userData = await dispatch('user/getUserData', null, { root: true });
        if (userData.token) {
          const response = await fetch(http_base_url + '/topics?' + new URLSearchParams({
            login: userData.login,
            token: userData.token,
          }));
          const data = await response.json();
          if (response.ok) {
            commit('setTopics', data.result.topics);
            await router.push('/topics');
          } else {
            console.error(data);
          }
        } else {
          await router.push('/login');
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  namespaced: true,
};
