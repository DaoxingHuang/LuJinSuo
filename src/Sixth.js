function foo(){
    console.log(this.count)
}

var obj = {
    count : 2,
    foo: foo
}

obj.foo();
//answer : 2