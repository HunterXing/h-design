---
title: switch 切换开关
sidebarDepth: 0
---

## switch

开关

### 基础用法
```vue
  <h-switch
    label="是否打开"
    v-model="isOpen"
  ></h-switch>
```
### 禁选

`disabled` 禁止选中按钮

```vue
  <h-switch
    label="是否打开"
    v-model="isOpen"
    disabled
  ></h-switch>
```
### 行内样式
`inline` 设置行内样式

```vue
 <h-switch
    label="是否打开"
    v-model="isOpen"
    inline
  ></h-switch>
```

### switch自定义值

switch 开启或者关闭的时候默认值为true 或者false，但是h-design允许我们进行自定义设置值

```vue
 <h-switch
    label="是否打开"
    v-model="isOpen"
    :valueFormat="{
      switchValue: '1',
      unSwitchValue: '0',
    }"
  ></h-switch>
```

如上，使用valueFormat对 switchValue和unSwitchValue的值进行覆盖，上面的例子中，switch开启的时候就是'1'，关闭的时候就是'0'。

### 切换事件

`change` 可以监听switch数据切换的变化. true or false

```vue
 <h-switch
    label="是否打开"
    v-model="isOpen"
    @change="changeSwitch"
 ></h-switch>

<script lang="ts" setup>
const isOpen = ref(false)
const changeSwitch = (value) => {
  console.log(value);
};
</script>
```



### Switch 属性

| 名称             | 类型                 | 描述                        | 默认值 |
| --------------------- | ------------------------- | ------------------------------------ | ------- |
| modelValue | string / number / boolean | switch绑定的值 | false |
| label                 | string / number / boolean | 显示值            | —       |
| disabled              | boolean                   | 是否禁选 | false  |
| inline | boolean | 是否行内样式，默认是块状 | — |
| valueFormat | Object {switchValue: true, unSwitchValue: false} | switch开启关闭时对应的默认值 | {switchValue: true, unSwitchValue: false} |

### Switch Events

| 事件名 | 描述                           | 参数                          |
| ---------- | ------------------------------------- | ----------------------------------- |
| change     | 绑定值变化时触发的事件 | value: 当前选择的switch开启或关闭，true or false |

