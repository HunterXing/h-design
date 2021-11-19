<template>
  <button
    :class="['h-button', classes]"
    type="button"
    :disabled="props.disabled || props.loading"
    @click="handleClick"
  >
    <span v-if="props.loading" class="h-button__indicator"></span>
    <span class="h-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  type: String,
  size: String,
});

const emit = defineEmits(["click"]);

const classes = computed(() => ({
  [`h-button--${props.type}`]: props.type,
  [`h-button-size--${props.size}`]: props.size,
  "h-button--plain": props.plain,
  "h-button--round": props.round,
  "h-button--block": props.block,
  "h-button--loading": props.loading,
}));
const handleClick = (event) => {
  if (props.disabled || props.loading) return;
  emit("click", event);
};
</script>
