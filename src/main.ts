/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(router)

app.mount('#app')
