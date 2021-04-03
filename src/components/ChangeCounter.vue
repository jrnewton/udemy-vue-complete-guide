<template>
  <button @click="increment">Add 2</button>
</template>

<script>
export default {
  methods: {
    increment() {
      //takes name of mutation to perform plus a data object
      this.$store.commit('increase', { value: 2 });
    }
  }
};
</script>
