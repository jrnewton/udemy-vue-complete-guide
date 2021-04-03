import { createApp } from 'vue';

//one store per application
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  //mutations are clearly defined methods which have the logic to update the state
  mutations: {
    increment(state) {
      state.count++;
    },
    increase(state, payload) {
      state.count += payload.value;
    }
  }
});

import App from './App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
