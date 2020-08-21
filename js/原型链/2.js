Person.prototype = {
    name: 'kkkkk',
    // sayName: function() {
    //     console.log(this.name);
    // }
    height:100
}
function Person() {
    // this.name = 'yyyyy'
    this.eat =function() {
        this.height++
    }
}
var person = new Person()
// console.log(person.sayName());
// console.log(person.sayName());

perosn.eat()
console.log(person.height);
console.log(Person.prototype.height);