<template>
  <li>
    <h2>{{ friend.name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">
      Toggle Favorite
    </button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    friend: Object,
    isFavorite: Boolean
  },
  data() {
    return {
      detailsAreVisible: false,
      //Vue enforces uni-directional data flow from parent (App.vue) to child (Component.vue).
      //One way to mutate a prop is to keep a local copy in data
      friendIsFavorite: this.friend.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    }
  }
};
</script>
