---
title: 关于如何使用一句话命令实现git的提交以及上传服务器
tags:
  - Linux
  - Git
location: fish
summary: 关于如何使用一句话命令实现git的提交以及上传服务器
date: 2021-04-07
---

## package.json 中设置命令

    "scripts": {
        "doc:dev": "vuepress dev --temp .temp",
        "doc:build": "vuepress build ",
        "deploy": " deploy.sh"
    },

## 在文件根目录创建 deploy.sh

    !/usr/bin/env sh

    # 确保脚本抛出遇到的错误
    set -e
    # 询问是否是git初始化
    read  -r -p "你是否想要初始化git仓库? [Y/N]" input
    case $input in
        y* | Y*)
            git init
            git add -A
            git commit -m 'first commit'
            git branch -M master
            git remote add origin git@github.com:SunflowerXiao/vuepress-blog.git;;
        n* | N*)
            git add -A
            git commit -m 'deploy' ;;
    esac

    # git提交代码
    git push -u origin master

    # 推送到远程服务器的裸仓库
    #git remote add prod fish@121.37.215.79:/home/fish/repos/vuepress-blog.git
    #git push prod master

    # 生成静态文件
    yarn && yarn doc:build


    # 清除远程服务器目录
    ssh fish@121.37.215.79 "rm -rf /home/fish/www/blog/*"
    # 将本地文件上传到服务器
    scp -r .vuepress/dist/* fish@121.37.215.79:/home/fish/www/blog

    #清除本地文件夹
    # rm -rf .vuepress/dist

    cd -

## 执行命令

    npm run deploy
