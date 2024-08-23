---
title: linux指令
date: 2024-08-20 10:25:26
index_img: /img/linux指令/banner.png
banner_img:  /img/linux指令/banner.png
tags:
---
## nohup
nohup全称no hang up，允许你在关闭终端或退出会话后继续运行命令或进程。
### 基本语法
``` bash
nohup your_command > output.log 2>&1 &
```
command: 你想要在后台运行的命令。
arguments: 传递给该命令的参数（可选）。
output_file: 将标准输出（stdout）重定向到指定的文件，避免输出显示在终端中。
2>&1: 将标准错误（stderr）重定向到标准输出，确保错误信息也写入到相同的输出文件中。
&: 将命令放在后台运行。
### 示例
``` bash
nohup hexo s > hexo.log 2>&1 &
```
这将启动 Hexo 服务器，并将所有的输出和错误信息记录到 hexo.log 文件中。命令在后台运行，关闭终端不会影响 Hexo 服务器的运行。
## screen
screen 是一个非常有用的命令行工具，它可以帮助你在一个终端会话中管理多个会话。它允许你在一个终端窗口中运行多个程序，甚至在断开连接后继续运行这些程序。
### 如何创建screen
要创建一个新的 screen 会话，只需输入：
``` bash
screen
```
这将启动一个新的 screen 会话，并打开一个新的终端窗口。在这个窗口中，你可以运行命令，就像在普通的终端中一样。

要创建一个具名的 screen 会话，你可以使用如下命令：
``` bash
screen -S 会话名称
```
例如，要创建一个名为 my_session 的会话，可以使用：
``` bash
screen -S my_session
```
### 如何分离(detach) screen会话
如果你想在后台继续运行 screen 会话中的进程，并返回到普通终端，可以按下以下键组合：
``` bash
Ctrl + A, D
```
### 列出所有 screen 会话
``` bash
screen -ls
```
这将列出所有 screen 会话及其对应的名称和 PID。

### 重新连接（Resume）到 hexo-server 会话
``` bash
screen -r session_name_or_PID
```
### 删除screen
``` bash
kill session_PID
```
