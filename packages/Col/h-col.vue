<template>
  <div :class="['h-col', classes]">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  span: { type: Number, default: 4 }, // 默认一个为四等份
});

const classes = computed(() => ({
  [`h-col-${props.span}`]: props.span,
}));
</script>
