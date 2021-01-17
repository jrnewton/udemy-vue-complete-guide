<template>
  <div>
    <h2>Managed Goals</h2>
    <input type="text" ref="goal" />
    <button @click="set">Set Goal</button>

    <!-- Rendering the error <dialog> this deep in the app's
      DOM tree is not the best choice.  Can introduce styling 
      bugs and accessiblity problems.  It would be 
      better to render towards the root of the DOM tree. 
    -->

    <!-- Vue provides the 'teleport' tag which allows you to define 
      the render location.  
      
      The value of 'to' attribute is a CSS selector
        e.g. 
          body (body element)
          #id  (an element id)
     -->
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>{{ errorMessage }}</p>
        <button @click="confirmError">Ok</button>
      </error-alert>
    </teleport>
  </div>
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
