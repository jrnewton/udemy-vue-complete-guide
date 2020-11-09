'use strict';

const app = Vue.createApp({
  data() { 
    return {
      courseGoal: 'Finish the course and learn Vue!',
      linkHref: 'https://vuejs.org',
      linkName: 'about Vue'
    };
  }
});

app.mount('#user-goal');