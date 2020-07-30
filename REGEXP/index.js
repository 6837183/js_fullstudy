//正则的定义
let patt1 = new RegExp("hello")
let patt2 = /word/
// 正则的使用

// let pat = /my/
// let str = "this is my code..."

// let arr = str.split(' ')
// console.log(arr.indexOf('my'))
// console.log(pat.test(str))

// let pat = /hello/
// let msg = 'on hello world'
//  console.log(pat.exec(msg))

 //正则表达式的类型
//  /pattern/attributes   g    i   全局匹配，区分大小写匹配

// let str = 'Visit NanChang'
// let pat = /nanchang/i
// let pat2 = /nanchang/ig

// console.log(pat2.test(str))

//字符串的正则
let str = 'Visit W3SChool'
console.log(str.search(/w3school/i))