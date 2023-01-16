console.log("====================================概览⬇️️============================================")
console.log("JavaScript类型:\n" +
    "Number 数字\n" +
    "String 字符串\n" +
    "Boolean 布尔\n" +
    "Symbol 符号\n" +
    "Object 对象\n" +
    " Function 函数\n" +
    " Array 数组\n" +
    " Date 日期\n" +
    " RegExp 正则\n" +
    "null 空\n" +
    "undefined 未定义\n")
console.log("====================================概览⬇️️============================================")


console.log("====================================数字⬇️️============================================")
console.log(3 / 2)
console.log(Math.floor(3 / 2))
console.log(0.1 + 0.2)
console.log(Math.sin(3.5))

let circumference = 2 * Math.PI * 3.5
console.log(circumference)

console.log(parseInt("123", 10))
console.log(parseInt("010", 10))

//一元运算符+ 可以把数字转换成数值
console.log(+"42")

//如果给定字符串不存在数值形式，函数会返回一个Nan(Not a Number)
console.log(parseInt("hello", 10))

//可以使用isNaN()来判断一个变量是否是Nan
console.log(isNaN(NaN))

//JavaScript还有俩个特殊值 Infinity正无穷和-Infinity负无穷
console.log(1 / 0)
console.log(-1 / 0)

//可以使用内置函数isFinite()，判断一个变量是否是有穷数，如果类型为Infinity、-Infinity或NaN则会返回false
console.log(isFinite(NaN))
console.log(isFinite(1 / 0))
console.log(isFinite(-1 / 0))
console.log(isFinite(1))

/*
备注： parseInt() 和 parseFloat() 函数会尝试逐个解析字符串中的字符，直到遇上一个无法被解析成数字的字符，然后返回该字符前所有数字字符组成的数字。
但是运算符 "+"对字符串的转换方式与之不同，只要字符串含有无法被解析成数字的字符，该字符串就将被转换成 NaN。
可分别使用这两种方法解析“10.2abc”这一字符串，并比较得到的结果，来理解这两种方法的区别。
 */
console.log(parseInt("10.2abc")) //10
console.log(parseFloat("10.2abc")) //10.2
console.log(+"10.2abc") //NaN

console.log("====================================数字⬆️============================================")


console.log("===================================字符串⬇️️===========================================")

/*
JavaScript 中的字符串是一串Unicode 字符序列。这对于那些需要和多语种网页打交道的开发者来说是个好消息。更准确地说，
它们是一串 UTF-16 编码单元的序列，每一个编码单元由一个 16 位二进制数表示。每一个 Unicode 字符由一个或两个编码单元来表示。
如果想表示一个单独的字符，只需要使用长度为1的字符串。
 */

//通过访问字符串的length(编码单元的个数)属性，可以得到长度
console.log("hello".length)

//这是第一次碰到JavaScript对象，可以像object一样使用字符串，它也有method方法能够操作和获取字符串信息。
console.log("hello".charAt(1))
console.log("hello,world".replace("world", "mars"))
console.log("hello".toUpperCase())

console.log("===================================字符串⬆️===========================================")


console.log("===================================其他类型⬇️️===========================================")

/*
与其他类型不同,JavaScript中的null表示一个空值(non-value)，必须使用null关键字才能访问。
undefined是一个未定义对象，表示一个未初始化的值，也就是还没有被分配的值。
之后再陶乱变量，但有一点先简单说明，JavaScript允许声明变量但不对其赋值，一个未被赋值的变量就是undefined类型，
undefined实际上是一个不允许修改的常量。
 */

/*
JavaScript包含布尔类型，这个类型的变量有俩个可能的值，分别是true和false
根据具体需要，JavaScript按照如下规则将变量转换成布尔类型：
1.false、0、空字符串("")、NaN、null和undefined被转换成false
2.所有其他值转换为true

也可以使用Boolean()函数显示的转换
 */
