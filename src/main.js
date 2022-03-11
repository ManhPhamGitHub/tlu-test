import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.use(routes)
app.use(store)
app.mount('#app')