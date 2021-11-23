---
title: tip 消息提示
sidebarDepth: 0
---

## 消息
tip提示是对用户的操作做出及时反馈，由用户的操作触发，反馈信息可以是操作的结果状态，如成功、失败、出错、警告等。

## 基础使用

<ClientOnly>
  <doc-tip/>
</ClientOnly>

## 组件属性
| 名称       | 类型      | 描述                                                |  默认值|
| ---------- | --------- | --------------------------------------------------|-------|  
| `type`  | `String` | 类型： 默认是 success info warning  error 四种| info| 
| `message` | `String` | 消息提示文字 | '-'| 
| `icon`     | `String`  | 自定义图标，暂时只支持h-design icon中包含的1000多种图标 |   '-'     |
| `showClose`    | `Boolean` | 展示可以关闭的icon  |  false   |
| `continued`    | `Number` | 出现时间  |  3000毫秒   |

