import NButton from './index.vue';

/* istanbul ignore next */
NButton.install = function(Vue) {
  Vue.component(NButton.name, NButton);
};

export default NButton;
