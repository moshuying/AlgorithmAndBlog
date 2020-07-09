---
title: TheBookofShaders
tags: glsl
notebook: typejavascript
---

# 开始

## 什么是`Fragment Shader`片段着色器

Shaders 是一系列的指令，会对屏幕上的每个像素下达，也就是说代码必须根据像素在屏幕上的不同位置执行不同的操作。

## 为什么`shaders`运行的特别快？

在了解这个问题之前需要线了解并行处理，CPU 好比一个大的工业管道，然后每一个任务都是通过这个管道的某些东西，就像一个生产流水线一样

但视频和其他图形应用比起来，就需要高得多的处理能力，因为它们的图形内容需要操作无数像素。想想看，屏幕上的每一个像素都需要计算，而在 3D 游戏中几何和透视也都需要计算。

让我们回到开始那个关于管道和任务的比喻。屏幕上的每个像素都代表一个最简单的任务。单独来看完成任何一个像素的任务对 CPU 来说都很容易，那么问题来了，屏幕上的每一个像素都需要解决这样的小任务！也就是说，哪怕是对于一个老式的屏幕（分辨率 800x600）来说，都需要每帧处理 480000 个像素，即每秒进行 14400000 次计算！是的，这对于微处理器就是大问题了！而对于一个现代的 2800x1800 视网膜屏，每秒运行 60 帧，就需要每秒进行 311040000 次计算。图形工程师是如何解决这个问题的？

设想一堆小型微处理器排成一个平面的画面，假设每个像素的数据是乒乓球。14400000 个乒乓球可以在一秒内阻塞几乎任何管道。但是一面 800x600 的管道墙，每秒接收 30 波 480000 个像素的信息就可以流畅完成。这在更高的分辨率下也是成立的 —— 并行的处理器越多，可以处理的数据流就越大。

这个时候，并行处理就是最好的解决方案。比起用三五个强大的微处理器（或者说“管道”）来处理这些信息，用一大堆小的微处理器来并行计算，就要好得多。这就是图形处理器（GPU : Graphic Processor Unit)的来由。

设想一堆小型微处理器排成一个平面的画面，假设每个像素的数据是乒乓球。14400000 个乒乓球可以在一秒内阻塞几乎任何管道。但是一面 800x600 的管道墙，每秒接收 30 波 480000 个像素的信息就可以流畅完成。这在更高的分辨率下也是成立的 —— 并行的处理器越多，可以处理的数据流就越大。

另一个 GPU 的魔法是特殊数学函数可通过硬件加速。非常复杂的数学操作可以直接被微芯片解决，而无须通过软件。这就表示可以有更快的三角和矩阵运算 —— 和电流一样快。

## GLSL 是什么？

