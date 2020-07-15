---
title: webgl简易教程
tags: webgl
notebook: typejavascript
---

# WEBGL 简易教程

- 参考书籍
- openGl 编程指南 第七版（红宝书）从固定管线开始
- openGl 编程指南 第八版（白皮书）从可编程管线开始

## 示例

```js
// 顶点着色器程序
var VSHADER_SOURCE =
  "void main() {\n" +
  "  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n" + // Set the vertex coordinates of the point
  "  gl_PointSize = 10.0;\n" + // Set the point size
  "}\n";

// 片元着色器程序
var FSHADER_SOURCE =
  "void main() {\n" +
  "  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n" + // Set the point color
  "}\n";

function main() {
  // 获取 <canvas> 元素
  var canvas = document.getElementById("webgl");

  // 获取WebGL渲染上下文
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get the rendering context for WebGL");
    return;
  }

  // 初始化着色器
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log("Failed to intialize shaders.");
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

获取文档对象和 webgl 上下文
document.getElementById('webgl')：文档对象模型 DOM 的函数，获取到 HTML 页面的`<canvas>`元素。
getWebGLContext(canvas)：获取 WebGL 渲染上下文，保存在 gl 变量中。因为不同浏览器获取函数不太一样，所以通过组件 cuon-utils 提供的函数来统一行为。

2.着色器

initShaders:初始化着色器

在固定管线中，绘制点就是 drawPoint，绘制线就是 drawLine
在 webGL 中，绘制工作则主要被分解成顶点着色器和片元着色器两个步骤

js 程序启动后，绘制工作首先进入的是顶点着色器，在顶点着色器中描述顶点特性（位置，颜色等）,顶点就是三维空间的点
然后进入片元着色器，逐片元处理像素（光照，阴影，遮挡）最后片元传入到颜色缓冲区，经行显示

# 绘制一个三角形

```js
// 顶点着色器程序
var VSHADER_SOURCE =
  "attribute vec4 a_Position;\n" + // attribute variable
  "void main() {\n" +
  "  gl_Position = a_Position;\n" + // Set the vertex coordinates of the point
  "}\n";

// 片元着色器程序
var FSHADER_SOURCE =
  "precision mediump float;\n" +
  "uniform vec4 u_FragColor;\n" + // uniform変数
  "void main() {\n" +
  "  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n" +
  "}\n";

