---
title: grid布局
sidebarDepth: 0
---

## 栅格布局
布局的栅格化布局方式，基于行（row）和列（col）来定义信息区块的外部框架。
因为代码中使用flex布局，所以浏览器兼容性需自己把握。

## 基础使用

<ClientOnly>
  <doc-grid/>
</ClientOnly>

## 组件属性
### row
| 名称       | 类型      | 描述                                                |  默认值|
| ---------- | --------- | --------------------------------------------------|-------|  
| `justify`  | `String` | flex 布局下的水平排列方式：start end center space-around space-between  | start| 
| `align` | `String` | flex 布局下的垂直对齐方式：top middle bottom | top| 
| `gutter-v`     | `String`  | 垂直栅格间隔，像素值/百分比 |   '0'     |
| `gutter-h`    | `String` | 像素值/百分比  |  '0'   |
| `gutter-h`    | `String` | 像素值/百分比  |  '0'   |

### col
| 名称       | 类型      | 描述                                                |  默认值|
| ---------- | --------- | --------------------------------------------------|-------|  
| `span`  | `Number` | n等份，1-24                                            | 4 | 
