---
title: 求数组元素中的最大值和最小值
tags:
  - JS
  - Array
  - s20220412
location: fish
summary: 求数组元素中的最大值和最小值
date: 2022-04-12
---

## 使用 Apply

```
function min(arr) {
    return Math.min.apply(this, arr)
}

function max(arr){
    Math.max.apply(this, arr)
}

```

## 使用 sort

```
function min(arr) {
    arr.sort(function(a, b) {
        return a-b
    })
    return arr[0]
}

function max(arr) {
    arr.sort(function(a, b) {
        return a-b
    })
    return arr[arr.length - 1]
}
```

## 使用 reduce

```
function min(arr) {
    return arr.reduce(function(a, b) {
        return a < b ? a : b
    })
}

function max(arr) {
   return arr.reduce(function(a, b) {
        return a > b ? a : b
    })
}
```
