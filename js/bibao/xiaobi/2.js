//  实现一个函数执行出来的结果都是累加的
// var count = 0
// function test(){
//     count++
//     console.log(count);
// }
// test()
// test()
// test()
// test()

// 不依赖外部变量，实现如上效果
// 函数里面没有一个，始终固定不变的变量，每次重新执行函数都会初始化里面的所有函数

function add(){
    var num = 0
    function a(){
        console.log(++num)
    }
    return a
}
var result = add()
result()
result()
result()