console.log(Boolean('')) //false
console.log(Boolean(234)) //true

/*
JavaScript支持包括&&逻辑与、||逻辑或和!逻辑非在内的一些逻辑运算符
 */


console.log("===================================其他类型⬆️===========================================")


console.log("===================================变量⬇️️===========================================")
/*
在Javascript中声明一个变量的方法是使用关键字：let、const和var.
 */

//let语句声明一个块级作用于的本地变量，并且可选的将其初始化为一个值
let a;
let name = 'Bob'

//下面是使用let声明变量作用域的例子：
//letVariable 在这里不能被引用
for (let letVariable = 0; letVariable < 5; letVariable++) {
    //letVariable 只能在这里引用
}
//letVariable 在这里不能被引用

//const允许声明一个不可变的常量。这个常量在定义域内总是可见的。
const Pi = 3.14
//Pi=1 >>> TypeError: Assignment to constant variable.

//var是最常见的声明变量的关键字。它没有其他俩个关键字的种种限制。这是因为它是传统上在Javascript声明变量的唯一方法。
//使用var声明的变量在它所声明的整个函数都是可见的。
var a1
var name1 = 'simon'
//一个使用var声明变量的语句块的例子：
// myVarVariable 在这里 *能* 被引用
for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
    // myVarVariable 整个函数中都能被引用
}
// myVarVariable 在这里 *能* 被引用


//如果声明了一个变量却没有对其赋值，那么这个变量的类型就是undefined
console.log(a1)


console.log("===================================变量⬆️===========================================")


console.log("===================================运算符⬇️️===========================================")
/*
JavaScript的算数运算符+、-、*、/和%。赋值使用=运算符
此外还有一些复合运算符，如+=、-=，他们等价于x = x operator y。
可以使用++和--分别实现变量的自增和自减。俩着都可以作为前缀或后缀操作符使用。
 */

console.log("hello" + " world")
//如果一个字符串加上一个数字（或其他值），那么操作数都会被首先转换为字符串：
console.log("3" + 4 + 5) //345
console.log(3 + 4 + "5") //75

/*
Javascript中的比较操作>、<、<=、>=，这些运算符对于数字和字符串都通用。相等的比较稍微复杂一些。
由两个等号组成的相等运算符有类型自适应的功能
 */
console.log(123 == "123") //Comparison 123 == "123" may cause unexpected type coercion
console.log(1 == true)  //比较123==“123”可能会导致意外的类型强制
/*
如果在比较前不需要自动类型转换，应该使用三个等号组成的相等运算符
 */
//Condition is always false since types 'number' and 'string' have no overlap ,条件始终为false，因为类型“number”和“string”没有重叠
console.log(123 === "123")
console.log(1 === true)


console.log("===================================运算符⬆️===========================================")


console.log("===================================控制结构⬇️️===========================================")
/*
JavaScript的控制结构与其他类C语音类似。可以使用if和else来定义条件语句
 */
let names = "kittens";
if (names === "Bob") {
    names += "!"
} else if (names === "kittens") {
    names += "!!"
} else {
    names = "!" + names
}

console.log(names === "kittens!!")


/*
JavaScript支持while循环和do-while循环。for循环。
还有其他俩种重要的for循环：for..of和 for..in
 */
let array = [1, 2, 3, 4];
for (let value of array) {
    //do something with value
    console.log(value)
}

let object = {
    name: "Carrot",
    _for: "Max",//'for' 是保留字之一，使用'_for'代替
    details: {
        color: "orange",
        size: 12
    }
};
for (let field in object) {
    //do something with object property
    console.log(field)
}

//总结，for..of用于基本的遍历。for..in用于对象的属性的遍历。


/*
&& 和 || 运算符使用短路逻辑（short-circuit logic），是否会执行第二个语句（操作数）取决于第一个操作数的结果。
空和非空在短路逻辑中代表true和false！！！
 */

