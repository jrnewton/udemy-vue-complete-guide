<template>
  <ul>
    <resource-item v-for="r of resources" :key="r.id" v-bind="r">
    </resource-item>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  components: {
    ResourceItem
  },
  props: ['resources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
