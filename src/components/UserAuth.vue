<template>
  <button v-if="!userIsLoggedIn" @click="login">Login</button>
  <button v-if="userIsLoggedIn" @click="logout">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userIsLoggedIn'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>
