// GlobalComponents for Volar
declare module "vue" {
  export interface GlobalComponents {
    HDesign: typeof import("h-design");
    HButton: typeof import("h-design")["HButton"];
    HRow: typeof import("h-design")["HRow"];
    HCol: typeof import("h-design")["HCol"];
    HInput: typeof import("h-design")["HInput"];
    HTip: typeof import("h-design")["HTip"];
    HIcon: typeof import("h-design")["HIcon"];
    HRadio: typeof import("h-design")["HRadio"];
    HRadioGroup: typeof import("h-design")["HRadioGroup"];
    HCheckbox: typeof import("h-design")["HCheckbox"];
    HCheckboxGroup: typeof import("h-design")["HCheckboxGroup"];
    HSwitch: typeof import("h-design")["HSwitch"];
  }
}

export {};
