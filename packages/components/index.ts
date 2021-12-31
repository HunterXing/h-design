import HButton from "./Button/index";
import HRow from "./Row/index";
import HCol from "./Col/index";
import HInput from "./Input/index";
import HTip from "./Tip/index";
import HIcon from "./Icon/index";
import HRadio from "./Radio/index";
import HCheckbox from "./Checkbox/index";
import HCheckboxGroup from "./CheckboxGroup/index";
import HRadioGroup from "./RadioGroup/index";
import { DefineComponent } from "vue";

const components = {
  HButton,
  HRow,
  HCol,
  HInput,
  HTip,
  HIcon,
  HRadio,
  HRadioGroup,
  HCheckbox,
  HCheckboxGroup,
};

const install = (Vue: DefineComponent): void => {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
};

const HDesign = { install };
export {
  install,
  HButton,
  HRow,
  HCol,
  HInput,
  HTip,
  HIcon,
  HRadio,
  HRadioGroup,
  HCheckboxGroup,
  HCheckbox,
};

export default HDesign;
