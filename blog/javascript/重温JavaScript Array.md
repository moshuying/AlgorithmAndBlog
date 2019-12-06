
# 重温JavaScript Array


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

> 预览所有方法

|属性|作用|参数|
| --- | --- | --- |
| Array.from() | 从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。 | Array.from(arrayLike[, mapFn[, thisArg]]) |
| Array.isArray()  | 用于确定传递的值是否是一个 Array。 | Array.isArray(obj) |
| Array.of() | 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。 | Array.of(element0[, element1[, ...[, elementN]]]) |
| concat() | 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组的引用。 | let new_array = old_array.concat(value1[, value2[, ...[, valueN]]]) |
|  |  |  |
### Array.from()

从一个类似数组或可迭代对象创建一个新的,浅拷贝的数组实例

#### 参数

> Array.from(arrayLike, mapFn, thisArg)
* arrayLike 将要转换成数组的伪数组或可迭代对象
* mapFn 可选 给新数组的每个元素执行该回调函数
* thisArg 可选 执行`mapFn`时this对象

#### 返回值

一个新的数组实例

```js
// 从字符串生成数组
Array.from('123中文English')
// output: ["1", "2", "3", "中", "文", "E", "n", "g", "l", "i", "s", "h"]

// 生成数组后给每个数组元素执行mpFn方法
Array.from([1, "2", "3", "中", "文", "E", "n", "g", "l", "i", "s", "h"],x=>x+1)
//output: [2, "21", "31", "中1", "文1", "E1", "n1", "g1", "l1", "i1", "s1", "h1"]

//从Set生成数组
Array.from(new Set(['1','a','中']))
// output: ["1", "a", "中"]

// 从Map生成数组
Array.from(new Map([[1,1],[2,'a'],[3,'中']]))
// output: [[1,1],[2,'a'],[3,'中']]
Array.from(new Map([[1,1],[2,'a'],[3,'中']]).values())
// output: [1, "a", "中"]

// 从类数组对象(arguments)生成数组
function f() {return Array.from(arguments);}
f(1,'a','中')
// [1,'a','中']

// 数组生成器
const range = (start,stop,step) => Array.from({length:~~((stop-start)/step) +1},(_,i)=>start+(i*step));
range(0,4,1);
// [0,1,2,3,4]
range('a'.charCodeAt(0),'z'.charCodeAt(0),1).map(x=>String.fromCharCode(x));
// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
```

### Array.isArray()

用于确定传递的值是否是一个Array

#### 参数

> Array.isArray(obj)
* obj需要检测的值

#### 返回值

如果是`Array`,则为true,否则false

```js
// 以下函数调用都返回true
Array.isArray([1,2,3])
Array.isArray({1:1,2:2,3:3})

// 以下函数调用都返回false
Array.isArray(new Set())
Array.isArray(new Map())
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });
```

### Array.of()
创建一个具有可变数量参数的新数组实例,而不考虑参数的数量或类型

>!﹝注意﹞Array.of()方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型

#### 参数

> Array.of(element0[, element1[, ...[, elementN]]])
* elementN 任意个参数,将按顺序成为返回数组中的元素
####　返回值

新的Array实例

```js
Array.of(7); // [7]
Array.of(1,2,3) // [1,2,3]

Array(7); // [, , , , , ,]
Array(1,2,3),// [1,2,3]
```

### Array.prototype.concat()

方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

#### 参数
> let new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
* valueN 可选 将数组和/或值连接成新数组。如果省略了valueN参数参数，则concat会返回一个它所调用的已存在的数组的浅拷贝。详情请参阅下文描述。

#### 返回值

新的Array实例

#### 描述
concat方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会递归到嵌套数组参数中。

concat方法不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 原始数组的元素将复制到新数组中，如下所示：

* 对象引用（而不是实际对象）：concat将对象引用复制到新数组中。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。 这包括也是数组的数组参数的元素。
* 数据类型如字符串，数字和布尔（不是String，Number 和 Boolean 对象）：concat将字符串和数字的值复制到新数组中。

>注意：数组/值在连接时保持不变。此外，对于新数组的任何操作（仅当元素不是对象引用时）都不会对原始数组产生影响，反之亦然。

```js
// 连接两个数组
let num1 = ['a', 'b', 'c'];
let num2 = [1, 2, 3];

num1.concat(num2);// ['a', 'b', 'c', 1, 2, 3]
// 连接三个数组
let num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

let nums = num1.concat(num2, num3);

console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 将值连接到数组
let alpha = ['a', 'b', 'c'];

let alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]

// 合并嵌套数组
let num1 = [[1]];
let num2 = [2, [3]];
let num3=[5,[6]];

let nums = num1.concat(num2);

console.log(nums);// [[1], 2, [3]]

let nums2=num1.concat(4,num3);

console.log(nums2)// [[1], 4, 5,[6]]

num1[0].push(4);

console.log(nums);// [[1, 4], 2, [3]]
```

### Array.prototype.copyWithin()
方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
<!-- W3C.[J].w3school.JavaScript Array 对象.2019(01) -->
[1]:https://www.w3school.com.cn/jsref/jsref_obj_array.asp
[2]:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
[3]:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray