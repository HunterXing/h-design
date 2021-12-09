<template>
  <div class="h-radio-group" ref="radioGroup" @click.stop="handleChange">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance, computed } from "vue";

export default defineComponent({
  name: "HRadioGroup",
  props: {
    inline: { type: Boolean, default: false }, // 是否行内布局
  },
  setup(props, ctx) {
    // datas
    // 统一设置行内标签还是块级
    const isInline = computed(() => {
      return props.inline;
    });
    // methods
    // 切换radio时出发的事件
    const handleChange = (e) => {
      const target = e.target;
      if (target.nodeName === "INPUT") {
        ctx.emit("change", target.value);
      }
    };
    // hooks
    onMounted(() => {
      const { proxy } = getCurrentInstance();
      const rootDom = proxy.$refs.radioGroup as HTMLElement;
      const radioDoms = rootDom.getElementsByClassName("h-radio");

      Array.from(radioDoms).forEach((radio) => {
        // 给radio组中所有的radio设置同样的name, 以此实现一组互斥的 Radio 配合使用
        radio.firstElementChild.setAttribute("name", new Date().getTime() + "");
        // 设置radio-group中的radio的radio是行内标签还是块级标签
        isInline.value ? (radio.className += " inline") : "";
      });
    });
    return {
      // datas
      // methods
      handleChange,
    };
  },
});
</script>
