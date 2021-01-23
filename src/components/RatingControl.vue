<template>
  <ul>
    <!-- default behaivor for buttons in a form is to 
    submit the form.  Set type to button to override this. -->
    <li :class="{ active: isActive('poor') }">
      <button type="button" @click="selectOption('poor')">
        Poor
      </button>
    </li>
    <li :class="{ active: isActive('average') }">
      <button type="button" @click="selectOption('average')">
        Average
      </button>
    </li>
    <li :class="{ active: isActive('great') }">
      <button type="button" @click="selectOption('great')">
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  /* The prop and event come from using v-model on this component */
  props: ['modelValue'],
  emits: ['update:modelValue'],
  //syncing prop value this way will not allow value to be updated
  //after component is created.  Instead use computed property.
  // data() {
  //   return {
  //     /* initial our local value with the prop value coming from v-model */
  //     activeOption: this.modelValue
  //   };
  // },
  computed: {
    activeOption() {
      return this.modelValue;
    }
  },
  methods: {
    selectOption(opt) {
      /* sync our local variable to the parent component through v-model event */
      this.$emit('update:modelValue', opt);
    },
    isActive(opt) {
      //this is now a computed prop reference
      return this.activeOption === opt;
    }
  }
};
</script>

<style scoped>
.active {
  border-color: purple;
}

.active button {
  color: purple;
}

ul {
  list-style: non;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
