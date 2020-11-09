'use strict';

const app = Vue.createApp({
  data() { 
    return {
      courseGoal: 'Finish the course and learn Vue!',
      linkHref: 'https://vuejs.org',
      linkName: 'about Vue'
    };
  },
  methods: { 
    outputGoal() { 
      const rand = Math.random();
      if (rand < 0.5) { 
        return 'Learn Vue!';
      }
      else { 
        return 'Master Vue!';
      }
    }
  }
});

app.mount('#user-goal');