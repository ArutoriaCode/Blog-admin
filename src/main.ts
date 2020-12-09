import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AntDesign from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import "./global.less";

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(AntDesign);

app.mount("#app");