//在需要访问某个对象的属性时，使用这个特性可以事先检测该对象是否为空
// object = null
var name3 = object && object.name
console.log("name3 is: " + name3)

//或用于缓存值(当错误值无效时)
// var cachedName = null
var cachedName = "aaaa"
var name4 = cachedName || (cachedName = object.name)
console.log("name4 is: " + name4)
console.log("cachedName is: " + cachedName)

//三元
var age = 0
var allowed = (age > 18) ? "yes" : "no"

//多重分支可以使用switch语句
switch (age) {
    case 0:
        console.log("0")
        break
    case 1:
        console.log("1")
        break
    default:
        console.log("default")
}


console.log("===================================控制结构⬆️===========================================")


console.log("===================================对象⬇️️===========================================")
/*
JavaScript中的对象，Object。可以简单理解成"名称-值"对。而不是键值对，因为Map比对象更接近键值对。
所以，不难联想，Javascript中的对象与下面这些概念类似：
Python中的字典（Dictionary）
Perl和Ruby中的散列/哈希（Hash）
C/C++中的散列表（Hash table）
Java中的散列映射表（HashMap）
PHP中的关连数组（Associative array）

这样的数据结构设计合理，能应对各类复杂需求，所以被各类语言广泛应用。正因为JavaScript中的一切（除了核心类型，core object）都是对象，
所以JavaScript程序必然与大量的散列表查找有着千丝万缕的练习，而散列表擅长的正式高速查找。

"名称"部分是一个JavaScript字符串，"值"部分可以是任何JavaScript的数据类型包括对象。这使得用户可以根据需要创建出相当复杂的数据结构。
 */

//有俩种简单的方法可以创建一个空对象：
var obj1 = new Object()

//和
var obj2 = {}

/*
这俩种方法在语义上是相同的。第二种更方便的方法叫组"对象字面量(object literal)"法。这种也是JSON格式的核心语法，一般优先采用第二种方法。
"对象字面量"也可以用力爱在对象实例中定义一个对象：
 */
var obj3 = {
    name: "Jack",
    _for: "Max",//保留字，加前缀使用
    details: {
        color: "orange",
        size: 12
    }
}

//对象的属性可以通过链式(chain)表示方法进行访问：
console.log(obj3.details.color)
console.log(obj3["details"]["size"])

//下面例子创建了一个对象圆形，Person，和这个原型的实例，You。
function Person(name, age) {
    this.name = name
    this.age = age
}

var you = new Person("You", 18)
console.log(you)
you.name = "Jack Ma"
console.log(you)

//括号表示法
you['name'] = 'Simon'
console.log(you)

//can use a variable to define a key      prompt???
// var user = prompt('what is you key?')
// object[user] = prompt('what is its value?')

/*
这两种方法在语义上也是相同的。第二种方法的优点在于属性的名称被看作一个字符串，
这就意味着它可以在运行时被计算，缺点在于这样的代码有可能无法在后期被解释器优化。它也可以被用来访问某些以预留关键字作为名称的属性的值.

从ECMAScript5开始，可以直接使用预留关键字，不需要用双引号。
 */


console.log("===================================对象⬆️===========================================")


console.log("===================================数组⬇️️===========================================")
/*
Javascript中的数组是一种特殊的对象。它的工作原理和普通对象类似，以数字为属性名，但只能通过[]来访问。
但数组还有一个特殊的属性，length长度。这个属性的值通常比数组最大索引大1.
 */

//创建数组的传统方法
var array1 = new Array()    //Array instantiation can be simplified(可以简化数组实例化)  建议设置长度
array1[0] = "dog"
array1[1] = "cat"
array1[2] = "chicken"
console.log(array1.length)

//使用数组字面量(array literal)发更加方便
var array2 = ["dog", "cat", "chicken"]
console.log(array2.length)

//注意！！！Array.length并不总是等于数组中的元素的格式，如下所示
var array3 = ["a", "b", "c"]
array3[100] = "fox"
console.log(array3.length)  //101 切记：Array.length数组的长度是比数组最大索引值大一的数

