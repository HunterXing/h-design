<template>
  <grid-demo></grid-demo>
  <button-demo></button-demo>
  <input-demo> </input-demo>
  <h-button @click="showTip">点击</h-button>
  <h-icon icon="h-icon-apple"></h-icon>
  <!-- <h-radio label="测试" value="1" @oncheck="oncheck" name="234" /> -->
  <h-radio-group v-model="radioValue" inline>
    <h-radio label="苹果" value="1" :checked="true" />
    <h-radio label="香蕉" value="2" />
    <h-radio label="梨子" value="3" />
  </h-radio-group>
</template>

<script lang="ts" setup>
import GridDemo from "@/components/GridDemo/index.vue";
import ButtonDemo from "@/components/ButtonDemo/index.vue";
import InputDemo from "@/components/InputDemo/index.vue";
import HRadio from "../lib/h-radio";
import HRadioGroup from "../lib/h-radio-group";
import HTip from "../lib/h-tip";
import HIcon from "../lib/h-icon";
import { ref } from "vue";

const radioValue = ref();
const showTip = () => {
  HTip({
    message: "你好你好你好",
    type: "success",
    continued: 5000,
    showClose: true,
  });
};

const oncheck = (v, e) => {
  console.log(v);
  console.log(e);
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
