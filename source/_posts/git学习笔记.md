---
title: git学习笔记
date: 2024-08-22 07:16:29
tags:
index_img: /img/git学习笔记/banner.png
banner_img: /img/git学习笔记/banner.png
---
本文基于此视频[【GeekHour】一小时Git教程](https://www.bilibili.com/video/BV1HM411377j/?p=11&share_source=copy_web&vd_source=298b9fd4aa04f021dacf04243f366919)攥写
## 安装和初始化设置
### 查看git版本
输入以下命令，如果能看到版本信息则代表git安装成功
```bash
git --version
```
### 配置用户名
```bash
git config --global user.name "your_name"
```
### 配置邮箱
```bash
git config --global user.email example@mail.com
```
### 配置默认分支名称
```bash
git config --global init.defaultBranch main
```
### 保存配置 
```bash
git config --global credential.helper store
```
### 查看git配置信息
```bash
git config --global --list
```
## 创建仓库
方式一 本地创建
```bash
git init
```
方式二 远程克隆
```bash
git clone
```
## 工作区域和工作状态
git本地数据管理分为三个区域
**工作区**(.git) 实际操作的目录   
**暂存区**(.git/index) 用于临时存放即将修改的内容
**本地仓库**(.git/objects) 存储git代码和版本信息的主要位置
修改完工作区的文件后，需要将他们添加到暂存区，
然后再将暂存区的修改内容提交到本地仓库。

## 添加和提交文件
### 查看仓库状态
```bash
git status
```
### 添加到暂存区
```bash
git add
```
### 提交仓库
该命令只会提交暂存区的文件，而不会提交工作区的文件
```bash
git commit
```
### 提交记录
```bash
git log
```
使用以下命令查看简洁版
```bash
git log --oneline
```
## 回退版本
```bash
git reset [--soft | --hard | --mixed]
```
--soft 保留工作区与暂存区的所有内容
--hard 丢弃工作区与暂存区的所有内容
--mixed 保留工作区，丢弃暂存区的内容 （git reset的默认参数）
## 查看差异
使用以下命令查看文件在工作区，暂存区，本地仓库之间的版本差异
```bash
git diff
```
该命令默认比较工作区与暂存区之间的差异
使用HEAD参数可以查看工作区与仓库之间的差异
```bash
git diff HEAD
```
使用--cached参数比较暂存区与仓库的不同
```bash
git diff --cached
```
在后面添加不同版本id可以比较版本内容差异
(head代指最新版本)
```bash
git diff id1 id2
```
可通过以下命令查看前n版本与最新版本差异
（不加n默认为1）
```bash
git diff HEAF~n HEAD
```
使用以下命令只查看file.txt的差异内容
```bash
git diff HEAD~ HEAD file.txt
```
## 删除命令
使用以下命令只会删除工作区的文件
```bash
rm filename
```
还需使用以下命令删除暂存区文件
```bash
git add file
```
使用以下命令同时删除工作区与暂存区的文件
```bash
git rm filename
```
## 忽略文件
在git根目录下创建.gitignore
将文件名输入到该文件内即可忽略该文件
## ssh配置和克隆仓库
### ssh配置
打开终端，输入：
```bash
ssh-keygen -t rsa -b 4096
```
随后找到并打开公钥文件(*.pub)，复制文件内容，添加到github ssh配置中
### 克隆仓库
单击代码并找到ssh界面，复制克隆代码
![复制克隆命令](/img/git学习笔记/复制克隆命令.png)
随后，在主目录下打开终端，输入克隆命令完成克隆
### 同步本地仓库和远程仓库
使用以下命令，同步仓库:
```bash
git push
```
## 关联本地仓库与远程仓库
如果已经在本地有一个仓库，想要将他与远程仓库关联
### 创建仓库
首先在主目录下输入
```bash
git init
```
创建仓库，同时输入相关命令配置各种信息
### 关联仓库
输入
```bash 
git remote add origin git@github.com:RestezCalme/my_blog.git
```
将远程仓库与本地仓库关联起来
### 激活默认分支
此时默认分支未激活，仓库内没有有效分支
需要完成第一次提交才能激活一个分支
输入
```bash
git add .
git commit -m "Initial commit"
```
完成一次提交
在你创建了第一个提交后，运行 
```bash
git branch 
```
将会显示当前的分支名称
### 推送仓库
运行
```bash
git push -u origin main
```
将本地仓库推送到推送到远程仓库

