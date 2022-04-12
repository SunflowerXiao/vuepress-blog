---
title: 管理npm源
tags:
  - npm
location: fish
summary: 通过nrm 管理npm源
date: 2021-04-07
---

## 通过命令查看和设置 npm 源

    npm config get registry  // 查看npm当前镜像源
    npm config set registry  xxx // 设置npm当前镜像源

## 通过 nrm 查看和设置 npm 源

    nrm ls // 查看npm当前镜像源
    nrm use taobao // 设置npm当前镜像源
