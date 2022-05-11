---
title: 防抖
tags:
  - JS
  - Array
  - s20220412
location: fish
summary: 用户操作停止一段时间后会执行操作， （可以通过变量控制是否一开始也要执行操作）
date: 2022-04-12
---

防抖函数注意三点

- this 指向
- args 参数获取
- debounce 需要返回一个闭包函数

![debounce_gif](http://threewildcat.com/static/debounce.gif)

```
function debouce(delay, fn , immediately){
    let timeout = null
    return function() {
        timeout && clearTimeout(timeout)
        const args = arguments;
        console.log('args', this)
        // 每次重新监听的时候都会立即执行
        if(immediately) {
            fn.apply(this, args)
            immediately = false
        }
        timeout = setTimeout(() => {
            fn.apply(this, args)
            immediately = true
        }, delay)
    }
}
window.addEventListener('mousemove', debouce(1000, function(e) {
    console.log(e)
    container.innerHTML= count++
}, true))
```
