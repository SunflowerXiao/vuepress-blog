---
title: ssh命令
tags:
  - Linux
location: fish
summary: ssh命令相关
---

## 文件传输 `scp`

### 从服务器下载文件

    scp username@servername:/path/filename /var/www/local_dir（本地目录）

### 上传本地文件到服务器

    scp /path/filename username@servername:/path

### 从服务器下载整个目录

    scp -r username@servername:/var/www/remote_dir/（远程目录） /var/www/local_dir（本地目录）

### 上传目录到服务器

    scp -r local_dir username@servername:remote_dir

## 删除远程文件

    ssh root@203.0.113.123 -p22 "rm -rf /home/amzad/test.php"

## ssh 免密码登录 linux 服务器

### 本地生成密钥

    ssh-keygen -t rsa

会在 `C:\Users\用户名\.ssh` 下生成`.id_rsa`和`.id_rsa.pub`，上传本地密钥到服务器

    ssh-copy-id -i ./公钥文件 用户@远程服务器 IP -p ssh 端口

## shell 条件语句判断

    SYSTEM=`uname -s`    #获取操作系统类型，我本地是linux

    if [ $SYSTEM = "Linux" ] ; then     #如果是linux的话打印linux字符串
    echo "Linux"
    elif [ $SYSTEM = "FreeBSD" ] ; then
    echo "FreeBSD"
    elif [ $SYSTEM = "Solaris" ] ; then
    echo "Solaris"
    else
    echo "What?"
    fi     #ifend

## shell 询问语句

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
