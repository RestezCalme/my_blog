---
title: 关于git for windows ssh-keygen 生成public key的默认目录为~/SPB_Data/.ssh
date: 2024-08-22 17:17:49
tags:
index_img: /img/关于git-for-windows-ssh-keygen-生成public-key的默认目录为-SPB-Data-ssh/banner.png   
banner_img: /img/关于git-for-windows-ssh-keygen-生成public-key的默认目录为-SPB-Data-ssh/banner.png

---
## 原因
是因为cadence安装的时候，自动添加了一个用户环境变量HOME=C:\SPB_Data，结果在git里面使用ssh-keygen生成private和public key的时候，默认会使用到HOME环境变量，这里路径就不对，后面git clone代码的时候，也是提示权限不足(因为找不到对应的private key)。
## 解决方法
删掉HOME环境变量。
删除后，在终端输入
```bash
git for windows ssh-keygen
```
其默认保存位置在~/.ssh/id_rsa即 %userprofile%/.ssh/id_rsa