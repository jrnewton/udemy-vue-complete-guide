import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

//these are global components avaible for use anywhere in
//the App and in any of it's children.
//Vue needs to load all global components at once.
app.component('base-badge', BaseBadge);
app.component('badge-list', BadgeList);
app.component('user-info', UserInfo);

app.mount('#app');
