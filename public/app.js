'use strict';

const app = Vue.createApp({
  data() { 
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: ''
    };
  },
  
  watch: { 
    /* watcher must have same name as a data or computed property.
       this function will be executed when the property changes */
    name(value, oldValue) {
      this.fullname = value + ' ' + this.lastName;
    }, 

    lastName(value, oldValue) {
      this.fullname = this.name + ' ' + value;
    }
  }, 

  computed: { 
    // fullname() { 
    //   if (this.name === '') { 
    //     return '';
    //   }
    //   else { 
    //     return this.name + ' ' + 'Newton';
    //   }
    // }
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