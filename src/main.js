import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import store from './store/index.js'

// Create a new store instance.

const app = createApp(App)
app.use(store)
app.mount('#app')

