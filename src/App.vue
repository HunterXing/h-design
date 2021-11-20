<template>
  <grid-demo></grid-demo>
  <button-demo></button-demo>
  <input-demo> </input-demo>
</template>

<script lang="ts" setup>
import GridDemo from "@/components/GridDemo/index.vue";
import ButtonDemo from "@/components/ButtonDemo/index.vue";
import InputDemo from "@/components/InputDemo/index.vue";
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
