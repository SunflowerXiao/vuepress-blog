---
title: 关于JS的模块化
tags:
  - js
location: fish
summary: Js的模块化， CMD， AMD, UMD, COMMONJS, ES6, IIFE
---

> 模块化可以隔离作用域，定义自己的命名空间， 解决命名冲突，代码荣誉，依赖关系难以维护，变量污染等问题，提升代码的可读性和可复用性
> js 的模块化发展历程 IIFE >> CommonJS、 AMD、CMD、UMD >> ES6

## AMD 和 CMD

AMD 和 CMD 都是模块加载规范， require.js 实现了 AMD 规范， 而 sea.js 实现了 CMD 规范

**AMD 是 requireJs 在的推广和普及过程中被创造出来。**

**CMD 是 SeaJS 在的推广和普及过程中被创造出来。**

> 二者的的主要区别是 CMD 推崇依赖就近，AMD 推崇依赖前置

### AMD 依赖前置

    /**
    * @param {string} id 模块名称
    * @param {string[]} dependencies 模块所依赖模块的数组
    * @param {function} factory 模块初始化要执行的函数或对象
    * @return {any} 模块导出的接口
    */
    function define(id?, dependencies?, factory): any


    /**
    *  定义模块moduleA
    *  引入的依赖lodash
    **/
    // a.js
    define('moduleA', ['lodash'], function(lodash) {
        let fn = function() {}
        lodash.throttle(fn)
    })

    /**
    *
    *  引入的依赖moduleA
    **/
    // b.js
    require([moduleA], function (moduleA){
        console.log(moduleA.a); // 打印出：hello world
    });

### CMD 依赖就近

    function define(factory): any

    /**
    *  定义模块a
    **/
    // a.js
    define(function (require, exports, module){
    　　exports.a = 'hello world';
    });

    /**
    *  在工厂函数中再去引入需要用到的依赖
    **/
    // b.js
    define(function (require, exports, module){
        var moduleA = require('./a.js');
        console.log(moduleA.a); // 打印出：hello world
    });

## CommonJS

- 适用于 node 服务器端

- commonJS 是同步加载

### exports

> 注意：module.exports 和 exports 的区别是 exports 只是对 module.exports 的一个引用，相当于 Node 为每个模块提供一个 exports 变量，指向 module.exports。这等同在每个模块头部，有一行 var exports = module.exports;这样的命令。

    // a.js
    var person = {
        name: 'ddd'
    }
    exports.person = person

    // b.js
    var person = require('./a.js')
    console.log(person.name)

### module.exports

    // a.js
    var person = {
        name: 'ddd'
    }
    module.exports = person

    // b.js
    var person = require('./a.js')
    console.log(person.name)

## UMD

    (function(root, factory){
        if (typeof define === 'function' && define.amd) {
            // 判断是否支持 AMD
            define([], factory)
        }else if (typeof module === 'object' && module.exports) {
            // 判断 CommontJS
            module.exports = factory()
        } else if (typeof exports === 'object') {
            // CommonJS
            exports.myLibName = factory()
        } else {
            // 全局变量
            root.myLibName = factory()
        }

    })(window, function() {
        return {};
    })

测试

    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            //AMD
            define(['jquery'], factory);
        } else if (typeof exports === 'object') {
            //Node, CommonJS之类的
            module.exports = factory(require('jquery'));
        } else {
            //浏览器全局变量(root 即 window)
            root.returnExports = factory(root.jQuery);
        }
    }(this, function ($) {
        //方法
        function myFunc(){};
        //暴露公共方法
        return myFunc;
    }));

## ES6 `node`

### .mjs 与 .js

.mjs 表示这个 js 文件是一个模块文件，但是现阶段服务器如果需要正确响应.mjs 后缀的文件，需要配置 `content-type` 的 `MIME`类型

### export 导出

    // 导出一个常量
    export const a = 10
    // 导出一个方法
    export function a() {

    }

    // 导出多个数据
    const a = {}
    const b = 12
    export {
        a, b
    }
    // 默认导出
    export default defaultVariable

### import 导入

    // 导入
    import {a} from './a.js'
    import defaultVariable from './default.js'
    import {a as b} from './a.js'

### script 引入

    <script type="module" src="./a.js"> </script>

### 动态加载模块

    import('/modules/myModule.mjs')
    .then((module) => {})

## 比较

<table style="font-size: 12px;">
<tr>
<td></td>
<td>加载方式</td>
<td>加载次数</td>
<td>适用场景</td>
<td>导入方式</td>
<td>导出方式</td>
</tr>
<tr>
<td>AMD</td>
<td>1.运行时加载。异步加载。  
2.模块加载完成之后就会执行， 但是会等到所有模块都执行完成之后再进入回调函数， 模块的执行顺序和书写顺序不一定一致</td>
<td></td>
<td>浏览器环境，requireJS是参照AMD规范实现的</td>
<td >require(['模块名称'], function ('模块变量引用'){// 代码});</td>
<td>define(function (){return '值');</td>
</tr>
<tr>
<td>CMD</td>
<td>1.运行时加载。异步加载。 2.模块加载完成之后并不会执行， 所有模块都下载完成之后， 遇到require语句才执行相应的模块， 模块的执行顺序和书写顺序一致</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>CommonJs</td>
<td>1. 运行时加载。同步加载。 2.模块加载会阻塞接下来代码的执行，需要等到模块加载完成才能继续执行</td>
<td>模块可以被多次加载，但是只会在第一次加载时候运行一次， 后面会从缓存读取</td>
<td>node服务器</td>
<td>require('路径') </td>
<td>module.exports和exports</td>
</tr>
<tr>
<td>UMD</td>
<td></td>
<td></td>
<td>兼容AMD和commonJS规范的同时，还兼容全局引用的方式。</td>
<td></td>
<td></td>
</tr>
<tr>
<td>ES6</td>
<td>编译时加载。 按需加载</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
