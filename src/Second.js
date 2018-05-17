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