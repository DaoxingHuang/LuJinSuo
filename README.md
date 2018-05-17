# LuJinSuo
陆金所前端笔试
1.字符和数字的操作
//求a和b的值
var a = 1+"2"+3+"4"+5;
var b=1+2+3+"4";
console.log(a);
//answer:12345
console.log(b);
//64

//考察要求：
//JavaScript中
//数字相加总是返数字
//字符串相加总是返回字符和数字相返回字符串

2.变量声明和提升
var foo =1;
function bar(){
    foo = 10;
    return ;
    function foo(){}
}

bar();
console.log(foo);
//answer:1
//考点:变量声明和提升，这个函数等同于

var foo = 1;
function bar() {
    var foo = function() {};
    foo = 10;
    return;
}
bar();
console.log(foo);

／／又等同于
var bar = function() {
    var foo = function() {};
    foo = 10;
    return;
}
var foo = 1;
bar();
console.log(foo);

//声明提升需要注意:函数的声明比变量的声明具有高的优先级,注意这里是指声明，声明，声明，重要的事情说三遍，观察下面两个例子:

var a;
function a(){
}
console.log(a);//打印出a的函数体
//上面这个例子说明 函数的声明比变量的声明具有高的优先级


var a=1;
function a(){
}
console.log(a);//打印出1
//上面这个例子等于

function a(){
}
var a=1;
console.log(a);//打印出1
//这是声明提升，另外函数的声明有两种不同的方式
//一种类似于function a(){};,此种提升会连函数体一体提升
//另一种  var  a = function(){};  只提升 a 的声明 而不 提升函数体
//下面有两个例子说明这点

foo();// TypeError "foo is not a function"
bar();// valid

var foo = function () {}; // foo指向匿名函数
function bar() {}; // 函数声明


var foo = 1;
function bar(){
    return foo;
    foo = 10;
    function foo(){}
    var foo = 11;
}

console.log(typeof bar());
//参考 sencond的说明 等同于


function bar(){
    var foo= function(){};
    return foo;
    foo = 10;
    foo = 11;
}

//answer: function

3.this 指向
var x = 3;
var foo = {
    x:2,
    baz:{
        x:1.
        bar:function(){
            return this.x;
        }
    }
};

var go = foo.baz.bar;
console.log(go());//3
console.log(foo.baz.bar());//1
//考察　指向
//go()邦定的是　global window x = 3
//foo.baz.bar　邦定的是 baz x=1
