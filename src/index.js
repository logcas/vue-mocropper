import MoCropper from './mocropper.vue';

const VueMoCropper = {
  install(Vue) {
    Vue.component(MoCropper.name, MoCropper);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMoCropper);
}

export default VueMoCropper;