/*
JavaScript 是一门跨平台、面向对象的脚本语言，它能使网页可交互（例如拥有复杂的动画，可点击的按钮，通俗的菜单等）。
另外还有高级的服务端 Javascript 版本，例如 Node.js，它可以让你在网页上添加更多功能，不仅仅是下载文件（例如在多台电脑之间的协同合作）。
在宿主环境（例如 web 浏览器）中，JavaScript 能够通过其所连接的环境提供的编程接口进行控制。

与 Java 相比，Javascript 是一门形式自由的语言。你不必声明所有的变量，类和方法。你不必关心方法是否是公有、私有或者受保护的，
也不需要实现接口。无需显式指定变量、参数、方法返回值的数据类型。

command+option+k 控制台 单行模式。command+b 开启多行模式；command+enter 在浏览器中查看结果；


在函数之外声明的变量，叫做全局变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做局部变量，因为它只能在当前函数的内部访问。


变量提升
JavaScript 变量的另一个不同寻常的地方是，你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升；
JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面。但是，提升后的变量将返回 undefined 值。
因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 undefined 值。

函数提升
对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会被提升。

函数声明
foo(); // "bar"

function foo() {
    console.log("bar");
}


函数表达式
baz(); // 类型错误：baz 不是一个函数

var baz = function() {
    console.log("bar2");
}


全局变量
实际上，全局变量是全局对象的属性。在网页中，（译注：缺省的）全局对象是 window ，所以你可以用形如 window.*variable *的语法来设置和访问全局变量。
因此，你可以通过指定 window 或 frame 的名字，在当前 window 或 frame 访问另一个 window 或 frame 中声明的变量。
例如，在文档里声明一个叫 phoneNumber 的变量，那么你就可以在子框架里使用 parent.phoneNumber 的方式来引用它。




 */

const array = ['hone', undefined, 'work'];

for(let i=0;i<array.length;i++){
    console.log(array[i])
};

console.log(array.length)

console.log("================")


var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];

var a2 = a.map(function(s){ return s.length });

console.log(a2); // logs [ 8, 6, 7, 9 ]

var a3 = a.map( a =>a.length );

console.log(a3); // logs [ 8, 6, 7, 9 ]


/*
对于更复杂的赋值，解构赋值语法是一个能从数组或对象对应的数组结构或对象字面量里提取数据的 Javascript 表达式。
 */
var foo = ["one", "two", "three"];

// 不使用解构
// var one   = foo[0];
// var two   = foo[1];
// var three = foo[2];
// console.log(one)
// console.log(two)
// console.log(three)

// 使用解构
var [one, two, three] = foo;
console.log(one)
console.log(two)
console.log(three)



/*
虽然自定义的迭代器是一个有用的工具，但由于需要显式地维护其内部状态，因此需要谨慎地创建。生成器函数提供了一个强大的选择：
它允许你定义一个包含自有迭代算法的函数，同时它可以自动维护自己的状态。生成器函数使用 function*语法编写。最初调用时，生成器函数不执行任何代码，
而是返回一种称为 Generator 的迭代器。通过调用生成器的下一个方法消耗值时，Generator 函数将执行，直到遇到 yield 关键字。

可以根据需要多次调用该函数，并且每次都返回一个新的 Generator，但每个 Generator 只能迭代一次。

我们现在可以调整上面的例子了。此代码的行为是相同的，但实现更容易编写和读取。
 */
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}
var a = makeRangeIterator(1,10,2)
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())




/*
一些语句和表达式专用于可迭代对象，例如 for-of 循环，展开语法，yield* 和 解构赋值。
 */
for (let value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"

let newVar = [...'abc']; // ["a", "b", "c"]
console.log(newVar)

function* gen() {
    yield* ['a', 'b', 'c'];
}
// { value: "a", done: false }
console.log(gen().next());
console.log(gen().next());
console.log(gen().next());

[a1, b1, c1] = new Set(['a', 'b', 'c']);
console.log(a1)
console.log(b1)
console.log(c1)


