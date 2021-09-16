import { createApp } from "vue"
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Vue3TouchEvents from "vue3-touch-events";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas)


import PrimeVue from 'primevue/config';
import Button from 'primevue/button'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


import Contact from './components/Contact'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Home from './components/Home'
import ContactLinks from './components/ContactLinks'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/portfolio' , component: Home },
        { path: '/contact', component: Contact},
        { path: '/skills', component: Skills},
        { path: '/experience', component: Experience},
        { path: '/education', component: Education},
    ]
})

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(PrimeVue);
app.component("Button", Button);

app.component("ContactSocial", ContactLinks);
app.use(router);
app.use(Vue3TouchEvents, {disableClick: true});
app.mount('#app');

