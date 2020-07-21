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

let [x=1,y=x]= []
console.log(x,y)//underfined解构出来的

