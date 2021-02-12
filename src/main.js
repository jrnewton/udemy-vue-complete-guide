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
      },
      //2. Route guard: route specific - called second
      beforeEnter(to, from, next) {
        //console.log('Route guard / route / beforeEnter');
        next();
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
    // console.log('to', _to);
    // console.log('from', _from);

    //position when user navigated forward
    //console.log('pos', savedPosition);

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

//1. Route guard: Global - called first.
router.beforeEach((to, from, next) => {
  //console.log('Route guard / global / beforeEach');

  // next(); //continue as-is
  // next(false); //cancel navigation
  // next(true); //continue as-is
  // next('/error'); //redirect to URL

  //silly example to always direct to team 2
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   //redirect to route object
  //   next({
  //     name: 'team-members',
  //     params: { teamId: 't2' }
  //   });
  // }

  next();
});

const app = createApp(App);
app.use(router);
app.mount('#app');
