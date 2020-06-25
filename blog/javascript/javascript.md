---
title: javascript
tags: javascript
notebook: typejavascript
---

# javascript

> JavaScript 是一门编程语言，可为网站添加交互功能。（例如：游戏、动态样式，动画，以及在按下按钮或收到表单数据时做出的响应，等）。[ mdn ]

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

## 表达式和运算符

### 主要表达式

| 关键字         | 含义                                                            |
| -------------- | --------------------------------------------------------------- |
| this           | this 关键字指向函数的执行上下文。                               |
| function       | function 关键字定义了函数表达式。                               |
| class          | class 关键字定义了类表达式。                                    |
| function\*     | function\* 关键字定义了一个 generator 函数表达式。              |
| yield          | 暂停和恢复 generator 函数。                                     |
| yield\*        | 委派给另外一个 generator 函数或可迭代的对象。                   |
| async function | async function 定义一个异步函数表达式。                         |
| await          | 暂停或恢复执行异步函数，并等待 promise 的 resolve/reject 回调。 |
| []             | 数组初始化/字面量语法。                                         |
| {}             | 对象初始化/字面量语法。                                         |
| /ab+c/i        | 正则表达式字面量语法。                                          |
| ( )            | 分组操作符。                                                    |

#### this

> 在绝大多数情况下，函数的调用方式决定了 this 的值。this 不能在执行期间被赋值，并且在每次函数被调用时 this 的值也可能会不同。ES5 引入了 bind 方法来设置函数的 this 值，而不用考虑函数如何被调用的，ES2015 引入了支持 this 词法解析的箭头函数（它在闭合的执行环境内设置 this 的值）。[ mdn ]

当前执行代码的环境对象，在非严格模式下，总是指向一个对象，在严格模式下可以是任意值

- 全局环境

指向全局对象

- 函数（运行内）环境

取决于函数被调用的方式，

```js
function f1() {
  return this;
}
f1() === window;

function f2() {
  "use strict";
  return this;
}
f2() === undefined;
```

在严格模式下，如果 this 没有被执行环境（execution context）定义，那它将保持为 undefined。

如果要想把 this 的值从一个环境传到另一个，就要用 call 或者 apply 方法。

```js
// 将一个对象作为call和apply的第一个参数，this会被绑定到这个对象。
var obj = { a: "Custom" };

// 这个属性是在global对象定义的。
var a = "Global";

function whatsThis(arg) {
  return this.a; // this的值取决于函数的调用方式
}

whatsThis(); // 'Global'
whatsThis.call(obj); // 'Custom'
whatsThis.apply(obj); // 'Custom'
```

当一个函数在其主体中使用 this 关键字时，可以通过使用函数继承自 Function.prototype 的 call 或 apply 方法将 this 值绑定到调用中的特定对象。

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// 第一个参数是作为‘this’使用的对象
// 后续参数作为参数传递给函数调用
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// 第一个参数也是作为‘this’使用的对象
// 第二个参数是一个数组，数组里的元素用作函数调用中的参数
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

**如果传递给 this 的值不是一个对象，JavaScript 会尝试使用内部 ToObject 操作将其转换为对象。**

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

//原始值 7 被隐式转换为对象
bar.call(7); // [object Number]
bar.call("foo"); // [object String]
```

##### bind 方法

> ECMAScript 5 引入了 Function.prototype.bind()。调用 f.bind(someObject)会创建一个与 f 具有相同函数体和作用域的函数，但是在这个新函数中，this 将永久地被绑定到了 bind 的第一个参数，无论这个函数是如何被调用的。

```js
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var h = g.bind({ a: "yoo" }); // bind只生效一次！
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

##### 箭头函数

在箭头函数中，this 与封闭词法环境的 this 保持一致。**如果将 this 传递给 call、bind、或者 apply 来调用箭头函数，它将被忽略。**

```js
// 创建一个含有bar方法的obj对象，
// bar返回一个函数，
// 这个函数返回this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的this被永久绑定到了它外层函数的this。
// bar的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
  bar: function () {
    var x = () => this;
    return x;
  },
};

// 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
// 将返回的函数的引用赋值给fn。
var fn = obj.bar();

// 直接调用fn而不设置this，
// 通常(即不使用箭头函数的情况)默认为全局对象
// 若在严格模式则为undefined
console.log(fn() === obj); // true

// 但是注意，如果你只是引用obj的方法，
// 而没有调用它
var fn2 = obj.bar;
// 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
console.log(fn2()() == window); // true
```

