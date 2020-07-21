// let a = 1
// let b = 2
// let c = 3
// console.log(a)

// // let [a,b,c] = [1,2,3]

// let [foo,[[bar],baz]] = [1,[[2],3]]
// console.log(foo)
// console.log(bar)
// console.log(baz)
// let [, , third] = ['a','b','c']
// console.log(third)
// let [x,y] = [1,2,3]
// console.log(x,y)

// let [head,...tail] = [1,2,3,4]
// console.log(head,tail)

// let [a,b,...c] = ['hello']
// console.log(a,b,c)

// let [foo] = {}
// console.log(foo)

// let [x,y = 'aaa'] = ['a',null]

// let [x=1,y=x]= [2,3]
// console.log(x,y)//underfined解构出来的

// let {foo,bar} = { foo: 'aaa',bar:'bbb'}
// console.log(foo,bar)

// let {foo:baz} = {foo:'aaa',bar:'bbb'}
// //foo 是匹配模式，baz才是变量
// console.log (baz)

// let obj = {
//     name: '小计',
//     desc: {
//         alone:true,
//         age:21,
//         sanwei:[50,100,120]
//     }
// }
// let{name,desc:{alone,age},desc:{sanwei:[x,y,z]}}=obj
// console.log(name,alone,age,x,y,z)


//字符串的解构
let [a,b,c,d,e] = 'hello'
let {length: len} = 'hello'
console.log(len)

// //数值和布尔值的解构赋值
// let {}