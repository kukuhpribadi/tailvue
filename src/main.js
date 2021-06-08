import { createApp } from "vue";
import { store } from "./stores";
import router from "./routes/index.js";
import App from "./App.vue";
import "./index.css";
import "boxicons";

createApp(App).use(store).use(router).mount("#app");
