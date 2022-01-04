# <div data-nosnippet="true">h-design <img src="https://static.npmjs.com/255a118f56f5346b97e56325a1217a16.svg" height="20px" title="This package contains built-in TypeScript declarations" alt="TypeScript icon, indicating that this package has built-in type declarations" class="aa30d277 pl3" data-nosnippet="true"></div>
[![visitors](https://visitor-badge.laobi.icu/badge?page_id=hunterxing.h-design)](https://github.com/hunterxing/h-design.git)
[![npm](https://img.shields.io/npm/dt/h-design?label=h-design&logo=npm)](https://www.npmjs.com/package/h-design)
## 组件介绍
> h-design 是一款基于 Vue3的UI组件库。🎈使用Typescript编写。
> **此组件库用于学习使用，不建议搭建用于开发环境**，希望同道中人让这个项目能真正用起来。
## 组件文档

### 线上文档
[线上文档地址](http://notfound404.cn:8000/)
### 本地文档
```
npm run docs:dev

```
or 
```
yarn doc:dev
```

## 组件开发

### 开发进度
#### 基础组件
- [x]  button 按钮组件
- [x]  row/col 布局组件

#### 输入类
- [x]  input
- [ ]  select
- [ ]  form
- [x]  radio
- [x]  radio-group
- [x]  checkbox
- [x]  checkbox-group
- [x]  switch
- [ ]  star
- [ ]  upload

#### 数据组件
- [ ]  table
- [ ]  pagination
- [ ]  tree

#### 反馈类
- [ ] dialog
- [ ] tooltip
- [ ] alert
- [x] tip
- [ ] banner
- [ ] natification

#### 展示类
- [x] icon

#### 其他
- [x] icon


... 等等等 🎯

### 组件结构
```
├─docs                  // vuepress 文档
├─packages              // 组件库源码目录
│  ├─Button             // 按钮组件
│  ├─Row                // 布局组件Row
│  ├─Col                // 布局组件Col
│  ├─Tip                // 提示反馈组件Tip
│  ├─...            
│  ├─styles             // 样式文件目录
│  └─index.js           // 组件库入口文件
├─src                   // 在这里引入组件查看页面效果
├─package.json
```