---
title: 数组的去重
tags:
  - JS
  - Array
  - s20220412
location: fish
summary: 去掉数组中重复的元素
date: 2022-04-12
---

## Array Set

```
function unique(arr) {
    return Array.from(new Set(arr))
}

function unique(arr) {
    return [...new Set(arr)]
}

```

## 循环去重

```
// includes
function unique(arr) {
    let tempArr = []
    arr.forEach(item => {
        if(!tempArr.includes(item)) {
            tempArr.push(item)
        }
    })
    return tempArr
}
// indexOf
function unique(arr) {
    let tempArr = []
    arr.forEach(item => {
        if(tempArr.indexOf(item) === -1) {
            tempArr.push(item)
        }
    })
    return tempArr
}
```

## 利用 sort，比对相邻元素

```
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var tempArr= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i -1]) {
            tempArr.push(arr[i])
        }
    }
}
```

## 利用 filter + 判断 Index

```
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }

    return arr.filter(function(item, index,arr) {
        // 最后一个元素的匹配和当前index不匹配，那么就是有重复
        return arr.lastIndexOf(item) === index
    })
}
unique([1,3,3,1,2,1,4,2,4])
// 输出 [3, 1, 2, 4]

```
