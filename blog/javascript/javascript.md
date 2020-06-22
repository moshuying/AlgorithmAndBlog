---
title: javascript
tags: javascript
notebook: typejavascript
---

# javascript

> JavaScript 是一门编程语言，可为网站添加交互功能。（例如：游戏、动态样式，动画，以及在按下按钮或收到表单数据时做出的响应，等）。[mdn ]

JavaScript 的应用场合极其广泛。简单到幻灯片、照片库、浮动布局和响应按钮点击。复杂到游戏、2D 和 3D 动画、大型数据库驱动程序，等等。

js 实用工具包括

- 浏览器应用程序接口（API）—— 浏览器内置的 API 提供了丰富的功能，比如：动态建 HTML 和设置 CSS 样式、从用户的摄像头采集处理视频流、生成 3D 图像与音频样本，等等。
- 第三方 API —— 让开发者可以在自己的站点中整合其它内容提供者（Twitter、Facebook 等）提供的功能。
- 第三方框架和库 —— 用来快速构建网站和应用。

## 数据类型

最新的 ECMAScript 标准定义了 8 种数据类型:

7 种原始类型:

- Boolean
- Null
- Undefined
- Number
- BigInt
- String
- Symbol
  和 Object

| 变量      | 解释                                                                     | 示例                                                                                          |
| --------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| String    | 字符串（一串文本）。字符串的值必须用引号（单双均可，必须成对）扩起来。   | `let myVariable = '李雷';`                                                                    |
| Number    | 数字。无需引号。                                                         | `let myVariable = 10;`                                                                        |
| Boolean   | 布尔值（真 / 假）。 true/false 是 JS 里的特殊关键字，无需引号。          | `let myVariable = true;`                                                                      |
| Array     | 数组，用于在单一引用中存储多个值的结构。                                 | `let myVariable = [1, '李雷', '韩梅梅', 10];` 元素引用方法：myVariable[0 ], myVariable[1 ] …… |
| Object    | 对象，JavaScript 里一切皆对象，一切皆可储存在变量里。这一点要牢记于心。  | `let myVariable = document.querySelector('h1');`以及上面所有示例都是对象。                    |
| null      | 一个不存在或者无效 object 或者地址引用。语言实现中空引用的含义各不相同。 |                                                                                               |
| undefined | 未定义或赋值的变量                                                       | `var x;console.log("X的值是", x)`创建一个变量，但并没有赋值返回值为 undefined                 |
| bigint    | BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数。              | `new bigint()`                                                                                |
| symbol    | 用来创建匿名的对象属性                                                   | `var myPrivateMethod = Symbol();`                                                             |

## 运算符

运算符 是一类数学符号，可以根据两个值（或变量）产生结果。

