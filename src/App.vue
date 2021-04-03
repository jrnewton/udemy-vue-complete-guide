<template>
  <base-container title="Vuex">
    <counter></counter>
    <button @click="increment">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Counter from './components/Counter.vue';

export default {
  components: {
    BaseContainer,
    Counter
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.state.count++;
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
