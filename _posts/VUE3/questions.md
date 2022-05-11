---
title: 开发过程中遇到的vue3+ts的问题
tags:
  - vue3
  - typescript
location: fish
summary:
date: 2022-04-21
---

## 问题 1

- 应该是一个类型，但是却被当做 value 来使用
  - 导入类型的时候需要使用 type 来定义

```
import type { SomeThing } from "./some-module.js";
```

## [Vue warn]: injection "Symbol([vue-router]: route location)" not found. #1187

## inject() can only be used inside setup() or functional components

表示 useStore 和 useRoute 类似的 hook 只能在函数或者 setup 内部调用，不能再外部调用

## expected selector 报错 ::v-deep 替换 /deep/

## loaderContext.getOptions is not a function

ts-loader 版本不支持

## element-plus 的 pagination 组件不显示中文

```
// 首先引入element-ui中文包
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(ElementUI, {
  size: 'small',
  locale: {
    el: {
      // 整体覆盖
      ...zhLocale.el,
      pagination: {
        pagesize: '条/页',
        total: `共 {total} 条`,
        goto: '前往第',
        pageClassifier: '页'
      },
    }
  }
})
```

## react 页面引入模块报错 Cannot use import statement outside a module

使用 npm install 下载了一个包， 然后在 react 文件中 import 该模块报错。

报错原因： npm install 下来的包没有进行打包编译调用， 引用的入口文件中依旧包含 import

解决办法：
[手动使用 glup 或者 webpack 进行模块打包编译]（https://segmentfault.com/q/1010000023045996）
