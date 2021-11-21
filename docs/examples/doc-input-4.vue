

<template>
  <div>
    <doc-example :code="code">
      <h-row gutter-v="5px">
        <h-col :span="24" gutter-h="5px">
          <h-input
            v-model="name"
            type="text"
            placeholder="请输入姓名"
            @change="handleChange"
            clearable
          >
            <template v-slot:prepend>姓名</template>
          </h-input>
        </h-col>
      </h-row>
      <h-row>
        <h-col :span="24" gutter-h="5px">
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
    </doc-example>
  </div>
</template>

<script setup>
import HRow from 'packages/components/Row/h-row.vue';
import HCol from 'packages/components/Col/h-col.vue';
import { ref } from 'vue';
import HInput from 'packages/components/Input/h-input.vue';
import 'packages/styles/src/index.scss';

const name = ref("")
const address = ref("")

const handleChange = (value, e) => {
  console.log(value, e);
}
const code = `
   <h-row gutter-v="5px">
        <h-col :span="8" gutter-h="5px">
          <h-input
            v-model="name"
            type="text"
            placeholder="请输入姓名"
            @change="handleChange"
            clearable
          >
            <template v-slot:prepend>姓名</template>
          </h-input>
        </h-col>
        <h-col :span="2"></h-col>
        <h-col :span="8" gutter-h="5px">
          <h-input
            v-model="name"
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

  const name = ref("");
  const address = ref("");

  const handleChange = (value, e) => {
    console.log(value, e);
  }
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
