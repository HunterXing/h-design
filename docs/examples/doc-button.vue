<template>
  <div>
    <doc-example :code="code">
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

    </doc-example>
  </div>
</template>

<script setup>
import HButton from 'packages/components/Button/h-button.vue';
import HRow from 'packages/components/Row/h-row.vue';
import 'packages/styles/src/index.scss';

const code = `
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
  </h-row>`;
</script>
