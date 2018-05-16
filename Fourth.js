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
//考察this指向
//go() this邦定的是　global window x = 3
//foo.baz.bar　this邦定的是 baz x=1
