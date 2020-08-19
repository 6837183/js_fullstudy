


Person.prototype.lastName = 'JI'
function Person(name) {
    this.name = name
}
var person = new Person('kaikai')

// console.log(person.lastName);
// person.lastName = 'Yuan'
// Person.prototype.lastName = 'JII'
// console.log(Person.prototype.lastName);

// delete person.lastName
// console.log(person.lastName);

Car.prototype.name = 'abc'
function Car() {
    
}
var  car = new Car()
console.log(car.constructor);
console.log(Car.prototype);
// constructor 为了让Car（）构造出的所有的对象都能找到它的自己的构造器