function test(){
    //
}


//函数也能拥有属性
// test.name test.prototype
// test.[[scope]]  //隐式属性

// test()  ---> AO: {} //回收
// test()  ---> AO: {}

// function a(){
//     function b(){
//         var b = 222
//     }
//     var a = 111

// }