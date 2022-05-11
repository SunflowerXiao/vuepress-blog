---
title: vue3相关api
tags:
  - vue3
location: fish
summary:
date: 2022-04-21
---

## defineProps

### 语法

## defineExpose

通过 defineExpose 导出的方法和变量，后期可以通过 ref 直接访问。 父组件可以通过 parent.expose 来访问导出的变量和方法

### 语法

## defineEmits

### 语法

## ts 下使用 defineProps 和 defineEmits

```
const props = defineProps<{
  foo: string
  bar?: number
}>()

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
```

## nextTick

```
await nextTick()
```
