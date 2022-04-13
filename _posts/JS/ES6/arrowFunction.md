---
title: 箭头函数
tags:
  - js
location: fish
summary:
date: 2022-04-12
---

## 箭头函数的 this

箭头函数的 this 值是在他当前定义的位置的父级作用域

```
function Parent() {
    this.name = 'fish'
    // 这里的this是在函数Parent()定义的，当调用p.getName()的时候，this就是指的P对象， 所以this.name依旧是fish
    this.getName = () => {
        console.log('get: ', this)
        return this.name
    }
}

// 这里使用构造函数定义了setName 方法， 那么函数中this的指向就是window的值
Parent.prototype.setName = (name) => {
    console.log('set: ', this)   // 打印结果： Window 对象
    this.name = name
}

var p = new Parent()
p.setName('sun');
p.getName();
```

## 箭头函数的注意点

- 箭头函数不能作为构造函数
- 箭头函数不能获取 arguments 对象
