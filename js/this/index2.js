// function foo(){
//     console.log(this.a)
// }
// foo()

// var obj = {
//     a :2,
// }
// foo.apply(obj)


// var a = {
//     user: "小计",
//     fn: function(q,w){
//         console.log(this.user)
//         console.log(q + w)
//     }
// }
// var b=a.fn
// var arr = [10,20]
// // b.apply(a,[10,11])
// b.apply(null)

var a = {
    user: '小凯',
    fn: function(e,r,t){
        console.log(this.user)
        console.log(e,r,t)
    }
}
var b = a.fn
b.bind(a,1,2,3)()