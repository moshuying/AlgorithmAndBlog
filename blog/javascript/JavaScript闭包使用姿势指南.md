[TOC]
# JavaScript闭包使用姿势指南
## 引言
闭包就是指**能够访问另一个函数作用域的变量的函数**,闭包就是一个函数,能够访问其他函数的作用域中的变量,js有一个全局对象,在浏览器下是window,node下是global,所有的函数都在这个对象下,也能访问这个对象下的变量,这也就是说,**js中的所有函数都是闭包**

## 闭包的定义
>函数与对其状态即词法环境（lexical environment）的引用共同构成闭包（closure）。也就是说，闭包可以让你从内部函数访问外部函数作用域。在JavaScript，函数在每次创建时生成闭包。[[1]]

MDN对闭包的定义中说道了词法环境和引用同时也说道了每次创建时生成闭包
参考代码
```js
const eg = ()=>{
    let a ='测试变量' // 被eg创建的局部变量
    let inner = ()=>{ // eg的内部函数,一个闭包
        console.log(a) // 使用了父函数中声明的变量
    }
    return inner // inner就是一个闭包函数 可以访问到eg函数的作用域
}
```

## 来个有趣的例子吧
```js
function init() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数,一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
   displayName();
 }
 init();
```
由于js作用域的原因,dispplayName可以访问到父级作用域init的变量name,这点母庸质疑

那么再看这个例子

```js
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
  }
var myFunc = makeFunc();
myFunc();
```
这段代码和之前的代码执行结果完全一样,其中的不同 — 也是有意思的地方 — 在于内部函数 displayName() 在执行前，被外部函数返回。你很可能认为它无法执行,那么我们再改变一下代码

```js

var name2 = 123
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name2);
    }
    return displayName;
  }
var myFunc = makeFunc();
myFunc();
```

你几乎不用想就能知道结果肯定是123那么我们在返回之前的代码,为什么你就无法肯定代码的执行结果了呢

答案是,**JavaScript中的函数会形成闭包。 闭包是由函数以及创建该函数的词法环境组合而成。**请仔细阅读这段话,js的闭包是由函数及创建该函数的词法环境组合而成,创建它的词法环境有这个变量,所有直接使用这个变量,没有则向上查找,直至在全局环境都找不到,返回undefind

那么我们再把例子换一下
```js

var object = {
     name: ''object"，
     getName： function() {
        return function() {
             console.info(this.name)
        }
    }
}
object.getName()()    // underfined
```
这个时候this指向哪里呢?答案是全局因为里面的闭包函数是在window作用域下执行的，也就是说，this指向windows


### 现在我们换个例子吧

```js

function outer() {
     var  a = '变量1'
     var  inner = function () {
            console.info(a)
     }
     return inner    // inner 就是一个闭包函数，因为他能够访问到outer函数的作用域
}
var  inner = outer()   // 获得inner闭包函数
inner()   //"变量1"
```

当程序执行完var inner = outer()，**其实outer的执行环境并没有被销毁**，因为他里面的变量a仍然被被inner的函数作用域链所引用，当程序执行完inner(), 这时候，inner和outer的执行环境才会被销毁调；《JavaScript高级编程》书中建议：由于闭包会携带包含它的函数的作用域，因为会比其他函数占用更多内容，过度使用闭包，会导致内存占用过多。[[2]]



### 我们再来个有趣的例子
```js

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
 }

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```
add5和add10都是闭包,也共享函数的定义,但是保存了不同的词法环境,在add5中x=5而在add10中x为10
## 内存泄露问题

闭包函数引用外层的变量,当执行完外层函数是,变量会无法释放

```js

function  showId() {
    var el = document.getElementById("app")
    el.onclick = function(){
      aler(el.id)   // 这样会导致闭包引用外层的el，当执行完showId后，el无法释放
    }
}

// 改成下面function  showId() {
    var el = document.getElementById("app")
    var id  = el.id
    el.onclick = function(){
      aler(id)   // 这样会导致闭包引用外层的el，当执行完showId后，el无法释放
    }
    el = null    // 主动释放el
}
```
```js

function  factorial(num) {
   if(num<= 1) {
       return 1;
   } else {
      return num * factorial(num-1)
   }}var anotherFactorial = factorial
factorial = nullanotherFactorial(4)   // 报错 ，因为最好是return num* arguments.callee（num-1），arguments.callee指向当前执行函数，但是在严格模式下不能使用该属性也会报错，所以借助闭包来实现


// 使用闭包实现递归function newFactorial = （function f(num){
    if(num<1) {return 1}
    else {
       return num* f(num-1)
    }
}） //这样就没有问题了，实际上起作用的是闭包函数f，而不是外面的函数newFactorial
```
## 用闭包解决递归调用问题

## 用闭包模拟私有方法

编程语言中，比如 Java，是支持将方法声明为私有的，即它们只能被同一个类中的其它方法所调用。

而 JavaScript 没有这种原生支持，但我们可以使用闭包来模拟私有方法。私有方法不仅仅有利于限制对代码的访问：还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。

下面的示例展现了如何使用闭包来定义公共函数，并令其可以访问私有函数和变量。这个方式也称为 `模块模式（module pattern）`

```js

var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();

console.log(Counter.value()); /* logs 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* logs 2 */
Counter.decrement();
console.log(Counter.value()); /* logs 1 */
```

在之前的示例中，每个闭包都有它自己的词法环境；而这次我们只创建了一个词法环境，为三个函数所共享：Counter.increment，Counter.decrement 和 Counter.value。

该共享环境创建于一个立即执行的匿名函数体内。这个环境中包含两个私有项：名为 privateCounter 的变量和名为 changeBy 的函数。这两项都无法在这个匿名函数外部直接访问。必须通过匿名函数返回的三个公共函数访问。

这三个公共函数是共享同一个环境的闭包。多亏 JavaScript 的词法作用域，它们都可以访问 privateCounter 变量和 changeBy 函数。

>你应该注意到我们定义了一个匿名函数，用于创建一个计数器。我们立即执行了这个匿名函数，并将他的值赋给了变量Counter。我们可以把这个函数储存在另外一个变量makeCounter中，并用他来创建多个计数器。

```js

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var Counter1 = makeCounter();var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```

请注意两个计数器 Counter1 和 Counter2 是如何维护它们各自的独立性的。每个闭包都是引用自己词法作用域内的变量 privateCounter 。

每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。

>以这种方式使用闭包，提供了许多与面向对象编程相关的好处 —— 特别是数据隐藏和封装。

## 在循环中使用闭包
```html
<p id="help">Helpful notes will appear here</p>
<p>E-mail: <input type="text" id="email" name="email"></p>
<p>Name: <input type="text" id="name" name="name"></p>
<p>Age: <input type="text" id="age" name="age"></p>
```
```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp(); 
```
看到这里你一定能想到,由于共享了同一个词法作用域,最终结果是所有的item.help都指向了helptext的最后一项,解决方法是使用let关键字或者使用匿名闭包

```js
// 匿名闭包
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = function() {
         showHelp(item.help);
       }
    })(); // 马上把当前循环项的item与事件回调相关联起来
  }
}
setupHelp();

// 使用let关键字
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```
## 性能考虑

如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。原因是这将导致每次构造器被调用时，方法都会被重新赋值一次（也就是，每个对象的创建）。

```js

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
```

在上面的代码中，我们并没有利用到闭包的好处，因此可以避免使用闭包。修改成如下：

```js

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();}MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};
```

也可以这样

```js

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;};MyObject.prototype.getMessage = function() {
  return this.message;
};
```
[1]:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
[2]:https://www.jianshu.com/p/26c81fde22fb