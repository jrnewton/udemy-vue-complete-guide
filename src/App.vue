<template>
  <div>
    <the-header></the-header>
    <button @click="set('active-goals')">Active Goals</button>
    <button @click="set('managed-goals')">Managed Goals</button>

    <!-- 'keep-alive' is defined by Vue. 
      wrap this around components to keep their DOM 
      structures alive in between activity.
    
      NOTE: you can only have a single child component inside keep-alive
      that includes HTML comments.

      VueCompilerError: <KeepAlive> expects exactly one child component.
    -->
    <!-- 'component' is defined by Vue. 
        it will swap itself out based on the value 
        of the :is express 
    -->
    <keep-alive>
      <component :is="cmp"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ActiveGoals from './components/ActivateGoals.vue';
import ManagedGoals from './components/ManagedGoals.vue';
export default {
  //these components are local to this vue object
  components: {
    //syntax options
    //1) 'the-header': TheHeader
    //or
    //2) TheHeader: TheHeader
    //3) TheHeader
    //
    //#1 defines html element <the-header> which requires closing tag.
    //#2 defines same html element as #1 and defines html element <TheHeader>.
    //   <TheHeader> is a self closing tag: <TheHeader/>
    //#3 uses modern JS syntax to expand TheHeader -> TheHeader: TheHeader
    'the-header': TheHeader,
    //prettier-ignore
    ActiveGoals:ActiveGoals,
    ManagedGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin'
      },
      cmp: 'active-goals'
    };
  },
  methods: {
    set(cmp) {
      this.cmp = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
