import Vue from "vue";
const { h } = Vue;

const HIcon: Vue.Component<any, any, any, Vue.ComputedOptions, Vue.MethodOptions> = {
  render() {
    return h(
      "i", // 标签名称
      { class: this.icon }
    );
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};

export default HIcon;
