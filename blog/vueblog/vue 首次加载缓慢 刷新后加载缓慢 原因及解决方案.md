# vue 首次加载缓慢/刷新后加载缓慢 原因及解决方案
---
最近做项目发现一个问题,页面每次刷新后加载速度都非常慢,20s左右,在开发环境则非常流畅,几乎感觉不到,本文参考望山的各种方案优化

## 1,关闭打包时生成的map文件
在`config/index.js`文件中讲`productionSourceMap`设置为`false`,再次打包便没有了map文件
## 2,vue-router路由懒加载
懒加载的实现方式有很多种,这里简单说三种实现方法
1.    vue异步组件
2.    import()
3.    webpack的require.ensure()
### vue 异步组件
> vue异步组件技术也就是异步加载,vue-router配置路由,使用veu的异步加载技术,可以实现按需加载,但是这种情况下一个组件生产一个js文件

```js
/* vue异步组件技术 */
{
  path: '/index',
  name: 'index',
  component: resolve => require(['@/views/index'],resolve)
}
```
### 使用import

> 组件懒加载方案二
```js

// 下面2行代码，没有指定webpackChunkName，每个组件打包成一个js文件。
const Home = () => import('@/components/home')
const Index = () => import('@/components/index')
// 下面2行代码，指定了相同的webpackChunkName，会合并打包成一个js文件。 把组件按组分块
const Home =  () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
const Index = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/index')

// router
{
  path: '/about',
  component: About
}, {
  path: '/index',
  component: Index
}
```
### webpack的require.ensure()
> 使用webpack的require.ensure()技术,也可以实现按需加载.这种情况下,多个路由指定相同的chunkName会合并打包成一个js文件

```js
/* 组件懒加载方案三: webpack提供的require.ensure() */
{
  path: '/home',
  name: 'home',
  component: r => require.ensure([], () => r(require('@/components/home')), 'demo')
}, {
  path: '/index',
  name: 'Index',
  component: r => require.ensure([], () => r(require('@/components/index')), 'demo')
}
```
## CDN引用
> CDN可以减少代码体积加快请求速度,使用CDN主要解决两个问题,打包时间太长,打包后代码体积太大,请求很慢,还有就是回避服务器带宽问题

### 具体步骤

```html
<!DOCTYPE html><html>
    <head>
        <meta charset="utf-8">
        <title>vue-manage-system</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
        <script src="https://cdn.bootcss.com/vue/2.5.3/vue.js"></script>
        <script src="https://cdn.bootcss.com/vue-router/2.7.0/vue-router.min.js"></script>
        <script src="https://cdn.bootcss.com/axios/0.17.1/axios.min.js"></script>
        <link rel="stylesheet" href="https://cdn.bootcss.com/element-ui/2.4.0/theme-chalk/index.css">
        <script src="https://cdn.bootcss.com/element-ui/2.4.0/index.js"></script>
```
如果提示Element未定义,是因为Element依赖Vue，vue.js需要在element-ui之前引入，所以vue.js也要改为cnd的引入方式.

>然后,修改/build/webpack.base.conf.js中修改配置。给module.exports添加externals属性(详见https://webpack.docschina.org/configuration/externals/)，其中键是项目中引用的，值是所引用资源的名字。需要注意的是资源名需要查看所引用的JS源码，查看其中的全局变量是什么，例如element-ui的全局变量就说ELEMENT

```js
module.exports = {
   context: path.resolve(__dirname, '../'),
   entry: {
     app: './src/main.js'
   },
   externals: {
     'vue': 'Vue',
     'vue-router': 'VueRouter',
     'ElementUI': 'ELEMENT',
     'axios': 'axios',
   }
 }
```
> 然后删除原先的import,如果不删除原先的import，项目还是会从node_modules中引入资源。
也就是说不删的话，npm run build时候仍会将引用的资源一起打包，生成文件会大不少。还是删了好。

参考文章列表:感谢大神们
[vue页面首次加载缓慢原因及解决方案](https://www.cnblogs.com/zyulike/p/11190012.html)
[vue项目实现按需加载的3种方式：vue异步组件、es提案的import()、webpack的require.ensure()](https://segmentfault.com/a/1190000011519350)