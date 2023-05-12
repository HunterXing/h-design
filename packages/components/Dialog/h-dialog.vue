<template>
  <teleport :to="'#' + teleportId">
    <div
      v-if="visiable"
      class="h-dialog-wrap"
      :style="{ width: props.width, height: props.height }"
    >
      this is dialog
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  width: string;
  height: string;
  visiable: boolean;
}>();

const teleportId = ref("dialog-" + new Date().getTime().toString());

// 创建一个挂载容器
const parentNode = document.createElement("div");
parentNode.id = teleportId.value;
document.body.appendChild(parentNode);
</script>

<style lang="scss" scoped>
.h-dialog-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #000;
}
</style>
