new Promise((resolve,reject)=>{
    reject(1);
}).catch(()=>{
    console.log(2);
}).then(()=>{
    console.log(3);
},()=>{
    console.log(4);
});
//answer: 2 3
//考察　；Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
//变形之后

new Promise((resolve,reject)=>{
    reject(1);
}).catch(()=>{
    console.log(2);
    //nothing to do will excute next resolve
}).then(()=>{
    console.log(3);
});