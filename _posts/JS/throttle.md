---
title: 节流
tags:
  - JS
  - Array
location: fish
summary: 每隔一段时间都执行一次
date: 2022-04-12
---

防抖函数注意三点

- this 指向
- args 参数获取
- debounce 需要返回一个闭包函数

![debounce_gif](http://threewildcat.com/static/debounce.gif)

```
function throttle(delay, fn , immediately){
    let timeout = null
    let startTime = 0
    return function() {
        let curTime = new Date()
        if(curTime - startTime > delay) {
            // 执行函数
            curTime = startTime
        }
    }
}

// 完整版throttle
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
}


window.addEventListener('mousemove', throttle(1000, function(e) {
    console.log(e)
    container.innerHTML= count++
}, true))
```
