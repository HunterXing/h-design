import HButton from './Button/index';

const components = {
  HButton
};

const install = (Vue) => {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
};

const HDesign = { install };
export {
  install,
  HButton
};

export default HDesign;
