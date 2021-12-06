<template>
  <grid-demo></grid-demo>
  <button-demo></button-demo>
  <input-demo> </input-demo>
  <h-button @click="showTip">点击</h-button>
  <h-icon icon="h-icon-apple"></h-icon>
</template>

<script lang="ts" setup>
import GridDemo from "@/components/GridDemo/index.vue";
import ButtonDemo from "@/components/ButtonDemo/index.vue";
import InputDemo from "@/components/InputDemo/index.vue";
import HTip from "../lib/h-tip";
import HIcon from "../lib/h-icon";
const showTip = () => {
  HTip({
    message: "你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好",
    type: "warning",
    continued: 5000,
    showClose: true,
  });
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
