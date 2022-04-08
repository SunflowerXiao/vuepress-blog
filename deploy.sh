#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 如果是发布到自定义域名
# echo 'www.threewildcat.com' > CNAME
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


git push -u origin master
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:SunflowerXiao/vuepress-blog.git origin master

# 推送到远程服务器的裸仓库
#git remote add prod fish@121.37.215.79:/home/fish/repos/vuepress-blog.git
#git push prod master

# 生成静态文件
 yarn && yarn doc:build

# 进入生成的文件夹
# cd .vuepress/dist
# 清除远程服务器目录
ssh fish@121.37.215.79 "rm -rf /home/fish/www/blog/*"
# 将本地文件上传到服务器
scp -r .vuepress/dist/* fish@121.37.215.79:/home/fish/www/blog

#清除本地文件夹

cd -


