---
title: js的数据类型
tags:
  - JS
  - s20220412
location: fish
summary: Number, String, Null, Undefined, Boolean, Object, Symbol, BigInt
date: 2022-04-12
---

## 基本数据类型

Number, String, Null, Undefined, Boolean

### Number

- Number 的范围 Number.MIN_SAFE_INTEGER - Number.MAX_SAFE_INTEGER (-2^53+1 ~ 2^53 - 1 (16 位))

### BigInt

- 超出 Number 类型的数据可以使用 BigInt 来定义

```
  const a = BigInt(2);
```

- BigInt 没有 Math 方法

- BigInt 不能和 Number 互相转化

- BigInt 不能使用 new 创建

### Null

Null 表示一个空的指针， 他在栈内存中找不到他的地址指向

#### typeof null === 'object'

### Undefined

### Symbol

Symbol 表示一个唯一的值，他和 BigInt 一样不能使用 `new` 来创建

```
var a = Symbol('a')
var a = Symbol.for('a')
```

- Symbol 创建出来的对象不是全局对象
- Sybmol.for()创建出来的是全局对象

## 引用数据类型

### Object
