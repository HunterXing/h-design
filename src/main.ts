import { createApp } from "vue";
import App from "./App.vue";
import HDesign from "../lib/h-design";
import "../lib/styles/index.css";
createApp(App)
  .use(HDesign as any)
  .mount("#app");
