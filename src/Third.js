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