import App from './App.vue';
import * as Vue from 'vue';
import VueMocropper from 'vue-mocropper';

const { h } = Vue;
const app = Vue.createApp({
  render: () => h(App)
});

app.use(VueMocropper);
app.mount('#app');