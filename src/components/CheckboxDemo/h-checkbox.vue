<template>
  <div
    :class="{
      'h-checkbox': true,
      'form-check': true,
      'form-check-inline': inline,
    }"
  >
    <input
      class="form-check-input"
      type="checkbox"
      :id="`${value}`"
      :value="value"
      :disabled="disabled"
      :checked="checked"
      @change="handleChange"
    />
    <label class="form-check-label" :for="`${value}`">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  inline: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  checked: { type: Boolean, default: false },
  label: { type: String, default: "" },
  value: { type: String || Number, default: "" },
});

const emit = defineEmits<{
  (event: "change", hasCheck: boolean): void;
}>();

const handleChange = (event) => {
  const checked = event.target.checked;
  emit("change", checked);
};
</script>

<style></style>
