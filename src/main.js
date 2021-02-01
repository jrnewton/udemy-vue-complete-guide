import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //order matters! first wins
    {
      path: '/teams',
      component: TeamsList
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
      //pass dynamic path elements to component via props
      props: true
    },
    {
      path: '/users',
      component: UsersList
    }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
