<template>
<div>
  <h-row gutter-v="5px">
    <h-button>默认按钮</h-button>
    <h-button type="primary">主要按钮</h-button>
    <h-button type="success">成功按钮</h-button>
    <h-button type="info">信息按钮</h-button>
    <h-button type="danger">危险按钮</h-button>
    <h-button type="primary" disabled>禁用</h-button>
    <h-button type="primary" loading>加载中</h-button>
  </h-row>
  <h-row gutter-v="5px">
    <h-button plain>朴素按钮</h-button>
    <h-button type="primary" plain>主要按钮</h-button>
    <h-button type="success" plain>成功按钮</h-button>
    <h-button type="info" plain>信息按钮</h-button>
    <h-button type="danger" plain>危险按钮</h-button>
    <h-button type="primary" disabled plain>禁用</h-button>
    <h-button type="primary" loading plain>加载中</h-button>
  </h-row>
  <h-row gutter-v="5px">
    <h-button round>圆角按钮</h-button>
    <h-button type="primary" round>主要按钮</h-button>
    <h-button type="success" round>成功按钮</h-button>
    <h-button type="info" round>信息按钮</h-button>
    <h-button type="danger" round>危险按钮</h-button>
    <h-button type="primary" disabled round>禁用</h-button>
    <h-button type="primary" loading round>加载中</h-button>
  </h-row>
  <h-row gutter-v="5px">
    <h-button type="primary" block>块状按钮</h-button>
  </h-row>
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
      <div class="grid-content bg-gray-drak">4</div>
    </h-col>
  </h-row>
</div>
</template>

<script>
import { HButton, HRow, HCol } from '../packages/styles/node_modules/index';
import '../lib/styles/index.css';

export default {
  name: 'App',
  components: {
    HButton,
    HRow,
    HCol,
  },
};
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
</style>
