<template>
  <base-card>
    <base-button @click="setSelectedTab('resource-list')"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import ResourceList from './ResourceList.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    ResourceList,
    AddResource
  },
  data() {
    return {
      selectedTab: 'resource-list',
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
  },
  provide() {
    return {
      resources: this.storedResources
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>
