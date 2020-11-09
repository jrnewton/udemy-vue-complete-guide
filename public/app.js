'use strict';

const app = Vue.createApp({
  data() { 
    return {
      counter: 0,
      name: ''
    };
  },
  
  methods: { 
    add() { 
      this.counter++;
    }, 

    reduce() { 
      this.counter--;
    }, 

    setName(event, decoration) { 
      this.name = event.target.value/*vanilla JS*/ + decoration;
    }
  }
});

app.mount('#events');