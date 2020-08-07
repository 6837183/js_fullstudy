// function identity(context){
//     return this.name.toUpperCase()
// }

// function speak(){
//      let greeting = "Hello, I'm" + identity.call(this) 
//      console.log(greeting)
// }

// let me = {
//     name: 'jkk'
// }
// speak(me)

// function identify(){
//     return this.name.toUpperCase()
// }
// function speak(){
//     let greeting = "l'm" + identify.call(this)
//     console.log(greeting)
// }
// let me = {
//     name: 'jkk'
// }
// let you = {
//     name:'abc'
// }
// speak.call(me)

// this 所处的词法作用域在哪里生效了，this作用域就指向哪里

// function foo(){
//     let person = {
//         name: 'wn',
//         age: 18
//     }
//     console.log(this.person.age)

// }
// function bar(){
//     let person = {
//         name: '蜗牛',
//         age: 20
//     }
//     foo()
// }
// bar()



// function foo(){
//     console.log(this.a)
// }
// var a = 3;
// (function() {
//     "use strict"
//     foo()   // 严格模式下的foo的调用，与位置无关

// })()

// function foo(){
//     console.log(this.a)
// }
// var obj2 = {
//     a:3,
//     foo:foo
// }
// var obj1 = {
//     a:2,+
//   obj2:obj2
// }
// obj1.obj2.foo()

function foo(){
    console.log(this.a)
}
var obj ={
    a:2,
    foo: foo
}
var bar = obj.foo;
var a = 'hello'
bar()

