<template>
  <div>
    <!-- only render the parent tag of the slot 
    if we have slot content -->
    <header v-if="$slots.header">
      <slot name="header">
        <!-- this is default content 
            if slot is not populated by 
            component -->
        <h2>The Default</h2>
      </slot>
    </header>
    <!-- you can have 1 unamed slot
    which becomes the default slot -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('header slot: ', this.$slots.header);
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
