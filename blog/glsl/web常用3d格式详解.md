# three.js

# 前置知识

在了解web种常用的各类3d文件格式之前，先了解实体模型和表面模型。在日常开发中接触到的往往是obj,fbx,glb,gltf,等表面模型。这些模型通过顶点位置或三角面，uv，法向量等信息描述出了3d模型的基本信息。

这里将这些模型作一个详细的总结，以便开发过程中查阅

关于实体模型和表面模型的定义区分并不是很明显，在3d世界中对三角面没有厚度的概念，而3d编辑器中所谓的实体模型（存疑）仅仅是让视角才切面封闭构造出实体感觉，在实际存储的过程中依旧是通过点和面描述出的模型

## 实体模型和表面模型

简单来说实体模型就是包含表面模型和模型内部信息，而表面模型则用顶点描述出面信息即可

实体模型是一个三维的三角网数据。通常定义实体模型是在三角形所确定三个数据点数据的基础上，由一组通过空间位置，在不同平面内的线相互连接而成的。实体模型是建立三维模型的基础。例如：一个实体模型可能是通过周围穿过实体的剖面线形成的。实体模型是由线串上包含的点形成的一系列的三角形创建的。这些三角形在平面视角上可能是重叠的，但是三维中认为是不重叠或是相交的。在实体模型中的三角形是一个完全封闭的结构。[1 百度百科.实体模型[ DB].https://baike.baidu.com/item/%E5%AE%9E%E4%BD%93%E6%A8%A1%E5%9E%8B,2019-12-11/2020-8-14.]



[实体模型](https://baike.baidu.com/item/%E5%AE%9E%E4%BD%93%E6%A8%A1%E5%9E%8B)
[表面模型](https://baike.baidu.com/item/%E8%A1%A8%E9%9D%A2%E6%A8%A1%E5%9E%8B)
[实体建模](https://baike.baidu.com/item/%E5%AE%9E%E4%BD%93%E5%BB%BA%E6%A8%A1/20811474?fr=aladdin)

# obj 

[详解3D中的obj文件格式](https://www.jianshu.com/p/f7f3e7b6ebf5)
OBJ文件是Alias|Wavefront公司为它的一套基于工作站的3D建模和动画软件"AdvancedVisualizer"开发的一种标准3D模型文件格式，很适合用于3D软件模型之间的数据交换，比如你在3dsMax或LightWave中建了一个模型，想把它调到Maya里面渲染或动画，导出OBJ文件就是一种很好的选择。

OBJ主要支持多边形(Polygons)模型。不包含动画、材质特性、贴图路径、动力学、粒子等信息。

由于OBJ格式在数据交换方面的便捷性，目前大多数的三维CAD软件都支持OBJ格式，大多数3D打印机也支持使用OBJ格式进行打印。

加载3D模型的时候，遇到.obj格式的模型文件。之前有专门看过相关的资料，可惜没有总结，一下就忘了。再次用到，又去搜索了一番，发现网上很多文章讲的不是很全面。于是就找到百科上的文档，总结一下。
Obj（或者.obj）是一种几何定义文件格式，第一次是 Wavefront Technologies在他们的可视化加强动画包里面使用的。文件格式是公开的，并能很好的在其他的3D应用中被支持。
Obj文件格式是一种简单的单独表示3D几何图元的文件格式——也就是，顶点的坐标，每个顶点纹理的UV坐标，顶点法向量，以及组成多边形的面的顶点坐标、以及纹理UV坐标序列。面的顶点默认为逆时针顺序，法向量不是必须的。OBJ文件并非归一化的，但是可以在注释中加入缩放信息。
Obj文件可以是ASCII的编码(.obj)方式也可以是二进制格式(.mod)。以ASCII格式存储的obj文件必须用.obj作为文件拓展名。

# fbx


# 3mf (3D Manufacturing Format (3MF))

**微软支持的 3mf**

[3mf官方简介](https://3mf.io/specification/)

他是由微软牵头的3MF联盟，于2015年推出全新的3D打印格式——3MF（3D ManufacturingFormat），由xml语言描述，被设计为将所有的模型信息包含在一个文件中，同时易于阅读和扩展。

相比其他3d格式它的起步稍微晚了一些，但是它是个高富帅啊[ 叼图]，傍着微软这个亲爹又被AutoDesk,惠普,SLM,Ultimaker,Fit,ge(好像是搞航天技术的)这么多合作商支持。或许有一天它就一统天下了呢，开个玩笑开个玩笑[ 叼图]

它的文件内容一般长这样

-  `<mode>`标签下首先有一些`<metadata>`描述文件的版权，内容，版本等等不那么重要的信息
- 随后用`<resources>`标签描述了模型的颜色,类型,id,组等关键信息
- 在`<resources><object><mesh>`下包含了文件最重要的顶点坐标`<vertices>`以及三角形`<triangles>`
- 最后的`<build>`标签是指生产物理组件所需要的最小对象，毕竟它是用来做3d打印的嘛

格式文件内容关键示例，如果您需要更多信息请查阅[官网pdf详细文档](https://github.com/3MFConsortium/spec_core/releases/download/1.2.3/3MF_Core_Specification_v1_2_3.pdf)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<model unit="millimeter" xml:lang="en-us" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:vendor1="http://www.vendorwwebsite.com/3mf/vendor13mfextension/2017/01">
  <!-- 一般有很多个metadata -->
	<metadata name="Application">
		Microsoft 3D Builder
	</metadata>
	<resources>
		<basematerials id="1">
			<base name="Green" displaycolor="#21BB4CFF" />
		</basematerials>
		<object id="2" type="model" pid="1" pindex="0">
			<metadatagroup>
				<metadata name="vendor1:CustomMetadata2" preserve="true" type="xs:string">
					03DAE6E4-24FF-4B20-
					97A1-7487AB9C1CB0
				</metadata>
			</metadatagroup>
			<mesh>
				<vertices>
          <!-- 顶点坐标 -->
					<vertex x="0" y="42.998" z="39.998" />
				</vertices>
				<triangles>
          <!-- 每三个点描绘一个三角形 -->
					<triangle v1="0" v2="1" v3="2" />
				</triangles>
			</mesh>
		</object>
		<object id="3" type="model">
			<components>
				<component objectid="2" />
			</components>
		</object>
	</resources>
	<build>
		<item objectid="3" transform="1 0 0 0 1 0 0 0 1 -19.999 -62.998 0">
			<metadatagroup>
				<metadata name="vendor1:CustomMetadata3" type="xs:boolean">
					1
				</metadata>
			</metadatagroup>
		</item>
	</build>
</model>
```

# babylon.js

gltf obj stl
