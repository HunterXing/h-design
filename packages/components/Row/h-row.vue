<template>
  <div :class="['h-row', classes]" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps({
  gutterH: { type: String, default: "0" }, // 水平栅格间隔
  gutterV: { type: String, default: "0" }, // 垂直栅格间隔
  justify: { type: String, default: "start" }, // flex 布局下的水平排列方式：start end center space-around space-between
  align: { type: String, default: "top" }, // flex 布局下的垂直对齐方式：top middle bottom
});
const classes = computed(() => ({
  [`h-row--justify__${props.justify}`]: props.justify,
  [`h-row--align--${props.align}`]: props.align,
}));
const style = computed(() => ({
  padding: `${props.gutterV} ${props.gutterH}`,
}));
</script>
