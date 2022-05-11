---
title: 数组的扁平化
tags:
  - JS
  - Array
  - s20220412
location: fish
summary: 数组的扁平化
date: 2022-04-12
---

主要都是判断下一个元素是否是数组，如果是数组就使用扩展运算符展开并且[].contact(...arr)

## Es6 Array.prototype.flat

```
/**
* arr.flat(depth) //默认深度是1
*/
var arr = [1, [2,3,4]];
console.log(arr.flat(1)) // 1,2,3,4

var arr = [1, [2,[3,4]]];
console.log(arr.flat(2)) // 1,2,3,4
```

## 如果数组深度只有一层，还可以使用 Array.prototype.flatMap()方法

```
 var arr = [["今", "天", "天", "气", "不", "错"],[""],["早", "上", "好"]];
 var flatarr = arr.flatMap(item => item);
 console.log(flatarr) // ["今", "天", "天", "气", "不", "错", "", "早", "上", "好"]
 console.log(arr) // [["今", "天", "天", "气", "不", "错"],[""],["早", "上", "好"]];
```

## 递归 + 扩展运算符

```
var arr = [1, [2,[3,4]]];
function flattern(arr) {
    let res = []
    arr.forEach(item => {
        if(Array.isArray(item)) {
            console.log(flattern(item))
            res = res.push(...flattern(item)) // 将返回的元素通过扩展运算符扁平化  or res = res.concat(flattern(item))
        } else {
            res.push(item)
        }
    })
    return res
}
```

## 递归 + reduce 方法

```
var arr = [1, [2,[3,4]]];
function flatten(arr) {
    let res = []
    arr.reduce(function(pre, next){
        const result = Array.isArray(next)? flatten(next) : next //递归
        return [...pre].concat(result)
    })
    return res
}

```

## Array.prototype.concat + Array.prototype.some + while 循环

concat 方法用于合并两个或者多个 (数组/值)

```
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const a = 15
const array3 = [].concat(array1, array2, a);
// ["a", "b", "c", "d", "e", "f", 15]
```

```
var arr = [1, [2,[3,4]]];
function flattern(arr) {
    let res = []
    while(arr.some(item => Array.isArray(item))) {
        res = [].concat(...item)  //
    }
    return res
}

```
