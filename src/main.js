import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
