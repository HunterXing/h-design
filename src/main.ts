import { createApp } from "vue";
import App from "./App.vue";
import HDesign from "h-design";
import "h-design/lib/styles/index.css";
createApp(App)
  .use(HDesign as any)
  .mount("#app");
