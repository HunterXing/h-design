<template>
  <div
    :class="{
      'h-checkbox': true,
      'form-check': true,
      'form-switch': true,
      'form-check-inline': inline,
    }"
  >
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      :id="`${label}`"
      :disabled="disabled"
      :checked="switchChecked"
      @change="handleChange"
      :value="modelValue"
    />
    <label class="form-check-label" :for="`${label}`">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, PropType, onMounted, computed } from "vue";
interface valueFormatProps {
  switchValue: string | number | boolean;
  unSwitchValue: string | number | boolean;
}
const props = defineProps({
  modelValue: { type: String || Number || Boolean, default: false },
  inline: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: "" },
  valueFormat: {
    type: Object as PropType<valueFormatProps>,
    default: () => ({
      switchValue: true,
      unSwitchValue: false,
    }),
  },
});

const emit = defineEmits<{
  (event: "change", hasCheck: boolean): void;
  (event: "update:modelValue", value: any): void;
}>();

let switchChecked = computed({
  get: () => props.modelValue === props.valueFormat.switchValue,
  set: (val) => val,
});
onMounted(() => {
  // 初始化开启或者关闭
  if (props.valueFormat.switchValue === props.modelValue) {
    switchChecked.value = true;
  } else {
    switchChecked.value = false;
  }
  // 如果是自定义的switch 开关值，则更新v-model的初始值
  if (
    typeof props.valueFormat.switchValue !== "boolean" ||
    typeof props.valueFormat.unSwitchValue !== "boolean"
  ) {
    emit(
      "update:modelValue",
      switchChecked.value ? props.valueFormat.switchValue : props.valueFormat.unSwitchValue
    );
  }
});
const handleChange = (event) => {
  const checked = event.target.checked;
  emit("change", checked);
  // 如果valueFormat是默认值，则switch返回的就是true or false
  if (
    props.valueFormat.switchValue &&
    typeof props.valueFormat.switchValue === "boolean" &&
    !props.valueFormat.unSwitchValue &&
    typeof props.valueFormat.switchValue === "boolean"
  ) {
    emit("update:modelValue", checked);
  } else {
    let value = checked ? props.valueFormat.switchValue : props.valueFormat.unSwitchValue;
    emit("update:modelValue", value);
  }
};
</script>
