//set类似于数组，但是不一样的地方是set这种数据结构内部的成员是唯一值


// const s = new Set()   //类数组 set{}
// const arr = new Array()
// console.log(s)
// let arr = [2,3,4,1,3,2,5]
// for (let i = 0;i < arr.length; i++){
//     console.log(arr[i])
// }
// for(let item of arr ){
//     console.log(arr[item])
//     item.name = 'xxx'
// // }

// arr.forEach((x) =>{
//     s.add(x)
// })
// console.log(s)

// const set = new Set(document.querySelectorAll('div'))
// console.log(set.size)s

//数组去重
let arr = [2,3,4,1,3,2,5]
// console.log(arr.indexOf(4))
// console.log([...new Set(arr)])
// console.log([...new Set('abcdab')])
// arr.splice(3,1)
// console.log(arr)

//opp,shift slice



// set.add(5)
// set.add('5')
// console.log(set)

// let a= NaN
// let b= NaN
// set.add(a)
// set.add(b)
// console.log(set)

// set.add({})
// set.add({})
// console.log(set)


// const set = new Set()
// set.add(1).add(2).add(3)
// // set.delete(2)
// set.clear()
// console.log(set.has(3))
// Array.from(['a','b','c']).forEach(e => {
//     console.log(e)
// });
// const set = new Set([1,2,3,4])
// const array = Array.from(set)
// array.forEach(e =>{
//     console.log(e)
// })
//数组去重

// function dedupe(array) {
//     return Array.from(new Set(array))
// }
// console.log(dedupe([1,2,2,3,3]))


//set 遍历
 let set = new Set(['red','green','blue'])
set.add({ name: 'xiaoji'})
set.add({age :20})
set.add({sex:'boy'})
 //keys()是set结构中返回键名的遍历器
 //values()是set结构中返回值的遍历器
 for (let item of set) {
     console.log(item)
 }