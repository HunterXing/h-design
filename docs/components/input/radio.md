---
title: radio 单选
sidebarDepth: 0
---

## radio

在一组备选项中进行单选

### 基础用法
需要配合h-radio-group进行配套使用
```vue
<h-radio-group v-model="radioValue">
  <h-radio label="苹果" value="1" />
  <h-radio label="香蕉" value="2" />
  <h-radio label="梨子" value="3" />
</h-radio-group>
```
### 禁选

`disabled` 禁止选中按钮

```vue
<h-radio-group v-model="radioValue">
  <h-radio label="苹果" value="1" disabled />
  <h-radio label="香蕉" value="2" />
  <h-radio label="梨子" value="3" />
</h-radio-group>
```
### 默认选中
`checked` 默认选中

```vue
<h-radio-group v-model="radioValue">
  <h-radio label="苹果" value="1" checked />
  <h-radio label="香蕉" value="2" />
  <h-radio label="梨子" value="3" />
</h-radio-group>
```
### 行内样式
`inline` 设置行内样式，可以添加在h-radio-group上作用域内部所有radio组件，也可以单独对h-radio进行设置

```vue
<h-radio-group v-model="radioValue" inline>
  <h-radio label="苹果" value="1" inline />
  <h-radio label="香蕉" value="2" />
  <h-radio label="梨子" value="3" />
</h-radio-group>
```

### 切换事件
`change` 可以监听radio数据切换的变化
```vue
<h-radio-group v-model="radioValue" @change="changeRadio">
  <h-radio label="苹果" value="1" inline />
  <h-radio label="香蕉" value="2" />
  <h-radio label="梨子" value="3" />
</h-radio-group>
```

### Radio 属性

| 名称             | 类型                 | 描述                        | 默认值 |
| --------------------- | ------------------------- | ------------------------------------ | ------- |
| value | string / number / boolean | 绑定值                 | —       |
| label                 | string / number / boolean | 显示值            | —       |
| disabled              | boolean                   | 是否禁选 | false  |
| checked | boolean | 是否选中，默认选中 | false |
| name                  | string                    | 原生  'name' 属性        | —       |
| inline | boolean | 是否行内样式，默认是块状 | — |

### Radio-group Attributes

| 名称    | 类型                      | 描述                     | 默认值 |
| ------- | ------------------------- | ------------------------ | ------ |
| v-model | string / number / boolean | 绑定值                   | —      |
| inline  | boolean                   | 是否行内样式，默认是块状 | —      |

### Radio-group Events

| 事件名 | 描述                           | 参数                          |
| ---------- | ------------------------------------- | ----------------------------------- |
| change     | 绑定值变化时触发的事件 | 当前选择的radio的value值 |

