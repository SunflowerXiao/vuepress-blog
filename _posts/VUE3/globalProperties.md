---
title: 配置全局变量
tags:
  - vue3
location: fish
summary:
date: 2022-04-21
---

## globalProperties

### 语法

```
app.config.globalProperties.foo = 'bar'

app.component('child-component', {
  mounted() {
    console.log(this.foo) // 'bar'
  }
})


```

## errorHandler

```
app.config.errorHandler = (err, vm, info) => {
  // 处理错误
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
}
```
