# vue超简单加载字体方法,解决scss难加载字体的问题

> scss在加载字体方面一直不太好用,需要繁杂的配置才能达到想要的效果,这里说一种非常简单的方法

在`App.vue`的`style`标签下引入字体文件后,scss设置的字体依旧可以正确识别,注意`style`的lang不要写,就使用原生css

示例引入
```html
<style>
@font-face{
    font-family: pingfang;
    src: url('./style/pingfang.ttf')
}
</style>
```
然后想要的位置设置font-family为pingfang即可,自己定义别的名字也可以