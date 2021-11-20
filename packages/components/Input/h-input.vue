<template>
  <div
    class="h-input-group"
    :class="inputClass"
    v-if="['text', 'password', 'number'].includes(type)"
  >
    <template v-if="$slots.prepend">
      <span class="h-input-group-text">
        <slot name="prepend"></slot>
      </span>
    </template>
    <input
      class="h-input"
      autocomplete="off"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @change="handleChange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keypress="handleKeyPress"
    />
    <template v-if="$slots.append">
      <span class="h-input-group-text">
        <slot name="append"></slot>
      </span>
    </template>
  </div>
  <div class="input-textarea-wrap" v-else>
    <textarea
      :value="modelValue"
      class="h-input"
      :type="type"
      autocomplete="off"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :style="{ height: height }"
      @change="handleChange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
type TypeProp = "text" | "textarea" | "password" | "number";
type TargetElement = HTMLInputElement | HTMLTextAreaElement;

export default defineComponent({
  name: "HInput",
  props: {
    modelValue: {
      type: String || Number,
      default: "",
    },
    type: {
      type: String as PropType<TypeProp>,
      default: "text",
    },
    placeholder: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    size: { type: String, default: "default" }, // input的大小
    height: { type: String, default: "80px" }, // textarea的高度
    allowE: { type: Boolean, default: false }, // 允许number类型时输入科学计算中的e,默认关闭
  },
  model: {
    prop: "value", //绑定的值，通过父组件传递
    event: "change",
  },
  setup(props, ctx) {
    const sizeClass = {
      small: "-sm",
      default: "",
      large: "-lg",
    };
    // datas
    const inputClass = computed(() => ({
      [`h-input-group-${sizeClass[props.size]}`]: sizeClass[props.size],
    }));
    // funcs

    // methods
    const handleInput = (e: Event) => {
      let { value } = e.target as TargetElement;
      ctx.emit("input", value, e);
      ctx.emit("update:modelValue", value);
    };
    const handleChange = (e: Event) => {
      const { value } = e.target as TargetElement;
      ctx.emit("change", value, e);
    };
    const handleFocus = (e: Event) => {
      const { value } = e.target as TargetElement;
      ctx.emit("focus", value, e);
    };
    const handleBlur = (e: Event) => {
      const { value } = e.target as TargetElement;
      ctx.emit("blur", value);
    };
    // 用于阻止number类型的input输入e，同时也向父组件抛出方法
    const handleKeyPress = (e: KeyboardEvent) => {
      ctx.emit("keypress", e);
      if (props.type === "number" && e.code === "KeyE" && !props.allowE) {
        e.preventDefault();
        return false;
      }
    };

    return {
      // datas
      inputClass,
      // methods
      handleChange,
      handleInput,
      handleFocus,
      handleBlur,
      handleKeyPress,
    };
  },
});
</script>
