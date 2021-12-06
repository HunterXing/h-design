import Vue from "vue";
const { h } = Vue;

const HIcon = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
