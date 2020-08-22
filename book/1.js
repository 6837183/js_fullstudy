//欺骗执法作用域

// eval()
// function foo(str, a){
//     'use strict'
//     eval(str)
//     console.log(b,a)
// }

// foo('var b = 3',1)


var obj = {
  a:1,
  b:2,
  b:3
}
obj.a =10
obj.b =20
obj.c =30

with(obj){
  a=100
  b=200
  c=300
}
console.log(obj)

function foo2(obj){
  obj.a = 2
}
var o1 = {
  a:3
}
foo2(o1)

var o2 = {
  b:3
}
foo2(o2)
console.log(o2.a)
console.log(a)