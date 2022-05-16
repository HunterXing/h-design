import { DefineComponent } from "vue";
import HButton from "./Button/index";
import HCheckbox from "./Checkbox/index";
import HCheckboxGroup from "./CheckboxGroup/index";
import HCol from "./Col/index";
import HIcon from "./Icon/index";
import HInput from "./Input/index";
import HRadio from "./Radio/index";
import HRadioGroup from "./RadioGroup/index";
import HRow from "./Row/index";
import HSwitch from "./Switch/index";
import HTip from "./Tip/index";

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
  HSwitch,
};

const install = (Vue: DefineComponent): void => {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
};

const HDesign = { install, ...components };

export default HDesign;
