---
title: 简单请求和非简单请求
tags:
  - http
  - s20220412
location: fish
summary: 简单请求和非简单请求
date: 2022-04-12
---

## 简单请求

### 请求方法

简单请求的请求方法必须是下面的三种之一

- Get
- Post
- Head

### Request header

简单请求的请求头不能有自定义的头部字段，并且只能有以下几种字段

- Accept
- Accept-Language
- Content-Language
- Content-Type: 只限于三个值 `application/x-www-form-urlencoded` 、`multipart/form-data` 、`text/plain`
- Last-Event-ID

## 非简单请求

除次之外的请求都是非简单请求

### 预请求

浏览器在发送非简单请求之前会发送一次预请求，该请求是 `OPTIONS` 请求，该请求会询问服务器当前网页所在的域名是否在服务器的可访问列表之中，已经可以使用哪一些 http 方法和头信息字段。

发送预检请求：

```
OPTIONS /cors HTTP/1.1
Origin: http://api.qiutc.me  // 表示浏览器请求源
Access-Control-Request-Method: PUT // 请求是PUT方法
Access-Control-Request-Headers: X-Custom-Header,X-Custom-abc // 请求需要自定义X-Custom-Header字段
Host: api.qiutc.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

预请求返回

```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://api.qiutc.me // 表示这个接口可以访问的源
Access-Control-Allow-Methods: GET, POST, PUT // 这个接口可以访问的方法
Access-Control-Allow-Headers: X-Custom-Header // 这个接口可以访问的头部信息
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```
