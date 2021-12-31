<!--
 * @description: demo
 * @Date: 2021-11-18 17:10:35
 * @LastEditTime: 2021-12-31 17:02:41
 * @Author: xingheng
-->
<template>
  <h2>栅格布局</h2>
  <grid-demo></grid-demo>
  <h2>按钮布局</h2>
  <button-demo></button-demo>
  <h2>input</h2>
  <input-demo> </input-demo>
  <h2>提示 tip</h2>
  <h-button @click="showTip">点击</h-button>
  <h2>提示 tip</h2>
  <h-icon icon="h-icon-apple"></h-icon>
  <h-radio-group v-model="radioValue" inline type="button">
    <h-radio label="苹果" value="1" :checked="true" />
    <h-radio label="香蕉" value="2" />
    <h-radio label="梨子" value="3" />
  </h-radio-group>
  <!-- <checkbox-demo></checkbox-demo> -->
  <!-- <h-checkbox label="章三" value="1"></h-checkbox> -->
  <h-checkbox-group @change="handleCheckboxChange" v-model="checkBoxValue" :inline="true">
    <h-checkbox label="章三" value="1"></h-checkbox>
    <h-checkbox label="里斯" value="2"></h-checkbox>
    <h-checkbox label="王武" value="3"></h-checkbox>
  </h-checkbox-group>
</template>

<script lang="ts" setup>
import GridDemo from "@/components/GridDemo/index.vue";
import ButtonDemo from "@/components/ButtonDemo/index.vue";
import InputDemo from "@/components/InputDemo/index.vue";
import HRadio from "@/components/RadioDemo/index.vue";
import HRadioGroup from "@/components/RadioDemo/radio-group.vue";
import HTip from "../lib/h-tip";
import HIcon from "../lib/h-icon";
// import CheckboxDemo from "@/components/CheckboxDemo/checkbox.vue";
import HCheckbox from "../lib/h-checkbox";
import HCheckboxGroup from "../lib/h-checkbox-group";
import { ref } from "vue";

const radioValue = ref("3");
const checkBoxValue = ref(["1", "2"]);
const showTip = () => {
  HTip({
    message: "你好你好你好",
    type: "success",
    continued: 5000,
    showClose: true,
  });
};
const handleCheckboxChange = (value) => {
  console.log(value);
};
</script>

<style>
.grid-content {
  height: 40px;
  text-align: center;
}
.bg-gray-drak {
  background: #d4dce6;
}
.bg-gray {
  background: #c6c5c5;
}
</style>
