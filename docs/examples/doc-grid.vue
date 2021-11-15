<template>
  <div>
    <doc-example :code="code">
      <h-row justify="left" gutter-v="5px">
        <h-col>
          <div class="grid-content bg-gray">span=4</div>
        </h-col>
        <h-col :span="8">
          <div class="grid-content bg-gray-drak">span=8</div>
        </h-col>
        <h-col :span="12">
          <div class="grid-content bg-gray">span=12</div>
        </h-col>
      </h-row>
      <h-row justify="left" gutter-v="5px">
        <h-col :span="12">
          <div class="grid-content bg-gray-drak">span=12</div>
        </h-col>
        <h-col :span="8">
          <div class="grid-content bg-gray">span=8</div>
        </h-col>
        <h-col>
          <div class="grid-content bg-gray-drak">span=4</div>
        </h-col>
      </h-row>
    </doc-example>
  </div>
</template>

<script setup>
import HRow from 'packages/Row/h-row.vue';
import HCol from 'packages/Col/h-col.vue';
import 'packages/styles/src/index.scss';

const code = `
  <h-row justify="left" gutter-v="5px">
    <h-col>
      <div class="grid-content bg-gray">span=4</div>
    </h-col>
    <h-col :span="8">
      <div class="grid-content bg-gray-drak">span=8</div>
    </h-col>
    <h-col :span="12">
      <div class="grid-content bg-gray">span=12</div>
    </h-col>
  </h-row>
  <h-row justify="left" gutter-v="5px">
    <h-col :span="12">
      <div class="grid-content bg-gray-drak">span=12</div>
    </h-col>
    <h-col :span="8">
      <div class="grid-content bg-gray">span=8</div>
    </h-col>
    <h-col>
      <div class="grid-content bg-gray-drak">span=4</div>
    </h-col>
  </h-row>

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
  </style>

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
</style>