//如果试图访问一个不存在的数组索引，会得到undefined
console.log(typeof (array3[90]))

//可以通过如下方式遍历数组
for (var i = 0; i < array3.length; i++) {
    //do something with array3[i]
}

//ES2015引入了更加简洁的for..of循环，可以用来遍历可迭代对象，例如数组
for (const string of array2) {
    console.log(string)
}

//遍历数组的另一种方法是使用for..in循环，然而这并不是遍历数组元素而数组的索引。
//注意，如果哪个家伙直接向 Array.prototype 添加了新的属性，使用这样的循环这些属性也同样会被遍历。所以并不推荐使用这种方法遍历数组：
for (const array2Key in array2) {
    //操作array2[key]
    console.log(array2Key)
}

//ECMAScript5增加了另一个遍历数组的方法，forEach()
array2.forEach(function (current, index, array2) {
    console.log(current)
})

//如果想在数组后追加元素。如下所示
array2.push("monkey")
console.log(array2.length)

console.log("<<<<<<<<<<")
for (const string of array2) {
    console.log(string)
}

console.log("<<<<<<<<<<")
array2.splice(3, 1, "aaa")
for (const string of array2) {
    console.log(string)
}

/*
数组其他方法摘要
方法名称	描述
a.toString()	返回一个包含数组中所有元素的字符串，每个元素通过逗号分隔。
a.toLocaleString()	根据宿主环境的区域设置，返回一个包含数组中所有元素的字符串，每个元素通过逗号分隔。
a.concat(item1[, item2[, ...[, itemN]]])	返回一个数组，这个数组包含原先 a 和 item1、item2、……、itemN 中的所有元素。
a.join(sep)	返回一个包含数组中所有元素的字符串，每个元素通过指定的 sep 分隔。
a.pop()	删除并返回数组中的最后一个元素。
a.push(item1, ..., itemN)	将 item1、item2、……、itemN 追加至数组 a。
a.reverse()	数组逆序（会更改原数组 a）。
a.shift()	删除并返回数组中第一个元素。
a.slice(start, end)	返回子数组，以 a[start] 开头，以 a[end] 前一个元素结尾。
a.sort([cmpfn])	依据可选的比较函数 cmpfn 进行排序，如果未指定比较函数，则按字符顺序比较（即使被比较元素是数字）。
a.splice(start, delcount[, item1[, ...[, itemN]]])	从 start 开始，删除 delcount 个元素，然后插入所有的 item。
a.unshift(item1[, item2[, ...[, itemN]]])	将 item 插入数组头部，返回数组新长度（考虑 undefined）。

 */
console.log("===================================数组⬆️===========================================")

console.log("============================函数↓================================")

/*
学习JavaScript最重要的就是理解对象和函数俩个部分。
最简单的函数就像下面这个这么简单：
 */
function add(x, y) {
    var total = x + y;
    return total;
}


/*
这个例子包括需要了解的关于基本函数的所有部分。一个JavaScript函数可以包含0个或多个已命名的变量。
函数体中的表达式数量也没有限制。可以声明函数自己的局部变量。return语句在返回一个值并结束函数。
如果没有使用return语句，或者一个没有值的return语句，JavaScript会返回undefined。

已命名的参数更像是一个指示而没有其他作用。如果调用函数时没有提供足够的参数，缺少的参数会被undefined替代。
 */

console.log(add(2, 3, 4)) //结果是2+3 =5 ，4被忽略了。

/*
这个看上去有点蠢，函数实际上是访问了函数体中一个名为 arguments 的内部对象。
这个对象就如同一个类似于数组的对象一样，包括了所有被传入的参数。
重写一下上面的函数，使他可以接收任意个数的参数：
 */
