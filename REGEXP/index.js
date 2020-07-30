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
// let str = 'Visit W3SChool'
// console.log(str.search(/w3school/i))

// let str = '1 plus 2 equl 33'
// console.log(str.match(/\d+/g))

// let str = "Hello pp! oh I am wn"
// console.log(str)
// console.log(str.replace(/wn/,"snail"))

// console.log(str.split(/\s+/))

//正则写法
// [abc]查找方括号之间的任何字符
// let str = "Is this all there is?"
// let pat = /[a-z]/gi
// console.log(str.match(pat))
// [^abc]查找任何不在方括号之间的字符
// let str = "hello pp like jinlong"
// let pat = /[^like]/g
// console.log(str.match(pat))

// let str = 'hello siming! How are you?'
// let pat = /hello|you/g
// console.log(str.match(pat))

// let str = "That's hot! 100%"
// let pat = /\w/g
// console.log(str.match(pat))

// let str = 'moon'
// let pat = /oon\b/g
// console.log(str.match(pat))

// let str = 'Is this his'
// let pat = /is$/g
// console.log(str.match(pat))

// 手机号正则
    let tel = '2501520585@@.com'
    let pat =/(\S)+[@]{1}(\S)+[.]{1}(\w)+/
    console.log(pat.test(tel))