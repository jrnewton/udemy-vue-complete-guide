<template>
  <base-container title="Vuex">
    <counter></counter>
    <button @click="increment">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Counter from './components/Counter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    Counter,
    ChangeCounter
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      //takes name of mutation to perform
      this.$store.commit('increment');
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
