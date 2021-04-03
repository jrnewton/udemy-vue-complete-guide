import { createApp } from 'vue';

//one store per application
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    increase(context, payload) {
      setTimeout(() => {
        //commit a mutation
        context.commit('increase', payload);
      }, 2000);
    }
  },
  //mutations are clearly defined methods which have the logic to update the state
  mutations: {
    //mutations must be synchronous!
    //Put actions between components and mutations to
    //ensure you never accidently put async code in a mutation
    increment(state) {
      state.count++;
    },
    increase(state, payload) {
      state.count += payload.value;
    }
  },
  getters: {
    finalCount(state) {
      return state.count * 2;
    },
    normalizedCounter(_, getters) {
      const val = getters.finalCount;
      if (val < 0) {
        return 0;
      } else if (val > 100) {
        return 100;
      } else {
        return val;
      }
    }
  }
});

import App from './App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
