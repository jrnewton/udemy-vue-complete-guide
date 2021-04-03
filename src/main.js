import { createApp } from 'vue';

//one store per application
import { createStore } from 'vuex';

//mutations are clearly defined methods which have the logic to update the state
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
