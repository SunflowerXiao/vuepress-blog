---
title: 字符串的去重
tags:
  - JS
  - String
  - s20220412
location: fish
summary: 去掉字符串中重复的字符hellowworld 结果为 helowrd
date: 2022-04-12
---

总的来说，就是需要先找到重复了的元素

## Array Set

```
function unique(str) {
    return Array.from(new Set(str.split(''))).join('')
}
```

## 普通循环

```
function unique(str) {
    let tempstr = ''
    for(var i=0; i<str.length; i++) {
        if(tempstr.indexOf(str[i]) === -1) {
            tempstr+= str[i]
        }
    }
    return tempstr
}
```
