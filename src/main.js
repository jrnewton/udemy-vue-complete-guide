import { createApp } from 'vue';

//one store per application
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      loggedIn: false
    };
  },
  actions: {
    login(context) {
      context.commit('setAuth', true);
    },
    logout(context) {
      context.commit('setAuth', false);
    },
    increment(context) {
      context.commit('increment');
    },
    delayedIncrease(context, payload) {
      setTimeout(() => {
        //commit a mutation
        context.commit('increase', payload);
      }, 2000);
    }
  },
  //mutations are clearly defined methods which have the logic to update the state
  mutations: {
    setAuth(state, value) {
      state.loggedIn = value;
    },
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
    loggedIn(state) {
      return state.loggedIn;
    },
    count(state) {
      return state.count;
    },
    normalizedCounter(_, getters) {
      const val = getters.count;
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