function add() {
    var sum = 0
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log("不限元素个数求和：" + add(2, 3, 4, 5)) //14 全部都做了想加

//这跟直接写成2+3+4+5也没什么区别。下面看一下一个求平均的函数
function avg() {
    var sum = 0
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i]
    }
    return sum / arguments.length
}

console.log("求若干元素个数的平均值" + avg(2, 3, 4, 5))

/*
这个就有用多了，但是有些冗长。为了使代码变短一些，可以使用剩余参数来替换arguments的使用。
在这个方法中，可以传递任意数量的参数到函数中同时减少代码。这个 剩余参数操作符 在函数中已 ...variable 的形式被使用。
在调用这个函数时，它将包含所有未被捕获的参数。
 */
function avg1(...args) {
    var sum = 0
    for (let value of args) {
        sum += value
    }
    return sum / args.length
}

console.log("平均值函数优化：" + avg1(2, 3, 4, 5))

/*
备注：function avg(firstValue, ...args)会把传入函数的第一个值存入firstValue，其他的参数存入 args。
虽然这是一个很有用的语言特性，却也会带来新的问题。avg()函数只接受逗号分开的参数列表。
但是如果想要获取一个数组的平均值怎么办？ 一种方法是将函数按照如下方式重写：
 */
function avgArray(arr) {
    var sum = 0
    for (var i = 0, j = arr.length; i < j; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log("数组平均值计算：" + avgArray([2, 3, 4, 5]))
console.log("数组平均值计算：" + avgArray(2, 3, 4))  //错误调用方式，会返回NaN，或许js有类型推断

/*
但如果能重用已经创建的那个函数不是更好么。幸运的是JavaScript允许通过任意函数对象的 apply() 方法
来传递给它一个数组作为参数列表。
 */
console.log("apply方法：" + avg.apply(null, [2, 3, 4, 5]))
/*
传给apply() 的第二个参数是一个数组，它将被当做 avg() 的参数列表使用，至于第一个参数 null，
将在后面讨论。这也正说明了一个事实----函数也是对象。
通过使用 展开语法 ，也可以获得同样的效果。比如说：avg(...numbers)
 */

/*
JavaScript允许你创建匿名函数。
 */
var avg2 = function () {
    var sum = 0
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i]
    }
    return sum / arguments.length
}
/*
这个函数在语义上与function avg()相同。可以在代码中任何地方定义这个函数，就想写普通的表达式一样。
基于这个特性，有人发明了一些有趣的技巧。与C中的块级作用域类似，下面这个例子隐藏了局部变量。
 */
var a2 = 1;
var b2 = 2;
(function () {
    var c = 3
    a2 += c
})();
console.log("a2: " + a2)
console.log("b2: " + b2)

/*
JavaScript允许以递归方式调用函数。递归在处理树形结构，比如浏览器DOM时非常有用。
 */
function countChars(elm) {
    if (elm.nodeType === 3) {//文本节点
        return elm.nodeValue.length
    }
    var count = 0
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += countChars(child)
    }
    return count
}

/*
这里需要说明一个潜在问题----既然匿名函数没有名字，那该怎么递归调用它呢？在这一点上，JavaScript
允许你命名这个函数的表达式。可以命名立即调用的函数表达式。（IIFE----Immediately Invoked Function Expression）
如下图所示：
 */
// var charsInBody = (function counter(elm) {
//     if (elm.nodeType === 3) {//文本节点
//         return elm.nodeValue.length
//     }
//     var count = 0
//     for (var i = 0, child; child = elm.childNodes[i]; i++) {
//         count += counter(child)
//     }
//     return count
// })(document.body)
/*
如上所提供的函数表达式的名称的作用域仅仅是该函数自身。这允许引擎去做更多的优化，并且这种实现更可读、友好。
该名称也显示在调试器和一些堆栈跟踪中，节省了调试时的时间。

需要注意的是 JavaScript 函数是它们本身的对象——就和 JavaScript
其他一切一样——你可以给它们添加属性或者更改它们的属性，这与前面的对象部分一样。
???
 */

