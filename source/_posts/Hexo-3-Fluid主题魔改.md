---
title: Hexo-3-Fluid主题魔改
date: 2024-08-24 20:31:07
index_img: /img/Hexo-3-Fluid主题魔改/banner.png
banner_img: /img/Hexo-3-Fluid主题魔改/banner.png
excerpt: Fluid主题其实已经很好了，但是由于喜欢折腾，还是在网上学习了如何对Fluid进行魔改，本文章记录了如何修改鼠标样式，主页文章缩略图动画，背景动态线条，鼠标滑动特效以及网站标题变化。
tags:
categories:
---
> Fluid主题其实已经很好了，但是由于喜欢折腾，还是在网上学习了如何对Fluid进行魔改，本文章记录了如何修改鼠标样式，主页文章缩略图动画，背景动态线条，鼠标滑动特效以及网站标题变化。
## 前言·准备工作
Fluid的主题配置文件中有这么两项配置：
```yaml
# 指定自定义 .js 文件路径，支持列表；路径是相对 source 目录，如 /js/custom.js 对应存放目录 source/js/custom.js
# Specify the path of your custom js file, support list. The path is relative to the source directory, such as `/js/custom.js` corresponding to the directory `source/js/custom.js`
custom_js: 

# 指定自定义 .css 文件路径，用法和 custom_js 相同
# The usage is the same as custom_js
custom_css: 
```
这里就是提供给我们配置自定义`CSS` 和`JS`的地方。我们只需要在`source`文件夹下创建你自定义的两个文件。例如：
```yaml
custom_js: 
  - /cust_js/custom.js
  
custom_css: /cust_css/custom.css
```
这个地方可以使用`yaml`的的语法来配置多个文件的路径，可以是相对路径也可以是URL地址。
## 自定义css
### 修改鼠标样式
网页中鼠标的样式文件格式为``.cur`， 大家可以去网上找一些自己喜欢的鼠标样式来替换下面css中的地址。
```css
html { 
	cursor: url(/img/cursor/Arrow.cur),auto;/* url地址可以是链接，相对位置，绝对位置 */
	background-color: @theme_background;  /* 写成透明就行 */
}

/* 封面大图 */
.banner {
	cursor: url(/img/cursor/Arrow.cur),auto;
	background-color: @theme_background;
}

/* 封面向下 */
.scroll-down-bar {
	cursor: url(/img/cursor/Hand2.cur),auto; /* 一个小手 */
	background-color: @theme_background;
}

/* 所有可跳转链接 */
a[href] {
	cursor: url(/img/cursor/Hand2.cur),auto !important;
	background-color: @theme_background;
}

/* 搜索框关闭按钮  */
#local-search-close.close {
	cursor: url(/img/cursor/Hand2.cur),auto;
	background-color: @theme_background;
}

/* 搜索框、输入框 */
input,textarea {
	cursor: url(/img/cursor/IBeam.cur),auto;    /* 这里应该是竖条光标 */
	background-color: @theme_background;
}

/* 代码复制键 按钮键增加!important属性后可删 */
.copy-btn.copy-btn-light {
	cursor: url(/img/cursor/Hand2.cur),auto;
	background-color: @theme_background;
}

/* 按钮 */
button[class] {
	cursor: url(/img/cursor/Hand2.cur),auto !important;
	background-color: @theme_background;
}

/* 补充按钮 */
svg {
	cursor: url(/img/cursor/Hand2.cur),auto !important;
	background-color: rgba(0, 0, 0, 0.0);
}
```
### 首页文章缩略图
可以使用下面的类选择器来对首页文章缩略图添加相应的效果，例如下面代码的放大效果。如果你懂前端的`CSS`，那你随意，可以修改成自己相要的效果。如果是不懂的小白的话，那就使用下面代码就好。
```css
.index-img {
	transition: .4s;
}

.index-card:hover .index-img {
	transform: scale(1.05);
}
```
## 自定义JS
### 网页标题恶搞
就像你看到这个页面的标题效果一样，
当你离开时，它是这样的：
![](/img/Hexo-3-Fluid主题魔改/网页恶搞_崩溃.png)
当你回来时，又变成这样的
![](/img/Hexo-3-Fluid主题魔改/网页恶搞_好了.png)
代码如下
```js
// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
		document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/newtubiao.png");
		document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});
