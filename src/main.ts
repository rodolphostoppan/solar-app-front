import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router'
import './styles/style.css'
import { DependencyInjection } from './infra/dependency-injection/dependency-injection'

const app = createApp(App).use(createPinia()).use(router)

const dependencyInjectionManager = new DependencyInjection(app)
dependencyInjectionManager.execute()

app.mount('#app')
