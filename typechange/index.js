// String   Boolean   Number  Underfined   Null    Object 

// var a = 1
// var b = new Number(1)


// 原始值转布尔（true和false）
// console.log(Boolean(1))
// console.log(Boolean(false))
// console.log(Boolean(true))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(''))
// console.log(Boolean('123'))
// console.log(Boolean(NaN))
// console.log(Boolean(0))

// 原始值转数字
// new Number()
// console.log(Number());
// console.log(Number(undefined));
// console.log(Number(NaN));
// console.log(Number(null)); //0
// console.log(Number(false));//0
// console.log(Number(true));// 1
// console.log(Number('123'));
// console.log(Number('-123'));
// console.log(Number(-'-123'));
// console.log(Number('00123'));
// console.log(Number('wn'));
// console.log(Number('100a'));

// console.log(parseInt('3 abc'));
// console.log(parseInt('3.14 abc'));
// console.log(parseFloat('3.14 abc'));
// console.log(parseInt('-14.32'));
// console.log(parseFloat('.1'));

// 原始值转字符串

// var a = 
// var b = new String('bbb')
// console.log(String()); // ''
// console.log(String(undefined));
// console.log(String(null));
// console.log(String(false));
// console.log(String(true));
// console.log(String(NaN));


// 原始值转对象
// 原始值通过调用 String() Number() 或者  Boolean() 构造函数

var a = {
    b : 2
}
// console.log(Object.prototype.toString.call(a));
console.log(a.toString());