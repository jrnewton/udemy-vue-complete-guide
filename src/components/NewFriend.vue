<template>
  <ul>
    <li>
      <input v-model="name" placeholder="Name" /> <br />
      <input v-model="phone" placeholder="Phone" /> <br />
      <input v-model="email" placeholder="Email" /> <br />
      <button @click="newFriend">Create New Friend</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      name: '',
      phone: '',
      email: '',
      isFavorite: false
    };
  },
  emits: {
    'new-friend': function(name, phone, email) {
      return name && phone && email;
    }
  },
  methods: {
    newFriend() {
      console.log('newFriend', this.name, this.phone, this.email);
      this.$emit('new-friend', this.name, this.phone, this.email);
    }
  }
};
</script>
