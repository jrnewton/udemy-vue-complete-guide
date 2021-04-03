<template>
  <button @click="increment">Add 2</button>
</template>

<script>
export default {
  methods: {
    increment() {
      //takes name of mutation to perform
      this.$store.commit('increase', 2);
    }
  }
};
</script>
