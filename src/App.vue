<!--
 * @description: demo
 * @Date: 2021-11-18 17:10:35
 * @LastEditTime: 2022-05-16 17:48:18
 * @Author: xingheng
-->
<template>
  <h2>栅格布局</h2>
  <grid-demo></grid-demo>
  <h2>按钮布局</h2>
  <button-demo></button-demo>
  <h2>input</h2>
  <input-demo> </input-demo>
  <h2>提示 tip</h2>
  <h-button @click="showTip">点击</h-button>
  <h2>图标 icon</h2>
  <h-icon icon="h-icon-apple"></h-icon>
  <h2>单选 radio</h2>
  <h-radio-group v-model="radioValue" inline type="button">
    <h-radio label="苹果" value="1" :checked="true" />
    <h-radio label="香蕉" value="2" />
    <h-radio label="梨子" value="3" />
  </h-radio-group>
  <h2>复选 checkbox</h2>
  <h-checkbox-group @change="handleCheckboxChange" v-model="checkBoxValue" :inline="true">
    <h-checkbox label="章三" value="1"></h-checkbox>
    <h-checkbox label="里斯" value="2"></h-checkbox>
    <h-checkbox label="王武" value="3"></h-checkbox>
  </h-checkbox-group>
  <h2>切换 switch</h2>
  <h-switch
    label="是否打开"
    v-model="valueSwitch"
    :valueFormat="{
      switchValue: '1',
      unSwitchValue: '0',
    }"
    @change="changeSwitch"
  ></h-switch>
  <h2>表格 table</h2>
  <h-table :table-data="tableData" :columns="columns"> </h-table>
</template>

<script lang="ts" setup>
import GridDemo from "@/components/GridDemo/index.vue";
import ButtonDemo from "@/components/ButtonDemo/index.vue";
import InputDemo from "@/components/InputDemo/index.vue";
import HRadio from "../lib/h-radio";
import HRadioGroup from "../lib/h-radio-group";
import HTip from "../lib/h-tip";
import HIcon from "../lib/h-icon";
// import CheckboxDemo from "@/components/CheckboxDemo/checkbox.vue";
import HCheckbox from "../lib/h-checkbox";
import HCheckboxGroup from "../lib/h-checkbox-group";
import HSwitch from "../lib/h-switch";
import HTable from "@/components/TableDemo/h-table.vue";
import { ref } from "vue";

const radioValue = ref("3");
const checkBoxValue = ref(["1", "2"]);
const valueSwitch = ref("1");
const tableData = ref([
  {
    key: "1",
    name: "Semi Design 设计稿.fig",
    nameIconSrc:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png",
    size: "2M",
    owner: "姜鹏志",
    updateTime: "2020-02-02 05:13",
    avatarBg: "grey",
  },
  {
    key: "2",
    name: "Semi Design 分享演示文稿",
    nameIconSrc:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
    size: "2M",
    owner: "郝宣",
    updateTime: "2020-01-17 05:31",
    avatarBg: "red",
  },
  {
    key: "3",
    name: "设计文档",
    nameIconSrc:
      "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
    size: "34KB",
    owner: "Zoey Edwards",
    updateTime: "2020-01-26 11:01",
    avatarBg: "light-blue",
  },
]);
const columns = ref([
  {
    title: "标题",
    dataSet: "name",
  },
  {
    title: "归属者",
    dataSet: "owner",
  },
  {
    title: "更新时间",
    dataSet: "updateTime",
  },
]);
const showTip = () => {
  HTip({
    message: "你好你好你好",
    type: "success",
    continued: 5000,
    showClose: true,
  });
};
const handleCheckboxChange = (value) => {
  console.log(value);
};
const changeSwitch = (value) => {
  console.log(value);
};
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
