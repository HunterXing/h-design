import HButton from './Button';
import HRow from './Row';
import HCol from './Col';

const components = {
  HButton,
  HRow,
  HCol,
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
  HRow,
  HCol,
};

export default HUI;
