//one store per application
import { createStore } from 'vuex';

import counterModule from './counter';

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

export default store;
