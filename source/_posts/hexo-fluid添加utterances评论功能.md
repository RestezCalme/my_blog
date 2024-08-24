---
title: hexo-fluid添加utterances评论功能
date: 2024-08-24 21:04:13
index_img: /img/hexo-fluid添加utterances评论功能/banner.png
banner_img: /img/hexo-fluid添加utterances评论功能/banner.png
excerpt: 给大伙来点能废话的地方
tags:
categories:
---
<s>这破地真的会有人评论么</s>。 

## 新建一个github仓库
首先创建一个公开的[github](https://github.com/)仓库，按下图填完信息后Create repository创建
![新建仓库](/img/hexo-fluid添加utterances评论功能/新建仓库.png)
## 安装utterances 
安装[utterances app](https://github.com/apps/utterances)，install(安装)按钮未登陆github时不会显示，已安装则显示的是configure。
![安装utterances](/img/hexo-fluid添加utterances评论功能/安装utterances.png)
选择刚刚建好的github仓库，然后点击安装
![](/img/hexo-fluid添加utterances评论功能/安装.png)
## 添加到Hexo-Fluid
打开hexo的主题配置文件（即_config.fluid.yml），将enable设置为true，同时选择对应type。
```yaml
  comments:
    enable: true
    # 指定的插件，需要同时设置对应插件的必要参数
    # The specified plugin needs to set the necessary parameters at the same time
    # Options: utterances | disqus | gitalk | valine | waline | changyan | livere | remark42 | twikoo | cusdis | giscus | discuss
    type: utterances
```
然后在后面找到comments的具体配置
```yaml
utterances:
  repo: RestezCalme/utterances-comments #自己的仓库名
  issue_term: pathname
  label: #
  theme: github-light
  theme_dark: github-dark
  crossorigin: anonymous
```
参照以上内容修改，保存即可开启评论功能

