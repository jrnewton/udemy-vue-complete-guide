'use strict';

const app = Vue.createApp({
  data() { 
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  
  methods: { 
    add(num) { 
      this.counter += num;
    }, 

    reduce(num) { 
      this.counter -= num;
    }, 

    setName(event, decoration) { 
      this.name = event.target.value/*vanilla JS*/ + decoration;
    },

    confirmName() { 
      this.confirmedName = this.name;
    }, 

    submitForm() { 
      alert('Submitted!');
    }
  }
});

app.mount('#events');