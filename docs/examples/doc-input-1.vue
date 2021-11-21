<template>
  <div>
    <doc-example :code="code">
      <h-row gutter-v="5px">
        <h-input
          v-model="value1"
          type="text"
          placeholder="请输入网址"
          @change="handleChange"
        >
        </h-input>
      </h-row>
      <h-row gutter-v="5px">
        <h-input
          v-model="value2"
          type="number"
          placeholder="请输入数字"
          @change="handleChange"
        >
        </h-input>
      </h-row>
      <h-row gutter-v="5px">
        <h-input
          v-model="value3"
          type="number"
          placeholder="请输入密码"
          @change="handleChange"
        >
        </h-input>
      </h-row>
      <h-row>
        <h-input
          v-model="value4"
          type="textarea"
          placeholder="请输入文本"
          size="small"
          @change="handleChange"
        >
        </h-input>
      </h-row>
    </doc-example>
  </div>
</template>

<script setup>
import HRow from 'packages/components/Row/h-row.vue';
import { ref } from 'vue';
import HInput from 'packages/components/Input/h-input.vue';
import 'packages/styles/src/index.scss';

const value1 = ref("")
const value2 = ref()
const value3 = ref("")
const value4 = ref("")

const handleChange = (value, e) => {
  console.log(value, e);
}
const code = `
         <h-row gutter-v="5px">
        <h-input
          v-model="value1"
          type="text"
          placeholder="请输入网址"
          @change="handleChange"
        >
        </h-input>
      </h-row>
      <h-row gutter-v="5px">
        <h-input
          v-model="value2"
          type="number"
          placeholder="请输入数字"
          @change="handleChange"
        >
        </h-input>
      </h-row>
      <h-row gutter-v="5px">
        <h-input
          v-model="value3"
          type="number"
          placeholder="请输入密码"
          @change="handleChange"
        >
        </h-input>
      </h-row>
      <h-row>
        <h-input
          v-model="value4"
          type="textarea"
          placeholder="请输入文本"
          size="small"
          @change="handleChange"
        >
        </h-input>
      </h-row>
`;
</script>
<style>
.grid-content {
  height: 40px;
  text-align: center;
}
.bg-gray-drak {
  background: #D4DCE6;
}
.bg-gray {
  background: #c6c5c5;
}
th:nth-of-type(1) {
    width: 100px;
}
th {
  background: #fff !important;
}
</style>
