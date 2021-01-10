<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="$emit('toggle-favorite', id)">
      Toggle Favorite
    </button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <!-- Just for  testing  
      <li>Id: {{ id }}</li>
      -->
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
    <button @click="$emit('delete-contact', id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      validator(value) {
        //a really stupid email address validator
        return value.indexOf('@') !== -1;
      }
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: {
    'toggle-favorite': function(id) {
      if (id) {
        return true;
      } else {
        console.warn('id is missing from toggle-favorite event');
        return false;
      }
    },
    'delete-contact': function() {
      return true;
    }
  },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
};
</script>
