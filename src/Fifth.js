function foo(){
    console.log(this.count);
    console.log(foo.count);
}

var count = 1;
foo.count = 2;
foo();
//answer: 1 2
// foo this bind global(window)

