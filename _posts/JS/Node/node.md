---
title: js节点的属性和方法
tags:
  - JS
location: fish
summary: JS中可以操作节点的方法和获取节点的属性
date: 2022-04-13
---

## 类型

- 属性节点
- 文档节点
- 注释（comment）节点
- 元素节点
- 文本节点

## 属性

### childNodes

获取当前节点下所有的子节点（nodeList[]）

```
ele.childNodes
```

### firstChild / lastChild

获取当前节点下面的第一个节点或者最后一个节点

### nextSibling / previousSibling

获取当前节点的下一个或者上一个相邻的节点

### parentElement / parentNode

parentElement: 返回当前节点的父元素（DOM 元素）
parentNode: 返回当前节点的父节点（Node 节点）

### textContent

当前节点及其后代的文本内容（包含 script, style 等等）

- document.textContent = null
- document.documentElement.textContent 获取整个文档的文本
- 因为是设置的是的文本内容，所以不会解析 HTML，可以防止 XSS 攻击， 这一点和 innerHtml(element 的属性) 不同
- 和 innerText(element 的属性) 不同，innerText 会收到 CSS 元素的影响，不会返回隐藏元素的文本，并且使用 innerText 会触发回流

```
// html
<div id="divA">This is <span>some</span> text!</div>
// 获取文本内容
let text = document.getElementById('divA').textContent;
// 设置文本内容
document.getElementById('divA').textContent = 'hello word'
// The HTML for divA is now:
// <div id="divA">hello word</div>

```

## 方法

### appendChild()

在当前节点内容中的末尾插入子节点

```
element.appendChild(aChild)
```

#### 插入节点

- 插入已有节点。 如果要插入的节点就是文档中的某个节点， appendChild() 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。
- 拷贝当前文档节点插入。`Node.cloneNode` 会保留原有节点，但是不会保持同步
- 跨文档插入节点。 需要在插入前使用`document.importNode` 或者 `document.adoptNode` 方法来拷贝
- 插入 DocumentFragment

```
var iframe = document.getElementsByTagName("iframe")[0]; // 获取第一个iframe
var oldNode = iframe.contentDocument.getElementById("myNode"); // 获取iframe的内容
var newNode = document.importNode(oldNode, true); // 跨文档拷贝并且导入节点
document.getElementById("container").appendChild(newNode); // 插入节点
```

```
// `document.adoptNode`
var iframe = document.getElementsByTagName("iframe")[0],
ele = iframe.contentWindow.document.body.firstElementChild // 获取iframe的第一个子元素
var newNode = document.adoptNode(ele)
document.getElementById("container").appendChild(newNode);
```

- 返回值： 返回追加的子节点 或者 空文档片段（DocumentFragment）

### hasChildNodes()

当前节点是否包含子节点， 返回一个 boolean 值

### contains()

当前节点是否包含某个子节点

### insertBefore()

在参考节点之前插入一个拥有指定父节点的子节点

```
/**
* parentNode
* newNode
* referenceNode： newNode 将要插在这个节点之前， referenceNode 必须显示的定义为某个节点或者null
**/
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

#### 插入节点

- 插入文档中已经存在的节点。 insertBefore() 会将其从当前位置移动到新位置（在将节点附加到其他节点之前，不需要从其父节点删除该节点）。
- 插入 DocumentFragment
- 拷贝当前文档节点插入。`Node.cloneNode` 会保留原有节点，但是不会保持同步
- 跨文档插入节点。 需要在插入前使用`document.importNode` 或者 `document.adoptNode` 方法来拷贝

### isEqualNode()

判断两个节点是否相等, 当两个节点的类型相同，定义特征(defining characteristics)相同（对元素来说，即 id，孩子节点的数量等等），属性一致等，这两个节点就是相等的

- 判断节点相同 nodeA === nodeB

### removeChild()

- removeChild 从 DOM 节点中删除一个子节点，返回值为该子节点
- 如果使用变量接受了该删除的节点， 那么该删除节点依旧会存在在内存中，不会被释放

```
let oldChild = parentNode.removeChild(child);

```

### replaceChild()

返回被替换掉的节点

- - 如果使用变量接受了该替换掉的节点， 那么该替换掉节点依旧会存在在内存中，不会被释放

```
let oldChild = parentNode.replaceChild(newNode, oldNode);

```
