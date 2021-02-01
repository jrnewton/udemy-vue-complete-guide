import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //order matters! first wins
    {
      path: '/',
      //see also alias
      redirect: '/teams'
    },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        {
          path: ':teamId',
          component: TeamMembers,
          //pass dynamic path elements to component via props
          props: true
        }
      ]
    },
    {
      path: '/users',
      component: UsersList
    },
    {
      //pass regex to variable
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
