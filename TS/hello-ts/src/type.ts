// 其他常见的类型

// any 
let notSure: any = 4
notSure = 'dajfkal'

//unknow
// let value: any;
// value = true
// value = 1
// value = 'adsa'
// value = Symbol('type')
// value = {}
// value = []

// let value2:unknown
// value2 = true
// value2.foo.bar



// never
// const empty:never[] = []



//数组
const list: number[] = [1,2,3]
const list1: Array<number> = [1,2,3] //泛型

// 元祖
const list2: (string | number)[] = ['1',2]

// 对象
let obj: object
obj = [1]
obj = [1,'2']
obj = {}