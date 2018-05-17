function foo(){
    this.a = 1;
}

foo.prototype.b = 2;
function bar(){};
bar.prototype = foo.prototype;
var b = new bar();
console.log(b.a);
console.log(b.b);
//answer:undefined  2
//原型链继承　prototype　和　new