##### 作为对象的方法

当函数作为对象里的方法被调用时，它们的 this 是调用该函数的对象。

下面的例子中，当 o.f()被调用时，函数内的 this 将绑定到 o 对象。

```js
var op = {
  prop: 99,
};
var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

console.log(o.f()); // 37
op.f = o.f;
console.log(op.f()); // 99
```

##### 原型链中的 this

```js
let os = {
  f: function () {
    return this.a ** this.b;
  },
};
let ad = Object.create(os);
ad.a = 3;
ad.b = 3;
console.log(ad.f()); // 27
```

f 作为 ad 的方法被调用，this 指向 p

##### getter 与 setter 中的 this

相同的概念也适用于当函数在一个 getter 或者 setter 中被调用。用作 getter 或 setter 的函数都会把 this 绑定到设置或获取属性的对象。

```js
function sum() {
  return this.a + this.a + this.b + this.b + this.c;
}
let o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  },
};
Object.defineProperty(o, "sum", {
  get: sum,
  enumerable: true,
  configurable: true,
});
console.log(o.average, o.sum); //2 9
```

##### 作为构造函数

当一个函数用作构造函数时（使用 new 关键字），它的 this 被绑定到正在构造的新对象。

> 虽然构造器返回的默认值是 this 所指的那个对象，但它仍可以手动返回其他的对象（如果返回值不是一个对象，则返回 this 对象）。

##### 作为一个 DOM 事件处理函数

当函数被用作事件处理函数时，它的 this 指向触发事件的元素（一些浏览器在使用非 addEventListener 的函数动态添加监听函数时不遵守这个约定）。

```js
// 被调用时，将关联的元素变成蓝色
function bluify(e) {
  console.log(this === e.currentTarget); // 总是 true

  // 当 currentTarget 和 target 是同一个对象时为 true
  console.log(this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName("*");

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```

##### 作为一个内联时间处理函数

当代码被内联 on-event 处理函数调用时，它的 this 指向监听器所在的 DOM 元素：

```html
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
<!-- 此时指向window -->
<button onclick="alert((function(){return this})());">
  Show inner this
</button>

<!-- 使用箭头函数时this指向监听器所在的DOM元素 -->
<button onclick="alert((()=> this.tagName.toLowerCase())());">
  Show inner this
</button>
```

#### function

##### 函数表达式

语法,es6 后可以用箭头函数

```js
let function_expression = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
```

- name

函数名称。可被省略，此种情况下的函数是匿名函数（anonymous）。 函数名称只是函数体中的一个本地变量。

- param1

参数 至多有 255 个参数

- statements

函数体

###### 函数表达式提升 (Function expression hoisting)

函数表达式没有变量提升，定义函数表达式之前不能使用函数表达式

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

###### 命名函数表达式（Named function expression）

在函数体内部引用当前函数，则需要创建一个命名函数表达式。然后函数名称将会（且只会）作为函数体（作用域内）的本地变量。

```js
var math = {
  factorial: function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  },
};
```

被函数表达式赋值的那个变量会有一个 name 属性，如果你把这个变量赋值给另一个变量的话，这个 name 属性的值也不会改变。

如果函数是一个匿名函数，那 name 属性的值就是被赋值的变量的名称（隐藏值）。

如果函数不是匿名的话，那 name 属性的值就是这个函数的名称（显性值）。

以上条件对于匿名函数也同样使用

```js
var add = function () {};
add.name; // add

var add2 = add;
add2.name; // add

var sum = function max() {};
sum.name; //sum

max; // undefined
```

##### 函数声明

语法

```js
function name([param,[, param,[..., param]]]) {
   [statements]
}
```

- name

函数名

- param

要传递给函数的参数的名称，不同引擎中的最大参数数量不同

- statements

包含函数体的语句

##### 有条件的创建函数

函数可以被有条件来声明，这意味着，函数声明可能出现在一个 if 语句里，但是，这种声明方式在不同的浏览器里可能有不同的效果。因此，不应该在生成环境代码中使用这种声明方式，应该使用**函数表达式**来代替。

