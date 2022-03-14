import { createApp } from 'vue'
// import { createStore } from 'vuex'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import store from './store/index.js'

// // Create a new store instance.
// const appStore = createStore({
//   state () {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

// const app = createApp(App).mount('#app')
createApp(App).mount('#app')

// app.use(appStore)

