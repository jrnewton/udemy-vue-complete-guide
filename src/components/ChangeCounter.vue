<template>
  <button @click="increment">Add 1</button>
</template>

<script>
export default {
  methods: {
    increment() {
      //takes name of mutation to perform plus a data object
      this.$store.dispatch('increment');
    }
  }
};
</script>
