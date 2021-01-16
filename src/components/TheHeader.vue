<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>

<style scoped>
/* this will be applied to all elements in the app
   not just in this component.  Change <div> in UserInfo 
   to <header> to see the results. 
   Use the scoped attribute on the style element to ensure
   that styles only apply to the component they are 
   associated with.
   */
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14005e;
}

header h1 {
  color: white;
  margin: 0;
}
</style>