GLSL 代表 openGL Shading Language，openGL 着色语言 [opengl 历史](http://openglbook.com/chapter-0-preface-what-is-opengl.html)

为什么 Shaders 有名地不好学？

就像蜘蛛侠里的那句名言，能力越大责任越大，并行计算也是如此；GPU 的强大的架构设计也有其限制与不足。

为了能使许多管线并行运行，每一个线程必须与其他的相独立。我们称这些线程对于其他线程在进行的运算是“盲视”的。这个限制就会使得所有数据必须以相同的方向流动。所以就不可能检查其他线程的输出结果，修改输入的数据，或者把一个线程的输出结果输入给另一个线程。如果允许线程到线程的数据流动将使所有的数据面临威胁。

并且 GPU 会让所有并行的微处理器（管道们）一直处在忙碌状态；只要它们一有空闲就会接到新的信息。一个线程不可能知道它前一刻在做什么。它可能是在画操作系统界面上的一个按钮，然后渲染了游戏中的一部分天空，然后显示了一封 email 中的一些文字。每个线程不仅是“盲视”的，而且还是“无记忆”的。同时，它要求编写一个通用的规则，依据像素的不同位置依次输出不同的结果。这种抽象性，和盲视、无记忆的限制使得 shaders 在程序员新手中不是很受欢迎。

# Hello World

在 Three.js 中使用这种 shader 可参考如下实例

```js
new THREE.Mesh(
  new THREE.BoxBufferGeometry(50, 50, 50),
  new THREE.ShaderMaterial({
    fragmentShader: `
    #ifdef GL_ES
    precision mediump float;
    #endif
    uniform float u_time;
    void main() {
      gl_FragColor = vec4(0.650,1.000,0.454,1.000);
    }`,
  })
);
```

然而在 GPU 的世界里，第一步就渲染一行文字太难了，所以我们改为选择一个鲜艳的欢迎色，来吧躁起来！

```glsl
#ifdef GL_ES // 检查了 GL_ES 是否被定义，通常用在移动端或浏览器的编译中
precision mediump float;
#endif

uniform float u_time;

void main() { //shader 语言有一个main函数，会在最后返回颜色值
	gl_FragColor = vec4(1.0,0.0,1.0,1.0);// 最终的像素颜色取决于预设的全局变量gl_FragColor
}
```
float类型在 shaders 中非常重要，所以精度非常重要。更低的精度会有更快的渲染速度，但是会以质量为代价。你可以选择每一个浮点值的精度。在第一行（precision mediump float;）我们就是设定了所有的浮点值都是中等精度。但我们也可以选择把这个值设为“低”（precision lowp float;）或者“高”（precision highp float;）。

最后可能也是最重要的细节是，GLSL 语言规范并不保证变量会被自动转换类别。这句话是什么意思呢？显卡的硬件制造商各有不同的显卡加速方式，但是却被要求有最精简的语言规范。因而，自动强制类型转换并没有包括在其中。在我们的“hello world!”例子中，vec4 精确到单精度浮点，所以应被赋予 float 格式。但是如果你想要代码前后一致，不要之后花费大量时间 debug 的话，最好养成在 float 型数值里加一个 . 的好习惯。

# Uniforms

现在我们知道了 GPU 如何处理并行线程，每个线程负责给完整图像的一部分配置颜色。尽管每个线程和其他线程之间不能有数据交换，但我们能从 CPU 给每个线程输入数据。因为显卡的架构，所有线程的输入值必须统一（uniform），而且必须设为只读。也就是说，每条线程接收相同的数据，并且是不可改变的数据。

这些输入值叫做 uniform （统一值），它们的数据类型通常为：`float`,`vec2`,`vec3`,`vec4`,`mat2`,`mat3`,`mat4`,`sampler2D` and `samplerCube`。uniform 值需要数值类型前后一致。且在 shader 的开头，在设定精度之后，就对其进行定义。

```glsl
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // 画布尺寸（宽，高）
uniform vec2 u_mouse;      // 鼠标位置（在屏幕上哪个像素）
uniform float u_time;     // 时间（加载后的秒数）

uniform vec3 iResolution;   // 视口分辨率（以像素计）
uniform vec4 iMouse;        // 鼠标坐标 xy： 当前位置, zw： 点击位置
uniform float iTime;        // shader 运行时间（以秒计）
```

GLSL 还有更多惊喜。GPU 的硬件加速支持我们使用角度，三角函数和指数函数。这里有一些这些函数的介绍：[sin()](https://thebookofshaders.com/glossary/?search=sin),[cos()](https://thebookofshaders.com/glossary/?search=cos),[tan()](https://thebookofshaders.com/glossary/?search=tan),[asin()](https://thebookofshaders.com/glossary/?search=asin),[acos()](https://thebookofshaders.com/glossary/?search=acos),[atan()](https://thebookofshaders.com/glossary/?search=atan),[pow()](https://thebookofshaders.com/glossary/?search=pow),[exp()](https://thebookofshaders.com/glossary/?search=exp),[log()](https://thebookofshaders.com/glossary/?search=log),[sqrt()](https://thebookofshaders.com/glossary/?search=sqrt),[abs()](https://thebookofshaders.com/glossary/?search=abs),[sign()](https://thebookofshaders.com/glossary/?search=sign),[floor()](https://thebookofshaders.com/glossary/?search=floor),[ceil()](https://thebookofshaders.com/glossary/?search=ceil),[fract()](https://thebookofshaders.com/glossary/?search=fract),[mod()](https://thebookofshaders.com/glossary/?search=mod),[min()](https://thebookofshaders.com/glossary/?search=min),[max()](https://thebookofshaders.com/glossary/?search=max) [clamp()](https://thebookofshaders.com/glossary/?search=clamp)。

动态红色shader
```glsl
#ifdef GL_ES
precision mediump float;
#endif
void main() {
  vec2 st = gl_FragCoord.xy/vec2(300.,300.);
  gl_FragColor = vec4(st.x,st.y,0.0,1.0);
}
```