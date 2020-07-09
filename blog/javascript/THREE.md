---
title: THREE
tags: javascript
notebook: typejavascript
---

# THREE

## 快速起步

THREE.js 是在 web 中创建 3d 场景使用的

### 创建场景

> 目标是搭建一个场景包含一个正在旋转的立方体

```js
const scene = new THREE.Scene(); // 创建场景

const camera = new THREE.PerspectiveCamera(
  75, // FOV
  window.innerWidth / window.innerHeight, //宽高比
  0.1, //near 近截面
  1000 //far 远截面
); // 创建相机

const renderer = new THREE.WebGLRenderer(); // 创建渲染器

//设置渲染器的高度和宽度，如果加上第三个值 false，则按场景大小显示，等比例缩放
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//使用网孔基础材料（MeshBasicMaterial）进行着色器，这里只绘制了一个绿色
var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
//使用网孔(Mesh)来承载几何模型
var cube = new THREE.Mesh(geometry, material);
//将模型添加到场景当中
scene.add(cube);
//将相机沿z轴偏移5
camera.position.z = 5;

//设置一个动画函数
var animate = function () {
  //一秒钟调用60次，也就是以每秒60帧的频率来绘制场景。
  requestAnimationFrame(animate);
  //每次调用模型的沿xy轴旋转0.01
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  //使用渲染器把场景和相机都渲染出来
  renderer.render(scene, camera);
};

animate();
```

### 画线

```js
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
let scene = new THREE.Scene();
// 对于线条来说，能使用的材质只有LineBasicMaterial 或者 LineDashedMaterial。
let material = new THREE.LineDashedMaterial({ color: 0x0000ff }); // 蓝线
// 有了材质后，需要顶点几何 geometry  推荐使用BufferGeometry 性能更好
let geometry = new THREE.BufferGeometry();
geometry.vertical.push(new THREE.Vector3(-10, 0, 0));
geometry.vertical.push(new THREE.Vector3(0, 10, 0));
geometry.vertical.push(new THREE.Vector3(10, 0, 0));
// 线是画在每一对连续的顶点之间的，而不是在第一个顶点和最后一个顶点之间绘制线条，线条并未闭合
let line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);
```

## shader

