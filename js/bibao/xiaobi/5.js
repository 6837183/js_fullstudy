// function wait(message) {
//     setTimeout(function timer() {
//         console.log(message);
//     },1000);
// }
// wait("Hello,closure")
// function setupBot(name,selector){
//     $(selector).click(function activator(){
//         console.log("avtivating:" + name);
//     });
// }
// setupBot("closure bot 1", "#bot_1");
// setupBot("closure bot 2", "#bot_2");

// function foo() {
//     var a = 2;
//     function bar() {
//         console.log( a );
//     }
//     return bar;
// }
// var baz = foo();
// baz();  // 2 

function test(){
    var arr = []
    for(var i = 0;i<10;i++){
        (function(j){
            arr[j] = function(){
                console.log(j);
            }
        })(i)
    }
    return arr
}
var myArr = test()

for(var j=0;j < 10; j++){
    myArr[j]()
}
