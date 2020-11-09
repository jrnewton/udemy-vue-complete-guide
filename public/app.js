'use strict';

const app = Vue.createApp({
  data() { 
    return {
      goal1: 'Finish the course and learn Vue!',
      goal2: 'Master Vue and building amazing apps!',
      linkHref: 'https://vuejs.org',
      linkName: 'about Vue'
    };
  },
  methods: { 
    outputGoal() { 
      const rand = Math.random();
      if (rand < 0.5) { 
        return this.goal1;
      }
      else { 
        return this.goal2;
      }
    }
  }
});

app.mount('#user-goal');