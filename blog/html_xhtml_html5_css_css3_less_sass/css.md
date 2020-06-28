---
title: css
tags: css
notebook: sass/less
---

# css

[w3cshool css参考手册](https://www.w3school.com.cn/cssref/index.asp)
## css 概述

- CSS 指层叠样式表 (Cascading Style Sheets)
- 样式定义如何显示 HTML 元素
- 样式通常存储在样式表中
- 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
- 外部样式表可以极大提高工作效率
- 外部样式表通常存储在 CSS 文件中
- 多个样式定义可层叠为一

插入样式表

`<link rel="stylesheet" type="text/css" href="mystyle.css" />`

### 样式解决了一个普遍的问题

HTML 标签原本被设计为用于定义文档内容。通过使用 `<h1>、<p>、<table>` 这样的标签，HTML 的初衷是表达“这是标题”、“这是段落”、“这是表格”之类的信息。同时文档布局由浏览器来完成，而不使用任何的格式化标签。由于两种主要的浏览器（Netscape 和 Internet Explorer）不断地将新的 HTML 标签和属性（比如字体标签和颜色属性）添加到 HTML 规范中，创建文档内容清晰地独立于文档表现层的站点变得越来越困难。为了解决这个问题，万维网联盟（W3C），这个非营利的标准化联盟，肩负起了 HTML 标准化的使命，并在 HTML 4.0 之外创造出样式（Style）。

所有的主流浏览器均支持层叠样式表。

### 样式表极大地提高了工作效率

样式表定义如何显示 HTML 元素，就像 HTML 3.2 的字体标签和颜色属性所起的作用那样。样式通常保存在外部的 .css 文件中。通过仅仅编辑一个简单的 CSS 文档，外部样式表使你有能力同时改变站点中所有页面的布局和外观。由于允许同时控制多重页面的样式和布局，CSS 可以称得上 WEB 设计领域的一个突破。作为网站开发者，你能够为每个 HTML 元素定义样式，并将之应用于你希望的任意多的页面中。如需进行全局的更新，只需简单地改变样式，然后网站中的所有元素均会自动地更新。

### 多重样式将层叠为一个

样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。

### 层叠次序

当同一个 HTML 元素被不止一个样式定义时，会使用哪个样式呢？

一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。

- 浏览器缺省设置
- 外部样式表
- 内部样式表（位于 `<head>` 标签内部）
- 内联样式（在 HTML 元素内部）

因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：`<head>` 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。

## css 基础语法

CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。

`selector {declaration1; declaration2; ... declarationN }`

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

`selector {property: value}`

## css 高级语法

### 选择器的分组

你可以对选择器进行分组，这样，被分组的选择器就可以分享相同的声明。用逗号将需要分组的选择器分开。在下面的例子中，我们对所有的标题元素进行了分组。所有的标题元素都是绿色的。

`h1,h2,h3,h4,h5,h6 {color: green;}`

### 继承及其问题

根据 CSS，子元素从父元素继承属性。但是它并不总是按此方式工作。看看下面这条规则：

`body {font-family: Verdana, sans-serif;}`

根据上面这条规则，站点的 body 元素将使用 Verdana 字体（假如访问者的系统中存在该字体的话）。

通过 CSS 继承，子元素将继承最高级元素（在本例中是 body）所拥有的属性（这些子元素诸如 p, td, ul, ol, ul, li, dl, dt,和 dd）。不需要另外的规则，所有 body 的子元素都应该显示 Verdana 字体，子元素的子元素也一样。并且在大部分的现代浏览器中，也确实是这样的。

但是在那个浏览器大战的血腥年代里，这种情况就未必会发生，那时候对标准的支持并不是企业的优先选择。比方说，Netscape 4 就不支持继承，它不仅忽略继承，而且也忽略应用于 body 元素的规则。IE/Windows 直到 IE6 还存在相关的问题，在表格内的字体样式会被忽略。我们又该如何是好呢？

### 友善地对待 Netscape 4

幸运地是，你可以通过使用我们称为 "Be Kind to Netscape 4" 的冗余法则来处理旧式浏览器无法理解继承的问题。

`body {font-family: Verdana, sans-serif;} p,td,ul,ol,li,dl,dt,dd {font-family: Verdana, sans-serif;}`

4.0 浏览器无法理解继承，不过他们可以理解组选择器。这么做虽然会浪费一些用户的带宽，但是如果需要对 Netscape 4 用户进行支持，就不得不这么做。

### 继承是一个诅咒吗？

如果你不希望 "Verdana, sans-serif" 字体被所有的子元素继承，又该怎么做呢？比方说，你希望段落的字体是 Times。没问题。创建一个针对 p 的特殊规则，这样它就会摆脱父元素的规则：

```css
body {
  font-family: Verdana, sans-serif;
}
/*td, ul, ol, ul, li, dl, dt, dd  {
  font-family: Verdana, sans-serif;
}*/
p {
  font-family: Times, "Times New Roman", serif;
}
```

### 派生选择器

在 CSS1 中，通过这种方式来应用规则的选择器被称为上下文选择器 (contextual selectors)，这是由于它们依赖于上下文关系来应用或者避免某项规则。在 CSS2 中，它们称为派生选择器，但是无论你如何称呼它们，它们的作用都是相同的。

```css
li strong {
  font-style: italic;
  font-weight: normal;
}
```

### 后代选择器

在后代选择器中，规则左边的选择器一端包括两个或多个用空格分隔的选择器。选择器之间的空格是一种结合符（combinator）。每个空格结合符可以解释为“... 在 ... 找到”、“... 作为 ... 的一部分”、“... 作为 ... 的后代”，但是要求必须从右向左读选择器。 \*/

有关后代选择器有一个易被忽视的方面，即两个元素之间的层次间隔可以是无限的。例如，如果写作 ul em，这个语法就会选择从 ul 元素继承的所有 em 元素，而不论 em 的嵌套层次多深。因此，ul em 将会选择以下标记中的所有 em 元素：

```css
div.sidebar {
  background: blue;
}
```

## css 样式

```less
div {
  /* 背景 */
  background: #00ff00 url(bgimage.gif) no-repeat fixed top;
  /* 文本装饰 */
  color: #fff red;
  direction: ltr rtl inherit;
  line-height: normal 2 2rem 2% inherit;
  text-indent: 5em 20%;
  text-shadow: ;
  text-transform: none uppercase lowercase;
  unicode-bidi: ;
  white-space: normal pre no-wrap pre-wrap pre-line inherit;
  text-align: inherit center left right justify;
  world-spacing: normal 2rem inherit;
  letter-spacing: normal 2rem inherit;
  text-decoration: none underline overline line-through blink;
  /* 字体 */
  font: italic bold 12px/20px arial, sans-serif;
  /* 列表 */
  list-style: url("example.git") square inside;
  /* 表格 */
  table {
    border-collapse: collapse;
    th,
    td {
      vertical-align: bottom;
      border: 1px solid black;
    }
  }
  // 轮廓
  outline: #00ff00 dotted thick;
}
```

css font 属性可能的值

| 值                    | 描述                                                            |
| --------------------- | --------------------------------------------------------------- |
| font-style            | 规定字体样式。参阅：font-style 中可能的值。                     |
| font-variant          | 规定字体异体。参阅：font-variant 中可能的值。                   |
| font-weight           | 规定字体粗细。参阅：font-weight 中可能的值。                    |
| font-size/line-height | 规定字体尺寸和行高。参阅：font-size 和 line-height 中可能的值。 |
| font-family           | 规定字体系列。参阅：font-family 中可能的值。                    |
| caption               | 定义被标题控件（比如按钮、下拉列表等）使用的字体。              |
| icon                  | 定义被图标标记使用的字体。                                      |
| menu                  | 定义被下拉列表使用的字体。                                      |
| message-box           | 定义被对话框使用的字体。                                        |
| small-caption         | caption 字体的小型版本。                                        |
| status-bar            | 定义被窗口状态栏使用的字体。                                    |

css 链接的四种状态

- a:link - 普通的、未被访问的链接
- a:visited - 用户已访问的链接
- a:hover - 鼠标指针位于链接的上方
- a:active - 链接被点击的时刻

css list-style-type 可能的值

| 值                   | 描述                                                         |
| -------------------- | ------------------------------------------------------------ |
| none                 | 无标记。                                                     |
| disc                 | 默认。标记是实心圆。                                         |
| circle               | 标记是空心圆。                                               |
| square               | 标记是实心方块。                                             |
| decimal              | 标记是数字。                                                 |
| decimal-leading-zero | 0 开头的数字标记。(01, 02, 03, 等。)                         |
| lower-roman          | 小写罗马数字(i, ii, iii, iv, v, 等。)                        |
| upper-roman          | 大写罗马数字(I, II, III, IV, V, 等。)                        |
| lower-alpha          | 小写英文字母 The marker is lower-alpha (a, b, c, d, e, 等。) |
| upper-alpha          | 大写英文字母 The marker is upper-alpha (A, B, C, D, E, 等。) |
| lower-greek          | 小写希腊字母(alpha, beta, gamma, 等。)                       |
| lower-latin          | 小写拉丁字母(a, b, c, d, e, 等。)                            |
| upper-latin          | 大写拉丁字母(A, B, C, D, E, 等。)                            |
| hebrew               | 传统的希伯来编号方式                                         |
| armenian             | 传统的亚美尼亚编号方式                                       |
| georgian             | 传统的乔治亚编号方式(an, ban, gan, 等。)                     |
| cjk-ideographic      | 简单的表意数字                                               |
| hiragana             | 标记是：a, i, u, e, o, ka, ki, 等。（日文片假名）            |
| katakana             | 标记是：A, I, U, E, O, KA, KI, 等。（日文片假名）            |
| hiragana-iroha       | 标记是：i, ro, ha, ni, ho, he, to, 等。（日文片假名）        |
| katakana-iroha       | 标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名）        |

CSS Table 属性

| 属性            | 描述                                 |
| --------------- | ------------------------------------ |
| border-collapse | 设置是否把表格边框合并为单一的边框。 |
| border-spacing  | 设置分隔单元格边框的距离。           |
| caption-side    | 设置表格标题的位置。                 |
| empty-cells     | 设置是否显示表格中的空单元格。       |
| table-layout    | 设置显示单元、行和列的算法。         |

## CSS 框模型

![css 框模型概述](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAAC8AgMAAAA2v7tRAAAAAXNSR0IB2cksfwAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAAxQTFRF+9OcuMqW////SEY/R3eSWgAAA0dJREFUeJztmsFq2zAYgFW8Eig2Pcy9lJW8QqCBwS4JlLHLoD1E6DLjV+hF5FT8Kj70NAZ7hUAOO9ZQRC8LfYWWxhRGhCansS1kL7V+lzrp/B+SgP3x//8nWUoco+91IkQt3hj+c3q3CLq/7p9exODqes4Hp8sXeWSwP73PDj/Iw6fZ4f3pH4n/QOD4VB8P4fhefbzZ3pd45FrozOKCG+Nh8mHiWsMz63Nklj1VtyNG6Eo8QPCkeOtkhNDZMTfE094ty5f9H4/EHIQ704PbSdRzo74xHsr3d9TtTybHgSGezbojF02H74vFD9aOZDbr+i66QtcjQPFL/NxFv7vTEdS8nDYRsgIAfinfHeQ6XSEiw0l7+CYuWDh+CcdfTp0wi0Va/AqfmCW2Xwi/hOOKOgi+13jvCh45yB6IoRGuqOtJvGeQXVN3ILh4NMiuq7N37V619KXq7N3uORjfmdvO0YMwwxV1fdf5YFK8pq7fc75pePCPXa9MXT+yv5qOu4J/PJkbjbuGy1W+Dn4ihCx+YoSHOW4Qm3fBNoCHcHxPW2lxlRhl+KFWvCGu9/76eAjHN1AdxczDwa0A49TDdFYxu65OiHgseCW8TB2T6T0vqIKXqWMswakP7J3F41g27xEYfjOjlHo3s4q4ru6WUBp7bFV8wA3VxTimzGNVii9Vh+mYxHLmANVhyhMDUJw8EiF41YHT1T0bG33BvipeU11NvFW3ver25RfCFe6zID3NJ9yPkw+CpCsWiX1WVDe2vqQ4pYytzhXYl0u+DOanS49cwGlRXceyhmnxOe4v8TiWW56fVlTEZfGdXRWPM1xudThgWOTLpkcvir13nByPGc16TzqViUmOX8gNpIgvs3e5xAlWsvtP2XG+ZbBldnGHbEtEqbpOJ8vuYaV3gi+S3sks7Z3gcnW5eRX3adIIIbn5Ip4UjxYpHnB13JPKMeEk60cUxr29YNu1DoBvtbqa3y5ada264rlrfw606tpZt/XqqkepOkO8+ft1NfEQjrfqwLh+98AQ1+8eGOLP9772z4VWXZN4CMffijrof9ChWVo1FHWQUNRBovlnD0I43qoDx4Y/orb+UaVWXZN4CMe3Xl3NJ1qbfRz3/8X/Aj523Ia4ZnOuAAAAAElFTkSuQmCC)

## css 外边距合并

**外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。**

- 当一个元素出现在另一个元素上面时，第一个元素的下外边距与第二个元素的上外边距会发生合并
- 当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上和/或下外边距也会发生合并。
- 假设有一个空元素，它有外边距，但是没有边框或填充。在这种情况下，上外边距与下外边距就碰到了一起，它们会发生合并
  **只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。**

## css 定位

### css 相对绝对定位

- static
  该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。

- relative 相对定位
  该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-\*-group, table-row, table-column, table-cell, table-caption 元素无效。![相对定位](data:image/png;base64,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)

- absolute 绝对定位

  > w3cshool:设置为绝对定位的元素框从文档流完全删除，并相对于其包含块定位，包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像该元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。

  元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
  ![绝对定位](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhQAAADPAQMAAACX0tpjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRF/Pz8e3t6ovzLQAAAAz1JREFUeJzt28FP01AcB/BXVmAzKqtw8WLfuirHJcQDXtwjNnFeTPgLhMjJxIhHzQw9LGEkHrp/QMWTfwXBxIR40fgXuCCJR2s0gAlZ7XTQFn59bd/roBvveyFj3Yf3e32/va4Acl4fON+d6h/nc2flF9MDC5nIi4xYUhSGMPpsuFGBddxGVWBhb8bhjsaBwacJ/Cq3liJoQMpgGmEzctpGVubj3BrBsPVLGkZW5mOIe8595ewy4qvFfaXR5DSebTXktW3MZWi6kV9TCKdBimtFk9fAiY1gurWQ/7VAiWdc3WrUn27Do4i9Tt1VJiHOtZ6G0csw9JwnQAYRxmkZwYh9LlM9N4IWUjCs3GrASF6La8g1k9O4dUBqrzQ+w7Dmmq0pPqNuoVorz2cQLuNf3FqM2rFaoFCN2Zd3Vq+5c1o1WQxvnXa/+AxIiWWoh99m75dcGsYn7wnICEnQ2GE0HF/2gHtP+97BJM442sAR+YTGhxQM6N5FQgO8/5GG4UuIEUy/jKzMRwaNkKRvQElaSxrGgJwXiiEdbQmUfpm2qf0iYdo4etHDx9FN7oeJw41eLS/sy9RaNOBa6rihE4VqvD3cCSjGTSLRjNyTGLU8tseohhZjHEtEgoWj+Yg29AijclgLlJ5x3abPKUbLkYaO6OeWuk57BmWdZqnn6IYvIUYwYp8bsn1O9S4m94EjJrxLzc1QI+KnxBqH7xFzLQNiJE2/jKzMx3k2oJyFkZX5ED03OHM6qAYU0XPpG0kjem4wDLnD3y+yyW9MbEib3LU0RzCvMZaCcWkDEV7jYjPyLepETs5H6Af0+MbGCP8aM3Pts1inWe05FgOK2OeSG/5kZZ8bB/4SGfr8Hkz0uY2OMITRf2N4kp05Nd2tHeMrqIkxRgQzGmq97ChSfvInrn7rMBqKfEOq7H19Xuok+lW43xj/Mm0jLM9f0DAadxjHoU6VO0vG4uQ2XrFrbEauVcBYN+Znpp2CZDEaD/LrWLv78RG2CmiJzRhVptZva4175bZVkNjOCxpV9NIbrTGn4Vah+I7BcCOphraAV99rJUVRdEZDQTtq5ff9yu7E4u5DBiBDPScMYVCMNML4z2q+B/ZfYjvHV8P5msEAAAAASUVORK5CYII=)

- fixed
  元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。*打印时，元素会出现在的每页的固定位置。*fixed 属性会创建新的层叠上下文。当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。

- sticky
  元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括 table-related 元素，基于 top, right, bottom, 和 left 的值进行偏移。偏移值不会影响任何其他元素的位置。

该值总是创建一个新的层叠上下文（stacking context）。注意，一个 sticky 元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的 overflow 是 hidden, scroll, auto, 或 overlay 时），即便这个祖先不是真的滚动祖先。这个阻止了所有“sticky”行为

> [以上内容引用自 MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

### clip 属性

设置元素的形状。元素被剪入这个形状之中，然后显示出来。 `clip:rect(0px,60px,200px,0px);`

| 值      | 描述                                                                |
| ------- | ------------------------------------------------------------------- |
| shape   | 设置元素的形状。唯一合法的形状值是：rect (top, right, bottom, left) |
| auto    | 默认值。不应用任何剪裁。                                            |
| inherit | 规定应该从父元素继承 clip 属性的值。                                |

### vertical-align 属性

设置元素的形状。元素被剪入这个形状之中，然后显示出来。

该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。允许指定负长度值和百分比值。这会使元素降低而不是升高。在表单元格中，这个属性会设置单元格框中的单元格内容的对齐方式。

| 值          | 描述                                                          |
| ----------- | ------------------------------------------------------------- |
| baseline    | 默认。元素放置在父元素的基线上。                              |
| sub         | 垂直对齐文本的下标。                                          |
| super       | 垂直对齐文本的上标                                            |
| top         | 把元素的顶端与行中最高元素的顶端对齐                          |
| text-top    | 把元素的顶端与父元素字体的顶端对齐                            |
| middle      | 把此元素放置在父元素的中部。                                  |
| bottom      | 把元素的顶端与行中最低的元素的顶端对齐。                      |
| text-bottom | 把元素的底端与父元素字体的底端对齐。                          |
| length      | 长度属性 百分比或值                                           |
| %           | 使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。 |
| inherit     | 规定应该从父元素继承 vertical-align 属性的值。                |

### 行框和清理

浮动框旁边的行框被缩短，从而给浮动框留出空间，行框围绕浮动框。

[参考链接](https://www.w3school.com.cn/css/css_positioning_floating.asp)

```html
<style>
  .news {
    background-color: gray;
    border: solid 1px black;
  }

  .news img {
    float: left;
  }

  .news p {
    float: right;
  }

  .clear {
    clear: both;
  }
</style>
<div class="news">
  <img src="news-pic.jpg" />
  <p>some text</p>
  <div class="clear"></div>
</div>
```

## css 选择器

```css
/* 类型/元素选择器 */
h1 {
  color: #ccc;
}

/* 分组选择器 */
h1,
h2 {
  color: #ccc;
}

/* 通配符选择器 */
* {
  color: #efefef;
}

/* 声明分组 */
h1 {
  color: #eaa;
}
h1 {
  background-color: #003;
}

/* CSS 类选择器  该选择器可以单独使用，也可以与其他元素结合使用。*/
*.important {
  color: red;
}
p.important {
  color: red;
}

/* CSS 多类选择器 */
.important {
  font-weight: bold;
}

/* CSS ID 选择器 */
*#intro {
  font-weight: bold;
}

/* 属性选择器  应用于 <div title="123" /> */
*[title] {
  color: red;
}

/* 根据部分属性值选择 */
p[class~="important"] {
  color: red;
}

/* 特定属性选择类型 */
*[lang|="en"] {
  color: red;
}

/* 后代选择器 */
h1 em {
  color: red;
}

/* 子元素选择器 */
h1 > strong {
  color: red;
}

/* 结合后代选择器和子选择器 */
table.company td > p {
  color: red;
}

/* CSS 相邻兄弟选择器  下例读作:选择紧接在 h1 元素后出现的段落，h1 和 p 元素拥有共同的父元素 */
h1 + p {
  margin-top: 50px;
}

/* 选择紧接在 table 元素后出现的所有兄弟 ul 元素，该 table 元素包含在一个 body 元素中，body 元素本身是 html 元素的子元素。 */
html > body table + ul {
  margin-top: 20px;
}

/* 伪类 */
p:first-child i {
  color: blue;
}
/* 伪元素  "first-line" 伪元素用于向文本的首行设置特殊样式。 */
p:first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```

### 类选择器和 id 选择器?

- 只能在文档中使用一次

与类不同，在一个 HTML 文档中，ID 选择器会使用一次，而且仅一次。

- 不能使用 ID 词列表

不同于类选择器，ID 选择器不能结合使用，因为 ID 属性不允许有以空格分隔的词列表。

- ID 能包含更多含义

类似于类，可以独立于元素来选择 ID。有些情况下，您知道文档中会出现某个特定 ID 值，但是并不知道它会出现在哪个元素上，所以您想声明独立的 ID 选择器。例如，您可能知道在一个给定的文档中会有一个 ID 值为 mostImportant 的元素。您不知道这个最重要的东西是一个段落、一个短语、一个列表项还是一个小节标题。您只知道每个文档都会有这么一个最重要的内容，它可能在任何元素中，而且只能出现一个。在这种情况下，可以编写如下规则：

```css
#mostImportant {
  color: red;
  background: yellow;
}
```

这个规则会与以下各个元素匹配（这些元素不能在同一个文档中同时出现，因为它们都有相同的 ID 值）：

```html
<h1 id="mostImportant">This is important!</h1>
<em id="mostImportant">This is important!</em>
<ul id="mostImportant">
  This is important!
</ul>
```

**类选择器和 ID 选择器可能是区分大小写的。这取决于文档的语言。HTML 和 XHTML 将类和 ID 值定义为区分大小写，所以类和 ID 值的大小写必须与文档中的相应值匹配。**

对于以下的 CSS 和 HTML，元素不会变成粗体：

```html
<style>
  #intro {
    font-weight: bold;
  }
</style>
<p id="Intro">This is a paragraph of introduction.</p>
```

### 子串匹配属性选择器

| 类型           | 描述                                       |
| -------------- | ------------------------------------------ |
| `[abc^="def"]` | 选择 abc 属性值以 "def" 开头的所有元素     |
| `[abc$="def"]` | 选择 abc 属性值以 "def" 结尾的所有元素     |
| `[abc*="def"]` | 选择 abc 属性值中包含子串 "def" 的所有元素 |

对 example.com 的所有 a 标签应用样式

```css
a[href*="example.com"] {
  color: red;
}
```

### 属性选择器

| 选择器               | 描述                                                         |
| -------------------- | ------------------------------------------------------------ |
| `[attribute]`        | 用于选取带有指定属性的元素。                                 |
| `[attribute=value]`  | 用于选取带有指定属性和值的元素。                             |
| `[attribute~=value]` | 用于选取属性值中包含指定词汇的元素。                         |
| `[attribute|=value]` | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
| `[attribute^=value]` | 匹配属性值以指定值开头的每个元素。                           |
| `[attribute$=value]` | 匹配属性值以指定值结尾的每个元素。                           |
| `[attribute*=value]` | 匹配属性值中包含指定值的每个元素。                           |

### 伪类 伪元素

[伪类 mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

| 属性         | 描述                                     | CSS |
| ------------ | ---------------------------------------- | --- |
| :active      | 向被激活的元素添加样式。                 | 1   |
| :focus       | 向拥有键盘输入焦点的元素添加样式。       | 2   |
| :hover       | 当鼠标悬浮在元素上方时，向元素添加样式。 | 1   |
| :link        | 向未被访问的链接添加样式。               | 1   |
| :visited     | 向已被访问的链接添加样式。               | 1   |
| :first-child | 向元素的第一个子元素添加样式。           | 2   |
| :lang        | 向带有指定 lang 属性的元素添加样式。     | 2   |

[伪元素 mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)

| 属性          | 描述                             | CSS |
| ------------- | -------------------------------- | --- |
| :first-letter | 向文本的第一个字母添加特殊样式。 | 1   |
| :first-line   | 向文本的首行添加特殊样式。       | 1   |
| :before       | 在元素之前添加内容。             | 2   |
| :after        | 在元素之后添加内容。             | 2   |

## css 黑魔法