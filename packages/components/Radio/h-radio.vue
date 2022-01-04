<template>
  <div class="h-radio" :class="{ inline }">
    <input
      class="h-radio-input"
      :value="value"
      type="radio"
      :disabled="disabled"
      :checked="checked"
      :name="`${name}`"
      :id="`${value}-${new Date().getTime()}`"
    />
    <label class="h-radio-label" :for="`${value}-${new Date().getTime()}`">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HRadio",
  props: {
    value: {
      type: String || Number,
      default: "",
    },
    // radio的显示值
    label: {
      type: String,
      default: "",
    },
    // 关联Radio按钮组
    name: {
      type: String,
      default: "",
    },
    disabled: { type: Boolean, default: false }, // 禁用
    checked: { type: Boolean, default: false }, // 默认选中
    inline: { type: Boolean, default: false }, // 是否行类布局
  },
});
</script>