function main() {
  // 获取 <canvas> 元素
  var canvas = document.getElementById("webgl");

  // 获取WebGL渲染上下文
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get the rendering context for WebGL");
    return;
  }

  // 初始化着色器
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log("Failed to intialize shaders.");
    return;
  }

  // 设置顶点位置
  var n = initVertexBuffers(gl);
  if (n < 0) {
    console.log("Failed to set the positions of the vertices");
    return;
  }

  // 指定清空<canvas>的颜色
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // 清空<canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  // 绘制三角形
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function initVertexBuffers(gl) {
  var vertices = new Float32Array([
        0, 0,//面的中心点，画布对角线交点
        0.5, 0.5,// 第二个点，第一象限
        -0.1, 0.1// 第三个点，第四象限
  ]);
  var n = 3; // 点的个数
  var n = 3; // 点的个数

  // 创建缓冲区对象
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log("Failed to create the buffer object");
    return -1;
  }

  // 将缓冲区对象绑定到目标
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // 向缓冲区对象写入数据
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  var a_Position = gl.getAttribLocation(gl.program, "a_Position");
  if (a_Position < 0) {
    console.log("Failed to get the storage location of a_Position");
    return -1;
  }
  // 将缓冲区对象分配给a_Position变量
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

  // 连接a_Position变量与分配给它的缓冲区对象
  gl.enableVertexAttribArray(a_Position);

  return n;
}
```

## 缓冲区对象

在函数 initVertexBuffers()中，可以看到首先初始化了一个 JavaScript 数组(Float32Array 是 WebGL 引入的特殊的类型化数组，能够保存大量同一种类型的元素),它就是缓冲区需要写入的数据：

```js
var vertices = new Float32Array([0, 0.5, -0.5, -0.5, 0.5, -0.5]);
```

### 创建缓冲区对象(gl.createBuffer())

webGL 通过 gl.createBuffer()来创建缓冲区对象，它告诉 webgl 系统，开辟显存空间接受内存传输过来的数据

| 创建缓冲区对象 |         |                    |
| -------------- | ------- | ------------------ |
| 返回值         | 非 null | 新创建的缓冲区对象 |
| 返回值         | null    | 创建缓冲区对象失败 |
| 错误           | 无      |                    |

### 绑定缓冲区对象(gl.bindBuffer())

**缓冲区对象可能有多种用途**创建缓冲区之后还需将其绑定到不同目标上，参数 gl.ARRAY_BUFFER 表示缓冲区对象存储的是有关顶点的数据。其绑定函数 gl.bindBuffer()的具体说明如下

| gl.bindBUffer(target,buffer) | 允许使用 buffer 表示的缓冲区对象并将其绑定到 target 表示的目标上 |                                                                                               |
| ---------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 参数                         | target 参数可以是以下中的一个                                    |                                                                                               |
| 参数                         | gl.ARRAY_BUFFER                                                  | 表示缓冲区对象中包含了顶点的数据                                                              |
| 参数                         | gl.ELEMENT_ARRAY_BUFFER                                          | 表示缓冲区对象中包含了顶点的索引值                                                            |
| 参数                         | buffer                                                           | 指定之前由 gl.createBuffer()返回的待绑定的缓冲区对象，如果指定为 null，则禁用对 target 的绑定 |
| 返回值                       | 无                                                               |                                                                                               |
| 错误                         | INVALID_ENUM                                                     | target 不是上述值之一，这时将保持原有的绑定情况不变                                           |

### 将缓冲区对象分配给 attribute 变量(gl.vertexAttribPointer())

```js
var a_Position = gl.getAttribLocation(gl.program, "a_Position");
if (a_Position < 0) {
  console.log("Failed to get the storage location of a_Position");
  return -1;
}
// 将缓冲区对象分配给a_Position变量
gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
```

这里用函数 gl.vertexAttribPointer 将整个缓冲区对象，也就是顶点数据，一次性分配给 attribute 变量 a_Position

| gl.vertexAttribPointer(location,size,type,normallized,stride,offset) | 将绑定到 gl.ARRAY_BUFFER 的缓冲区对象分配给由 location 指定的 attribute 变量 |                                                                                                                                                                                                    |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 参数                                                                 | location                                                                     | 指定待分配 attribute 变量的存储位置                                                                                                                                                                |
|                                                                      | size                                                                         | 指定缓冲区中每个顶点的分量大小(1-4)，若 size 比 attribute 变量需要的分量数小，缺失分量将按照与 gl.vertexAttrib[ 1234]f()相同的规则不全，比如，如果 size 为 1,那么 2,3 分量自动设为 0，第四分量为 1 |
|                                                                      | type                                                                         | 用以下类型之一来指定数据格式                                                                                                                                                                       |
|                                                                      | gl.UNSIGNED_BYTE                                                             | 无符号字节 Uint8Array                                                                                                                                                                              |
|                                                                      | gl.SHORT                                                                     | 短整型 Int16Array                                                                                                                                                                                  |
|                                                                      | gl.UNSIGNED_SHORT                                                            | 无符号短整型                                                                                                                                                                                       |
|                                                                      | gl.INT                                                                       | 整型 Int32Array                                                                                                                                                                                    |
|                                                                      | gl.UNSIGNED_INT                                                              | 无符号整型                                                                                                                                                                                         |
|                                                                      | gl.FLOAT                                                                     | 浮点型                                                                                                                                                                                             |
|                                                                      | normallized                                                                  | 传入 true 或 false 表明是否将非浮点型的数据归一化到[ 0,1]或[ -1,1]区间                                                                                                                             |
|                                                                      | stride                                                                       | 指定相邻的两个顶点间的字节数，默认为 0                                                                                                                                                             |
|                                                                      | offset                                                                       | 指定缓冲区对象中的偏移量(以字节为单位)即 attribute 变量从缓冲区中的何处开始存储，如果是从其实位置开始的，offset 设为 0                                                                             |
| 返回值                                                               | 无                                                                           |                                                                                                                                                                                                    |
| 错误                                                                 | INVALID_OPERATION                                                            | 不存在当前程序对象                                                                                                                                                                                 |
|                                                                      | INVALID_VALUE                                                                | location 大于等于 attribute 变量的最大数目(默认为 8)。或者 stride 或 offset 是负值                                                                                                                 |

### 开启 attribute 变量（gl.enableVertexAttribArray()

```js
// 连接a_Position变量与分配给它的缓冲区对象
gl.enableVertexAttribArray(a_Position);
```

最后一步就非常简单了，开启 attributeb 变量,建立缓冲区与 attribute 变量的连接

| gl.enableVertexAttribArray(location) | 开启 location 指定的 attribute 变量 |                                                        |
| ------------------------------------ | ----------------------------------- | ------------------------------------------------------ |
| 参数                                 | location                            | 指定 attribute 变量的存储位置                          |
| 返回值                               | 无                                  |                                                        |
| 错误                                 | INVALID_VALUE                       | location 大于等于 attribute 变量的最大数目（默认为 8） |

通过以上五个步骤，着色器就可以根据缓冲区对象的数据惊醒正确的绘制了，其示意图如下

![绘制图像](https://img2018.cnblogs.com/blog/1000410/201909/1000410-20190904110517299-608404219.png)

## 基本图形绘制

```js
// 绘制三角形
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

gl.drawArrays()函数说明如下

| gl.drawArrays(mode,first,count) | 执行顶点着色器，按照 mode 参数指定的方式绘制图形 |                                                                                                                                          |
| ------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 参数                            | mode                                             | 指定绘制的方式的方式，可接受以下常量符号：gl.POINTS,gl.LINES,gl.LINE_STRIP,gl.LINE_LOOP,gl.TRIANGLES,gl.TRIANGLES_SRTIP,gl.TRIANGLES_FAN |
|                                 | first                                            | 指定从哪个顶点开始绘制(整形数)                                                                                                           |
|                                 | count                                            | 指定绘制选哟用到多少个顶点(整型数)                                                                                                       |

第二个参数和第三个参数非常简单，表示从哪个顶点数据绘制到哪个顶点数据。例如这里绘制三角形表示从第1个点绘制到第3个点。

第一个参数表示可以绘制的7种基本图形

![image](https://img2018.cnblogs.com/blog/1000410/201909/1000410-20190904110633708-1836355348.png)

基本示意图如下

![image](https://img2018.cnblogs.com/blog/1000410/201909/1000410-20190904110713696-2062670901.png)

