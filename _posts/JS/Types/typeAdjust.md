---
title: 数据类型的判断
tags:
  - JS
location: fish
summary: Object.prototype.toString.call(xxx), xxx.constructor, typeof , instanceOf
date: 2022-04-12
---

## typeOf

### 值类型 <font color="green">√</font>

typeOf 可以判断值类型，但是并不能判断一些自定义的类型

### Null <font color="red">×</font>

typeof 不能判断`Null`的类型， 打印結果是 `object`

### Function <font color="green">√</font>

typeOf 可以判断 `Function`， 打印結果是 `function`

### Array <font color="red">×</font>

typeOf 不能判断 `Array`的类型， 打印結果是 `object`

## instanceof

### 值类型 <font color="red">×</font>

不能用来判断值类型，只可以用来判断引用数据类型

```
var a = 10; a instanceof Number // false
var a = {}; a instanceof Object // true
```

### Function <font color="green">√</font>

instanceof 可以判断 `Function`， 打印結果是 `true`

```
var a = () => {};
a instanceof Function // true
a instanceof Object // true
```

### Array <font color="green">√</font>

instanceof 可以判断 `Array`， 打印結果是 `true`

```
var a = []
a instanceof Array // true
a instanceof Function // false
a instanceof Object // true
```

## constructor

constructor 可以查看引用类型的构造函数的名称

### 值类型 <font color="green">√</font>

可以判断值类型<font color="red">(不能判断`Null` 和 `Undefined`,会报错 Null 和 Undefined 都没有 constructor 属性)</font>

```
var a = 10; a.constructor.name === 'Number' // true
var a = '34'; a.constructor.name === 'String' // true
var a = false; a.constructor.name === 'Boolean' // true
var a = Symbol(); a.constructor.name === 'Symbol' // true
var a = BigInt(3); a.constructor.name === 'BigInt' // true
```

### Function <font color="green">√</font>

可以判断 Function 类型的数据

```
var a = {}; a.constructor.name === 'Object' // true
var a = () => {}; a.constructor.name === 'Function' // true
```

### Array <font color="green">√</font>

可以判断 Array 类型的数据

```
var a = []; a.constructor.name === 'Array' // true
```

### 自定义类型 <font color="green">√</font>

可以用来判断自定义类型

```
function AClass() {}
var a = new AClass()
a.constructor.name === 'AClass' //true
```

## Object.prototype.toString.call()

### 值类型 <font color="green">√</font>

```
var a = 10; Object.prototype.toString.call(a) // [object Number]
var a = '34'; Object.prototype.toString.call(a) // [object String]
var a = null; Object.prototype.toString.call(a) // [object Null]
var a = undefined; Object.prototype.toString.call(a) // [object Undefined]
var a = false; Object.prototype.toString.call(a) // [object Boolean]
var a = Symbol(); Object.prototype.toString.call(a) // [object Symbol]
var a = BigInt(3); Object.prototype.toString.call(a) // [object BigInt]
```

### Function <font color="green">√</font>

```
var a = () => {}; Object.prototype.toString.call(a) // [object Function]
```

### Array <font color="green">√</font>

```
var a = []; Object.prototype.toString.call(a) // [object Array]
```

### 自定义类型 <font color="green">x</font>

只能判断自定义类型为 [object Object] 不能得到他是具体的哪个类型名称

```
function AClass() {}
var a = new AClass()
Object.prototype.toString.call(a) // [object Object]
```
