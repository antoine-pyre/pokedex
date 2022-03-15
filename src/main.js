import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import store from './store/index.js';
import router from './router/index.js';

// Create a new store instance.

const app = createApp(App)
app.use(store)
app.use(router);
store.commit('listAllTypes')
store.commit('listAllVersions')
app.mount('#app')

