<template>
  <div class="h-checkbox" ref="checkboxGroup" @click.stop="handleChange">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, getCurrentInstance, onMounted } from "vue";
const props = defineProps({
  inline: { type: Boolean, default: false },
  modelValue: { type: Array, default: () => [] },
});

const emit = defineEmits<{
  (event: "change", value: number | string, values: any[]): void;
  (event: "update:modelValue", value: any[]): void;
}>();

// 设置check的排列样式，inline或者是block
onMounted(() => {
  const { proxy } = getCurrentInstance();
  const rootDom = proxy.$refs.checkboxGroup as HTMLElement;
  const checkboxDoms = rootDom.getElementsByClassName("h-checkbox");
  Array.from(checkboxDoms).forEach((checkbox) => {
    // 设置checkbox-group中的checkbox是行内标签还是块级标签
    props.inline ? (checkbox.className += " form-check-inline") : "";
    // 回显 modelvalue 中已经选中的checkbox
    props.modelValue.includes((checkbox.firstChild as HTMLInputElement).value)
      ? ((checkbox.firstChild as HTMLInputElement).checked = true)
      : null;
  });
});

// methods
// 切换checkbox时出发的事件
const handleChange = (e) => {
  const target = e.target;
  if (target.nodeName === "INPUT") {
    const checkboxs = e.currentTarget.children;
    const value = target.value;
    // 捕获到当前checkbox-group中的h-checkbox的value值，组成数组，返回
    const values = Array.from(checkboxs)
      .filter((node: Element) => (node.firstChild as HTMLInputElement).checked)
      .map((node: Element) => (node.firstChild as HTMLInputElement).value);
    // 抛出当前点击的checkbox的值以及h-checkbox-group选中值组成的数组
    emit("change", value, values);
    emit("update:modelValue", values);
  }
};
</script>
