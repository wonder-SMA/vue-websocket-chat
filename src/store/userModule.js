import jwt_decode from 'jwt-decode';

const http_base_url = import.meta.env.VITE_HTTP_BASE_URL;

export const userModule = {
  state: () => ({
    login: '',
  }),

  getters: {},

  mutations: {
    setLogin(state, login) {
      state.login = login;
    },
  },

  actions: {
    async getUserData({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        const payload = jwt_decode(token);
        if (payload.exp * 1000 >= Date.now()) {
          commit('setLogin', payload.login);
          return { token, ...payload };
        }
      }
      return {};
    },

    async signIn({ dispatch }, { login, password }) {
      try {
        const encodedLogin = btoa(login);
        const encodedPassword = btoa(password);
        const response = await fetch(http_base_url + '/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: encodedLogin,
            password: encodedPassword,
          })
        });
        const data = await response.json();
        if (response.ok) {
          window.localStorage.setItem('token', data);
          await dispatch('topics/getTopics', null, { root: true });
        } else {
          console.error(data);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  namespaced: true,
};
