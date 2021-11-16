# h-ui
## 组件介绍
> h-design 是一款基于 Vue3的UI组件库。
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

#### 输入/选择组件
- [ ]  input
- [ ]  select
- [ ]  form
- [ ]  radio
- [ ]  checkbox
- [ ]  switch
- [ ]  star
- [ ]  upload

#### 数据组件
- [ ]  table
- [ ]  pagination
- [ ]  tree

#### 弹出组件
- [ ] dialog
- [ ] tooltip
- [ ] alert
- [ ] message
- [ ] natification

... 等等等 🎯

### 组件结构
```
├─docs                  // vuepress 文档
├─packages              // 组件库源码目录
│  ├─Button             // 按钮组件
│  ├─Row                // 布局组件Row
│  ├─Col                // 布局组件Col
│  ├─...
│  ├─hooks              
│  ├─styles             // 样式文件目录
│  └─index.js           // 组件库入口文件
├─src                   // 在这里引入组件查看页面效果
├─package.json
```