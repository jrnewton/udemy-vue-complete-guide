<template>
  <ul>
    <li v-for="(goal, index) of goals" :key="goal">
      <!-- bind access to the goal object to the variable 'item' 
          this will make the data available to the user of the slot. 
      -->
      <slot :item="goal" :index="index" :randomText="Math.random()"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue']
    };
  }
};
</script>
