
# 重温JavaScript Array

===

## Array对象简介

### Array对象

Array是js最常用的数据类型之一,另一种是Object 在入门或略熟Js之后再来深耕一遍Array,下面的文章内容从最浅显易懂,最常用的方法,到一点一点深入Array对象的内部,带你了解Array对象

>W3C对Array的定义 Array 对象用于在单个的变量中存储多个值。[[1]]

>MDN对Array的定义 JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。[[2]]

这是W3CSchool中对Js的定义,看起来很简单对吧,它本质上来说也就是这么回事,一个存储很多变量的对象而已,它什么都可以存,你能想到的变量都可以放在里面,想想Js的基本数据类型吧,`undefind,NaN,null,Boolean,Number,String以及ES6引入的原始数据类型Symbol`,都可以放在数组里的,它什么都能装,也能装得下,所以它可以用来做很多事情

### 创建Array对象

创建一个Array对象很简单,new一个就行了,也可以let 一个空数组

```js
let array = new Array();
let arra = Array(10);
let arr = []
```

他们都声明了一个数组,在接下来的操作上没有任何区别,你可以简单的吧`let arr = []`理解为隐式的调用了`new Array()`,不过要注意的是,Js中数组是引用类型,这样就说,`arr`是指向数组的指针,在接下来的操作中要小心你的代码是否包含了错误的引用,以至于输出和预期不相符

### 参数

参数是期望数组的元素个数,并非每次期望数组是一个干干净净的空数组,有时候会希望用一个足够长度的空数组来装一些东西然后利用他来进行页面渲染等操作,通常是这样做的

```js
let array = new Array(10)
let arr = [];arr.length=10
```

注意这两行代码,他们仅仅是在语法和用法上有区别,但在获取到的结果上没有任何区别

### 返回值

>返回新创建并被初始化了的数组。
>如果调用构造函数 Array() 时没有使用参数，那么返回的数组为空，length 字段为 0。
>当调用构造函数时只传递给它一个数字参数，该构造函数将返回具有指定个数、元素为 undefined 的数组。
>当其他参数调用 Array() 时，该构造函数将用参数指定的值初始化数组。
>当把构造函数作为函数调用，不使用 new 运算符时，它的行为与使用 new 运算符调用它时的行为完全一样。[1]

### Array对象属性

Array对象的属性很多但总体上可以分为三项`constructor,length,prototype`,他们分别返回创建数组的函数引用,数组中元素的数目,数组的属性和方法
调用方法如下

```js
Array.constructor // Array的函数的引用,打印在控制台会发现是一个function Function()
Array.length // arr中元素的数量 默认为1
Array.prototype // Array的属性和方法
```

>**需要注意 Array是一个函数,而\[\]是一个对象,通常把\[\]的方法称为数组方法,Array称为Array对象**Array作为函数有constructor方法,数组没有

## Array对象方法

### from() 从一个类似数组或可迭代对象创建一个新的,浅拷贝的数组实例
### pop() 	删除并返回数组的最后一个元素

### push() 	向数组的末尾添加一个或更多元素，并返回新的长度。

### concat() 	连接两个或更多的数组，并返回结果。

### toString() 	把数组转换为字符串，并返回结果。

### shift() 	删除并返回数组的第一个元素

### unshift() 	向数组的开头添加一个或更多元素，并返回新的长度。


### splice() 	删除元素，并向数组添加新元素。
### join() 	把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。

### valueOf() 	返回数组对象的原始值

### reverse() 	颠倒数组中元素的顺序。

### slice() 	从某个已有的数组返回选定的元素

### sort() 	对数组的元素进行排序

### toSource() 	返回该对象的源代码。

### toLocaleString() 	把数组转换为本地数组，并返回结果。

## Array方法

## TypedArray方法 [3]

<!-- W3C.[J].w3school.JavaScript Array 对象.2019(01) -->
[1]:https://www.w3school.com.cn/jsref/jsref_obj_array.asp
[2]:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
[3]:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray