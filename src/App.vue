<template>
  <base-container title="Vuex" v-if="userIsLoggedIn">
    <counter></counter>
    <favorite-value></favorite-value>
    <button @click="increment">Add 10 after 2 seconds</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Counter from './components/Counter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    Counter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapGetters(['userIsLoggedIn'])
  },
  methods: {
    increment() {
      //takes a single object that contains name of mutation (type)
      //and the remaining elements are sent as data argument.
      // this.$store.commit({
      //   type: 'increase',
      //   value: 5
      // });

      this.$store.dispatch({
        type: 'delayedIncrease',
        value: 10
      });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
