<template>
  <grid-demo></grid-demo>
  <button-demo></button-demo>
  <input-demo
    v-model="value"
    type="number"
    placeholder="请输入密码"
    size="small"
    @change="handleChange"
  >
    <template v-slot:prepend>Http://</template>
    <template v-slot:append>搜索</template>
  </input-demo>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import GridDemo from "@/components/GridDemo/index.vue";
import ButtonDemo from "@/components/ButtonDemo/index.vue";
import InputDemo from "@/components/InputDemo/index.vue";
const value = ref("");

const handleChange = (value) => {
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
