import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //order matters! first wins
    {
      name: 'root',
      path: '/',
      //see also alias
      redirect: '/teams'
    },
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          //pass dynamic path elements to component via props
          props: true
        }
      ]
    },
    {
      name: 'users',
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      }
    },
    {
      name: 'not-found',
      //pass regex to variable
      path: '/:notFound(.*)',
      // this will go to default unamed router view in App.vue
      component: NotFound
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    //to and from are router objects.
    //same as this.$route inside a component
    console.log('to', to);
    console.log('from', from);

    //position when user navigated forward
    console.log('pos', savedPosition);

    //savedPosition will be null when navigating forward
    //and it will have some value when navigating backward.
    //Use that to properly set the scroll view.
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
});

const app = createApp(App);
app.use(router);
app.mount('#app');
