import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import store from './store/index.js';
import router from './router/index.js';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store)
app.use(router);
store.commit('listAllTypes')
store.commit('listAllVersions')
app.mount('#app')