```js
var hoisted = "foo" in this;
console.log(
  `'foo' name ${hoisted ? "is" : "is not"} hoisted. typeof foo is ${typeof foo}`
);
if (true) {
  function foo() {
    return 1;
  }
}

// 在Chrome里:
// 'foo' 变量名被提升，但是 typeof foo 为 undefined
//
// 在Firefox里:
// 'foo' 变量名被提升. 但是 typeof foo 为 undefined
//
// 在Edge里:
// 'foo' 变量名未被提升. 而且 typeof foo 为 undefined
//
// 在Safari里:
// 'foo' 变量名被提升. 而且 typeof foo 为 function
```

上方的 if(true)修改为 if(false)结果也是一样的

##### 函数声明提升

js 中的函数声明被提升到了函数定义，你可以在函数声明之前使用该函数，但是函数表达式`function expression`不会被提升

#### class 类表达式

> 类表达式是用来定义类的一种语法。和函数表达式相同的一点是，类表达式可以是命名也可以是匿名的。如果是命名类表达式，这个名字只能在类体内部才能访问到。JavaScript 的类也是基于原型继承的。[mdn ]

```js
const MyClass = class [className] [extends] {
  // class body
};
```

类表达式中可以声明掉类名，类语句中不行

```js
let Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

let instance = new Foo();
instance.bar();
// "Hello World!"
```

如果你想在类体内部也能引用这个类本身，那么你就可以使用命名类表达式，并且这个类名只能在类体内部访问。

```js
const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    // 访问自身变量
    return NamedFoo.name;
  }
};

let bar = new Foo();

bar.whoIsThere();
// "NamedFoo"

NamedFoo.name;
// ReferenceError: NamedFoo is not defined

Foo.name;
// "NamedFoo"
```

#### function\* yield (不建议使用)

在表达式内部定义一个生成器函数

```js
function* [name]([param1[, param2[, ..., paramN]]]) {
   statements
}
```

参数定义同 function

```js
function* foo() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}

let str = "";
for (const val of foo()) {
  str += val;
}

console.log(str);
// expected output: "0123456789"
```

#### yield\*

yield\* 表达式用于委托给另一个 generator 或可迭代对象。

```js
yield * [[expression]];
```

返回一个可迭代对象的表达式

yield\* 表达式迭代操作数，并产生它返回的每个值。

yield\* 表达式本身的值是当迭代器关闭时返回的值（即 done 为 true 时）。

以下代码中，g1() yield 出去的每个值都会在 g2() 的 next() 方法中返回，就像那些 yield 语句是写在 g2() 里一样。

##### 委托给其他生成器

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

##### yield\* 表达式的值

yield\* 是一个表达式，不是语句，所以它会有自己的值。

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
// 此时 g4() 返回了 { value: "foo", done: true }
console.log(result); // "foo"
```

#### async function

##### async function

定义以一个返回 AsyncFunction 对象的异步函数。异步函数是指通过事件循环异步执行的函数，它会通过一个隐式的 Promise 返回其结果。返回的 Promise 对象会运行执行(resolve)异步函数的返回结果，或者运行拒绝(reject)——如果异步函数抛出异常的话。

> async/await 的目的是简化使用多个 promise 时的同步行为，并对一组 Promises 执行某些操作。正如 Promises 类似于结构化回调，async/await 更像结合了 generators 和 promises。

**await 关键字只在异步函数内有效。如果你在异步函数外使用它，会抛出语法错误。**

> 注意，当异步函数暂停时，它调用的函数会继续执行(收到异步函数返回的隐式 Promise)

```js
var resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

var resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

var sequentialStart = async function () {
  console.log("==SEQUENTIAL START==");

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
};

// 这种写法更高效
var concurrentStart = async function () {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
};

var concurrentPromise = function () {
  console.log("==CONCURRENT START with Promise.all==");
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    }
  );
};

var parallel = async function () {
  console.log("==PARALLEL with await Promise.all==");

  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
};

// This function does not handle errors. See warning below!
var parallelPromise = function () {
  console.log("==PARALLEL with Promise.then==");
  resolveAfter2Seconds().then((message) => console.log(message));
  resolveAfter1Second().then((message) => console.log(message));
};

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000); // same as concurrentStart

// wait again
setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"

