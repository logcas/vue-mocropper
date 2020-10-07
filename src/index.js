import MoCropper from './mocropper.vue';

const VueMoCropper = {
  install(app) {
    app.component(MoCropper.name, MoCropper);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.createApp({}).use(VueMoCropper);
}

export default VueMoCropper;