```
可以根据需求修改显示的内容哦。
### 鼠标移动特效
正如本页面的星星特效一样，代码如下
```js
(function() {
    function t() {
        i();
        a();
    }

    function i() {
        document.addEventListener("mousemove", o);
        document.addEventListener("touchmove", e);
        document.addEventListener("touchstart", e);
        window.addEventListener("resize", n);
    }

    function n() {
        d = window.innerWidth;
        window.innerHeight;
    }

    function e(t) {
        if (t.touches.length > 0) {
            for (var i = 0; i < t.touches.length; i++) {
                s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() * r.length)]);
            }
        }
    }

    function o(t) {
        u.x = t.clientX;
        u.y = t.clientY;
        s(u.x, u.y, r[Math.floor(Math.random() * r.length)]);
    }

    function s(t, i, n) {
        var e = new l();
        e.init(t, i, n);
        f.push(e);
    }

    function h() {
        for (var t = 0; t < f.length; t++) {
            f[t].update();
        }
        for (t = f.length - 1; t >= 0; t--) {
            f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1));
        }
    }

    function a() {
        requestAnimationFrame(a);
        h();
    }

    function l() {
        this.character = "*";
        this.lifeSpan = 120;
        this.initialStyles = {
            position: "fixed",
            top: "0",
            display: "block",
            pointerEvents: "none",
            zIndex: "10000000",
            fontSize: "20px",
            willChange: "transform"
        };

        this.init = function(t, i, n) {
            this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: 1
            };
            this.position = {
                x: t - 10,
                y: i - 20
            };
            this.initialStyles.color = n;
            this.element = document.createElement("span");
            this.element.innerHTML = this.character;
            c(this.element, this.initialStyles);
            this.update();
            document.body.appendChild(this.element);
        };

        this.update = function() {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;
            this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 120 + ")";
        };

        this.die = function() {
            this.element.parentNode.removeChild(this.element);
        };
    }

    function c(t, i) {
        for (var n in i) {
            t.style[n] = i[n];
        }
    }

    var r = ["#D61C59", "#E7D84B", "#1B8798", "#ffaaff", "#aaaaff"];
    var d = window.innerWidth;
    var u = {
        x: d / 2,
        y: d / 2
    };
    var f = [];

    t();
})();
```
### 网页计时
在网站底部提供计时功能，实现效果如下
![网页计时](/img/Hexo-3-Fluid主题魔改/网页计时.png)
代码
```JS
var now = new Date(); 
function createtime() { 
    var grt= new Date("08/17/2023 00:00:00");//在此处修改你的建站时间，格式：月/日/年 时:分:秒
    now.setTime(now.getTime()+250); 
    days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days); 
    hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours); 
    if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum); 
    mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;} 
    seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum); 
    snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;} 
    document.getElementById("timeDate").innerHTML = "本站已夹缝中生存 "+ dnum +" 天 "; 
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒"; 
} 
setInterval("createtime()",250);
```
可以根据需求修改上面代码的显示文字。

好了，现在输入`npx hexo s`进行测试，诶，这时你会发现没有效果，然后你就开始怀疑人生了。。。。然后你就开始各种找错，如果你有一些HTML，JS的基础，你应该会马上想到，页面需要显示东西，那就要有对应的HTML元素，但是但是这段JS代码的值却没地方显示，那当然相当于没效果了。

好了，这时候你就应该去修改Fluid的配置文件了，如下：
```yaml
footer:
  # 页脚第一行文字的 HTML，建议保留 Fluid 的链接，用于向更多人推广本主题
  # HTML of the first line of the footer, it is recommended to keep the Fluid link to promote this theme to more people
  content: '
    <a href="https://hexo.io" target="_blank" rel="nofollow noopener"><span>Hexo</span></a>
    <i class="iconfont icon-love"></i>
    <a href="https://github.com/fluid-dev/hexo-theme-fluid" target="_blank" rel="nofollow noopener"><span>Fluid</span></a>
    <br><span id="timeDate">天数载入中</span><span id="times">...</span><br>
    <p>Copyright © 2024 - <span id="currentYear"></span> All Rights Reserved.</p>'
    ```
    再重新测试，你会发现已经成功了！
### 背景特效
可以让博客系统的背景出现黑色线条，会随机乱动，并且会被鼠标吸引。
```js
!function() {
    function o(w, v, i) {
        return w.getAttribute(v) || i;
    }

    function j(i) {
        return document.getElementsByTagName(i);
    }

    function l() {
        var i = j("script"),
            w = i.length,
            v = i[w - 1];
        return {
            l: w,
            z: o(v, "zIndex", -1),
            o: o(v, "opacity", 0.5),
            c: o(v, "color", "0,0,0"),
            n: o(v, "count", 99)
        };
    }

    function k() {
        r = u.width = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        n = u.height = window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
    }

    function b() {
        e.clearRect(0, 0, r, n);
        var w = [f].concat(t);
        var x, v, A, B, z, y;
        t.forEach(function(i) {
            i.x += i.xa;
            i.y += i.ya;
            i.xa *= i.x > r || i.x < 0 ? -1 : 1;
            i.ya *= i.y > n || i.y < 0 ? -1 : 1;
            e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
            for (v = 0; v < w.length; v++) {
                x = w[v];
                if (i !== x && null !== x.x && null !== x.y) {
                    B = i.x - x.x;
                    z = i.y - x.y;
                    y = B * B + z * z;
                    if (y < x.max) {
                        if (x === f && y >= x.max / 2) {
                            i.x -= 0.03 * B;
                            i.y -= 0.03 * z;
                        }
                        A = (x.max - y) / x.max;
                        e.beginPath();
                        e.lineWidth = A / 2;
                        e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")";
                        e.moveTo(i.x, i.y);
                        e.lineTo(x.x, x.y);
                        e.stroke();
                    }
                }
            }
            w.splice(w.indexOf(i), 1);
        });
        m(b);
    }

    var u = document.createElement("canvas"),
        s = l(),
        c = "c_n" + s.l,
        e = u.getContext("2d"),
        r, n, m = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(i) {
                window.setTimeout(i, 1000 / 45);
            },
        a = Math.random,
        f = {
            x: null,
            y: null,
            max: 20000
        };

    u.id = c;
    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
    j("body")[0].appendChild(u);
    k();
    window.onresize = k;
    window.onmousemove = function(i) {
        i = i || window.event;
        f.x = i.clientX;
        f.y = i.clientY;
    };
    window.onmouseout = function() {
        f.x = null;
        f.y = null;
    };
    for (var t = [], p = 0; s.n > p; p++) {
        var h = a() * r,
            g = a() * n,
            q = 2 * a() - 1,
            d = 2 * a() - 1;
        t.push({
            x: h,
            y: g,
            xa: q,
            ya: d,
            max: 6000
        });
    }
    setTimeout(function() {
        b();
    }, 100);
}();
```
