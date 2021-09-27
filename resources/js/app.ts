import { setupRouter } from './router'
import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from './store'
function bootstrap() {
    const app = createApp(App)
    setupRouter(app)
    setupStore(app)
    app.mount('#app', true)
}

void bootstrap()
