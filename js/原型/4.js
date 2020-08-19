// let _this = this 
Person.prototype.name = 'jkk'
function Person() {
//    var this = {
//        _proto_:Person.prototype
//    }
}
var person = new Person()
var obj = {
    name: '文凯'
}
console.log(person._proto_);
person._proto_ = obj
console.log(person._proto_);