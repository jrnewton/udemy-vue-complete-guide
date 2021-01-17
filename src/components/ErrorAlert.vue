<template>
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
  <teleport to="#error">
    <dialog open>
      <slot></slot>
    </dialog>
  </teleport>
</template>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