> 该章节内绝大部分内容参考自 [ 林红旭.如何在threejs中使用shader[ol ].https://zhuanlan.zhihu.com/p/145890220]
shader 即着色器，实际上是给用户一种方式来介入 GPU 渲染流程，定制 gpu 如何组织数据和绘制数据到屏幕上，一般来说着色器分为顶点着色器和片元着色器

### 顶点着色器 Vertex Shader

主要负责处理顶点数据，大部分时间用来处理顶点矩阵变换，将顶点的位置通过 MVP 矩阵乘法最终变换到裁剪空间

**输入：** 顶点着色器的输入数据一般是我们传入的`attribute`, `uniforms`变量
**输出：** 设置`gl_Position`，也可以设置一些变量`gl_PointSize`或者`varying`

### 片元着色器 fragment Shader

在整个渲染过程中较为重要，颜色，贴图采样，光照，阴影等计算都会在片元着色器中计算

**输入：**片元着色器的输入数据一般是我们从顶点着色器传入的`varying`或者全局的`uniforms`变量
**输出：**设置`gl_FragColor`

### shader 运行

webgl 的一次绘制，需要经过大致的一下几个阶段

- 创建 webgl 的应用程序 Program 从文本编译并使用 shader
- 将三维几何数据通过 attribute 传送给 GPU
- GPU 执行顶点着色器，处理顶点数据
- GPU 执行片元着色器，处理颜色等数据
- 将执行结果写入缓冲区（用于显示到屏幕或者后处理）

shader 的执行需要链接，编译，在运行时本身不能被修改，但可以修改一些数据参数值

```js
let rawMaterial = new THREE.RawShaderMaterial({
  uniforms: { ratio: { value: 0.0 } },
  vertexShader: [
    "precision mediump float;",
    "precision mediump int;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "attribute vec3 position;",
    "varying vec3 vPosition;",
    "void main() {",
    "  vPosition = position;",
    "  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
    "}",
  ].join("\n"),
  fragmentShader: [
    "precision mediump float;",
    "precision mediump int;",
    "uniform float ratio;",
    "varying vec3 vPosition;",
    "void main() {",
    "  vec3 center = vec3( 0.0,0.0,0.0 );",
    "  float dist=  distance(vPosition,center)/2000.0;",
    "  dist = clamp(dist,0.0,1.0);",
    "  float color = 1.0-dist ;",
    "  gl_FragColor =  vec4( color*ratio, color*ratio,0.0,dist );",
    "}",
  ].join("\n"),
  side: THREE.DoubleSide,
});
```

预览效果
![image](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdBAMAAABPisE/AAAAJFBMVEUHBwP9/YEvLxZMTCNpaTCFhT7+/qKgoEq3t1Xl5WrMzF/+/sMY/xd9AAABDUlEQVQY01WRP26FMAzGETfIgvQ6IXMDnBsQbpCIuUsW5iioFwhiYwxbp6Yc4C1crnbIU1tvv3yf/8SuKooaEBHaqkTd4aAU9u0LpTJG66E8AI7Ge2/0AJk7NS3rugansgHkuGxnPFIw2UDy9r2LPSane642LoRCPI6gsa1qOW2EDT0kN7SUzmytJYOjAmwXjeUHSuiZP4WdrycZCpP9ui77/vjK/LE3hVPhrD9/+dZFYc6f/+Rzv3mmfm9cn+a5+4u7f5nXNnleIOYEjiPw/FTAb5EwJrK3vI9pOWOMJ8k9rxPHad3Oc3X8fV6QHCcfvDNZZgOt2zijsBwAUCmtBoTXgaBD+e9gAD1AzfwDjMN357nSDDkAAAAASUVORK5CYII=)
![raw](https://pic4.zhimg.com/v2-b735a2e6f3349b9a29196176a02b2933_b.webp)

分析 

精度声明

第一行使用`precision`关键字经行精度设置。声明变量精度高低的三个关键字`lowp`,`mediump`,`highp`。zhu'yi 不同的shader里面有默认值，如果不指定或者指定错误，会导致编译报错
、

顶点着色器默认精度

```glsl
precision highp float;
precision highp ing;
precision lowp sampler2D;
precision lowp samplerCube;
```

片元着色器默认精度

```glsl
precision mediump int;
precision lowp sampler2D;
precision lowp samplerCube;
```
片元着色器中的float类型没有默认精度，我们需要手动指定，否则报错`No precision specified for (float)`

或者没有在两个shader中声明int值的精度，两个着色器中使用的默认精度不一致，也会报错，`Precisions of uniform 'uInt' differ between VERTEX and FRAGMENT shaders.`

变量声明

shader中的变量，一般分为三大类，分别是`attribute`,`uniform`,`varying`分别作用于以下场景

+ **attribute**只能在顶点着色器中出现，且赋值的操作一般是由webgl组织数据的时候已经绑好了，attribute时用来向顶点着色器传输集合顶点数据
+ **uniform**可以在顶点或片元着色器中使用，但是uniform的值时是只读的，不可修改,一般用来传递一些全局参数，比如mvp的矩阵
+ **varying**的作用是将顶点着色器中的数据传递给片元着色器。这里的数据一般是一些顶点相关的属性，比如每个顶点的颜色，注意varying在传值的时候会被gpu插值，所以到片元着色器的时候，值会与原先的值不完全一致
+ **glsl预定义的变量** `gl_Position`,`gl_FragColor`等

程序内容

程序从`void main(){}`处开始执行。
```glsl
precision mediump float;
precision mediump int;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
varying vec3 vPosition;
void main() {
  vPosition = position; // 将attribute的值赋值给varying
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );//通过矩阵运算，计算当前顶点在裁剪空间的坐标点
}
```
```glsl
precision mediump float;
precision mediump int;
uniform float ratio;
varying vec3 vPosition;
void main() {
    vec3 center = vec3( 0.0,0.0,0.0 ); //定义了一个圆心
    float dist=  distance(vPosition,center)/100.0; //计算当前顶点位置到圆心的距离
    dist = clamp(dist,0.0,1.0); //转化为(0-1)的区间
    float color = 1.0-dist ; //创建一个颜色值，越靠近圆心颜色越深
    gl_FragColor =  vec4( color*ratio, color*ratio,0.0,dist );//着色输出
}
```

