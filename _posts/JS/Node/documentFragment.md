---
title: 文档片段接口
tags:
  - JS
location: fish
summary: DocumentFragment，文档片段接口，一个没有父对象的最小文档对象，存储由节点（nodes）组成的文档结构。 不是真实DOM的一部分，所以他的变化不会触发DOM树的重新渲染
date: 2022-04-13
---

## 继承

DocumentFragment 继承自 node, node 继承自 EventTarget

## 属性

都是只读属性不能被访问

## 创建

```
var dg = document.createDocumentFragment();
var fragment = new DocumentFragment()
```

## 方法

### append()

### prepend()

### querySelector()

### replaceChildren()

### getElementById()

## 案例

DocumentFragment 会将它里面所有的子节点都插入到 document 中去

```
var list = document.querySelector('#list')
var fragment = new DocumentFragment()
var fruits = ['Apple', 'Orange', 'Banana', 'Melon']
// 将需要添加到文档中的多个元素，先同意加入到fragment中去
fruits.forEach(function (fruit) {
  var li = document.createElement('li')
  li.textContent = fruit
  fragment.appendChild(li)
})
// document文档会将fragment中的所有子节点当做一个整体插入到dom中去，而不会一个一个的插入节点
list.appendChild(fragment)
```
