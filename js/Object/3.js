// 包装类
// var num = 123
// num.abc = 'aaa'

// var num = new Number(123)
// num.abc= 'abc'
// console.log(num.abc);
// console.log(num*2);

// num 参与运算又变回了数字，不参与运算他还能当做对象来使
// 能有属性和方法，同理字符串和布尔值也一样
// 但是null 和 underfined 不行

// var str = 'abcd'
// console.log(str.length);


// var num = 4
// num.len = 3
// console.log(num.len);

// var num = 4
// num.len = 3
// new Number(4).len = 3
// console.log(num.len);

var arr =[1,2,3,4,5,]
arr.length = 2
console.log(arr);