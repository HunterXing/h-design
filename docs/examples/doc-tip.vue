<template>
  <div>
    <doc-example :code="code">
      <h-row gutter-v="5px">
        <h-button @click="tipNormal">默认提示</h-button>
        <h-button type="success" @click="tipSuccess">成功提示</h-button>
        <h-button type="danger" @click="tipError">失败提示</h-button>
        <h-button type="warning" @click="tipWarning">警告提示</h-button>

      </h-row>
      <h-row>
        <h-button type="primary" @click="tipCustom">自定义icon</h-button>
        <h-button @click="tipClose">可手动关闭</h-button>
      </h-row>
    </doc-example>
  </div>
</template>

<script setup>
import HButton from 'packages/components/Button/h-button.vue';
import HRow from 'packages/components/Row/h-row.vue';
import HTip from 'packages/components/Tip/index.ts';
import 'packages/styles/src/index.scss';

// 默认提示
const tipNormal = () => {
  HTip({
    message: '默认提示'
  })
}


// 成功提示
const tipSuccess = () => {
  HTip({
    type: 'success',
    message: '成功提示'
  })
}

// 失败提示
const tipError = () => {
  HTip({
    type: 'error',
    message: '失败提示'
  })
}

// 警告提示
const tipWarning = () => {
  HTip({
    type: 'warning',
    message: '警告提示'
  })
}

// 自定义icon
const tipCustom = () => {
  HTip({
    icon: 'h-icon-bell-fill',
    message: '自定义icon'
  })
}

// 可手动关闭
const tipClose = () => {
  HTip({
    showClose: true,
    message: '可手动关闭'
  })
}


const code = `
// 默认提示
const tipNormal = () => {
  HTip({
    message: '默认提示'
  })
}


// 成功提示
const tipSuccess = () => {
  HTip({
    type: 'success',
    message: '成功提示'
  })
}

// 失败提示
const tipError = () => {
  HTip({
    type: 'error',
    message: '失败提示'
  })
}

// 警告提示
const tipWarning = () => {
  HTip({
    type: 'warning',
    message: '警告提示'
  })
}

// 自定义icon
const tipCustom = () => {
  HTip({
    icon: 'h-icon-bell-fill',
    message: '自定义icon'
  })
}

// 可手动关闭
const tipClose = () => {
  HTip({
    showClose: true,
    message: '可手动关闭'
  })
}
`;
</script>
