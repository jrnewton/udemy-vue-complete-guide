<template>
  <button @click="$router.push('/teams')">Confirm</button>
  <button @click="changesSaved = true">Save</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
    return {
      changesSaved: false
    };
  },
  components: {
    UserItem
  },
  inject: ['users'],
  //3. Router guard: component - called third.
  beforeRouteEnter(to, from, next) {
    //('Route guard / component / beforeRouteEnter');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    if (this.changesSaved) {
      next();
    } else {
      const leave = confirm('You have unsaved changes - leave anyways?');
      next(leave);
    }
  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
