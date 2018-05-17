function foo(){
    getName = function(){
        console.log(1);
    }
    return this;
    }

foo.getName = function(){
    console.log(2);
}

foo.prototype.getName = function(){
     console.log(3);
}

var getName = function(){
    console.log(4);
}

function getName(){
    console.log(5);
}

foo.getName();
getName();
foo().getName();
getName();
new foo.getName();
new foo().getName();
new new foo().getName();

//考察声明提升和继承
//变形后

var getName;
//编译器提升到首位

function foo(){
    getName = function(){
        console.log(1);
    }
    return this;
    }

function getName(){
    console.log(5);
}

getName = function(){
    console.log(4);
}

foo.getName = function(){
    console.log(2);
}

foo.prototype.getName = function(){
     console.log(3);
}

foo.getName();
//2 foo.getName 覆盖原来内部的定义
getName();
//4　调用最用一次的定义　
foo().getName();
//1　foo() 返回的是　this, this 在这里指向 window 对象，此时　　getName再次被重新定义　getName = function(){  console.log(1); }
getName();
//１结果保持上一个步骤一致　
new foo.getName();
// 2
new foo().getName();
//3 通过ｎｅｗ关键字创建的对象不共享变量和函数，寻找原型链上的getName
new new foo().getName();
// 3


