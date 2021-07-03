<template>
  <button @click="increment">Add 1</button>
  <button @click="delayedIncrease({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // increment() {
    //   //takes name of mutation to perform plus a data object
    //   this.$store.dispatch('increment');
    // }
    ...mapActions({
      increment: 'counter/increment',
      delayedIncrease: 'counter/delayedIncrease'
    })
  }
};
</script>
