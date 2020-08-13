# three.js

## 3mf (3D Manufacturing Format (3MF))

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
