<template>
  <h-row gutter-v="5px">
    <h-col :span="8" gutter-h="5px">
      <h-input v-model="name" type="text" placeholder="请输入姓名" @change="handleChange" clearable>
        <template v-slot:prepend>姓名</template>
      </h-input>
    </h-col>
    <h-col :span="2"></h-col>
    <h-col :span="8" gutter-h="5px">
      <h-input
        v-model="address"
        type="text"
        placeholder="请输入网址"
        @change="handleChange"
        clearable
      >
        <template v-slot:prepend>http://</template>
        <template v-slot:append>搜索</template>
      </h-input>
    </h-col>
  </h-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const name = ref();
const address = ref();

const handleChange = (e) => {
  console.log(e);
};
</script>
