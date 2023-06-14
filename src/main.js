import { createApp } from "vue";
import App from "./App.vue";
import { Icon } from "@iconify/vue";

import "./style.css";

import ColumnSection from "./components/ui/ColumnSection.vue";
import HeadingThree from "./components/ui/HeadingThree.vue";
import UnorderedList from "./components/ui/UnorderedList.vue";

const app = createApp(App);

app.component("Icon", Icon);

app.component("ColumnSection", ColumnSection);
app.component("HeadingThree", HeadingThree);
app.component("UnorderedList", UnorderedList);

app.mount("#app");
