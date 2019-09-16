# vuepress-plugin-image



## vuepress 配置

* 安装依赖

```bash
npm i vuepress-plugin-image -D
```

```js
module.exports = {
    plugins: [
        ['image']
    ]
}
```

## 设置图片大小  
[markdown-it-imsize](https://www.npmjs.com/package/markdown-it-imsize)

```
![](https://picsum.photos/300/150/?random  =200x100)
```

![](https://picsum.photos/300/150/?random  =200x100)


## 图片懒加载

支持Chrome 75的[原生图像延迟加载](https://addyosmani.com/blog/lazy-loading/)

```html
<!-- <img src="example.png" alt="" title="image title" loading="lazy"> -->
```

![](https://picsum.photos/400/200/?random  =200x100)


## 图片loading 动画

待开发。。。

