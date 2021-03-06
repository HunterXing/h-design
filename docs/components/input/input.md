---
title: input 输入框
sidebarDepth: 0
---

## Input 输入框
### 基础用法
<ClientOnly>
  <doc-input-1/>
</ClientOnly>

### 可清除
<ClientOnly>
  <doc-input-2/>
</ClientOnly>


### textarea
可使用 `height` 设置高度
<ClientOnly>
  <doc-input-3/>
</ClientOnly>

### 复合型输入框
可前置或后置元素，一般为标签或按钮
<ClientOnly>
  <doc-input-4/>
</ClientOnly>

### 组件属性

| 名称       | 类型      | 描述                               | 默认值 |
| ---------- | --------- | ---------------------------------- | ------ |
| `disabled` | `Boolean` | 禁用状态                           | false  |
| `readonly`     | `Boolean`  | 只读 | false |
| `type`     | `String`  | 类型。可选 `textarea` `password` `text` | text |
| `placeholder`     | `String`  | 占位文本 | - |
| `size`     | `String`  | 大小。可选 `mini` `medium` `large` | medium |
| `clearable`     | `Boolean`  | 可清除 | false |
| `height`     | `String`  | textarea的高度，只对type为textarea的有效 | -      |
| `allowE`     | `Boolean`  | 是否允许number类型时输入科学计算中的e,默认关闭 | false     |




### 事件
| 名称       | 类型      | 描述                                                     | 默认值 |
| ---------- | --------- | -------------------------------------------------------- | ------ |
| `change` | `function(value:string, e:event)` | 失焦值改变                                            | - |
| `input` | `function(value:string, e:event)` | 值改变                                            | - |
| `blur` | `function(e:event)` | 加载状态                                                 | -  |
| `enter` | `function(e:event)` | 键盘enter                                  | -  |
| `focus` | `function(e:event)` | 鼠标进入input                                    | -  |
| `keypress` | `function(e:event)` | 键盘按下                                    | -  |
| `clear` | `function(e:event)` | 清空值回调函数 | -   |
