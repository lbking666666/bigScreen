import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入mockjs
require('./api/mock.js')
createApp(App).use(router).mount('#app')
