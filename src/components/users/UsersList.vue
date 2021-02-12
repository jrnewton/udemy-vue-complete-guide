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
  <teleport to="#error">
    <dialog open v-if="displayWarning">
      <h3>Please don't leave!</h3>
      Changes not saved
    </dialog>
  </teleport>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data() {
    return {
      changesSaved: false,
      displayWarning: false
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
      //cancel navigation
      next(false);
      //display warning to user
      this.displayWarning = true;
      //close warning after 5s
      setTimeout(() => {
        this.displayWarning = false;
      }, 5000);
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
