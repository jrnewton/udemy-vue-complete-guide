<template>
  <!-- In vue2 a top level element was required in each template. 
  In this example that would be the <div>. 
    In vue3 you can have 'fragments' or multiple top level 
    elements and we can get rid of the <div> (unless needed for 
      styling or sematic reasons)
-->
  <!-- <div> -->
  <h2>Managed Goals</h2>
  <input type="text" ref="goal" />
  <button @click="set">Set Goal</button>
  <error-alert v-if="inputIsInvalid">
    <h2>Input is invalid</h2>
    <p>{{ errorMessage }}</p>
    <button @click="confirmError">Ok</button>
  </error-alert>
  <!--  </div> -->
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      inputIsInvalid: false,
      errorMessage: null
    };
  },
  methods: {
    set() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
        this.errorMessage = 'Input is blank';
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
};
</script>
