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

export default counterModule;
