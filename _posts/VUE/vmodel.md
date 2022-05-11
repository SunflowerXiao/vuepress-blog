---
title: v-model语法糖
tags:
  - vue
location: fish
summary:
---

## v-model 语法糖

v-model 在 vue2 中相当于` :value + @input`

```
// index.js
<componentA v-model="a" />
<componentA :value="a" @input="setValue" />
<script>
export default({
    data() {
        return{
            a: ''
        }
    },
    methods: {
        setValue(val) {
            this.a = value
        }
    }
})
</script>

// componentA.js
<template>
    <input  @change="updateValue" >
</template>
<script>
export default({
    props: {
        value:''
    },
    methods: {
        updateValue(e) {
            this.$emit('input', e.target.value)
        }
    }
})
</script>
```
