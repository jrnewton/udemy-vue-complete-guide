<template>
  <h3>{{ normalizedCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
    ...mapGetters({ normalizedCounter: 'counter/normalizedCounter' })
  }
};
</script>
