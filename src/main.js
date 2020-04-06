import App from './App.vue';
import Vue from 'vue';
import VueMocropper from './index';

Vue.use(VueMocropper);

new Vue({
  render: h => h(App)
}).$mount('#app');