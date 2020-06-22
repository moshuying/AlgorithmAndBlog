---
title: xhtml html5
tags:
notebook: html
---

# html
[w3c school 实例](https://www.w3school.com.cn/example/html_examples.asp)

[w3c school 参考手册](https://www.w3school.com.cn/tags/index.asp)

> HyperText Markup Language

```html
<!-- html5文档声明 -->
<!DOCTYPE html>
<!-- html页面的根元素 -->
<html>
  <!-- 包含文档元数据（meta） -->
  <head>
    <!-- <meta charset="gbk"> 中文乱码-->
    <meta charset="utf-8" />
    <!-- 文档标题 -->
    <title>html5样例</title>
  </head>
  <!-- 网页可见页面内容 -->
  <body>
    <h1>我的第一个标题</h1>
    <p>我的第一个段落。</p>
  </body>
</html>
```

> 文件后缀名 .html 与 .html 等价

html 是用来描述网页的一种语言

- 标记语言
- 标记语言是一套标记标签
- 用标记来描述网页
- **html 文档包含 html 标签及文本内容**
- html 文档也叫做 web 页面

## html 标签

- 尖括号包围成对出现
- 开放标签和闭合标签
- html 标签和 html 元素通常指一样东西

## html 版本

| 版本      | 发布时间 |
| --------- | -------- |
| html      | 1991     |
| html+     | 1993     |
| html 2.0  | 1995     |
| html 3.2  | 1997     |
| html 4.01 | 1999     |
| xhtml 1.0 | 2000     |
| html5     | 2012     |
| xhtml 5   | 2013     |

## <!DOCTYPE>声明

**声明不区分大小写**

以下方式均可

```html
<!DOCTYPE html>
<!DOCTYPE html>
<!DOCTYPE html>
<!DOCTYPE html>
```

## 通用声明

```html
<!-- HTML5 -->
<!DOCTYPE html>
<!-- HTML 4.01 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- XHTML 1.0 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

> doctype 声明是不区分大小写的，用来告知 Web 浏览器页面使用了哪种 HTML 版本。

> 在 HTML 4.01 中，<!DOCTYPE> 声明需引用 DTD （文档类型声明），因为 HTML 4.01 是基于 SGML（Standard Generalized Markup Language 标准通用标记语言）

> HTML 4.01 规定了三种不同的 <!DOCTYPE> 声明，分别是：Strict、Transitional 和 Frameset。HTML5 不是基于 SGML，因此不要求引用 DTD。

## html 属性

- 属性可以在元素中添加附加信息
- 一般描述于开始标签
- 以键值对形式出现 name="value"

## html 输出

> 我们无法确定 HTML 被显示的确切效果。屏幕的大小，以及对窗口的调整都可能导致不同的结果。对于 HTML，您无法通过在 HTML 代码中添加额外的空格或换行来改变输出的效果。当显示页面时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格。

## html 文本格式化

> `<strong>` 或者 `<em>`意味着你要呈现的文本是重要的，所以要突出显示。

**文本格式化标签**

| 标签       | 描述     |
| ---------- | -------- |
| `<b>`      | 粗体     |
| `<em>`     | 着重     |
| `<i>`      | 倾斜     |
| `<small>`  | 小号     |
| `<strong>` | 加重语气 |
| `<sub>`    | 下标     |
| `<sup>`    | 上标     |
| `<ins>`    | 插入     |
| `<del>`    | 删除 dd  |

**"计算机输出"标签**
| 标签 | 描述 |
| -------- | -------------- |
| `<code>` | 计算机代码 |
| `<kbd>` | 键盘码 |
| `<samp>` | 计算机代码样本 |
| `<var>` | 变量 |
| `<pre>` | 预格式文本 |

**引文, 引用, 及标签定义**
| 标签 | 描述 |
| -------------- | ---------------- |
| `<abbr>` | 缩写 |
| `<address>` | 地址 |
| `<bdo>` | 文字方向 |
| `<blockquote>` | 长引用 |
| `<q>` | 短的引用 |
| `<cite>` | 引用、引证 |
| `<dfn>` | 定义一个定义项目 |

## head 元素

- title 工具栏收藏夹搜索引擎结果页面的标题
- style 样式文件引用地址，也可直接添加样式来渲染 html 文档
- meta 基本元数据 通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务。 一般放置于 `<head>` 区域
- link 文档与外部资源之间的关系 通常用于链接到样式表
- script 定义了客户端的脚本文件
- noscript 禁用或不支持 js 时的操作
- base 基本的链接地址/链接目标，作为 html 文档中所有链接标签的默认链接

## html 字符实体

> 使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，浏览器也许并不支持所有实体名称（对实体数字的支持却很好）

> 不间断空格(Non-breaking Space) `&nbsp;`

**结合音标符**
| 音标符 | 字符 | Construct | 输出结果 |
| ------ | ---- | --------- | -------- |
| ̀ a | a | `&#768;` | à |
| ́ a | a | `&#769;` | á |
| ̂ a | a | `&#770;` | â |
| ̃ a | a | `&#771;` | ã |
| ̀ O | O | `&#768;` | Ò |
| ́ O | O | `&#769;` | Ó |
| ̂ O | O | `&#770;` | Ô |
| ̃ O | O | `&#771;` | Õ |

**HTML 字符实体**

[实体参考手册](https://www.w3school.com.cn/tags/html_ref_entities.html)

| 显示结果 | 描述        | 实体名称            | 实体编号  |
| -------- | ----------- | ------------------- | --------- |
| 空格     | `&nbsp;`    | `&#160;`            |
| `<`      | 小于号      | `&lt;`              | `&#60;`   |
| `>`      | 大于号      | `&gt;`              | `&#62;`   |
| `&`      | 和号        | `&amp;`             | `&#38;`   |
| `"`      | 引号        | `&quot;`            | `&#34;`   |
| `'`      | 撇号        | `&apos;`(IE 不支持) | `&#39;`   |
| `￠`     | 分          | `&cent;`            | `&#162;`  |
| `£`      | 镑          | `&pound;`           | `&#163;`  |
| `¥`      | 人民币/日元 | `&yen;`             | `&#165;`  |
| `€`      | 欧元        | `&euro;`            | `&#8364;` |
| `§`      | 小节        | `&sect;`            | `&#167;`  |
| `©`      | 版权        | `&copy;`            | `&#169;`  |
| `®`      | 注册商标    | `&reg;`             | `&#174;`  |
| `™`      | 商标        | `&trade;`           | `&#8482;` |
| `×`      | 乘号        | `&times;`           | `&#215;`  |
| `÷`      | 除号        | `&divide;`          | `&#247;`  |

# XHTML

> 以 xml 格式编写的 html

- 指的是可扩展超文本标记语言
- 与 HTML 4.01 几乎是相同的
- 是更严格更纯净的 HTML 版本
- 是以 XML 应用的方式定义的 HTML
- 是 2001 年 1 月发布的 W3C 推荐标准
- 得到所有主流浏览器的支持

**与 HTML 相比最重要的区别：**

文档结构

- XHTML DOCTYPE 是强制性的
- `<html>` 中的 XML namespace 属性是强制性的
- `<html>、<head>、<title>` 以及 `<body>` 也是强制性的
  元素语法
- XHTML 元素必须正确嵌套
- XHTML 元素必须始终关闭
- XHTML 元素必须小写
- XHTML 文档必须有一个根元素
  属性语法
- XHTML 属性必须使用小写
- XHTML 属性值必须用引号包围
- XHTML 属性最小化也是禁止的

## form 表单

form 属性

已设置所有可能属性的样例

```html
<form
  action="action_page.php"
  method="GET"
  target="_blank"
  accept-charset="UTF-8"
  ectype="application/x-www-form-urlencoded"
  autocomplete="off"
  novalidate
>
  . form elements .
</form>
```

属性列表

| 属性           | 描述                                                       |
| -------------- | ---------------------------------------------------------- |
| accept-charset | 规定在被提交表单中使用的字符集（默认：页面字符集）。       |
| action         | 规定向何处提交表单的地址（URL）（提交页面）。              |
| autocomplete   | 规定浏览器应该自动完成表单（默认：开启）。                 |
| enctype        | 规定被提交数据的编码（默认：url-encoded）。                |
| method         | 规定在提交表单时所用的 HTTP 方法（默认：GET）。            |
| name           | 规定识别表单的名称（对于 DOM 使用：document.forms.name）。 |
| novalidate     | 规定浏览器不验证表单。                                     |
| target         | 规定 action 属性中地址的目标（默认：\_self）。             |

表单元素

- input
  - text
  - password
  - rido
  - checkbox
  - button
  - submit
- select option
- textarea
- button

## html5 新增 input 输入类型

- color

用于应该包含颜色的输入字段。根据浏览器支持，颜色选择器会出现输入字段中。

```html
Select your favorite color:<input type="color" name="favcolor" />
```

- date

用于应该包含日期的输入字段。根据浏览器支持，日期选择器会出现输入字段中。

```html
Enter a date before 1980-01-01:<input
  type="date"
  name="bday"
  max="1979-12-31"
/><br />
Enter a date after 2000-01-01:<input
  type="date"
  name="bday"
  min="2000-01-02"
/><br />
```

- datetime

无时区

```html
Birthday (date and time):<input type="datetime" name="bdaytime" />
```

- datetime-local

有时区

```html
Birthday (date and time):<input type="datetime-local" name="bdaytime" />
```

- email

用于应该包含电子邮件地址的输入字段。

根据浏览器支持，能够在被提交时自动对电子邮件地址进行验证。

某些智能手机会识别 email 类型，并在键盘增加 ".com" 以匹配电子邮件输入。

```html
E-mail:<input type="email" name="email" />
```

- month

允许用户选择月份和年份。根据浏览器支持，日期选择器会出现输入字段中。

```html
Birthday (month and year):<input type="month" name="bdaymonth" />
```

- number

```html
Quantity:<input
  type="number"
  name="points"
  min="0"
  max="100"
  step="10"
  value="30"
/>
```

输入限制

| 属性      | 描述                               |
| --------- | ---------------------------------- |
| disabled  | 规定输入字段应该被禁用。           |
| max       | 规定输入字段的最大值。             |
| maxlength | 规定输入字段的最大字符数。         |
| min       | 规定输入字段的最小值。             |
| pattern   | 规定通过其检查输入值的正则表达式。 |
| readonly  | 规定输入字段为只读（无法修改）。   |
| required  | 规定输入字段是必需的（必需填写）。 |
| size      | 规定输入字段的宽度（以字符计）。   |
| step      | 规定输入字段的合法数字间隔。       |
| value     | 规定输入字段的默认值。             |

- range

用于应该包含一定范围内的值的输入字段。根据浏览器支持，输入字段能够显示为滑块控件。

```html
<input type="range" name="points" step="2" min="0" max="10" />
```

- search

```html
Search Google:<input type="search" name="googlesearch" />
```

- tel

用于应该包含电话号码的输入字段。

目前只有 Safari 8 支持 tel 类型。

```html
Telephone:<input type="tel" name="usrtel" />
```

- time

```html
Select a time:<input type="time" name="usr_time" />
```

- url

用于应该包含 URL 地址的输入字段。

根据浏览器支持，在提交时能够自动验证 url 字段。

某些智能手机识别 url 类型，并向键盘添加 ".com" 以匹配 url 输入。

```html
Add your homepage:<input type="url" name="homepage" />
```

- week

允许用户选择周和年。根据浏览器支持，日期选择器会出现输入字段中。

```html
Select a week:<input type="week" name="week_year" />
```

## htm5 新增表单元素

- datalist

> 需和 input 配对使用

```html
<datalist id="browsers">
  <option value="Internet Explorer"> </option>
  <option value="Firefox"> </option>
  <option value="Chrome"> </option>
</datalist>
```

- keygen 标签规定用于表单的密钥对生成器字段。当提交表单时，私钥存储在本地，公钥发送到服务器。

```html
Encryption:<keygen name="security" />
```

| 属性      | 值        | 描述                                           |
| --------- | --------- | ---------------------------------------------- |
| autofocus | autofocus | 使 keygen 字段在页面加载时获得焦点。           |
| challenge | challenge | 如果使用，则将 keygen 的值设置为在提交时询问。 |
| disabled  | disabled  | 禁用 keytag 字段。                             |
| form      | formname  | 定义该 keygen 字段所属的一个或多个表单。       |
| keytype   | rsa       | 定义 keytype。rsa 生成 RSA 密钥。              |
| name      | fieldname | 定义 keygen 元素的唯一名称。                   |

name 属性用于在提交表单时搜集字段的值。

- output

执行计算然后在 `<output>` 元素中显示结果：
for 属性中不进行计算，需要计算在 from 标签的 oninput 中修改

```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0 <input type="range" id="a" value="50" />100 +<input
    type="number"
    id="b"
    value="50"
  />
  =<output name="x" for="a b"></output>
</form>
```

## input 属性

- value 字段初始值
- readonly 规定输入字段为只读（不能修改）
  - readonly 不需要值 等同于`readonly="readonly"`
- disabled 字段禁用，不会被提交不可点击
  - disable 不需要值 等同于`disable="disable"`
- size 输入字段的尺寸（以字符计）
- maxlength

input html5 属性

- autocomplete

规定表单或输入字段是否应该自动完成。

当自动完成开启，浏览器会基于用户之前的输入值自动填写值。

> 您可以把表单的 autocomplete 设置为 on，同时把特定的输入字段设置为 off，反之亦然。

```html
<form action="action_page.php" autocomplete="on">
  E-mail: <input type="email" name="email" autocomplete="off" /><br />
</form>
```

- autofocus

加载完成获得焦点

```html
First name:<input type="text" name="fname" autofocus />
```

- form

form 属性规定 `<input>` 元素所属的一个或多个表单。

> 如需引用一个以上的表单，请使用空格分隔的表单 id 列表。

```html
<form action="action_page.php" id="form1">
  First name: <input type="text" name="fname" /><br />
  <input type="submit" value="Submit" />
</form>
<!-- 输入字段属于html表单之外但仍属于表单 -->
Last name: <input type="text" name="lname" form="form1" />
```

- formaction

当提交表单时处理该输入控件的文件的 URL。

属性覆盖`<form>` 元素的 action 属性。

属性适用于 type="submit" 以及 type="image"。

```html
<form action="action_page.php">
  First name: <input type="text" name="fname" /><br />
  <input type="submit" value="Submit" /><br />
  <input type="submit" formaction="demo_admin.asp" value="Submit as admin" />
</form>
```

- formenctype

属性规定当把表单数据（form-data）提交至服务器时如何对其进行编码（仅针对 method="post" 的表单）。

属性覆盖 `<form>` 元素的 enctype 属性。

属性适用于 type="submit" 以及 type="image"。

```html
<form action="demo_post_enctype.asp" method="post">
  First name: <input type="text" name="fname" /><br />
  <input type="submit" value="Submit" />
  <input
    type="submit"
    formenctype="multipart/form-data"
    value="Submit as Multipart/form-data"
  />
</form>
```

- formmethod

属性定义用以向 action URL 发送表单数据（form-data）的 HTTP 方法。

属性覆盖 `<form>` 元素的 method 属性。

属性适用于 type="submit" 以及 type="image"。

```html
<form action="action_page.php" method="get">
  First name: <input type="text" name="fname" /><br />
  Last name: <input type="text" name="lname" /><br />
  <input type="submit" value="Submit" />
  <input
    type="submit"
    formmethod="post"
    formaction="demo_post.asp"
    value="Submit using POST"
  />
</form>
```

- formnovalidate

novalidate 属性是布尔属性。

如果设置，则规定在提交表单时不对`<input>`元素进行验证。

属性覆盖 `<form>` 元素的 novalidate 属性。

属性可用于 type="submit"。

```html
<form action="action_page.php">
  E-mail: <input type="email" name="userid" /><br />
  <input type="submit" value="Submit" /><br />
  <input type="submit" formnovalidate value="Submit without validation" />
</form>
```

- formtarget

属性规定的名称或关键词指示提交表单后在何处显示接收到的响应。

属性会覆盖 `<form>` 元素的 target 属性。

属性可与 type="submit" 和 type="image" 使用。

```html
<!-- 提交到不同的目标窗口 -->
<form action="action_page.php">
  First name: <input type="text" name="fname" /><br />
  Last name: <input type="text" name="lname" /><br />
  <input type="submit" value="Submit as normal" />
  <input type="submit" formtarget="_blank" value="Submit to a new window" />
</form>
```

- height 和 width

height 和 width 属性规定 `<input>` 元素的高度和宽度。

height 和 width 属性仅用于 `<input type="image">`。

> 始终规定图像的尺寸。如果浏览器不清楚图像尺寸，则页面会在图像加载时闪烁。

```html
<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48" />
```

- list

list 属性引用的 `<datalist>` 元素中包含了 `<input>` 元素的预定义选项。

```html
<input list="browsers" />

<datalist id="browsers">
  <option value="Internet Explorer"> </option>
  <option value="Firefox"> </option>
  <option value="Chrome"> </option>
  <option value="Opera"> </option>
  <option value="Safari"> </option>
</datalist>
```

- min 和 max

min 和 max 属性规定 `<input>` 元素的最小值和最大值。

min 和 max 属性适用于如需输入类型：number、range、date、datetime、datetime-local、month、time 以及 week。

```html
Enter a date before 1980-01-01:<input
  type="date"
  name="bday"
  max="1979-12-31"
/>
Enter a date after 2000-01-01:<input type="date" name="bday" min="2000-01-02" />
Quantity (between 1 and 5):<input
  type="number"
  name="quantity"
  min="1"
  max="5"
/>
```

- multiple

属性是布尔属性。

如果设置，则规定允许用户在 `<input>` 元素中输入一个以上的值。

属性适用于以下输入类型：email 和 file。

```html
<!-- 多选文件 -->
Select images: <input type="file" name="img" multiple />
<!-- 多个email输入,以逗号分开 -->
input email:<input type="email" id="myEmail" name="usremail" />
```

- pattern (regexp)

pattern 属性规定用于检查 `<input>` 元素值的正则表达式。

pattern 属性适用于以下输入类型：text、search、url、tel、email、and password。

title 属性的内容在输入错误后出现在提示框内

```html
Country code:
<input
  type="text"
  name="country_code"
  pattern="[A-Za-z]{3}"
  title="Three letter country code"
/>
```

- placeholder

placeholder 属性规定用以描述输入字段预期值的提示（样本值或有关格式的简短描述）。

该提示会在用户输入值之前显示在输入字段中。

placeholder 属性适用于以下输入类型：text、search、url、tel、email 以及 password。

```html
<input type="text" name="fname" placeholder="First name" />
```

- required

必填字段

required 属性适用于以下输入类型：text、search、url、tel、email、password、date pickers、number、checkbox、radio、and file.

```html
Username: <input type="text" name="usrname" required />
```

- step

step 属性规定 `<input>` 元素的合法数字间隔。

示例：如果 step="3"，则合法数字应该是 -3、0、3、6、等等。

> step 属性可与 max 以及 min 属性一同使用，来创建合法值的范围。

step 属性适用于以下输入类型：number、range、date、datetime、datetime-local、month、time 以及 week。

```html
<input type="number" name="points" step="3" />
```

---

并为 `<form>` 增加如需属性：

- autocomplete

  配合 inpu 中的 autocomplete 使用

- novalidate
  提交表单时不进行验证

```html
<form action="action_page.php" novalidate></form>
```

# html5

## 什么是 html5

最新的 HTML 标准。

专门为承载丰富的 web 内容而设计的，并且无需额外插件。

拥有新的语义、图形以及多媒体元素。

提供的新元素和新的 API 简化了 web 应用程序的搭建。

跨平台，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行。

## html5 新的属性语法

> html5 标准允许四种不同的属性语法，下例用`<input>`标签演示不同语法

| 类型          | 示例                                            |
| ------------- | ----------------------------------------------- |
| Empty         | `<input type="text" value="John Doe" disabled>` |
| Unquoted      | `<input type="text" value=John Doe>`            |
| Double-quoted | `<input type="text" value="John Doe">`          |
| Single-quoted | `<input type="text" value='John Doe'>`          |

在 HTML5 标准中，根据对属性的需求，可能会用到所有 4 种语法。

## HTML5 - 新特性

HTML5 的一些最有趣的新特性：

- 新的语义元素，比如 `<header>`, `<footer>`, `<article>`, and `<section>`。
- 新的表单控件，比如数字、日期、时间、日历和滑块。
- 强大的图像支持（借由 `<canvas>` 和 `<svg>`）
- 强大的多媒体支持（借由 `<video>` 和 `<audio>`）
- 强大的新 API，比如用本地存储取代 cookie。

## HTML5 - 被删元素

以下 HTML 4.01 元素已从 HTML5 中删除：

- `<acronym>`
- `<applet>`
- `<basefont>`
- `<big>`
- `<center>`
- `<dir>`
- `<font>`
- `<frame>`
- `<frameset>`
- `<noframes>`
- `<strike>`
- `<tt>`

## HTML5 浏览器支持

所有现代浏览器都支持 HTML5。老的浏览器会自动把未识别元素当做行内元素来处理。

> 您甚至可以教授石器时代的 IE6 如何处理未知的 HTML 元素。

## 把 HTML5 元素定义为块级元素

HTML5 定义了八个新的语义 HTML 元素。所有都是块级元素。

把这些新元素的属性设置为 block 即可确保老式浏览器正确显示

```css
header,
section,
footer,
aside,
nav,
main,
article,
figure {
  display: block;
}
```

## 向 HTML 添加新元素

```html
<style>
  myHero {
    color: red;
  }
</style>
<myHero>My First Hero</myHero>
```

## Internet Explorer 的问题

上述方案可用于所有新的 HTML5 元素，但是：

**Internet Explorer 8 以及更早的版本，不允许对未知元素添加样式。**

幸运的是，Sjoerd Visscher 创造了 "HTML5 Enabling JavaScript", "the shiv"：

> 此链接现已不可用，[github 地址](https://github.com/aFarkas/html5shiv/blob/master/dist/html5shiv.js)

```html
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## html 新元素

| 标签           | 描述                                                 |
| -------------- | ---------------------------------------------------- |
| `<article>`    | 定义文档内的文章。                                   |
| `<aside>`      | 定义页面内容之外的内容。                             |
| `<bdi>`        | 定义与其他文本不同的文本方向。                       |
| `<details>`    | 定义用户可查看或隐藏的额外细节。                     |
| `<dialog>`     | 定义对话框或窗口。                                   |
| `<figcaption>` | 定义 `<figure>` 元素的标题。                         |
| `<figure>`     | 定义自包含内容，比如图示、图表、照片、代码清单等等。 |
| `<footer>`     | 定义文档或节的页脚。                                 |
| `<header>`     | 定义文档或节的页眉。                                 |
| `<main>`       | 定义文档的主内容。                                   |
| `<mark>`       | 定义重要或强调的内容。                               |
| `<menuitem>`   | 定义用户能够从弹出菜单调用的命令/菜单项目。          |
| `<meter>`      | 定义已知范围（尺度）内的标量测量。                   |
| `<nav>`        | 定义文档内的导航链接。                               |
| `<progress>`   | 定义任务进度。                                       |
| `<rp>`         | 定义在不支持 ruby 注释的浏览器中显示什么。           |
| `<rt>`         | 定义关于字符的解释/发音（用于东亚字体）。            |
| `<ruby>`       | 定义 ruby 注释（用于东亚字体）。                     |
| `<section>`    | 定义文档中的节。                                     |
| `<summary>`    | 定义 `<details>` 元素的可见标题。                    |
| `<time>`       | 定义日期/时间。                                      |
| `<wbr>`        | 定义可能的折行（line-break）。                       |

**article 和 section 的区别**section 元素应用比 article 元素更广泛，每个区块都可以使用,article 元素代表文档，页面或应用程序中独立的完整的，可以独自被外部引用的内容。

## 新的媒介元素

| 标签       | 描述                                 |
| ---------- | ------------------------------------ |
| `<audio>`  | 定义声音或音乐内容。                 |
| `<embed>`  | 定义外部应用程序的容器（比如插件）。 |
| `<source>` | 定义 `<video>` 和 `<audio>` 的来源。 |
| `<track>`  | 定义 `<video>` 和 `<audio>` 的轨道。 |
| `<video>`  | 定义视频或影片内容。                 |

新的表单元素,新的输入类型, 新的属性语法，前面已经讲过,html5 图像指`<canvas> <svg>`标签

## html5 代码约定

**代码约定本质上就是创建属于自己的最佳实践、样式指南和代码约定。**

- 始终声明正确的文档类型
- 使用小写元素名
  - 混合大小写名称并不好，更纯净更易书写
- 使用小写属性名
- 小写文件名
- 关闭所有 html 元素
- 属性值加引号
- 必需的属性
  - 例如 image 的 alt 属性，图像尺寸（减少闪烁）
- 精简空格和等号
- 尽量避免单行代码超过 80 个字符
- 为了增加可读性，增加空行分隔大型或逻辑代码块
- 使用两个空行缩进
- 减少没必要的空格和缩进
- 不省略 html,body,head
- 尽可能有意义的书写 title
- 短规则一行，长规则分为多行
  - 开括号与选择器位于同一行
  - 在开括号之前用一个空格
  - 使用两个字符的缩进
  - 在每个属性与其值之间使用冒号加一个空格
  - 在每个逗号或分号之后使用空格
  - 在每个属性值对（包括最后一个）之后使用分号
  - 只在值包含空格时使用引号来包围值
  - 把闭括号放在新的一行，之前不用空格
  - 避免每行超过 80 个字符

# html 图形

## html5 画布

画布是一个矩形区域，您可以控制其每一像素。

canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

创建 canvas 元素

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script type="text/javascript">
  var c = document.getElementById("myCanvas");
  var cxt = c.getContext("2d");
  cxt.fillStyle = "#FF0000";
  cxt.fillRect(0, 0, 150, 75);
</script>
```

上面的 fillRect 方法拥有参数 (0,0,150,75)。

意思是：在画布上绘制 150x75 的矩形，从左上角开始 (0,0)。

如下图所示，画布的 X 和 Y 坐标用于在画布上对绘画进行定位。

![示例](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAAB1CAYAAAAyax9uAAAEcElEQVR4Ae3Ya1LqYBBF0QwvA8pwMhd+OBCG8lmI4eELLtem2u5llSVg0vTZh23AafhCAIFfJzD9+kQDn0tgt4xpWsbu6ll3Y5mmMa/7q0fdeR4BYj2Pddgz7dd5TPM6No12C6nCYN85mFh3gsp+2EmmwxXsQrLse1fdj1hlmj2+/fv8trBMwD8VhFh/qq6flt3EmoePVj9xes7viPUczsHPsh/r/P65ylvBYNb3jSfWfZxSH/X2z4vl/H/B0+et1FvXXo5Yf7zfN6n8uz1di8RKV4mFKhAgVoUWZUhHgFjpKrFQBQLEqtCiDOkIECtdJRaqQIBYFVqUIR2Bfxbr5eVl+MbAa+D718DB8ofESvfnwUIIJCFw+INz+CJWkkKsUYMAsWr0KEUyAsRKVoh1ahAgVo0epUhGgFjJCrFODQLEqtGjFMkIECtZIdapQYBYNXqUIhkBYiUrxDo1CBCrRo9SJCNArGSFWKcGAWLV6FGKZASIlawQ69QgQKwaPUqRjACxkhVinRoEiFWjRymSESBWskKsU4MAsWr0KEUyAsRKVoh1ahAgVo0epUhGgFjJCrFODQLEqtGjFMkIECtZIdapQYBYNXqUIhkBYiUrxDo1CBCrRo9SJCNArGSFWKcGAWLV6FGKZASIlawQ69QgQKwaPUqRjACxkhVinRoEiFWjRymSESBWskKsU4MAsWr0KEUyAsRKVoh1ahAgVo0epUhGgFjJCrFODQLEqtGjFMkIECtZIdapQYBYNXqUIhkBYiUrxDo1CBCrRo9SJCNArGSFWKcGgQux9mOdpzEtu6tk+3Ue07yO/dWjY2wnfnjYXQQQGGc/piON3VimeaybRft1zNMyrlU7Hkksrx8Eview+fEu1hhjt7xfoY5XsA8XsNOk7cTTA24ggMCJwObHWaw3t6Yxz/Ont4Wnsy4udZePuY0AAkcCX4o1xuEt4ddvATdw24nbfT8RQOBMYPPj6opFrDMgtxB4hACxHqHmHARuECDWDUB+jcAjBL4R6/ao7cTbRzoCgX4ENj8+fMa6DWI78faRjkCgH4HND2L1617iQALECoRrdF8CxOrbveSBBIgVCNfovgSI1bd7yQMJECsQrtF9CRCrb/eSBxIgViBco/sSIFbf7iUPJECsQLhG9yVArL7dSx5IgFiBcI3uS4BYfbuXPJAAsQLhGt2XALH6di95IAFiBcI1ui8BYvXtXvJAAsQKhGt0XwLE6tu95IEEiBUI1+i+BIjVt3vJAwkQKxCu0X0JEKtv95IHEiBWIFyj+xIgVt/uJQ8kQKxAuEb3JUCsvt1LHkiAWIFwje5LgFh9u5c8kACxAuEa3ZcAsfp2L3kgAWIFwjW6LwFi9e1e8kACxAqEa3RfAsTq273kgQSIFQjX6L4EiNW3e8kDCRArEK7RfQkQq2/3kgcSIFYgXKP7EiBW3+4lDyRArEC4RvclQKy+3UseSIBYgXCN7kuAWH27lzyQwH+JdTjZNwZeA1+/Bg7eToHyGo1AWwKv+t7J1busqm0AAAAASUVORK5CYII=)

把图片放到 canvas 上

```js
var c = document.getElementById("myCanvas");
var cxt = c.getContext("2d");
var img = new Image();
img.src = "flower.png";
cxt.drawImage(img, 0, 0);
```

## html5 SVG

什么是 svg

- 指可伸缩矢量图形 (Scalable Vector Graphics)
- 用于定义用于网络的基于矢量的图形
- 使用 XML 格式定义图形
- 图像在放大或改变尺寸的情况下其图形质量不会有损失
- 是万维网联盟的标准

svg 与 jpeg,gif 的优势

- 图像可通过文本编辑器来创建和修改
- 图像可被搜索、索引、脚本化或压缩
- 是可伸缩的
- 图像可在任何的分辨率下被高质量地打印
- 可在图像质量不下降的情况下被放大

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <polygon
    points="100,10 40,180 190,60 10,60 160,180"
    style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;"
  />
</svg>
```

最终效果

![1](data:image/png;base64,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)

## html5 画布 vs SVG

canvas 和 svg 都能在浏览器上创建图像，但它们有本质上的不同

SVG

SVG 是一种使用 XML 描述 2D 图形的语言。SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用

canvas

Canvas 通过 JavaScript 来绘制 2D 图形。Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

- 依赖分辨率
- 不支持事件处理器
- 弱的文本渲染能力
- 能够以 .png 或 .jpg 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

# html 媒体

视频格式

| 格式      | 文件      | 描述                                                                                                                                                                                                                                     |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AVI       | .avi      | AVI (Audio Video Interleave) 格式是由微软开发的。所有运行 Windows 的计算机都支持 AVI 格式。它是因特网上很常见的格式，但非 Windows 计算机并不总是能够播放。                                                                               |
| WMV       | .wmv      | Windows Media 格式是由微软开发的。Windows Media 在因特网上很常见，但是如果未安装额外的（免费）组件，就无法播放 Windows Media 电影。一些后期的 Windows Media 电影所有非 Windows 计算机上都无法播放，因为没有合适的播放器。                |
| MPEG      | .mpg.mpeg | MPEG (Moving Pictures Expert Group) 格式是因特网上最流行的格式。它是跨平台的，得到了所有最流行的浏览器的支持。                                                                                                                           |
| QuickTime | .mov      | QuickTime 格式是由苹果公司开发的。QuickTime 是因特网上常见的格式，但是 QuickTime 电影不能在没有安装额外的（免费）组件的 Windows 计算机上播放。                                                                                           |
| RealVideo | .rm.ram   | RealVideo 格式是由 Real Media 针对因特网开发的。该格式允许低带宽条件下（在线视频、网络电视）的视频流。由于是低带宽优先的，质量常会降低。                                                                                                 |
| Flash     | .swf .flv | Flash (Shockwave) 格式是由 Macromedia 开发的。Shockwave 格式需要额外的组件来播放。但是该组件会预装到 Firefox 或 IE 之类的浏览器上。                                                                                                      |
| Mpeg-4    | .mp4      | Mpeg-4 (with H.264 video compression) 是一种针对因特网的新格式。事实上，YouTube 推荐使用 MP4。YouTube 接收多种格式，然后全部转换为 .flv 或 .mp4 以供分发。越来越多的视频发布者转到 MP4，将其作为 Flash 播放器和 HTML5 的因特网共享格式。 |

声音格式

| 格式      | 文件       | 描述                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MIDI      | .mid .midi | MIDI (Musical Instrument Digital Interface) 是一种针对电子音乐设备（比如合成器和声卡）的格式。MIDI 文件不含有声音，但包含可被电子产品（比如声卡）播放的数字音乐指令。[点击这里播放 The Beatles。](https://www.w3school.com.cn/i/beatles.mid) 因为 MIDI 格式仅包含指令，所以 MIDI 文件极其小巧。上面的例子只有 23k 的大小，但却能播放将近 5 分钟。MIDI 得到了广泛的平台上的大量软件的支持。大多数流行的网络浏览器都支持 MIDI。 |
| RealAudio | .rm.ram    | RealAudio 格式是由 Real Media 针对因特网开发的。该格式也支持视频。该格式允许低带宽条件下的音频流（在线音乐、网络音乐）。由于是低带宽优先的，质量常会降低。                                                                                                                                                                                                                                                                    |
| Wave      | .wav       | Wave (waveform) 格式是由 IBM 和微软开发的。所有运行 Windows 的计算机和所有网络浏览器（除了 Google Chrome）都支持它。                                                                                                                                                                                                                                                                                                          |
| WMA       | .wma       | WMA 格式 (Windows Media Audio)，质量优于 MP3，兼容大多数播放器，除了 iPod。WMA 文件可作为连续的数据流来传输，这使它对于网络电台或在线音乐很实用。                                                                                                                                                                                                                                                                             |
| MP3       | .mp3 .mpga | MP3 文件实际上是 MPEG 文件的声音部分。MPEG 格式最初是由运动图像专家组开发的。MP3 是其中最受欢迎的针对音乐的声音格式。期待未来的软件系统都支持它。                                                                                                                                                                                                                                                                             |

使用哪种格式?

WAVE 是因特网上最受欢迎的无压缩声音格式，所有流行的浏览器都支持它。如果您需要未经压缩的声音（音乐或演讲），那么您应该使用 WAVE 格式。

MP3 是最新的压缩录制音乐格式。MP3 这个术语已经成为数字音乐的代名词。如果您的网址从事录制音乐，那么 MP3 是一个选项。

## html object 元素

> `<object>` 的作用是支持 HTML 助手（插件）。

HTML 助手（插件）

辅助应用程序（helper application）是可由浏览器启动的程序。辅助应用程序也称为插件。辅助程序可用于播放音频和视频（以及其他）。辅助程序是使用 `<object>` 标签来加载的。使用辅助程序播放视频和音频的一个优势是，您能够允许用户来控制部分或全部播放设置。大多数辅助应用程序允许对音量设置和播放功能（比如后退、暂停、停止和播放）的手工（或程序的）控制。

```html
<object
  width="420"
  height="360"
  classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"
  codebase="http://www.apple.com/qtactivex/qtplugin.cab"
>
  <param name="src" value="bird.wav" />
  <param name="controller" value="true" />
</object>
```

## html 音频

在 HTML 中播放音频并不容易！

您需要谙熟大量技巧，以确保您的音频文件在所有浏览器中（Internet Explorer, Chrome, Firefox, Safari, Opera）和所有硬件上（PC, Mac , iPad, iPhone）都能够播放。

使用 embed 元素

`<embed>` 标签定义外部（非 HTML）内容的容器。（这是一个 HTML5 标签，在 HTML4 中是非法的，但是所有浏览器中都有效）。

```html
<embed height="100" width="100" src="song.mp3" />
```

问题

- `<embed>` 标签在 HTML 4 中是无效的。页面无法通过 HTML 4 验证。
- 不同的浏览器对音频格式的支持也不同。
- 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频。
- 如果用户的计算机未安装插件，无法播放音频。
- 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放。

  **使用 `<!DOCTYPE html>` (HTML5) 解决验证问题。**

使用 `<object>` 元素

`<object tag>`标签也可以定义外部（非 HTML）内容的容器。

```html
<object height="100" width="100" data="song.mp3"></object>
```

问题

- 不同的浏览器对音频格式的支持也不同。
- 如果浏览器不支持该文件格式，没有插件的话就无法播放该音频。
- 如果用户的计算机未安装插件，无法播放音频。
- 如果把该文件转换为其他格式，仍然无法在所有浏览器中播放。

使用 HTML5 `<audio>` 元素

`<audio>` 元素是一个 HTML5 元素，在 HTML 4 中是非法的，但在所有浏览器中都有效。

```html
<audio controls="controls">
  <source src="song.mp3" type="audio/mp3" />
  <source src="song.ogg" type="audio/ogg" />
  Your browser does not support this audio format.
</audio>
```

上面的例子使用了一个 mp3 文件，这样它在 Internet Explorer、Chrome 以及 Safari 中是有效的。为了使这段音频在 Firefox 和 Opera 中同样有效，添加了一个 ogg 类型的文件。如果失败，会显示错误消息。

问题：

- `<audio>` 标签在 HTML 4 中是无效的。您的页面无法通过 HTML 4 验证。
- 您必须把音频文件转换为不同的格式。
- `<audio>` 元素在老式浏览器中不起作用。

**使用 `<!DOCTYPE html> (HTML5)` 解决验证问题。**

最好的办法

```html
<audio controls="controls" height="100" width="100">
  <source src="song.mp3" type="audio/mp3" />
  <source src="song.ogg" type="audio/ogg" />
  <embed height="100" width="100" src="song.mp3" />
</audio>
```

上面的例子使用了两个不同的音频格式。HTML5 `<audio>` 元素会尝试以 mp3 或 ogg 来播放音频。如果失败，代码将回退尝试 `<embed>` 元素。

问题：

- 您必须把音频转换为不同的格式。
- `<audio>` 元素无法通过 HTML 4 和 XHTML 验证。
- `<embed>` 元素无法通过 HTML 4 和 XHTML 验证。
- `<embed>` 元素无法回退来显示错误消息。

**注释：使用 `<!DOCTYPE html> (HTML5)` 解决验证问题。**

HTML 4.01 多媒体标签
| 标签 | 描述 |
| ---------- | -------------------------------------------- |
| `<applet>` | 不赞成。定义内嵌 applet。 |
| `<embed>` | HTML4 中不赞成，HTML5 中允许。定义内嵌对象。 |
| `<object>` | 定义内嵌对象。 |
| `<param>` | 定义对象的参数。 |

HTML 5 多媒体标签

| 标签      | 描述                                 |
| --------- | ------------------------------------ |
| `<audio>` | 标签定义声音，比如音乐或其他音频流。 |
| `<embed>` | 标签定义嵌入的内容，比如插件。       |

## html 视频

使用 `<embed>` 标签

`<embed>` 标签的作用是在 HTML 页面中嵌入多媒体元素。

```html
<embed src="movie.swf" height="200" width="200" />
```

问题

- HTML4 无法识别 `<embed>` 标签。您的页面无法通过验证。
- 如果浏览器不支持 Flash，那么视频将无法播放
- iPad 和 iPhone 不能显示 Flash 视频。
- 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放。

## 使用 `<object>` 标签

```html
<object data="movie.swf" height="200" width="200" />
```

问题

- 如果浏览器不支持 Flash，将无法播放视频。
- iPad 和 iPhone 不能显示 Flash 视频。
- 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放。

使用 `<video>` 标签

`<video>` 是 HTML 5 中的新标签。`<video>` 标签的作用是在 HTML 页面中嵌入视频元素。

```html
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
```

问题

- 您必须把视频转换为很多不同的格式。
- `<video>` 元素在老式浏览器中无效。
- `<video>` 元素无法通过 HTML 4 和 XHTML 验证。

最好的 HTML 解决方法
HTML 5 + `<object>` + `<embed>`

```html
<video width="320" height="240" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  <object data="movie.mp4" width="320" height="240">
    <embed src="movie.swf" width="320" height="240" />
  </object>
</video>
```

上例中使用了 4 中不同的视频格式。HTML 5 `<video>` 元素会尝试播放以 mp4、ogg 或 webm 格式中的一种来播放视频。如果均失败，则回退到 `<embed>` 元素。

问题

- 您必须把视频转换为很多不同的格式
- `<video>` 元素无法通过 HTML 4 和 XHTML 验证。
- `<embed>` 元素无法通过 HTML 4 和 XHTML 验证。

# html5 API

## html5 地理定位

HTML5 Geolocation API 用于获得用户的地理位置。鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

```html
<p id="demo">点击这个按钮，获得您的坐标：</p>
<button onclick="getLocation()">试一下</button>
<script>
  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    x.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br />Longitude: " +
      position.coords.longitude;
  }
  function showError(error) {
    console.log(error);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred.";
        break;
    }
  }
</script>
```

getCurrentPosition() 方法 - 返回数据

若成功，则 getCurrentPosition() 方法返回对象。始终会返回 latitude、longitude 以及 accuracy 属性。如果可用，则会返回其他下面的属性。

| 属性                    | 描述                   |
| ----------------------- | ---------------------- |
| coords.latitude         | 十进制数的纬度         |
| coords.longitude        | 十进制数的经度         |
| coords.accuracy         | 位置精度               |
| coords.altitude         | 海拔，海平面以上以米计 |
| coords.altitudeAccuracy | 位置的海拔精度         |
| coords.heading          | 方向，从正北开始以度计 |
| coords.speed            | 速度，以米/每秒计      |
| timestamp               | 响应的日期/时间        |

Geolocation 对象 - 其他有趣的方法
watchPosition() - 返回用户的当前位置，并继续返回用户移动时的更新位置（就像汽车上的 GPS）。
clearWatch() - 停止 watchPosition() 方法
下面的例子展示 watchPosition() 方法。您需要一台精确的 GPS 设备来测试该例（比如 iPhone）：

```html
<script>
  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    x.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br />Longitude: " +
      position.coords.longitude;
  }
</script>
```

## html5 拖放

拖放（Drag 和 Drop）是很常见的特性。它指的是您抓取某物并拖入不同的位置。

实例

```html
<head>
  <script>
    function allowDrop(ev) {
      ev.preventDefault();
    }
    // ondragstart 属性调用了一个 drag(event) 函数，规定拖动什么数据。
    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
  </script>
</head>
<body>
  <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

  <img
    id="drag1"
    draggable="true"
    src="img_logo.gif"
    ondragstart="drag(event)"
    width="336"
    height="69"
  />
</body>
```

把元素设置为可拖放 `<img draggable="true">`

拖放的内容 - ondragstart 和 setData()

然后，规定当元素被拖动时发生的事情。在上面的例子中，ondragstart 属性调用了一个 drag(event) 函数，规定拖动什么数据。dataTransfer.setData() 方法设置被拖动数据的数据类型和值：

```js
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
```

拖到何处 - ondragover

ondragover 事件规定被拖动的数据能够被放置到何处。默认地，数据/元素无法被放置到其他元素中。为了实现拖放，我们必须阻止元素的这种默认的处理方式。这个任务由 ondragover 事件的 event.preventDefault() 方法完成：

```js
event.preventDefault();
```

进行放置 - ondrop

当放开被拖数据时，会发生 drop 事件。在上面的例子中，ondrop 属性调用了一个函数，drop(event)：

```js
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
```

代码解释：

- 调用 preventDefault() 来阻止数据的浏览器默认处理方式（drop 事件的默认行为是以链接形式打开）
- 通过 dataTransfer.getData() 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据
- 被拖数据是被拖元素的 id ("drag1")
- 把被拖元素追加到放置元素中

## html5 web 存储

优于 cookie

通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。在 HTML5 之前，应用程序数据只能存储在 cookie 中，包括每个服务器请求。本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。与 cookie 不同，存储限制要大得多（至少 5MB），并且信息不会被传输到服务器。本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。

HTML 本地存储提供了两个在客户端存储数据的对象：

- window.localStorage - 存储没有截止日期的数据
- window.sessionStorage - 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失）

使用方法

```js
if (sessionStorage.clickcount) {
  sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else {
  sessionStorage.clickcount = 1;
}
document.getElementById("result").innerHTML =
  "在本 session 中，您已经点击这个按钮 " + sessionStorage.clickcount + " 次。";
```

## html5 应用缓存

HTML5 引入了应用程序缓存（Application Cache），这意味着可对 web 应用进行缓存，并可在没有因特网连接时进行访问。

应用程序缓存为应用带来三个优势：

- 离线浏览 - 用户可在应用离线时使用它们
- 速度 - 已缓存资源加载得更快
- 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源

如需启用应用程序缓存，请在文档的 `<html>` 标签中包含 manifest 属性：`<html manifest="demo.appcache">`

每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。

manifest 文件的建议文件扩展名是：".appcache"。

**manifest 文件需要设置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置。**

manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。manifest 文件有三个部分：

- CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
- NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
- FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

```appcache
# 下面的 manifest 文件列出了三个资源：一个 CSS 文件，一个 GIF 图像，以及一个 JavaScript 文件。当 manifest 文件被加载后，浏览器会从网站的根目录下载这三个文件。然后，无论用户何时与因特网断开连接，这些资源依然可用。
CACHE MANIFEST
# 2020-06-22 v1.0.0
/theme.css
/logo.gif
/main.js

# 下面的 NETWORK 部分规定文件 "login.php" 永远不会被缓存，且离线时是不可用的：
NETWORK:
login.asp

# 下面的 FALLBACK 部分规定如果无法建立因特网连接，则用 "offline.html" 替代 /html/ 目录中的所有文件：
FALLBACK:
/html/ /offline.html
```

更新缓存
一旦应用被缓存，它就会保持缓存直到发生下列情况：

- 用户清空浏览器缓存
- manifest 文件被修改（参阅下面的提示）
- 由程序来更新应用缓存

**以 "#" 开头的是注释行，但也可满足其他用途。应用的缓存只会在其 manifest 文件改变时被更新。如果您编辑了一幅图像，或者修改了一个 JavaScript 函数，这些改变都不会被重新缓存。更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法。**

关于应用程序缓存的注意事项
请留心缓存的内容。一旦文件被缓存，则浏览器会继续展示已缓存的版本，即使您修改了服务器上的文件。为了确保浏览器更新缓存，您需要更新 manifest 文件。

**浏览器对缓存数据的容量限制可能不太一样（某些浏览器的限制是每个站点 5MB）。**

## html5 web weorkers

当在 HTML 页面中执行脚本时，页面是不可响应的，直到脚本已完成。Web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 运行在后台。

Web worker 是运行在后台的 JavaScript，不会影响页面的性能。

```html
<body>
  <p>Count numbers: <output id="result"></output></p>
  <button onclick="startWorker()">Start Worker</button>
  <button onclick="stopWorker()">Stop Worker</button>
  <br /><br />

  <script>
    var w;

    function startWorker() {
      if (typeof Worker !== "undefined") {
        if (typeof w == "undefined") {
          w = new Worker("demo_workers.js");
        }
        w.onmessage = function (event) {
          document.getElementById("result").innerHTML = event.data;
        };
      } else {
        document.getElementById("result").innerHTML =
          "Sorry! No Web Worker support.";
      }
    }

    function stopWorker() {
      w.terminate();
      w = undefined;
    }
  </script>
</body>
```

Web Worker 和 DOM
由于 web worker 位于外部文件中，它们无法访问下例 JavaScript 对象：

- window 对象
- document 对象
- parent 对象

## html5 SSE

Server-Sent 事件允许网页从服务器获得更新。

Server-Sent 事件 - One Way Messaging
Server-Sent 事件指的是网页自动从服务器获得更新。以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过 Server-Sent 事件，更新能够自动到达。例如：Facebook/Twitter 更新、股价更新、新的博文、赛事结果，等等。

```js
if (typeof EventSource !== "undefined") {
  var source = new EventSource("demo_sse.php");
  source.onmessage = function (event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
  };
} else {
  // 抱歉！不支持服务器发送事件！
}
```

- 创建一个新的 EventSource 对象，然后规定发送更新的页面的 URL（本例中是 "demo_sse.php"）
- 每当接收到一次更新，就会发生 onmessage 事件
- 当 onmessage 事件发生时，把已接收的数据推入 id 为 "result" 的元素中

服务器端代码实例

为了使上例运行，您需要能够发送数据更新的服务器（比如 PHP 或 ASP）。服务器端事件流的语法非常简单。请把 "Content-Type" 报头设置为 "text/event-stream"。现在，您可以开始发送事件流了。

PHP 中的代码 (demo_sse.php)：

```php
<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r');
echo "data: The server time is: {$time}\n\n";
flush();
?>
```

ASP 中的代码 (VB) (demo_sse.asp)：

```js
<%
Response.ContentType = "text/event-stream"
Response.Expires = -1
Response.Write("data: The server time is: " & now())
Response.Flush()
%>
```

- 把报头 "Content-Type" 设置为 "text/event-stream"
- 规定不对页面进行缓存
- 输出要发送的日期（始终以 "data: " 开头）
- 向网页刷新输出数据

EventSource 对象
在上例中，我们使用 onmessage 事件来获取消息。不过还可以使用其他事件：

| 事件      | 描述                     |
| --------- | ------------------------ |
| onopen    | 当通往服务器的连接被打开 |
| onmessage | 当接收到消息             |
| onerror   | 当发生错误               |
