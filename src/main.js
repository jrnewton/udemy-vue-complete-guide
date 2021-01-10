import { createApp } from 'vue';

import App from './App.vue';
import ContactDetail from './components/ContactDetail.vue';
import NewContact from './components/NewContact.vue';

const app = createApp(App);
app.component('contact-detail', ContactDetail);
app.component('new-contact', NewContact);
app.mount('#app');
