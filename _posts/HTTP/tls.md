---
title: TLS协议,SSL协议
tags:
  - http
location: fish
summary: http是明文传输的，很容易被劫持发生中间人攻击。 https可以通过TLS协议将数据信息进行非对称加密，保证数据的安全性。
---

## SSL/TLS

### 明文的缺点

- 容易被窃听
- 容易被篡改
- 容易被仿冒

### SSL/TLS 的有点

- 数据加密，防止被窃听
- 证书校验，防止被篡改
- 身份证书，防止被仿冒
