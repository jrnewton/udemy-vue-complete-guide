const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!'
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    }
  }
});

app.mount('#app');

// let message = 'hello';
// let longMessage = message + ' World';
// console.log(longMessage);
// message = 'hello!!!!';
// console.log(longMessage);

const data = {
  message: 'hello',
  longMessage: 'hello! World!'
};

const proxy = new Proxy(data, {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
      target.message = value;
    }

    // console.log(target);
    // console.log(key);
    // console.log(value);
  }
});

proxy.message = 'hello!!!!';
console.log(proxy.longMessage);
