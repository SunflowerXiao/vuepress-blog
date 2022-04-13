---
title: js的element
tags:
  - JS
location: fish
summary:
date: 2022-04-13
---

## element 和 node 的关系

element 继承自 node , node 继承自 EventTarget， element 可以调用 node 的方法

## 属性

## 方法

### insertAdjacentHTML(position, DomString)

将指定的 text 解析为 html，并且插入到 position 位置

> 不会重新解析正在使用的元素，比直接使用 innerHTML 快速

```
element.insertAdjacentHTML('beforebegin',  DOMString) // 在element的前面插入元素 类似于insertBefore
element.insertAdjacentHTML('afterbegin',  DOMString) // 在element的第一个子元素之前插入元素
element.insertAdjacentHTML('beforeend',  DOMString) // 在element的最后一个子元素之后插入元素
element.insertAdjacentHTML('afterend',  DOMString) // 在element的后面插入元素 类似于 appendChild
```

```
// 原为 <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// 此时，新结构变成：
// <div id="one">one</div><div id="two">two</div>

```

> 如果需要插入的元素只是文本内容，那建议使用`insertAdjacentText`方法 或者 `nodeContent`属性
> 被插入的内容需要进行转义，因为他会被解析，不然会导致 xss 攻击

### insertAdjacentText(position, text)

插入 text 文本信息，不需要解析为 html

element.insertAdjacentText(position, text) <=> element.nodeContent = text

```
element.insertAdjacentText('beforebegin',  text) // 在element的前面插入文本
element.insertAdjacentText('afterbegin',  text) // 在element的第一个子元素之前插入文本
element.insertAdjacentText('beforeend',  text) // 在element的最后一个子元素之后插入文本
element.insertAdjacentText('afterend',  text) // 在element的后面插入文本
```

### insertAdjacentHTML(position, element)

插入指定的元素到指定的位置， 使用方式同上
