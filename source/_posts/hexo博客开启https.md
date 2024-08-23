---
title: hexo博客开启https
date: 2024-08-23 23:18:03
index_img: /img/hexo博客开启https/banner.png
banner_img:  /img/hexo博客开启https/banner.png
tags:
---
本文默认已经参照[hexo文档](https://hexo.io/zh-cn/docs/)完成建站工作
## 申请ssl证书
输入
```bash
~/.acme.sh/acme.sh  --issue -d 你的域名 --standalone -k ec-256 --force --insecure
```
申请证书
## 安装nginx
输入
```bash
sudo apt install nginx
```
## 修改nginx配置
输入
```bash
vim /etc/nginx/sites-enabled/default
```
修改nginx配置
配置内容如下
```bash
server {
   listen 443 ssl;
   server_name blog.arcueid.xyz; #填写绑定证书的域名
   root /home/ubuntu/my_blog/public/; #网站主页路径。此路径仅供参考，具体请您按照实际目录操作。
   index index.html index.htm;   
   ssl_certificate /root/.acme.sh/blog.arcueid.xyz_ecc/blog.arcueid.xyz.cer; #证书文件路径+名称
   ssl_certificate_key /root/.acme.sh/blog.arcueid.xyz_ecc/blog.arcueid.xyz.key; #私钥文件路径+名称
   ssl_session_timeout 5m;
   ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
   ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
   ssl_prefer_server_ciphers on;
   location / {
      index index.html index.htm;
   }
}
server {
   listen 80;
   server_name blog.arcueid.xyz; #填写绑定证书的域名
   rewrite ^(.*)$ https://$host$1 permanent; #把http的域名请求转成https
}
```
保存配置并启动nginx