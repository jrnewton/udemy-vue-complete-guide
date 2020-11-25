const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!'
    };
  },
  methods: {
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    setText() {
      this.message = this.$refs.userText.value;
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    //template is compiled at this point
    console.log('beforeMount');
  },
  mounted() {
    //content has been rendered by this point
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    //updated content has been rendered at this point
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  }
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'pizza'
    };
  }
});

app2.mount('#app2');
