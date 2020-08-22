// function test(){
//     var arr = []
//     for (var i = 0; i < 10; i++){
//         (function)
//     }
// }

function a(){
    function b(){
        console.log(aaa);  // 看上去该报错，实际上有值，这就是闭包
    }
    var aaa = 123
    return b
}
var glab = 100
var demo = a()
demo()