import { createApp } from "vue"
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
// import Vue3TouchEvents from "vue3-touch-events";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas)

import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


// Lazy loading all the components importing them just when the route changes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' , component: () => import("./components/Home") },
        { path: '/portfolio' , component: () => import("./components/Home") },
        { path: '/contact', component: () => import("./components/Contact")},
        { path: '/skills', component: () => import("./components/Skills")},
        { path: '/experience', component: () => import("./components/Experience")},
        { path: '/education', component: () => import("./components/Education")},
    ]
})

import ContactLinks from './components/ContactLinks'

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(PrimeVue);
app.component("Button", Button);
app.component("TabMenu", TabMenu);

app.component("ContactSocial", ContactLinks);
app.use(router);
// app.use(Vue3TouchEvents, {disableClick: true});
app.mount('#app');