console.log("============================函数↑================================")


console.log("============================自定义对象↓================================")

/*
在经典的面向对象语言中，对象是指数据和在这些数据上进行的操作的集合。与 C++ 和 Java 不同，JavaScript 是一种基于原型的编程语言，
并没有 class 语句，而是把函数用作类。那么让我们来定义一个人名对象，这个对象包括人的姓和名两个域（field）。
名字的表示有两种方法：“名 姓（First Last）”或“姓，名（Last, First）”。使用我们前面讨论过的函数和对象概念，可以像这样完成定义.
 */
function makePerson(first, last) {
    return {
        first: first,
        last: last
    }
}

function personFullName(person) {
    return person.first + ' ' + person.last
}

function personFullNameReversed(person) {
    return person.last + ', ' + person.first
}

var s = makePerson('Simon', 'Jack')

console.log(personFullName(s))
console.log(personFullNameReversed(s))

/*
上面的写法虽然可以满足要求，但是看起来很麻烦，因为需要在全局命名空间中写很多函数。
既然函数本身就是对象，如果需要使一个函数隶属于一个对象，那么不难得到：
 */
function makePerson1(first, last) {
    return {
        first: first,
        last: last,
        fullName: function () {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function () {
            return this.last + ', ' + this.first;
        }
    }
}

s1 = makePerson1("Simon", "Willison"); //确实有类型推倒，不需要严格执行变量声明使用var、let等。

console.log(s1.fullName())// "Simon Willison"
console.log(s1.fullNameReversed()) // Willison, Simon

/*
上面的代码里有一些我们之前没有见过的东西：关键字 this。当使用在函数中时，this 指代当前的对象，也就是调用了函数的对象。
如果在一个对象上使用点或者方括号来访问属性或方法，这个对象就成了 this。
如果并没有使用“点”运算符调用某个对象，那么 this 将指向全局对象（global object）。这是一个经常出错的地方。例如：
!!!
 */
s2 = makePerson("Simon", "Willison");
var fullName = s2.fullName; //指向全局对象，点错了东西
console.log(fullName) // undefined
/*
当我们调用 fullName() 时，this 实际上是指向全局对象的，并没有名为 first 或 last 的全局变量，所以它们两个的返回值都会是 undefined。
???
 */


//下面使用关键字 this 改进已有的 makePerson函数：
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function () {
        return this.first + ' ' + this.last;
    }
    this.fullNameReversed = function () {
        return this.last + ', ' + this.first;
    }
}

var s4 = new Person("Simon", "Willison");
console.log(s4)

/*
我们引入了另外一个关键字：new，它和 this 密切相关。它的作用是创建一个崭新的空对象，然后使用指向那个对象的 this 调用特定的函数。
注意，含有 this 的特定函数不会返回任何值，只会修改 this 对象本身。new 关键字将生成的 this 对象返回给调用方，
而被 new 调用的函数称为构造函数。习惯的做法是将这些函数的首字母大写，这样用 new 调用他们的时候就容易识别了。

不过，这个改进的函数还是和上一个例子一样，在单独调用fullName() 时，会产生相同的问题。

我们的 Person 对象现在已经相当完善了，但还有一些不太好的地方。每次我们创建一个 Person 对象的时候，
我们都在其中创建了两个新的函数对象——如果这个代码可以共享不是更好吗？
 */
function personFullName1() {
    return this.first + ' ' + this.last;
}

function personFullNameReversed1() {
    return this.last + ', ' + this.first;
}

function Person1(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName1;
    this.fullNameReversed = personFullNameReversed1;
}

//这种写法的好处是，我们只需要创建一次方法函数，在构造函数中引用它们。那是否还有更好的方法呢？答案是肯定的。

function Person2(first, last) {
    this.first = first;
    this.last = last;
}

