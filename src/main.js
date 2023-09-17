
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sotreAuth from './store/authStore';
const app = createApp(App)
app.use(router)
app.use(sotreAuth)
app.mount('#app')
