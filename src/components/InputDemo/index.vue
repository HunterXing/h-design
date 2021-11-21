<template>
  <hi-input placeholder="请输入密码" type="text" v-model="value1" clearable>
    <template v-slot:prepend>Http://</template>
    <template v-slot:append>
      <i class="h-icon-clock"></i>
    </template>
  </hi-input>

  <hi-input placeholder="请输入密码" type="textarea" v-model="value2" clearable height="200px">
  </hi-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HiInput from "../../../packages/components/Input/h-input.vue";
const value1 = ref()
const value2 = ref()
</script>
