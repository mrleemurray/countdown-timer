import { createApp } from "vue";
import { createPinia } from "pinia";
import VueScrollPicker from "vue-scroll-picker";
// import "vue-scroll-picker/lib/style.css";
import "./assets/_vue_scroll_picker.scss";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(VueScrollPicker);

app.mount("#app");
