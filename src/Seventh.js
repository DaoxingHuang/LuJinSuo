var obj = {
    foo:"bar",
    fun:function(){
        var self = this ;
        console.log(this.foo);
        console.log(self.foo);
        (function(){
            console.log(this.foo);
            console.log(self.foo);
        })()
    }
};

obj.fun();
//answer: bar bar undefined bar
//考察要点: hack; this 邦定的是 obj . 在obj 内部邦定 global(window).

