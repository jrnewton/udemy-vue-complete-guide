<template>
  <AppHeader :title="'Learning Resources'" />
  <ResourceManager />
</template>

<script>
import AppHeader from './components/layouts/AppHeader.vue';
import ResourceManager from './components/resources/ResourceManager.vue';

export default {
  components: {
    AppHeader,
    ResourceManager
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
