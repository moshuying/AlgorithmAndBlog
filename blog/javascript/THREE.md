---
title: THREE
tags: THREE
notebook: typejavascript
---

# THREE

## 创建一个场景

一个场景至少包含:渲染机，相机，场景

```js
const scene,camera,renderer
scene = new THREE.Scene()
camera = new THREE.Camera(
  75, // FOV 视野角度
  window.innerWidth/window.innerHeight //宽高比
  ,0.1,//近截面
  1000) // 远截面 加载范围
renderer = new THREE.WebGLRenderer()
// setSize(window.innerWidth/2, window.innerHeight/2, false) 以一半的分辨率来渲染
renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild( renderer.domElement );
```
## 更新场景

### 几何形状 Geometries

BufferGeometries把(顶点位置，面索引，法线，颜色，uv和任何自定义属性)存储在buffers 也就是type arrays比标准Geometries更快，但是也更难用，不能调整大小(操作开销相当于创建了一个新的geometry)，但是可以更新buffers的内容


Geometry

### 材质 Materials

### 纹理 Textures

### 相机 Cameras




