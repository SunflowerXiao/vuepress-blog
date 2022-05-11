---
title: 挂载全局变量
tags:
  - vue
location: fish
summary:
date: 2022-05-07
---

## vue2 挂载全局变量

```
Vue.prototype.$axios = axios
```

### vue3 挂载全局变量

### 方法一

```

// main.js
const app = createApp(App);
app.config.globalProperties.$axios = axios


```

### 方法二

```

// global.js

export default{
    install: (app) => {
        app.config.globalProperties.$axios = axios
    }
}

// main.js
import GlobalData from 'global.js'
var app = createApp(App)
app.use(GlobalData).mount('#app')

```

### vue3 获取全局变量

```

// 获取
import {getCurrentInstance} from 'vue'
const {proxy} = getCurrentInstance()
proxy.$axios()

```
