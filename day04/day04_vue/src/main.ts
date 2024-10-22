//import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import persistedstate from "pinia-plugin-persistedstate";

// createApp(App).mount('#app')

const app = createApp(App);
const pinia = createPinia();
pinia.use(persistedstate);

app.use(router);
app.use(pinia);

app.mount("#app");
