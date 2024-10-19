//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HmButton from './components/HmButton.vue'

// createApp(App).mount('#app')
const app =createApp(App)

app.component('HmButton',HmButton)

app.mount('#app')