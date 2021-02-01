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

    //setup default route
    //option 1 - define the route. URL does not represent the content though.
    // {
    //   path: '/',
    //   component: TeamsList
    // },
    //option 2 - use redirect so that URL matches page content.
    {
      path: '/',
      redirect: '/teams'
    },
    {
      path: '/teams',
      component: TeamsList
      //option 3 - use alias similiar to option 1. URL is not changed.
      //alias: '/'
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
