'use strict';

const app = Vue.createApp({
  data() { 
    return {
      counter: 0,
      name: ''
    };
  },
  
  methods: { 
    add(num) { 
      this.counter += num;
    }, 

    reduce(num) { 
      this.counter -= num;
    }, 

    submitForm() { 
      alert('Submitted!');
    }, 

    resetInput() { 
      this.name = '';
    }
  }
});

app.mount('#events');