---
sidebarDepth: 3
---

# <div data-nosnippet="true">h-design <img src="https://static.npmjs.com/255a118f56f5346b97e56325a1217a16.svg" height="20px" title="This package contains built-in TypeScript declarations" alt="TypeScript icon, indicating that this package has built-in type declarations" class="aa30d277 pl3" data-nosnippet="true"></div>
> h-design 是一款基于 Vue3的UI组件库。🎈使用Typescript编写。
> **此组件库用于学习使用，不建议搭建用于开发环境**，希望同道中人让这个项目能真正用起来。

H-design, a Vue 3.x based component library for developers

[![visitors](https://visitor-badge.laobi.icu/badge?page_id=hunterxing.h-design)](https://github.com/hunterxing/h-design.git)
[![npm](https://img.shields.io/npm/dt/h-design?label=h-design&logo=npm)](https://www.npmjs.com/package/h-design)

## 快速上手

### 安装

```bash
yarn add h-design
```
or
```bash
npm install h-design
```

### 全局引入

```js
# main.js
import { createApp } from 'vue'

import HDesign from 'h-design';
import 'h-design/lib/styles/index.css';

const app = createApp(App)
app.use(HDesign)
```

### 按需引入


**单文件组件中使用**

```js
import { HButton } from 'h-design';
import 'h-design/lib/styles/index.css';
export default {
  components: { HButton }
};
```
