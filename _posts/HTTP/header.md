---
title: HTTP报文
tags:
  - http
location: fish
summary: HTTP报文信息
---

## http 的请求报文

- 请求行

请求方法字段+ 空格 + URL 字段 + 空格 + HTTP 协议版本字段。 例如，GET /index.html HTTP/1.1。

- 请求头
- 空行
- 请求体

  ![request 请求报文](http://threewildcat.com/static/request%E6%8A%A5%E6%96%87.png)

## http 的响应报文

- 响应行

协议版本 + 空格 + 状态码 + 空格 + 状态码原因短语

- 响应头
- 空行
- 响应体

  ![request 响应报文](http://threewildcat.com/static/response_baowen.jpg)

## Header

### 通用首部字段（General Header Fields）

请求报文和响应报文两方都会使用的首部

> Cache-control

- Cache-control 指令是单向的，在 请求 中设置的指令，不一定包含在 响应 中
- 不区分大小写
- 多个指令通过','隔开
- 具有可选参数

**Cache-control 的值**

`public` 任何对象都可缓存该请求内容(POST)

`private` 私有缓存（浏览器缓存）

`no-cache` 可以缓存，但是每次都必须访问以下服务器(304)

`no-store` 不可以缓存  
`max-age` 相对于请求时间，设置过期时间

`s-maxage` 共享缓存使用， 私有缓存依旧使用 max-age

`max-stale`  
`min-fresh`

`must-revalidate` 一旦资源过期（比如已经超过 max-age），在成功向原始服务器验证之前，缓存不能用该资源响应后续请求。  
`proxy-revalidate` 共享缓存使用，私有缓存依旧使用 must-revalidate  
`no-transform`  
`only-if-cached` 表明客户端只接受已缓存的响应，并且不要向原始服务器检查是否有更新的拷贝。（只读取强缓存）

**_如何在请求中使用_**

```
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: only-if-cached
```

**_如何在响应中使用_**

```
Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: max-age=0, must-revalidate
Cache-control: no-store
Cache-control: no-transform
Cache-control: public
Cache-control: private
Cache-control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-control: s-maxage=<seconds>
Cache-Control:public, max-age=31536000
```

<font style="color: #999;font-size:12px">响应头设置 `no-store` 可以关闭该请求的缓存</font>

```
Cache-control: no-store
```

<font style="color: #999;font-size:12px">响应头设置 `no-cache` `max-age=0, must-revalidate` 表示客户端可以缓存资源，每次使用缓存资源前都必须重新验证其有效性。这意味着每次都会发起 HTTP 请求，但当缓存内容仍有效时可以跳过 HTTP 响应体的下载 (关闭该请求的强缓存， 但是依旧存在弱缓存)</font>

```
Cache-control: no-cache
Cache-control: max-age=0, must-revalidate
```

<font style="color: #999;font-size:12px">设置请求可以被共享，并且 31536000s 后过期</font>

```
Cache-Control:public, max-age=31536000
```

> Pragma

行为与 `Cache-Control: no-cache` 一致。建议只在需要兼容 `HTTP/1.0` 客户端的场合下应用 Pragma 首部。

**语法**

```
Pragma: no-cache
```

> Connection

**语法**

```
Connection: close // Http1.0 请求的默认值， 请求成功后关闭连接
Connection: keep-alive // 持久连接， Http1.1 默认使用 keep-alive
```

> Upgrade

> via

> Warning

> Transfor-Encoding

> Date

### Reauest Header Fields

客户端向服务器发送请求的报文时使用的首部

> Accept

用来告知服务器，客户端可以处理的内容类型。 服务器根据`内容协商机制`， 会使用`Content-type`应答头通知客户端它的选择

**语法**

```
Accept: text/html
Accept: text/html,text/javascript,image/*
```

#### MIME 类型

```
application/octet-stream //未知应用程序默认类型，如果服务器返回了application/octet-stream 类型的数据给浏览器，浏览器会下载这个文件，不会执行其他任何操作
text/plain // 文本类型
text/css
text/html
text/javascript
image/\*
audio/\*
video/\*
application/x-www-form-urlencoded
multipart/form-data  // 表单上传
multipart/byteranges  // 把部分的响应报文，返回给浏览器
```

Accept-Encoding
Accept-Language
Accept-Charset
If-Match
If-None-Match
If-Modified-Since
If-Unmodified-Since
If-Ranges
Range
Authorization
Proxy-Authorization
Host
User-Agent
Referer
Cookie
Access-Control-Allow-Origin: 允许访问的域名列表
Access-Control-Allow-Credentials： 是否允许发送 Cookie
Access-Control-Expose-Headers: 设置可以通过前端 xhr 的 `getResponseHeader()`方法获取到的头部信息字段, 如果不设置的话，默认只能获取到 `Content-Language`、`Content-Type`、`Expires`、`Last-Modified`、`Pragma`、`Cache-Control`七个头部信息

### Response header

从服务器向客户端响应时使用的字段

> Accept-Ranges

> Access-Control-Allow-Credentials

Age
Location

> vary
> ETag
> WWW-Authenticate
> Proxy-Authenticate
> Server
> Retry-After

### 实体首部字段（Entiy Header Fields）

针对请求报文和响应报文的实体部分使用首部， 也是请求报文和响应报文两方都会使用的首部

> Allow

服务器告诉浏览器所支持的 HTTP Methods 的值

**语法**

```
Allow: GET,POST,HEAD
```

Access-Allow-Origin
Access-Allow-Methods
Content-Encoding

> Content-Type

在请求中，客户端告诉服务器实际发送的数据类型
在响应中，服务器告诉客户端实际返回的数据类型， 但是浏览器不一定会遵循， 可以通过设置 `x-Content-Type-Options`为`nosniff`来防止

**语法**

```
Content-type: application/json;charset=utf-8;boundary=something
```

> Last-Modified 跟缓存相关

> Expires 跟缓存相关

> ....
