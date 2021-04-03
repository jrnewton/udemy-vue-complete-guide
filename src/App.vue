<template>
  <base-container title="Vuex">
    <counter></counter>
    <favorite-value></favorite-value>
    <button @click="increment">Add 5 after 2 seconds</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Counter from './components/Counter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    Counter,
    ChangeCounter,
    FavoriteValue
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
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
        type: 'increase',
        value: 5
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
