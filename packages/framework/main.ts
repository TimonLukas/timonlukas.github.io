import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import routes from "~pages"
import App from "./App.vue"
import "./assets/style.css"

createApp(App)
  .use(createRouter({ history: createWebHistory(), routes }))
  .mount("#app")
