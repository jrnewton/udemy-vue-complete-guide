<template>
  <base-card>
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <!-- this content goes to the default (unamed) slot in the component -->
    <p>{{ infoText }}</p>
  </base-card>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role']
};
</script>
