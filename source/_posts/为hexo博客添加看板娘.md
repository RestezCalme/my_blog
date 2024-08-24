---
title: 为hexo博客添加看板娘
date: 2024-08-24 19:16:07
index_img: /img/为hexo博客添加看板娘/banner.png
banner_img: /img/为hexo博客添加看板娘/banner.png
excerpt: “看板娘”，简而言之就是小店的女服务生，也有“吸引顾客，招揽生意，提高人气”等作用类似品牌形象代言人的含义。而网页中的看板娘，所用的技术是live2D。live2d并不是一种先进的技术，它产生的效果，都是用基本的平移、旋转、透明、曲面变形等操作实现的。最终的效果与贴图关系很大，而每一个动作，都需要制作师的精细调整
tags:
categories:

---
> “看板娘”，简而言之就是小店的女服务生，也有“吸引顾客，招揽生意，提高人气”等作用类似品牌形象代言人的含义。而网页中的看板娘，所用的技术是live2D。live2d并不是一种先进的技术，它产生的效果，都是用基本的平移、旋转、透明、曲面变形等操作实现的。最终的效果与贴图关系很大，而每一个动作，都需要制作师的精细调整
## 安装依赖
在`博客目录`下，输入以下命令安装依赖
```bash
npm install --save hexo-helper-live2d
```
## 安装模型
```bash
npm install live2d-widget-model-模型名字
```
此时`博客目录`\node_modules\目录下会出现你刚才下载的模块。
## 修改配置文件
当我们做好上述步骤之后，就需要到`_config.yml`中进行配置
```bash
live2d:
  enable: true
  # enable: false
  scriptFrom: local # 默认
  pluginRootPath: live2dw/ # 插件在站点上的根目录(相对路径)
  pluginJsPath: lib/ # 脚本文件相对与插件根目录路径
  pluginModelPath: assets/ # 模型文件相对与插件根目录路径
  # scriptFrom: jsdelivr # jsdelivr CDN
  # scriptFrom: unpkg # unpkg CDN
  # scriptFrom: https://cdn.jsdelivr.net/npm/live2d-widget@3.x/lib/L2Dwidget.min.js # 你的自定义 url
  tagMode: false # 标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
  debug: false # 调试, 是否在控制台输出日志
  model:
    use: live2d-widget-model-模型名字 # npm-module package name
  # use: wanko # 博客根目录/live2d_models/ 下的目录名
  # use: ./wives/wanko # 相对于博客根目录的路径
  # use: https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json # 你的自定义 url
    scale: 1
    hHeadPos: 0.5
    vHeadPos: 0.618
  display:
    superSample: 2
    width: 150
    height: 300
    position: left
    hOffset: 0
    vOffset: -20
  mobile:
    show: true
    scale: 0.5
  react:
    opacityDefault: 0.7
    opacityOnHover: 0.2
    ```
    