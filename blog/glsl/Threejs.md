# Threejs 入门

[threejs官网](https://threejs.org/) 

[Three.js](https://github.com/mrdoob/three.js)是基于原生WebGL封装运行的三维引擎，插件多，易扩展，但是它仅仅是个工具库，不能针对性的提供各类项目所需的解决方案


# threejs插件

名称|简介
---|---
[ammojs](https://github.com/kripken/ammo.js)|ammo.js是Bullet物理引擎到Java脚本的直接端口，使用Emscripten。 源代码直接翻译成Java脚本，无需人工重写，因此功能应该与原始Bullet相同。Physijs就是基于ammojs实现的
[Physijs](https://github.com/chandlerprall/Physijs) | Physijs是一款物理引擎，可以协助基于原生WebGL或使用three.js创建模拟物理现象，比如重力下落、物体碰撞等物理现
[stats.js](https://github.com/mrdoob/stats.js) | mrdoob大神做的性能监视器，现已整合到three源码库里
[dat.gui](https://github.com/dataarts/dat.gui) | 轻量级的icon形用户界面框架，可以用来控制Javascript的变量，比如WebGL中一个物体的尺寸、颜色
[tween.js](https://github.com/tweenjs/tween.js/) | 借助tween.js快速创建补间动画，可以非常方便的控制机械、游戏角色运动
[ThreeBSP](https://github.com/sshirokov/ThreeBSP) |可以作为three.js的插件，完成几何模型的布尔，各类三维建模软件基本都有布尔的概念

# 入门

# Threejs几何体顶点概念

## 顶点位置数据解析渲染