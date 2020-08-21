var num = 123
num.toString()

// 方法重写

Object.prototype.toString = function() {
    return 'hahahh'
}
function Person() {

}
var person = new Person()
