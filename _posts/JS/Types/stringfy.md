---
title: JSON.stringfy()
tags:
  - JS
  - s20220412
location: fish
summary: 不同数据形式通过 JSON.stringfy() 后的结果
date: 2022-04-12
---

![数据类型下tringfy的结果](../imgs/jsonStringfy.png)

## 不能正常表现的数据形式

### 序列化后属性值为 null

- NaN

### 序列化后属性值为空对象

- RegExp

- Error

### 序列化后属性值会不见

- Undefined

- Symbol

### 序列化后属性值变为字符串

- Date

### 序列化后报错

- BigInt
