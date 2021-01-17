<template>
  <ul>
    <li v-for="r of storedResources" :key="r.id">
      <a href="{{ r.url }}" :title="r.description">{{ r.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
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
