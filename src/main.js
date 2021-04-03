import { createApp } from 'vue';

//one store per application
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0
    };
  }
});

import App from './App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
