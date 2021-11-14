import HButton from './Button';

const components = {
  HButton,
};

const install = (Vue) => {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
};

const HUI = { install };

export {
  install,
  HButton,
};

export default HUI;
