function foo(a,b){
    console.log(b);
    return {
        foo:function(m){
            return foo(m,a);
        }
    }
}

var c = foo(0).foo(1);
c.foo(2);
c.foo(3);
//answer undefined 0 1 1

//var d = foo(0) = {foo:function(m){return foo(m,0);}  d is object . b=undefined
//var e = foo(0).foo(1) = d.foo(1) = foo(1,0) = {foo:function(m){return foo(m,1);}  b = 0

//c.foo(2) = e.foo(2) = foo(2,1)    b = 1
//c.foo(3) e.foo(2) = foo(2,1)  b = 1



