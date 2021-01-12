import NButton from './n-button';
import NInput from './n-input';
import { sum } from '../utils/index';

const components = [
  NButton,
  NInput
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$sum = sum;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  NButton,
  NInput
};
