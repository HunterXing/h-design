---
title: Button input
sidebarDepth: 0
---

## Input 输入框

<ClientOnly>
  <doc-input/>
</ClientOnly>

### 组件属性

| 名称       | 类型      | 描述                               | 默认值 |
| ---------- | --------- | ---------------------------------- | ------ |
| `disabled` | `Boolean` | 禁用状态                           | false  |
| `readonly`     | `Boolean`  | 只读 | false |
| `type`     | `String`  | 类型。可选 `textarea` `password` `text` | text |
| `size`     | `String`  | 大小。可选 `mini` `medium` `large` | medium |
| `clearable`     | `Boolean`  | 可清除 | false |
| `rows`     | `Number`  | textarea的默认行数，只对type为textarea的有效 | -      |




### 事件
| 名称       | 类型      | 描述                                                     | 默认值 |
| ---------- | --------- | -------------------------------------------------------- | ------ |
| `change` | `function(value:string, e:event)` | 值改变                                            | - |
| `blur` | `function(e:event)` | 加载状态                                                 | -  |
| `clear` | `function(e:event)` | 清空值回调函数 | -      |
| `enter` | `function(e:event)` | 键盘enter                                  | -  |
| `focus` | `function(e:event)` | 鼠标进入input                                    | -  |

