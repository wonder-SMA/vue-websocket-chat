import { createStore } from 'vuex';
import { chatModule } from './chatModule.js';
import { topicsModule } from './topicsModule.js';
import { userModule } from './userModule.js';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
    topics: topicsModule,
    chat: chatModule,
  }
});
