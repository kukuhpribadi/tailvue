import { createApp } from "vue";
import { store } from "./stores";
import App from "./App.vue";
import "./index.css";
import "boxicons";

createApp(App).use(store).mount("#app");
