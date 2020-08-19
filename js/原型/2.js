
Car.prototype.height = 1400
Car.prototype.lang = 4900
Car.prototype.carName = 'OBK'

function Car(color,owner) {
    this.color = color
    this.owner = owner
    // this.carName = 'OBK'
    // this.lang = 4900
    // this.height = 1400
}

var car = new Car('red','Ji')
var car1 = new Car('green','Wu')
console.log(car);
console.log(car1);