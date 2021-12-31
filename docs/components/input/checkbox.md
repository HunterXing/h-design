---
title: checkbox 复选
sidebarDepth: 0
---

## checkbox

在一组备选项中进行复选

### 基础用法
需要配合h-checkbox-group进行配套使用
```vue
<h-checkbox-group v-model="checkboxValue">
  <h-checkbox label="苹果" value="1" />
  <h-checkbox label="香蕉" value="2" />
  <h-checkbox label="梨子" value="3" />
</h-checkbox-group>
```
### 禁选

`disabled` 禁止选中按钮

```vue
<h-checkbox-group v-model="checkboxValue">
  <h-checkbox label="苹果" value="1" disabled />
  <h-checkbox label="香蕉" value="2" />
  <h-checkbox label="梨子" value="3" />
</h-checkbox-group>
```
### 默认选中
`checked` 默认选中

```vue
<h-checkbox-group v-model="checkboxValue">
  <h-checkbox label="苹果" value="1" checked />
  <h-checkbox label="香蕉" value="2" />
  <h-checkbox label="梨子" value="3" />
</h-checkbox-group>
```
### 行内样式
`inline` 设置行内样式，可以添加在h-checkbox-group上作用域内部所有checkbox组件，也可以单独对h-checkbox进行设置

```vue
<h-checkbox-group v-model="checkboxValue" inline>
  <h-checkbox label="苹果" value="1" inline />
  <h-checkbox label="香蕉" value="2" />
  <h-checkbox label="梨子" value="3" />
</h-checkbox-group>
```

### 切换事件
`change` 可以监听checkbox数据切换的变化
```vue
<h-checkbox-group v-model="checkboxValue" @change="changecheckbox">
  <h-checkbox label="苹果" value="1" inline />
  <h-checkbox label="香蕉" value="2" />
  <h-checkbox label="梨子" value="3" />
</h-checkbox-group>
```

### Checkbox 属性

| 名称             | 类型                 | 描述                        | 默认值 |
| --------------------- | ------------------------- | ------------------------------------ | ------- |
| value | string / number / boolean | 绑定值                 | —       |
| label                 | string / number / boolean | 显示值            | —       |
| disabled              | boolean                   | 是否禁选 | false  |
| checked | boolean | 是否选中，默认选中 | false |
| inline | boolean | 是否行内样式，默认是块状 | — |

### checkbox-group Attributes

| 名称    | 类型                      | 描述                     | 默认值 |
| ------- | ------------------------- | ------------------------ | ------ |
| v-model | string / number / boolean | 绑定值                   | —      |
| inline  | boolean                   | 是否行内样式，默认是块状 | —      |

### checkbox-group Events

| 事件名 | 描述                           | 参数                          |
| ---------- | ------------------------------------- | ----------------------------------- |
| change     | 绑定值变化时触发的事件 | value:当前选择的checkbox的value值, values: checkbox已选checkbox数组 |

