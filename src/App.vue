<template>
  <ul>
    <resource-item v-for="r of storedResources" :key="r.id" v-bind="r">
    </resource-item>
  </ul>
</template>

<script>
import ResourceItem from './components/resources/ResourceItem.vue';

export default {
  components: {
    ResourceItem
  },
  data() {
    return {
      storedResources: [
        {
          id: Math.random() + '',
          title: 'Official Guide',
          description: 'The official VueJs documentation',
          url: 'https://vuejs.org'
        },
        {
          id: Math.random() + '',
          title: 'Google',
          description: 'Learn to google...',
          url: 'https://google.com'
        }
      ]
    };
  }
};
</script>

<!-- global -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
