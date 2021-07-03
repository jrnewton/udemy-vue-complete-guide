import { createApp } from 'vue';

//one store per application
import { createStore } from 'vuex';

const counterModule = {
  //keep this module separated from the merged store via
  //it's namespace key registered in createStore({ modules: ... })
  namespaced: true,

  //states are always local to the module
  //you can access other states via the 'rootState' object
  //available on each (local) state object.
  state() {
    return {
      count: 0
    };
  },
  actions: {
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
  mutations: {
    //mutations must be synchronous!
    //Put actions between components and mutations to
    //ensure you never accidently put async code in a mutation
    increment(state) {
      state.count++;
    },

    increase(state, payload) {
      console.log('increase state', state);
      state.count += payload.value;
    }
  },
  getters: {
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
};

const store = createStore({
  modules: {
    //'counter' is the namespace for this module
    counter: counterModule
  },
  state() {
    return {
      loggedIn: false
    };
  },
  //Instead of mutating the state, actions commit mutations.
  //Trigger them with store.dispatch
  actions: {
    login(context) {
      context.commit('setAuth', true);
    },
    logout(context) {
      context.commit('setAuth', false);
    }
  },
  //Mutations are clearly defined methods which have the logic to update the state
  //Trigger them with 'commit'
  mutations: {
    setAuth(state, value) {
      state.loggedIn = value;
    }
  },
  getters: {
    userIsLoggedIn(state) {
      return state.loggedIn;
    }
  }
});

import App from './App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
