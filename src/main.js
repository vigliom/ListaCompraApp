import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import entityStore from './store/entityStore';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const app = createApp(App);
app.use(router).use(entityStore);
app.mount('#app')