Person2.prototype.fullName = function () {
    return this.first + ' ' + this.last;
}
Person2.prototype.fullNameReversed = function () {
    return this.last + ', ' + this.first;
}

/*
Person.prototype 是一个可以被 Person 的所有实例共享的对象。它是一个名叫原型链（prototype chain）的查询链的一部分：
当你试图访问 Person 某个实例（例如上个例子中的 s）一个没有定义的属性时，
解释器会首先检查这个 Person.prototype 来判断是否存在这样一个属性。
所以，任何分配给 Person.prototype 的东西对通过 this 对象构造的实例都是可用的。


这个特性功能十分强大，JavaScript 允许你在程序中的任何时候修改原型（prototype）中的一些东西，
也就是说你可以在运行时 (runtime) 给已存在的对象添加额外的方法：
 */
s = new Person("Simon", "Willison");
// s.firstNameCaps();  // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function () {
    return this.first.toUpperCase()
}
console.log(s.firstNameCaps()); // SIMON

/*
有趣的是，你还可以给 JavaScript 的内置函数原型（prototype）添加东西。让我们给 String 添加一个方法用来返回逆序的字符串：
 */
var s = "Simon";
// s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function () {
    var r = "";
    for (var i = this.length - 1; i >= 0; i--) {
        r += this[i];
    }
    return r;
}
console.log(s.reversed()); // nomiS

//定义新方法也可以在字符串字面量上用（string literal）。
"This can now be reversed".reversed(); // desrever eb won nac sihT

/*
正如我前面提到的，原型组成链的一部分。那条链的根节点是 Object.prototype，它包括 toString() 方法——将对象转换成字符串时调用的方法。
这对于调试我们的 Person 对象很有用：
 */
var s = new Person("Simon", "Willison");
console.log(s); // [object Object]

Person.prototype.toString = function () {
    return '<Person: ' + this.fullName() + '>';
}
console.log(s.toString()); // <Person: Simon Willison>


/*
你是否还记得之前我们说的 avg.apply() 中的第一个参数 null？现在我们可以回头看看这个东西了。
apply() 的第一个参数应该是一个被当作 this 来看待的对象。下面是一个 new 方法的简单实现：
 */
function trivialNew(constructor, ...args) {
    var o = {}; // 创建一个对象
    constructor.apply(o, args);
    return o;
}

/*
这并不是 new 的完整实现，因为它没有创建原型（prototype）链。想举例说明 new 的实现有些困难，
因为你不会经常用到这个，但是适当了解一下还是很有用的。在这一小段代码里，...args（包括省略号）叫作剩余参数（rest arguments）。
如名所示，这个东西包含了剩下的参数。
因此，调用
 */
var bill = trivialNew(Person, "William", "Orange");
console.log("AAA")
console.log(bill)
/*
可认为和调用如下语句是等效的
 */
var bill1 = new Person("William", "Orange");
console.log('BBB')
console.log(bill1)


/*
apply() 有一个姐妹函数，名叫 call，它也可以允许你设置 this，但它带有一个扩展的参数列表而不是一个数组。
 */
function lastNameCaps() {
    return this.last.toUpperCase();
}

var s5 = new Person("Simon", "Willison");
lastNameCaps.call(s5);
console.log('s5A')
console.log(lastNameCaps.call(s5))
// 和以下方式等价
s5.lastNameCaps = lastNameCaps;
s5.lastNameCaps();
console.log('s5B')
console.log(s5.lastNameCaps())


/*
JavaScript 允许在一个函数内部定义函数，这一点我们在之前的 makePerson() 例子中也见过。
关于 JavaScript 中的嵌套函数，一个很重要的细节是，它们可以访问父函数作用域中的变量：
 */
function parentFunc() {
    var a = 1;

    function nestedFunc() {
        var b = 4; // parentFunc 无法访问 b
        return a + b;
    }

    return nestedFunc(); // 5
}

