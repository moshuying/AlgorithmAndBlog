---
title: WEBGL简易教程
tags: WEBGL
notebook: typejavascript
---
+ 参考书籍
+ openGl编程指南 第七版（红宝书）从固定管线开始
+ openGl编程指南 第八版（白皮书）从可编程管线开始
## 示例

HelloPoint1.js
```js
// 顶点着色器程序
var VSHADER_SOURCE = 
  'void main() {\n' +
  '  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' + // Set the vertex coordinates of the point
  '  gl_PointSize = 10.0;\n' +                    // Set the point size
  '}\n';

// 片元着色器程序
var FSHADER_SOURCE =
  'void main() {\n' +
  '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + // Set the point color
  '}\n';

function main() {
  // 获取 <canvas> 元素
  var canvas = document.getElementById('webgl');

  // 获取WebGL渲染上下文
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  // 初始化着色器
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // 指定清空<canvas>的颜色
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // 清空<canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  // 绘制一个点
  gl.drawArrays(gl.POINTS, 0, 1);
}
```

1.准备工作

获取文档对象和webgl上下文
document.getElementById('webgl')：文档对象模型DOM的函数，获取到HTML页面的<canvas>元素。
getWebGLContext(canvas)：获取WebGL渲染上下文，保存在gl变量中。因为不同浏览器获取函数不太一样，所以通过组件cuon-utils提供的函数来统一行为。

2.着色器

initShaders:初始化着色器

在固定管线中，绘制点就是drawPoint，绘制线就是drawLine
在webGL中，绘制工作则主要被分解成顶点着色器和片元着色器两个步骤

js程序启动后，绘制工作首先进入的是顶点着色器，在顶点着色器中描述顶点特性（位置，颜色等）,顶点就是三维空间的点
然后进入片元着色器，逐片元处理像素（光照，阴影，遮挡）最后片元传入到颜色缓冲区，经行显示