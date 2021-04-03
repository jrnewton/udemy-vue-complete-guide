<template>
  <button v-if="!loggedIn" @click="login">Login</button>
  <button v-if="loggedIn" @click="logout">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['loggedIn'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>
