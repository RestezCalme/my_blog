---
title: 为Hexo博客添加aplayer音乐播放器
date: 2024-08-27 01:12:29
index_img: /img/为Hexo博客添加aplayer音乐播放器/banner.png
banner_img: /img/为Hexo博客添加aplayer音乐播放器/banner.png
excerpt: 总感觉自己博客太单调，没有生气，需要来点大明星驻场
tags:
categories:
---
> 总感觉自己博客太单调，没有生气，需要来点大明星驻场
## 安装aplayer
安装的方法有两种
### 1.npm安装 
在hexo的博客根目录打开终端，输入：
```bash
npm install --save hexo-tag-aplayer
```
可以看到在node_module文件夹中多出来一个aplayer文件夹即可
![aplayer路径](/img/为Hexo博客添加aplayer音乐播放器/aplayer路径.png)
### 2.github克隆
在APlayer的[github主页](https://github.com/DIYgod/APlayer),直接克隆
![github界面](/img/为Hexo博客添加aplayer音乐播放器/github界面.png)
打开终端输入克隆代码
```bash
git clone https://github.com/DIYgod/APlayer.git
```
以上两种方法都需要将disk复制到博客根目录中的source文件夹中
## 配置JS组件
这一步可以根据教程选择自己喜欢的模式。新建一个music.js（名字随便起），放到主题的source文件夹里（我放在source/cust_js/music.js）
按照自己的需求，将以下代码输入JS文件中，参数参照[官方文档](https://aplayer.js.org/#/zh-Hans/?id=%E5%8F%82%E6%95%B0)
```js
const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: false, //迷你模式
    autoplay: false, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
        {
            name: 'name1', //音频名称
            artist: 'artist1', //音频艺术家
            url: 'url1.mp3', //音频外链
            cover: 'cover1.jpg', //音频封面
            lrc: 'lrc1.lrc', //音频歌词，配合上面的lrcType使用
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: 'name2', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
    ]
});
```
也可以参照我的模板
```js
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    audio: [
    {
        name: 'jump in', 
        artist: 'めぐみん(CV:高橋李依)、ゆんゆん(CV:豊崎愛生)',
        url: '/music/jump%20in.mp3', // 这里也可以写音乐网站外链https://m704.music.126.net/
        cover: '/music/jump%20in.jpg',// 这里也可以写音乐网站外链https://m704.music.126.net/
    },
    {
        name: 'spiral', 
        artist: 'LONGMAN',
        url: '/music/spiral.mp3',
        cover: '/music/spiral.jpg',
    },
    {
        name: 'Call of Silence', 
        artist: '泽野弘之',
        url: '/music/Call%20of%20Silence.mp3',
        cover: '/music/Call%20of%20Silence.jpg',
    },

	]
});
```
## 布置到页面中
因为我用的是fluid主题，参照[fluid文档](https://hexo.fluid-dev.com/docs/guide/#%E8%87%AA%E5%AE%9A%E4%B9%89-js-css-html)
在fluid主题配置文件(_config.fluid.yml)中添加以下代码
```yaml
custom_html: |
  <link rel="stylesheet" href="/dist/APlayer.min.css">
  <div id="aplayer"></div>
  <script type="text/javascript" src="/dist/APlayer.min.js"></script>
  <script type="text/javascript" src="/cust_js/music.js"></script>
```
注意参照自己实际路径填写。
最终效果如下
![最终效果示意图](/img/为Hexo博客添加aplayer音乐播放器/最终效果示意图.png)
## TO DO
以后可能还要添加歌词lrc，以及目前播放器的时间戳显示有问题。