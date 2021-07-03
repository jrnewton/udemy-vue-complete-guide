<template>
  <h3>{{ c }}</h3>
  <p>We do more...</p>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // count() {
    //   return this.$store.getters.count;
    // }

    //use this form to rename getters in this component
    ...mapGetters({
      c: 'counter/count'
    })
  }
};
</script>
