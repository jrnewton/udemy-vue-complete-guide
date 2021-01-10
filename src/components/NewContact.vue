<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name</label>
      <input v-model="name" type="text" placeholder="Name" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="phone" type="tel" placeholder="Phone" />
    </div>
    <div>
      <label>Email</label>
      <input v-model="email" type="email" placeholder="Email" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: ''
    };
  },
  emits: {
    'add-contact': function(name, phone, email) {
      return name && phone && email;
    }
  },
  methods: {
    addContact() {
      //console.log('addContact called', this.name, this.phone, this.email);
      this.$emit('add-contact', this.name, this.phone, this.email);
    }
  }
};
</script>