/*
如果某个函数依赖于其他的一两个函数，而这一两个函数对你其余的代码没有用处，你可以将它们嵌套在会被调用的那个函数内部，
这样做可以减少全局作用域下的函数的数量，这有利于编写易于维护的代码。

这也是一个减少使用全局变量的好方法。当编写复杂代码时，程序员往往试图使用全局变量，将值共享给多个函数，
但这样做会使代码很难维护。内部函数可以共享父函数的变量，所以你可以使用这个特性把一些函数捆绑在一起，
这样可以有效地防止“污染”你的全局命名空间——你可以称它为“局部全局（local global）”。虽然这种方法应该谨慎使用，但它确实很有用，应该掌握。
 */

console.log("============================自定义对象↑================================")

console.log("============================闭包↓================================")

/*
闭包是 JavaScript 中最强大的抽象概念之一——但它也是最容易造成困惑的。它究竟是做什么的呢？
 */
function makeAdder(a) {
    return function (b) {
        return a + b;
    }
}

var add5 = makeAdder(5);
var add20 = makeAdder(20);
console.log(add5(6))    //11
console.log(add20(7))   //27
/*
makeAdder 这个名字本身，便应该能说明函数是用来做什么的：它会用一个参数来创建一个新的“adder”函数，
再用另一个参数来调用被创建的函数时，makeAdder 会将一前一后两个参数相加。

从被创建的函数的视角来看的话，这两个参数的来源问题会更显而易见：新函数自带一个参数——在新函数被创建时，
便钦定、钦点了前一个参数（如上方代码中的 a、5 和 20，参考 makeAdder 的结构，它应当位于新函数外部）；
新函数被调用时，又接收了后一个参数（如上方代码中的 b、6 和 7，位于新函数内部）。
最终，新函数被调用的时候，前一个参数便会和由外层函数传入的后一个参数相加。

这里发生的事情和前面介绍过的内嵌函数十分相似：一个函数被定义在了另外一个函数的内部，内部函数可以访问外部函数的变量。
唯一的不同是，外部函数已经返回了，那么常识告诉我们局部变量“应该”不再存在。但是它们却仍然存在——否则 adder 函数将不能工作。
也就是说，这里存在 makeAdder 的局部变量的两个不同的“副本”——一个是 a 等于 5，另一个是 a 等于 20。那些函数的运行结果就如下所示：
add5(6); // 返回 11
add20(7); // 返回 27

下面来说说，到底发生了什么了不得的事情。每当 JavaScript 执行一个函数时，都会创建一个作用域对象（scope object），
用来保存在这个函数中创建的局部变量。它使用一切被传入函数的变量进行初始化（初始化后，它包含一切被传入函数的变量）。
这与那些保存的所有全局变量和函数的全局对象（global object）相类似，但仍有一些很重要的区别：
第一，每次函数被执行的时候，就会创建一个新的，特定的作用域对象；
第二，与全局对象（如浏览器的 window 对象）不同的是，你不能从 JavaScript 代码中直接访问作用域对象，
也没有 可以遍历当前作用域对象中的属性 的方法。

所以，当调用 makeAdder 时，解释器创建了一个作用域对象，它带有一个属性：a，这个属性被当作参数传入 makeAdder 函数。然
后 makeAdder 返回一个新创建的函数（暂记为 adder）。通常，JavaScript 的垃圾回收器会在这时回收 makeAdder 创建的作用域对象（暂记为 b），
但是，makeAdder 的返回值，新函数 adder，拥有一个指向作用域对象 b 的引用。最终，作用域对象 b 不会被垃圾回收器回收，
直到没有任何引用指向新函数 adder。

作用域对象组成了一个名为作用域链（scope chain）的（调用）链。它和 JavaScript 的对象系统使用的原型（prototype）链相类似。

一个闭包，就是 一个函数 与其 被创建时所带有的作用域对象 的组合。闭包允许你保存状态——所以，它们可以用来代替对象。
 */

console.log("============================闭包↑================================")