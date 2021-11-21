

<template>
  <div>
    <doc-example :code="code">
      <h-row gutter-v="5px">
        <h-input
          v-model="text"
          type="textarea"
          placeholder="请输入文本"
          @change="handleChange"
          height="200px"
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

const text = ref("")

const handleChange = (value, e) => {
  console.log(value, e);
}
const code = `
  <h-row gutter-v="5px">
    <h-input
      v-model="text"
      type="textarea"
      placeholder="请输入文本"
      @change="handleChange"
      height="200px"
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
