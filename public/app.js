'use strict';

const app = Vue.createApp({
  data() { 
    return {
      counter: 0,
      name: ''
    };
  },
  
  computed: { 
    fullname() { 
      if (this.name === '') { 
        return '';
      }
      else { 
        return this.name + ' ' + 'Newton';
      }
    }
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