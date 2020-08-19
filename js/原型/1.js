// Person.prototype --原型
// Person.prototype = {}    函数被顶一出来，就天生具备的

Person.prototype.name = 'csm'

function Person() {
    // this.name = 'jwk'
    console.log('giao');
}
var person = new Person()
console.log(person.name);

var person1 = new Person()
console.log(person1.name);

person.say()