// wait again
setTimeout(parallelPromise, 13000); // same as parallel
```

###### await and parallelism(并行)

在 sequentialStart 中，程序在第一个 await 停留了 2 秒，然后又在第二个 await 停留了 1 秒。直到第一个计时器结束后，第二个计时器才被创建。程序需要 3 秒执行完毕。

在 concurrentStart 中，两个计时器被同时创建，然后执行 await。这两个计时器同时运行，这意味着程序完成运行只需要 2 秒，而不是 3 秒,即最慢的计时器的时间。

但是 await 仍旧是顺序执行的，第二个 await 还是得等待第一个执行完。在这个例子中，这使得先运行结束的输出出现在最慢的输出之后。

如果你希望并行执行两个或更多的任务，你必须像在 parallel 中一样使用 await Promise.all([job1(), job2()])。

###### async/await 和 Promise#then 对比以及错误处理

大多数异步函数也可以使用 Promises 编写。但是，在错误处理方面，async 函数更容易捕获异常错误

上面例子中的 concurrentStart 函数和 concurrentPromise 函数在功能上都是等效的。在 concurrentStart 函数中，如果任一 awaited 调用失败，它将自动捕获异常，异步函数执行中断，并通过隐式返回 Promise 将错误传递给调用者。

在 Promise 例子中这种情况同样会发生，该函数必须负责返回一个捕获函数完成的 Promise。在 concurrentPromise 函数中，这意味着它从 Promise.all([]).then()返回一个 Promise。事实上，在此示例的先前版本忘记了这样做！

但是，async 函数仍有可能然可能错误地忽略错误。
以 parallel 异步函数为例。 如果它没有等待 await（或返回）Promise.all([])调用的结果，则不会传播任何错误。
虽然 parallelPromise 函数示例看起来很简单，但它根本不会处理错误！ 这样做需要一个类似于 return Promise.all([])处理方式。

###### 使用 async 函数重写 promise 链

返回 Promise 的 API 将会产生一个 promise 链，它将函数肢解成许多部分。例如下面的代码：

```js
function getProcessedData(url) {
  return downloadData(url) // 返回一个 promise 对象
    .catch((e) => {
      return downloadFallbackData(url); // 返回一个 promise 对象
    })
    .then((v) => {
      return processDataInWorker(v); // 返回一个 promise 对象
    });
}
```

重写为单个 async 函数

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

注意，在上述示例中，return 语句中没有 await 操作符，因为 async function 的返回值将被隐式地传递给 Promise.resolve。

###### return await promiseValue; 与 return promiseValue;的比较

返回值隐式的传递给 Promise.resolve，并不意味着 return await promiseValue;和 return promiseValue;在功能上相同。

看下下面重写的上面代码，在 processDataInWorker 抛出异常时返回了 null：

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  try {
    return await processDataInWorker(v); // 注意 `return await` 和单独 `return` 的比较
  } catch (e) {
    return null;
  }
}
```

简单地写上 return processDataInworker(v);将导致在 processDataInWorker(v)出错时 function 返回值为 Promise 而不是返回 null。return foo;和 return await foo;，有一些细微的差异:return foo;不管 foo 是 promise 还是 rejects 都将会直接返回 foo。相反地，如果 foo 是一个 Promise，return await foo;将等待 foo 执行(resolve)或拒绝(reject)，如果是拒绝，将会在返回前抛出异常。

##### async function expression

异步函数表达式与 异步函数语句 非常相似，语法也基本相同。它们之间的主要区别在于异步函数表达式可以省略函数名称来创建一个匿名函数。另外，异步函数表达式还可以用在 IIFE (立即执行函数表达式，Immediately Invoked Function Expression) 中，更多信息见 函数。

#### []

Array

JavaScript 的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

```js
// 创建数组
new array(elements0, elements1, elementsN);
new array(arraylength);
let fruits = ["apple", "banana"];

fruits.length; // 3

// 通过索引访问数组元素
let [first, last] = [fruit[0], first[first.length - 1]];

fruits.forEach((el, ix, arr) => {
  console.log(ex, ix);
});

// apple 0
// banana 1
```

Array.length 属性的属性特性：

| key          | value |
| ------------ | ----- |
| writable     | true  |
| enumerable   | false |
| configurable | false |

- Writable ：如果设置为false，该属性值将不能被修改。
- Configurable ：如果设置为false，删除或更改任何属性都将会失败。
- Enumerable ：如果设置为 true ，属性可以通过迭代器for或for...in进行迭代。

[恢复上一次浏览](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
#### {}

#### /ab+c/i

#### ()
