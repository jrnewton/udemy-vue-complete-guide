<template>
  <base-card>
    <base-button @click="setSelectedTab('resource-list')" :mode="listButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
  computed: {
    listButtonMode() {
      return this.selectedTab === 'resource-list' ? null : 'flat';
    },
    addButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: Math.random() + '',
        title: title,
        description: description,
        url: url
      };
      //insert at beginning of array
      this.storedResources.unshift(newResource);
      this.selectedTab = 'resource-list';
    }
  }
};
</script>
