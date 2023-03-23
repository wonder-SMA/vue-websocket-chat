import { createApp } from 'vue';
import App from './App.vue';
import components from './components/index.js';
import UI from './components/UI/index.js';
import { router } from './router/router.js';
import store from './store/index.js';

const app = createApp(App);

UI.forEach(component => app.component(component.name, component));

components.forEach(component => app.component(component.name, component));

app
  .use(router)
  .use(store)
  .mount('#app');
